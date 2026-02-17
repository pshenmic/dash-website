'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/cn'

interface MobileNavLinkProps {
  href: string
  children: React.ReactNode
  variant?: 'primary' | 'sub'
  disabled?: boolean
  onClose?: () => void
}

export function MobileNavLink ({
  href,
  children,
  variant = 'sub',
  disabled = false,
  onClose
}: MobileNavLinkProps): React.ReactNode {
  const pathname = usePathname()
  const isActive = pathname === href

  if (disabled) {
    return (
      <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
        {children}
      </span>
    )
  }

  const className = cn(
    'rounded-xl text-right focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
    variant === 'primary' && 'px-4 py-3 text-lg transition-smooth',
    variant === 'sub' && 'px-4 py-2.5 text-base transition-smooth',
    isActive && variant === 'primary' && 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20',
    isActive && variant === 'sub' && 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise',
    !isActive && variant === 'primary' && 'font-semibold text-primary-blue dark:text-primary-turquoise hover:bg-primary-blue/5 dark:hover:bg-white/5',
    !isActive && variant === 'sub' && 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
  )

  return (
    <Link href={href} className={className} onClick={onClose}>
      {children}
    </Link>
  )
}
