'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'
import { type WalletInfo, INITIAL_WALLET_INFO, createWalletInfo } from './types'

interface WalletContextValue {
  walletInfo: WalletInfo
  error: string | null
  isConnecting: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextValue | null>(null)

export function WalletProvider ({ children }: { children: ReactNode }): React.ReactNode {
  const [walletInfo, setWalletInfo] = useState<WalletInfo>(INITIAL_WALLET_INFO)
  const [error, setError] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connect = async (): Promise<void> => {
    setError(null)
    setIsConnecting(true)

    try {
      const extension = window.dashPlatformExtension

      if (extension == null) {
        setError('Dash Platform Extension is not installed')
        return
      }

      const { identities, currentIdentity } = await extension.signer.connect()
      setWalletInfo(createWalletInfo(true, identities, currentIdentity))
    } catch {
      setError('Connection failed')
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnect = (): void => {
    setWalletInfo(INITIAL_WALLET_INFO)
    setError(null)
  }

  return (
    <WalletContext.Provider value={{ walletInfo, error, isConnecting, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWalletContext (): WalletContextValue {
  const context = useContext(WalletContext)
  if (context == null) {
    throw new Error('useWalletContext must be used within WalletProvider')
  }
  return context
}
