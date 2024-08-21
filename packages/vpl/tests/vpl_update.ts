import * as anchor from "@coral-xyz/anchor";
import { BN, Program } from "@coral-xyz/anchor";
import { Vpl } from "../target/types/vpl";
import { randomBytes } from "crypto";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { assert } from "chai";
import { burn } from "@solana/spl-token";

describe("vpl", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider = anchor.getProvider();

  const connection = provider.connection;

  const program = anchor.workspace.Vpl as Program<Vpl>;

  // Generating a big number random to create a unique seed
  const seed = new BN(randomBytes(8));

  const confirm = async (signature: string): Promise<string> => {
    const block = await connection.getLatestBlockhash();
    await connection.confirmTransaction({
      signature,
      ...block,
    });
    return signature;
  };

  const log = async (signature: string): Promise<string> => {
    console.log(
      `Your transaction signature: https://explorer.solana.com/transaction/${signature}?cluster=custom&customUrl=${connection.rpcEndpoint}`
    );
    return signature;
  };

  // We will generate a few different keypair to test the program 
  const [creator, user ] = Array.from({ length: 2 }, () =>
    Keypair.generate()
  );

  // Based on the seeds we defined to create the Escrow account, we can find the public key of the PDA address 
  const vaultConfig = PublicKey.findProgramAddressSync(
    [Buffer.from("config"), seed.toArrayLike(Buffer, "le", 8)],
    program.programId
  )[0];

  const sVault = PublicKey.findProgramAddressSync(
    [Buffer.from("svault"), seed.toArrayLike(Buffer, "le", 8)],
    program.programId
  )[0];

  // Accounts
  const accounts = {
    creator: creator.publicKey,
    config: vaultConfig,
    sVault: sVault,
  }

  it("should not be autorized to change the vault config if you are no the creator!", async () => {
    let tx = new Transaction();
    tx.instructions = [
      ...[creator, user].map((account) =>
        SystemProgram.transfer({
          fromPubkey: provider.publicKey,
          toPubkey: account.publicKey,
          lamports: 10 * LAMPORTS_PER_SOL,
        })
      ),
    ];

    await provider.sendAndConfirm(tx).then(log);

    await program.methods
      .create(seed)
      .accounts({ ...accounts })
      .signers([creator]  )
      .rpc()
      .then(confirm)
      .then(log);


    try {
      await program.methods
        .update(seed)
        .accounts({ 
          updater: user.publicKey,
        })
        .signers([user]  )
        .rpc()
        .then(confirm)
        .then(log);

      throw new Error("It should not arrive here!");
    } catch(err) {
      assert.equal(err.error.errorCode.code, 'UnAuthorized');
      assert.equal(err.error.errorMessage, "You are not authorized");
    }
  });
});

