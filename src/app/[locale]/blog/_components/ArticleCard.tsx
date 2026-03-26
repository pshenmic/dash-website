'use client'

import { Link } from '@/i18n/navigation'
import { FileText } from 'lucide-react'

interface ArticleCardProps {
  id: string
  title: string
  content: string
  image: string | null
  createdAt: Date
}

export function ArticleCard ({ id, title, content, image, createdAt }: ArticleCardProps): React.ReactNode {
  const excerpt = content.length > 150 ? content.slice(0, 150) + '...' : content

  return (
    <Link
      href={`/blog/${id}`}
      className='group block rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover-lift'
    >
      {image != null
        ? (
          <img
            src={image}
            alt={title}
            className='w-full h-48 object-cover'
          />
          )
        : (
          <div className='flex h-48 items-center justify-center bg-gradient-to-br from-primary-blue/10 to-primary-turquoise/10 dark:from-primary-blue/20 dark:to-primary-turquoise/20'>
            <FileText className='size-12 text-primary-blue/40' />
          </div>
          )}

      <div className='p-5 space-y-2'>
        <span className='text-xs font-medium uppercase tracking-wider text-gray-400'>
          {createdAt.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>

        <h3 className='text-lg font-bold text-primary-blue group-hover:text-primary-blue/80 transition-colors line-clamp-2'>
          {title}
        </h3>

        <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-3'>
          {excerpt}
        </p>
      </div>
    </Link>
  )
}
