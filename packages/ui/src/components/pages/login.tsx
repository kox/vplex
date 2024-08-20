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
      <div className='container mx-auto flex flex-col items-center justify-center h-auto p-6 max-w-sm w-full'>
        <div className="bg-card p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Welcome to Vplex</h2>
            <WalletMultiButton className="w-full bg-primary text-primary-foreground py-2 rounded-md font-semibold" />
          </div>
        </div>
      
  );
};
