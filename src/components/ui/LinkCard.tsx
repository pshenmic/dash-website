import Image from 'next/image'
import { cn } from '@/lib/cn'

interface LinkCardProps {
  name: string
  url: string
  logo: string
  variant?: 'light' | 'blue'
  className?: string
}

export function LinkCard ({
  name,
  url,
  logo,
  variant = 'light',
  className
}: LinkCardProps): React.ReactNode {
  return (
    <a
      href={`https://${url}`}
      target='_blank'
      rel='noopener noreferrer'
      className={cn(
        'flex items-center rounded-2xl border p-5 sm:rounded-3xl sm:p-6',
        variant === 'light' &&
          'min-w-52 shrink-0 snap-start gap-4 border-primary-dark/15 bg-white shadow-soft transition-shadow hover:shadow-soft-hover dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none sm:min-w-0 sm:shrink sm:gap-6',
        variant === 'blue' &&
          'flex-1 gap-5 border-white/15 bg-white/15 transition-colors hover:bg-white/20 sm:gap-6',
        className
      )}
    >
      {/* Logo Container */}
      <div
        className={cn(
          'flex shrink-0 items-center justify-center',
          variant === 'light' &&
            'size-12 rounded-xl bg-primary-dark/5 dark:bg-white/10 sm:size-17 sm:rounded-2xl',
          variant === 'blue' && 'size-14 rounded-2xl bg-white sm:size-17'
        )}
      >
        <div
          className={cn(
            'relative',
            variant === 'light' && 'size-6 sm:size-8',
            variant === 'blue' && 'size-8 sm:size-10'
          )}
        >
          <Image src={logo} alt={name} fill className='object-contain' />
        </div>
      </div>

      {/* Text */}
      <div
        className={cn(
          'flex flex-col',
          variant === 'light' && 'gap-0.5 sm:gap-1',
          variant === 'blue' && 'gap-1'
        )}
      >
        <p
          className={cn(
            'text-2xl font-extrabold tracking-tight sm:text-3xl sm:leading-10',
            variant === 'light' && 'text-primary-dark dark:text-white',
            variant === 'blue' && 'leading-tight text-white'
          )}
        >
          {name}
        </p>
        <p
          className={cn(
            'text-xs font-medium sm:text-sm',
            variant === 'light' && 'text-primary-dark/50 dark:text-white/50',
            variant === 'blue' && 'text-white/50'
          )}
        >
          {url}
        </p>
      </div>
    </a>
  )
}
