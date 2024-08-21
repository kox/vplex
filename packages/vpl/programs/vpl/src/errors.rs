use anchor_lang::error_code;

#[error_code]
pub enum VplError {
    #[msg("Undefined error just happened")]
    Undefined,

    #[msg("You are not authorized")]
    UnAuthorized
}