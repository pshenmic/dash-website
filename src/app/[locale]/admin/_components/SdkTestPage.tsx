'use client'

import { useWalletContext } from '@/lib/dash-platform/wallet-context'
import { Wallet } from 'lucide-react'
import { CreateArticle } from './CreateArticle'

export function SdkTestPage (): React.ReactNode {
  const { walletInfo, error, isConnecting, connect, disconnect } = useWalletContext()

  return (
    <main className='mx-auto min-h-screen max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <div className='space-y-8'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
              Admin
            </h1>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Dash Platform Blog — testnet
            </p>
          </div>

          {walletInfo.connected && walletInfo.currentIdentity != null && (
            <button
              onClick={disconnect}
              className='flex items-center gap-2 rounded-lg bg-primary-turquoise/15 px-3 py-2 text-sm transition-colors hover:bg-primary-turquoise/25'
              title='Click to disconnect'
            >
              <span className='h-2 w-2 rounded-full bg-primary-turquoise' />
              <span className='text-primary-dark dark:text-white'>
                {walletInfo.currentIdentity.slice(0, 6)}...{walletInfo.currentIdentity.slice(-4)}
              </span>
            </button>
          )}
        </div>

        {!walletInfo.connected
          ? (
            <div className='flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 py-16'>
              <Wallet className='size-12 text-gray-400' />
              <p className='text-gray-500 dark:text-gray-400'>
                Connect your wallet to create articles
              </p>
              <button
                onClick={() => { void connect() }}
                disabled={isConnecting}
                className='flex items-center gap-2 rounded-lg bg-primary-blue px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-blue/90 disabled:opacity-50'
              >
                <Wallet className='size-4' />
                {isConnecting ? 'Connecting...' : 'Connect Wallet'}
              </button>
              {error != null && (
                <span className='text-xs text-red-500'>{error}</span>
              )}
            </div>
            )
          : (
            <CreateArticle
              walletInfo={walletInfo}
              onCreated={() => {}}
            />
            )}
      </div>
    </main>
  )
}
