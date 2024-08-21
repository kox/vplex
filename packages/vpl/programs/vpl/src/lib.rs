use anchor_lang::prelude::*;

mod contexts;
use contexts::*;

mod plugins;
use plugins::*;

mod state;
pub use state::*;

mod errors;
pub use errors::*;

mod utils;
pub use utils::*;

declare_id!("DxE73b4reTo3DH79tiXv3fYu6T3jfxaBFbxxuB6ZGyRg");

#[program]
pub mod vpl {
    use super::*;

    pub fn create(ctx: Context<CreateVault>, seed: u64) -> Result<()> {
        ctx.accounts.create_vault(seed, &ctx.bumps)
    }
}
