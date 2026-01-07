interface ChipProps {
  children: React.ReactNode
  variant?: 'default' | 'outline'
}

export function Chip ({ children, variant = 'default' }: ChipProps) {
  const baseClasses = 'inline-flex w-fit items-center justify-center rounded-[35px] border px-[35px] py-2.5 text-xs font-medium'

  const variantClasses = {
    default: 'border-primary-white/50 text-primary-white',
    outline: 'border-primary-dark dark:border-primary-white/50 text-primary-dark dark:text-primary-white'
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}
