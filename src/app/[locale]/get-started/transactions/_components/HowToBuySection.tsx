'use client'

import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { AccordionItem } from './AccordionItem'

const buyItems = ['createAccount', 'howExchangesWork', 'withdrawalFreezes', 'whereDoesItGo'] as const

export function HowToBuySection (): React.ReactNode {
  const t = useTranslations('transactions.howToBuy')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-1'>
        <span className='text-lg font-extrabold text-primary-blue'>{t('subtitle')}</span>
        <Heading as='h2' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
          {t('title')}
        </Heading>
      </div>

      <div className='flex flex-col gap-4'>
        {buyItems.map((item, index) => (
          <AccordionItem key={item} title={t(`items.${item}.title`)} defaultOpen={index === 0}>
            {t(`items.${item}.content`)}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
