use anchor_lang::prelude::*;

use crate::state::VaultConfig;

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct CreateVault<'info> {
    #[account(mut)]
    pub creator: Signer<'info>,

    #[account(
        init,
        payer = creator,
        space = VaultConfig::INIT_SPACE,
        seeds = [
            b"vpl", 
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
        });

        Ok(())
    }
}