import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ReactNode
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  icon,
  className,
}: ButtonProps) {
  return (
    <button
      className={cn(
        'flex h-[65px] items-center justify-center gap-[15px] rounded-[20px] px-[35px] text-lg font-semibold backdrop-blur-[5px]',
        variant === 'primary' && 'bg-primary-blue text-primary-white',
        variant === 'secondary' && 'bg-secondary-half-white text-primary-white',
        variant === 'outline' && 'bg-primary-blue/15 text-primary-blue',
        className
      )}
    >
      {children}
      {icon}
    </button>
  )
}
