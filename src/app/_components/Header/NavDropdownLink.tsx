'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/cn'

interface NavDropdownLinkProps {
  href: string
  children: React.ReactNode
}

export function NavDropdownLink ({
  href,
  children
}: NavDropdownLinkProps): React.ReactNode {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      prefetch={false}
      className={cn(
        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
        isActive
          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
      )}
    >
      {children}
    </Link>
  )
}
