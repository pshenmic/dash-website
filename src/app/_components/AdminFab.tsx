'use client'

import { Settings } from 'lucide-react'
import { Link, usePathname } from '@/i18n/navigation'

export function AdminFab (): React.ReactNode {
  const pathname = usePathname()

  if (pathname === '/admin') return null

  return (
    <Link
      href='/admin'
      data-testid='admin-fab'
      className='fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary-blue text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
      aria-label='Admin panel'
    >
      <Settings className='size-6' />
    </Link>
  )
}
