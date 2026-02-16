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
            : 'font-semibold text-primary-blue hover:text-primary-blue/80 hover:bg-primary-blue/5 dark:text-primary-turquoise dark:hover:bg-white/5'
        )}
      >
        {label}
        <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110' />
      </button>

      <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 scale-95 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:scale-100'>
        <div className='min-w-48 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md p-2 shadow-xl shadow-primary-dark/10 dark:shadow-black/30 border border-primary-dark/5 dark:border-white/10'>
          {children}
        </div>
      </div>
    </div>
  )
}
