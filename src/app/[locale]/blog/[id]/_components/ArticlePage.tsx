'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Link } from '@/i18n/navigation'
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

export function ArticlePage (): React.ReactNode {
  const params = useParams<{ id: string }>()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchArticle = async (): Promise<void> => {
      try {
        const sdk = useSdk()

        const documents = await sdk.documents.query(
          BLOG_CONTRACT_ID,
          ARTICLE_DOCUMENT_TYPE,
          [['$id', '==', params.id]],
          undefined,
          1
        )

        if (documents.length === 0) {
          setError('Article not found')
          return
        }

        const doc = documents[0]
        const properties = doc.properties as {
          title: string
          content: string
          image?: string
        }

        setArticle({
          id: doc.id.base58(),
          title: properties.title,
          content: properties.content,
          image: properties.image ?? null,
          owner: doc.ownerId.base58(),
          createdAt: new Date(parseInt(doc.updatedAt?.toString() ?? doc.createdAt?.toString() ?? '0'))
        })
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    void fetchArticle()
  }, [params.id])

  if (loading) {
    return (
      <main data-testid='article-page-loading' className='mx-auto min-h-screen max-w-3xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
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

  if (error !== null || article == null) {
    return (
      <main data-testid='article-page-error' className='mx-auto min-h-screen max-w-3xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
        <Link
          href='/blog'
          className='inline-flex items-center gap-1 text-sm text-primary-blue hover:underline mb-8'
        >
          <ArrowLeft className='size-4' />
          Back to Blog
        </Link>
        <div className='rounded-lg bg-red-50 dark:bg-red-900/20 p-4'>
          <p className='text-sm text-red-600 dark:text-red-400'>{error ?? 'Article not found'}</p>
        </div>
      </main>
    )
  }

  return (
    <main data-testid='article-page' className='mx-auto min-h-screen max-w-3xl px-4 pt-32 pb-16 sm:px-6 lg:pt-40 lg:px-8'>
      <Link
        href='/blog'
        className='inline-flex items-center gap-1 text-sm text-primary-blue hover:underline mb-8'
      >
        <ArrowLeft className='size-4' />
        Back to Blog
      </Link>

      <article className='space-y-6'>
        {article.image != null && (
          <img
            src={article.image}
            alt={article.title}
            className='w-full rounded-2xl object-cover'
          />
        )}

        <div className='space-y-2'>
          <span className='text-sm font-medium uppercase tracking-wider text-gray-400'>
            {article.createdAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </span>

          <h1 className='text-3xl font-bold text-primary-blue lg:text-4xl'>
            {article.title}
          </h1>

          <p className='text-sm text-gray-400'>
            Author: {article.owner.slice(0, 8)}...{article.owner.slice(-4)}
          </p>
        </div>

        <div className='prose prose-gray dark:prose-invert max-w-none text-gray-700 dark:text-gray-300'>
          {article.content.split('\n\n').map((paragraph, i) => (
            <p
              key={i}
              className='leading-relaxed mb-4'
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary-blue hover:underline" target="_blank" rel="noopener noreferrer">$1</a>')
                  .replace(/\n/g, '<br />')
              }}
            />
          ))}
        </div>
      </article>
    </main>
  )
}
