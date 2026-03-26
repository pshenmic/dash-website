'use client'

import { useState } from 'react'
import { type WalletInfo, INITIAL_WALLET_INFO, createWalletInfo } from './types'

interface UseWalletReturn {
  walletInfo: WalletInfo
  error: string | null
  isConnecting: boolean
  connect: () => Promise<void>
  disconnect: () => void
}

export function useWallet (): UseWalletReturn {
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

  return { walletInfo, error, isConnecting, connect, disconnect }
}
