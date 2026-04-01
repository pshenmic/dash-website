'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSdk } from '@/lib/dash-platform/use-sdk'
import { BLOG_CONTRACT_ID, ARTICLE_DOCUMENT_TYPE } from '@/lib/dash-platform/config'

interface Article {
  id: string
  title: string
  content: string
  image: string | null
  owner: string
  createdAt: Date
}

interface ArticleListProps {
  refreshKey: number
}

export function ArticleList ({ refreshKey }: ArticleListProps): React.ReactNode {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchArticles = useCallback(async (): Promise<void> => {
    setLoading(true)
    setError(null)

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
  }, [fetchArticles, refreshKey])

  if (loading) {
    return (
      <div className='space-y-4'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-32' />
        ))}
      </div>
    )
  }

  if (error !== null) {
    return (
      <div className='rounded-lg bg-red-50 dark:bg-red-900/20 p-4'>
        <p className='text-sm text-red-600 dark:text-red-400'>Error: {error}</p>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <p className='text-gray-500 dark:text-gray-400 py-8 text-center'>
        No articles yet. Be the first to publish!
      </p>
    )
  }

  return (
    <div data-testid='article-list' className='space-y-4'>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        {articles.length} article{articles.length !== 1 ? 's' : ''} on blockchain
      </p>

      {articles.map((article) => (
        <div
          key={article.id}
          data-testid={`article-item-${article.id}`}
          className='rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3'
        >
          {article.image != null && (
            <img
              src={article.image}
              alt={article.title}
              className='w-full h-48 object-cover rounded-lg'
            />
          )}

          <div className='flex items-start justify-between gap-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white text-lg'>
              {article.title}
            </h3>
            <span className='shrink-0 text-xs text-gray-400'>
              {article.createdAt.toLocaleDateString()}
            </span>
          </div>

          <div className='text-sm text-gray-600 dark:text-gray-300 space-y-3'>
            {article.content.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className='leading-relaxed'
                dangerouslySetInnerHTML={{
                  __html: paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-blue hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
                    .replace(/\n/g, '<br />')
                }}
              />
            ))}
          </div>

          <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400'>
            <span>Author: {article.owner.slice(0, 8)}...</span>
            <span>ID: {article.id.slice(0, 8)}...</span>
          </div>
        </div>
      ))}
    </div>
  )
}
