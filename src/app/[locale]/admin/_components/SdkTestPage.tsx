'use client'

import { useState } from 'react'
import { useWalletContext } from '@/lib/dash-platform/wallet-context'
import { CreateArticle } from './CreateArticle'
import { ArticleList } from './ArticleList'

export function SdkTestPage (): React.ReactNode {
  const { walletInfo } = useWalletContext()
  const [refreshKey, setRefreshKey] = useState(0)

  const handleArticleCreated = (): void => {
    setTimeout(() => setRefreshKey((k) => k + 1), 3000)
  }

  return (
    <main className='mx-auto min-h-screen max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <div className='space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
            Admin
          </h1>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>
            Dash Platform Blog — testnet
          </p>
        </div>

        {walletInfo.connected && (
          <CreateArticle
            walletInfo={walletInfo}
            onCreated={handleArticleCreated}
          />
        )}

        <section className='space-y-4'>
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
            Articles
          </h2>
          <ArticleList refreshKey={refreshKey} />
        </section>
      </div>
    </main>
  )
}
