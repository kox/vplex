use anchor_lang::prelude::*;

declare_id!("DxE73b4reTo3DH79tiXv3fYu6T3jfxaBFbxxuB6ZGyRg");

#[program]
pub mod vpl {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
