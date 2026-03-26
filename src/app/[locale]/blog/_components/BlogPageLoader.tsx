'use client'

import dynamic from 'next/dynamic'

function BlogSkeleton (): React.ReactNode {
  return (
    <main className='mx-auto min-h-screen max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <div className='space-y-10'>
        <div className='space-y-3'>
          <div className='h-10 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
          <div className='h-6 w-72 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700' />
        </div>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className='animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700 h-80' />
          ))}
        </div>
      </div>
    </main>
  )
}

const BlogPage = dynamic(
  async () => await import('./BlogPage').then((m) => m.BlogPage),
  { ssr: false, loading: () => <BlogSkeleton /> }
)

export function BlogPageLoader (): React.ReactNode {
  return <BlogPage />
}
