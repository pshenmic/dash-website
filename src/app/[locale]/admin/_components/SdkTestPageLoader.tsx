'use client'

import dynamic from 'next/dynamic'

function AdminSkeleton (): React.ReactNode {
  return (
    <main className='mx-auto min-h-screen max-w-4xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <div className='space-y-8'>
        <div className='space-y-3'>
          <div className='h-9 w-40 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
          <div className='h-5 w-80 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
        </div>
        <div className='space-y-4'>
          <div className='h-7 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
          <div className='h-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
          <div className='h-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
          <div className='h-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
        </div>
      </div>
    </main>
  )
}

const SdkTestPage = dynamic(
  async () => await import('./SdkTestPage').then((m) => m.SdkTestPage),
  { ssr: false, loading: () => <AdminSkeleton /> }
)

export function SdkTestPageLoader (): React.ReactNode {
  return <SdkTestPage />
}
