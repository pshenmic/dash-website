import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  inverted?: boolean
  icon?: React.ReactNode
  className?: string
}

export function Button ({
  children,
  variant = 'primary',
  inverted = false,
  icon,
  className
}: ButtonProps): React.ReactNode {
  return (
    <button
      className={cn(
        'flex h-16 items-center justify-center gap-4 rounded-full px-9 text-lg font-semibold backdrop-blur-sm',
        'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variant === 'primary' &&
          !inverted &&
          'bg-primary-white text-primary-blue hover:bg-primary-white/90 focus-visible:ring-primary-white',
        variant === 'primary' &&
          inverted &&
          'bg-primary-blue text-primary-white hover:bg-primary-blue/90 focus-visible:ring-primary-blue',
        variant === 'secondary' &&
          'bg-primary-white/15 text-primary-white hover:bg-primary-white/25 focus-visible:ring-primary-white/50',
        variant === 'outline' &&
          'bg-primary-blue/15 text-primary-blue hover:bg-primary-blue/25 focus-visible:ring-primary-blue',
        className
      )}
    >
      {children}
      {icon}
    </button>
  )
}
