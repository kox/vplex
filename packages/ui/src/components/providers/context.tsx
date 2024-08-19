import type { FC, ReactNode } from 'react';
import { SnackbarProvider } from 'notistack';
import { AutoConnectProvider } from './autoconnect';
import { ThemeProvider } from './theme';
import { ClusterProvider } from './cluster';
import { SolanaProvider } from './solana';
import { WalletContextProvider } from './wallet';
import { TooltipProvider } from '@radix-ui/react-tooltip';

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <ThemeProvider>
            <TooltipProvider>
                <ClusterProvider>
                    <SolanaProvider>
            <SnackbarProvider>
                            <AutoConnectProvider>
                                <WalletContextProvider>
                                     {children}
                     </WalletContextProvider>
                            </AutoConnectProvider>
                        </SnackbarProvider>
                    </SolanaProvider>
                </ClusterProvider>
            </TooltipProvider> 
        </ThemeProvider>
    );
};