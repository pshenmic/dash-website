import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ReactNode
  className?: string
}

export function Button ({
  children: _children,
  variant: _variant = 'primary',
  icon: _icon,
  className: _className
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex h-[65px] items-center justify-center gap-[15px] rounded-[20px] px-[35px] text-lg font-semibold backdrop-blur-[5px]',
        // Ring instead of border to avoid layout shift
        'transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        _variant === 'primary' && 'bg-primary-blue text-primary-white hover:bg-primary-blue/90 focus-visible:ring-primary-blue',
        _variant === 'secondary' && 'bg-secondary-half-white text-primary-white hover:bg-secondary-half-white/90 focus-visible:ring-primary-white/50',
        _variant === 'outline' && 'bg-primary-blue/15 text-primary-blue hover:bg-primary-blue/25 focus-visible:ring-primary-blue',
        _className
      )}
    >
      {_children}
      {_icon}
    </button>
  )
}
