import React from 'react'
import ReactDOM from 'react-dom/client'
import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultConfig,
    RainbowKitProvider,
    midnightTheme
} from '@rainbow-me/rainbowkit';
import {  WagmiProvider } from 'wagmi';
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import {ConnectWalletButton} from "./connect-wallet-button.tsx";
import {
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  okxWallet,
  trustWallet,
  phantomWallet
} from '@rainbow-me/rainbowkit/wallets';

const config = getDefaultConfig({
    appName: 'Walkin\'',
    projectId: '197eb2a0941623002df6b35bce91e2c4',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    wallets: [
        {
          groupName: 'Recommended',
          wallets: [rainbowWallet],
        },
          {
            groupName: 'Others',
            wallets: [walletConnectWallet, metaMaskWallet, okxWallet, trustWallet, phantomWallet],
          },
      ],
    ssr: false
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
              <RainbowKitProvider theme={midnightTheme({
                        accentColor: '#fff500',
                        accentColorForeground: 'black',
                        borderRadius: 'large',
                        fontStack: 'rounded',
                        overlayBlur: 'none',
                    })}>
                  <ConnectWalletButton/>
              </RainbowKitProvider>
          </QueryClientProvider>
      </WagmiProvider>
  </React.StrictMode>,
)
