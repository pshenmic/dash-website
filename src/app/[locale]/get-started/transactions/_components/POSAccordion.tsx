'use client'

import { useTranslations } from 'next-intl'
import { AccordionItem } from './AccordionItem'

const posItems = ['first', 'cost', 'tools', 'setup'] as const

export function POSAccordion (): React.ReactNode {
  const t = useTranslations('transactions.posAccordion')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-1.25'>
        <span className='text-lg font-extrabold text-primary-blue'>{t('subtitle')}</span>
        <h2 className='text-[32px] font-extrabold leading-8.5 text-primary-dark dark:text-white'>
          {t('title')}
        </h2>
      </div>

      <div className='flex flex-col gap-4'>
        {posItems.map((item, index) => (
          <AccordionItem key={item} title={t(`items.${item}.title`)} defaultOpen={index === 0}>
            {t(`items.${item}.content`)}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
