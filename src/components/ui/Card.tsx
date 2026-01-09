import { cn } from '@/lib/cn'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'dark' | 'blue'
}

export function Card ({ variant = 'dark', className, ...props }: CardProps): React.ReactNode {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-[25px] lg:rounded-[35px]',
        variant === 'dark' && 'bg-primary-dark dark:border dark:border-white/15 dark:bg-secondary-space-cadet',
        variant === 'blue' && 'bg-primary-blue',
        className
      )}
      {...props}
    />
  )
}
