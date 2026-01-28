import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  inverted?: boolean
  icon?: React.ReactNode
  className?: string
  href?: string
  target?: string
  disabled?: boolean
}

export function Button ({
  children,
  variant = 'primary',
  inverted = false,
  icon,
  className,
  href,
  target,
  disabled = false
}: ButtonProps): React.ReactNode {
  const classes = cn(
    'flex h-16 items-center justify-center gap-4 rounded-full px-9 text-lg font-semibold backdrop-blur-sm',
    'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    disabled && 'cursor-not-allowed opacity-50',
    !disabled && variant === 'primary' &&
      !inverted &&
      'bg-primary-white text-primary-blue hover:bg-primary-white/90 focus-visible:ring-primary-white',
    !disabled && variant === 'primary' &&
      inverted &&
      'bg-primary-blue text-primary-white hover:bg-primary-blue/90 focus-visible:ring-primary-blue',
    !disabled && variant === 'secondary' &&
      'bg-primary-white/15 text-primary-white hover:bg-primary-white/25 focus-visible:ring-primary-white/50',
    !disabled && variant === 'outline' &&
      'bg-primary-blue/15 text-primary-blue hover:bg-primary-blue/25 focus-visible:ring-primary-blue',
    disabled && variant === 'primary' && !inverted && 'bg-primary-white/50 text-primary-blue/50',
    disabled && variant === 'primary' && inverted && 'bg-primary-blue/50 text-primary-white/50',
    disabled && variant === 'secondary' && 'bg-primary-white/10 text-primary-white/50',
    disabled && variant === 'outline' && 'bg-primary-blue/10 text-primary-blue/50',
    className
  )

  if (href && !disabled) {
    return (
      <a href={href} target={target || '_blank'} rel='noopener noreferrer' className={classes}>
        {children}
        {icon}
      </a>
    )
  }

  if (disabled && href) {
    return (
      <span className={cn(classes, 'pointer-events-none')} aria-disabled='true'>
        {children}
        {icon}
      </span>
    )
  }

  return (
    <button className={classes} disabled={disabled}>
      {children}
      {icon}
    </button>
  )
}
