import * as anchor from "@coral-xyz/anchor";
import { BN, Program } from "@coral-xyz/anchor";
import { Vpl } from "../target/types/vpl";
import { describe, it } from "node:test";
import { randomBytes } from "crypto";
import { Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

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
  const [creator] = Array.from({ length: 1 }, () =>
    Keypair.generate()
  );

  // Based on the seeds we defined to create the Escrow account, we can find the public key of the PDA address 
  const vaultConfig = PublicKey.findProgramAddressSync(
    [Buffer.from("vpl"), seed.toArrayLike(Buffer, "le", 8)],
    program.programId
  )[0];

  // Accounts
  const accounts = {
    creator: creator.publicKey,
    config: vaultConfig,
  }

  it("Airdrop and create mints", async () => {
/*     let lamports = await getMinimumBalanceForRentExemptMint(connection);
 */    
    let tx = new Transaction();
    tx.instructions = [
      ...[creator].map((account) =>
        SystemProgram.transfer({
          fromPubkey: provider.publicKey,
          toPubkey: account.publicKey,
          lamports: 10 * LAMPORTS_PER_SOL,
        })
      ),
    ];

    await provider.sendAndConfirm(tx).then(log);
  });


  it("should create a vault with a basic configuration!", async () => {
    await program.methods
      .create(seed)
      .accounts({ ...accounts })
      .signers([creator]  )
      .rpc()
      .then(confirm)
      .then(log);

    
  });
});
function getMinimumBalanceForRentExemptMint(connection: anchor.web3.Connection) {
  throw new Error("Function not implemented.");
}

