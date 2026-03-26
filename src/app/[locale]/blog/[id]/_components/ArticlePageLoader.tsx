'use client'

import dynamic from 'next/dynamic'

function ArticleSkeleton (): React.ReactNode {
  return (
    <main className='mx-auto min-h-screen max-w-3xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <div className='space-y-6'>
        <div className='h-6 w-32 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        <div className='h-64 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700' />
        <div className='h-5 w-40 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        <div className='h-10 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        <div className='space-y-3'>
          <div className='h-4 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
          <div className='h-4 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
          <div className='h-4 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-700' />
        </div>
      </div>
    </main>
  )
}

const ArticlePage = dynamic(
  async () => await import('./ArticlePage').then((m) => m.ArticlePage),
  { ssr: false, loading: () => <ArticleSkeleton /> }
)

export function ArticlePageLoader (): React.ReactNode {
  return <ArticlePage />
}
