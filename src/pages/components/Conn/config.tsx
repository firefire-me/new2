/*
 * @Author: firefire-me 1550282237@qq.com
 * @Date: 2022-10-13 16:16:55
 * @LastEditors: firefire-me 1550282237@qq.com
 * @LastEditTime: 2022-10-13 17:06:42
 * @FilePath: \antd1\src\pages\conn\config.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import {
    WagmiConfig,
    createClient,
    defaultChains,
    configureChains,
  } from 'wagmi'
  
  import { alchemyProvider } from 'wagmi/providers/alchemy'
  import { publicProvider } from 'wagmi/providers/public'
  
  import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
  import { InjectedConnector } from 'wagmi/connectors/injected'
  import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
  import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

  import  Profile  from './walletop'
 


  
  // Configure chains & providers with the Alchemy provider.
  // Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
  const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
    alchemyProvider({ apiKey: 'yourAlchemyApiKey' }),
    publicProvider(),
  ])
  
  // Set up client
  const client = createClient({
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({ chains }),
      new CoinbaseWalletConnector({
        chains,
        options: {
          appName: 'wagmi',
        },
      }),
      new WalletConnectConnector({
        chains,
        options: {
          qrcode: true,
        },
      }),
      new InjectedConnector({
        chains,
        options: {
          name: 'Injected',
          shimDisconnect: true,
        },
      }),
    ],
    provider,
    webSocketProvider,
  })
  
  // Pass client to React Context Provider
  export default function App() {
    return (
      <WagmiConfig client={client}>
        <Profile />
      </WagmiConfig>
    )
  }