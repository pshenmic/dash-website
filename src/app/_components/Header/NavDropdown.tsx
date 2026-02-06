'use client'

import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface NavDropdownProps {
  label: string
  isActive: boolean
  children: React.ReactNode
}

export function NavDropdown ({
  label,
  isActive,
  children
}: NavDropdownProps): React.ReactNode {
  return (
    <div className='group relative'>
      <button
        className={cn(
          'flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2',
          isActive
            ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20'
            : 'font-semibold text-primary-dark hover:text-primary-dark/80 hover:bg-white/20 dark:text-primary-turquoise dark:hover:bg-white/5'
        )}
      >
        {label}
        <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180' />
      </button>

      <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
        <div className='min-w-48 rounded-2xl bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-2'>
          {children}
        </div>
      </div>
    </div>
  )
}
