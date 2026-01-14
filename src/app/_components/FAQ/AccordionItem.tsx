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
      className={`overflow-hidden rounded-[25px] bg-primary-blue/15 transition-all duration-300 lg:rounded-[35px] ${
        isOpen ? 'border border-primary-blue' : ''
      }`}
    >
      <button
        type='button'
        onClick={() => setIsOpen(!isOpen)}
        className='flex w-full items-center justify-between px-[20px] py-[18px] lg:px-[36px] lg:py-[24px]'
      >
        <span className='text-left text-[20px] font-medium text-white lg:text-[32px]'>
          {question}
        </span>
        <div
          className={`flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full transition-all duration-300 lg:h-[45px] lg:w-[45px] ${
            isOpen ? 'border border-primary-blue' : 'bg-primary-blue'
          }`}
        >
          <ChevronDownIcon
            className={`h-[12px] w-[12px] text-white transition-transform duration-300 lg:h-[15px] lg:w-[15px] ${
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
          <p className='px-[20px] pb-[20px] text-[14px] leading-[1.6] font-medium text-white lg:px-[36px] lg:pb-[24px] lg:text-[18px]'>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}
