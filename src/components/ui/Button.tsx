import { cn } from '@/lib/cn'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
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
        'flex h-[50px] items-center justify-center gap-[15px] rounded-[55px] px-[25px] text-lg font-semibold backdrop-blur-[10px]',
        variant === 'primary' && 'bg-primary-blue text-primary-white',
        variant === 'secondary' && 'bg-secondary-half-white text-primary-white',
        className
      )}
    >
      {children}
      {icon}
    </button>
  )
}
