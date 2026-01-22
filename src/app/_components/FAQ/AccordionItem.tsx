'use client'

import { useState } from 'react'
import { ChevronDownIcon } from './ChevronDownIcon'

interface AccordionItemProps {
  question: string
  answer: string
  defaultOpen?: boolean
}

export function AccordionItem ({
  question,
  answer,
  defaultOpen = false
}: AccordionItemProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div
      className={`overflow-hidden rounded-3xl bg-primary-blue/15 transition-all duration-300 lg:rounded-4xl ${
        isOpen ? 'border border-primary-blue' : ''
      }`}
    >
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-5 py-5 lg:px-9 lg:py-6'
      >
        <span className='text-left text-xl font-medium text-white lg:text-3xl'>
          {question}
        </span>
        <div
          className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 lg:size-11 ${
            isOpen ? 'border border-primary-blue' : 'bg-primary-blue'
          }`}
        >
          <ChevronDownIcon
            className={`size-3 text-white transition-transform duration-300 lg:size-4 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className='overflow-hidden'>
          <p className='px-5 pb-5 text-sm leading-relaxed font-medium text-white lg:px-9 lg:pb-6 lg:text-lg'>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
