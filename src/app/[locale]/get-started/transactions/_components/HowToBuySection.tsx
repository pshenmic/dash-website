'use client'

import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { AccordionItem } from './AccordionItem'

const buyItems = ['createAccount', 'howExchangesWork', 'withdrawalFreezes', 'whereDoesItGo'] as const

export function HowToBuySection (): React.ReactNode {
  const t = useTranslations('transactions.howToBuy')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-2'>
        <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
          {t('title')}
        </Heading>
        <Text size='sm' weight='medium' className='mt-1 text-primary-dark/60 dark:text-white/60 lg:text-base'>
          {t('subtitle')}
        </Text>
      </div>

      <div className='mt-8 flex flex-col gap-4'>
        {buyItems.map((item, index) => (
          <AccordionItem key={item} title={t(`items.${item}.title`)} defaultOpen={index === 0}>
            {t(`items.${item}.content`)}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
