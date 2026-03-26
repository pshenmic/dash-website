'use client'

import { LogOut, Wallet } from 'lucide-react'
import type { WalletInfo } from '@/lib/dash-platform/types'

interface WalletConnectProps {
  walletInfo: WalletInfo
  error: string | null
  isConnecting: boolean
  onConnect: () => Promise<void>
  onDisconnect: () => void
}

export function WalletConnect ({
  walletInfo,
  error,
  isConnecting,
  onConnect,
  onDisconnect
}: WalletConnectProps): React.ReactNode {
  if (walletInfo.connected && walletInfo.currentIdentity != null) {
    return (
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-2 rounded-lg bg-green-50 dark:bg-green-900/20 px-3 py-2'>
          <div className='h-2 w-2 rounded-full bg-green-500' />
          <span className='text-sm text-green-700 dark:text-green-400'>
            {walletInfo.currentIdentity.slice(0, 8)}...{walletInfo.currentIdentity.slice(-4)}
          </span>
        </div>
        <button
          onClick={onDisconnect}
          className='flex items-center gap-1 rounded-lg px-3 py-2 text-sm text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors'
        >
          <LogOut className='size-4' />
          Disconnect
        </button>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-end gap-1'>
      <button
        onClick={() => { void onConnect() }}
        disabled={isConnecting}
        className='flex items-center gap-2 rounded-lg bg-primary-blue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50'
      >
        <Wallet className='size-4' />
        {isConnecting ? 'Connecting...' : 'Connect Wallet'}
      </button>
      {error != null && (
        <span className='text-xs text-red-500'>{error}</span>
      )}
    </div>
  )
}
