import { Layout } from "@/components/layout";
import "@/styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@mysten/dapp-kit/dist/index.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
} from "@mysten/dapp-kit";
import { getFullnodeUrl } from "@mysten/sui.js/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { WagmiConfig } from "@/chains/evm";
import { NftProvider } from "@/context/NftContext";

const queryClient = new QueryClient();

const { networkConfig } = createNetworkConfig({
  mainnet: { url: getFullnodeUrl("mainnet") },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={WagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <SuiClientProvider networks={networkConfig} defaultNetwork="mainnet">
            <WalletProvider storageKey="sui-wallet" autoConnect>
              <NftProvider>
                <Layout>
                  <Head>
                    <title>TEES</title>
                  </Head>
                  <Component {...pageProps} />
                </Layout>
                <Toaster position="bottom-right" />
              </NftProvider>
            </WalletProvider>
          </SuiClientProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
