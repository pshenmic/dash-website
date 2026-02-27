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
    <div className='overflow-hidden rounded-[35px] bg-primary-blue/15 dark:bg-white/10'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-9 py-6 text-left transition-colors'
      >
        <span className='text-[32px] font-medium leading-8.5 text-primary-dark dark:text-white'>{title}</span>
        <div className={cn(
          'flex size-11.25 shrink-0 items-center justify-center rounded-full transition-colors',
          isOpen ? 'border border-primary-dark dark:border-primary-blue' : 'bg-primary-dark dark:bg-primary-blue'
        )}>
          <ChevronDown className={cn(
            'size-4 transition-transform duration-200',
            isOpen ? 'rotate-180 text-primary-dark dark:text-primary-blue' : 'text-white'
          )} />
        </div>
      </button>
      <div className={cn('grid transition-all duration-200', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
        <div className='overflow-hidden'>
          <div className='px-9 pb-8 text-lg leading-relaxed text-primary-dark/75 dark:text-white/70'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
