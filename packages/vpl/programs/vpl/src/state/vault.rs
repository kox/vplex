use anchor_lang::prelude::*;

#[account]
/* #[derive(InitSpace)] */
pub struct VaultConfig {
    pub authority: Pubkey,

    pub seed: u64,

    pub bump: u8
}

impl Space for VaultConfig {
    const INIT_SPACE: usize = 8 + 32 + 8 + 1;
}
