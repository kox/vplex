use anchor_lang::{prelude::*, system_program::{transfer, Transfer}};

use crate::VaultConfig;

#[derive(Accounts)]
#[instruction(seed: u64)]
pub struct Deposit<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        mut,
        seeds = [
            b"svault",
            seed.to_le_bytes().as_ref() 
        ],
        bump = config.s_vault_bump
    )]
    s_vault: SystemAccount<'info>,

    #[account(
        seeds = [
            b"config", 
            seed.to_le_bytes().as_ref()
        ],
        bump = config.bump,
    )]
    pub config: Account<'info, VaultConfig>,

    pub system_program: Program<'info, System>
}

impl<'info> Deposit<'info> {
    pub fn deposit(&mut self, _seed: u64, amount: u64) -> Result<()> {
        let transfer_accounts = Transfer {
            from: self.user.to_account_info(),
            to: self.s_vault.to_account_info(),
        };

        let transfer_ctx = CpiContext::new(
            self.system_program.to_account_info(),
            transfer_accounts,
        );

        transfer(transfer_ctx, amount)
    }
}