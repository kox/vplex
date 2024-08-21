use anchor_lang::prelude::*;

use crate::state::VaultConfig;

/// Create Vault (ONLY FOR SOL)
/// 
/// seed: uint64 passed to the instruction to create a unique vault and config
#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct CreateVault<'info> {
    #[account(mut)]
    pub creator: Signer<'info>,

    #[account(
        seeds = [
            b"svault",
            seed.to_le_bytes().as_ref() 
        ],
        bump
    )]
    s_vault: SystemAccount<'info>,

    #[account(
        init,
        payer = creator,
        space = VaultConfig::INIT_SPACE,
        seeds = [
            b"config", 
            seed.to_le_bytes().as_ref()
        ],
        bump,
    )]
    pub config: Account<'info, VaultConfig>,

    pub system_program: Program<'info, System>
}

impl<'info> CreateVault<'info> {
    pub fn create_vault(&mut self, seed: u64, bumps: &CreateVaultBumps) -> Result<()> {
        self.config.set_inner(VaultConfig {
            seed,
            authority: self.creator.key(),
            bump: bumps.config,
            s_vault_bump: bumps.s_vault,
        });

        Ok(())
    }
}