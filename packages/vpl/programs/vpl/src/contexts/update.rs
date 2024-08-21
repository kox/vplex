use anchor_lang::prelude::*;

use crate::{state::VaultConfig, VplError};

/// Create Vault (ONLY FOR SOL)
/// 
/// seed: uint64 passed to the instruction to create a unique vault and config
#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct UpdateVault<'info> {
    #[account(mut)]
    pub updater: Signer<'info>,

    #[account(
        mut,
        seeds = [
            b"config", 
            seed.to_le_bytes().as_ref()
        ],
        bump = config.bump,
    )]
    pub config: Account<'info, VaultConfig>,

    pub system_program: Program<'info, System>
}

impl<'info> UpdateVault<'info> {
    pub fn update_vault(&self, _seed: u64) -> Result<()> {
        require!(self.updater.key() == self.config.authority.key(), VplError::UnAuthorized);

        Ok(())
    }
}