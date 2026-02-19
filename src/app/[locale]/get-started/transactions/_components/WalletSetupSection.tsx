'use client'

import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { AccordionItem } from './AccordionItem'

const walletItems = ['createDashpay', 'addingFunds', 'assistance'] as const

export function WalletSetupSection (): React.ReactNode {
  const t = useTranslations('transactions.walletSetup')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Heading as='h2' size='xl' weight='extrabold' className='mb-8 leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
        {t('title')}
      </Heading>

      <div className='flex flex-col gap-4'>
        {walletItems.map((item, index) => (
          <AccordionItem key={item} title={t(`items.${item}.title`)} defaultOpen={index === 0}>
            {t(`items.${item}.content`)}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
