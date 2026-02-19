'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

interface AccordionItemProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function AccordionItem ({ title, children, defaultOpen = false }: AccordionItemProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className='overflow-hidden rounded-2xl bg-gray-50 dark:bg-white/10'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-6 py-5 text-left text-sm font-semibold text-primary-dark/80 transition-colors hover:bg-gray-100 dark:text-white dark:hover:bg-white/5 lg:text-base'
      >
        {title}
        <ChevronDown className={cn('size-5 shrink-0 text-primary-dark/40 transition-transform duration-200 dark:text-white/60', isOpen && 'rotate-180')} />
      </button>
      <div className={cn('grid transition-all duration-200', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className='overflow-hidden'>
          <div className='px-6 pb-5 text-sm leading-relaxed text-primary-dark/60 dark:text-white/70'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
