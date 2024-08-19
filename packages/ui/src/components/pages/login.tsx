import { useNavigate } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { useAuthStore } from '@repo/store/auth';


export const Login = () => {
  const navigate = useNavigate();
  const { wallet, connected } = useWallet();
  const { login } = useAuthStore();

  console.log(connected);

  if (connected) {
    if (wallet?.adapter.publicKey) {
      login(wallet?.adapter.publicKey?.toString());
      navigate('/dashboard', { replace: true });
    }    
  }

  return (
      <div className='container mx-auto tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-auto tw-p-6 tw-max-w-sm tw-w-full'>
        <div className="tw-bg-card tw-p-6 tw-rounded-lg tw-shadow-lg tw-max-w-sm tw-w-full">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Welcome to Vplex</h2>
            <WalletMultiButton className="tw-w-full tw-bg-primary tw-text-primary-foreground tw-py-2 tw-rounded-md tw-font-semibold" />
          </div>
        </div>
      
  );
};
