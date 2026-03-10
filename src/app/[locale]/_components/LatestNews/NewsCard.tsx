import Image from 'next/image'
import { cn } from '@/lib/cn'
import { DashLogo } from 'dash-ui-kit/react'

interface Tag {
  label: string
  variant: 'outline' | 'filled'
}

interface NewsCardProps {
  variant: 'video' | 'post'
  image: string
  title?: string
  description: string
  tags: Tag[]
}

export function NewsCard ({
  variant,
  image,
  title,
  description,
  tags
}: NewsCardProps): React.ReactNode {
  const isVideo = variant === 'video'

  return (
    <div
      className={cn(
        'relative h-100 w-full overflow-hidden rounded-4xl lg:h-128 lg:w-100 lg:rounded-5xl',
        isVideo ? 'bg-primary-blue' : 'bg-white dark:bg-secondary-space-cadet'
      )}
    >
      {/* Dash Logo */}
      <div className='absolute top-6 left-6 z-10 lg:top-9 lg:left-8'>
        <DashLogo
          className={cn(
            'h-6 w-auto lg:h-8',
            isVideo ? 'text-white' : 'text-primary-dark dark:text-white'
          )}
        />
      </div>

      {/* Tags */}
      <div className='absolute top-6 right-6 z-10 flex gap-2.5 lg:top-8 lg:right-8'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={cn(
              'rounded-full px-6 py-2.5 text-xs font-medium lg:px-9 lg:text-xs',
              tag.variant === 'filled'
                ? 'bg-primary-blue text-white'
                : isVideo
                  ? 'border border-white text-white'
                  : 'border border-primary-blue text-primary-blue dark:border-white dark:text-white'
            )}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Image Preview */}
      <div className='absolute top-20 left-5 right-5 h-32 overflow-hidden rounded-2xl lg:top-26 lg:left-8 lg:right-8 lg:h-40'>
        <Image
          src={image}
          alt={title ?? 'News preview'}
          fill
          className='object-cover'
        />
        {isVideo && (
          <div className='absolute inset-0 flex items-center justify-center bg-white/75'>
            <Image
              src='/images/home/news/play-button.svg'
              alt='Play'
              width={38}
              height={41}
              className='h-8 w-auto lg:h-10'
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 p-5 lg:p-8'>
        {title && (
          <h3
            className={cn(
              'mb-2.5 text-3xl leading-tight font-extrabold tracking-tight lg:mb-4 lg:text-4xl lg:leading-10',
              isVideo ? 'text-white' : 'text-primary-dark dark:text-white'
            )}
          >
            {title}
          </h3>
        )}
        <p
          className={cn(
            'text-sm leading-normal font-medium lg:text-lg',
            isVideo ? 'text-white' : 'text-primary-dark dark:text-white/80'
          )}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
