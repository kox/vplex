import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';


export const Login = () => {
  return (
      <div className='container mx-auto tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-auto tw-p-6 tw-max-w-sm tw-w-full'>
      {/* <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-background tw-text-foreground"> */}
        <div className="tw-bg-card tw-p-6 tw-rounded-lg tw-shadow-lg tw-max-w-sm tw-w-full">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Welcome to Vplex</h2>
            <WalletMultiButton className="tw-w-full tw-bg-primary tw-text-primary-foreground tw-py-2 tw-rounded-md tw-font-semibold" />
          </div>
        </div>
      
  );
};
