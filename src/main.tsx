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

const config = getDefaultConfig({
    appName: 'Walkin events',
    projectId: '197eb2a0941623002df6b35bce91e2c4',
    chains: [mainnet, polygon, optimism, arbitrum, base],
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
