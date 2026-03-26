'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSdk } from '@/lib/dash-platform/use-sdk'
import { BLOG_CONTRACT_ID, ARTICLE_DOCUMENT_TYPE } from '@/lib/dash-platform/config'
import { ArticleCard } from './ArticleCard'

interface Article {
  id: string
  title: string
  content: string
  image: string | null
  owner: string
  createdAt: Date
}

export function BlogPage (): React.ReactNode {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchArticles = useCallback(async (): Promise<void> => {
    try {
      const sdk = useSdk()

      const documents = await sdk.documents.query(
        BLOG_CONTRACT_ID,
        ARTICLE_DOCUMENT_TYPE,
        undefined,
        undefined,
        100
      )

      const mapped = documents.map((doc) => {
        const properties = doc.properties as {
          title: string
          content: string
          image?: string
        }

        return {
          id: doc.id.base58(),
          title: properties.title,
          content: properties.content,
          image: properties.image ?? null,
          owner: doc.ownerId.base58(),
          createdAt: new Date(parseInt(doc.updatedAt?.toString() ?? doc.createdAt?.toString() ?? '0'))
        }
      })

      mapped.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      setArticles(mapped)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchArticles()
  }, [fetchArticles])

  return (
    <main className='mx-auto min-h-screen max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <div className='space-y-10'>
        <div>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
            Blog
          </h1>
          <p className='mt-3 text-lg text-gray-600 dark:text-gray-400'>
            Articles from Dash Platform blockchain
          </p>
        </div>

        {loading && (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className='animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-700 h-80' />
            ))}
          </div>
        )}

        {!loading && error !== null && (
          <div className='rounded-lg bg-red-50 dark:bg-red-900/20 p-4'>
            <p className='text-sm text-red-600 dark:text-red-400'>Error: {error}</p>
          </div>
        )}

        {!loading && error === null && articles.length === 0 && (
          <p className='text-gray-500 dark:text-gray-400 py-16 text-center text-lg'>
            No articles yet.
          </p>
        )}

        {!loading && error === null && articles.length > 0 && (
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                content={article.content}
                image={article.image}
                createdAt={article.createdAt}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
