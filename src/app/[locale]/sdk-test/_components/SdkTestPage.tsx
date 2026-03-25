'use client'

import { TorrentList } from './TorrentList'

export function SdkTestPage (): React.ReactNode {
  return (
    <main className='flex min-h-screen items-center justify-center px-4 pt-28 pb-16 sm:px-6 lg:pt-32 lg:px-8'>
      <div className='w-full max-w-4xl space-y-8'>
        <div>
          <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>
            Dash Platform SDK Test
          </h1>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>
            Reading documents from testnet — torrent tracker contract
          </p>
        </div>

        <section className='space-y-4'>
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
            Torrents
          </h2>
          <TorrentList />
        </section>
      </div>
    </main>
  )
}
