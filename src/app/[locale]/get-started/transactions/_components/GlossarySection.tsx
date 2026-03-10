'use client'

import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { AccordionItem } from './AccordionItem'

const leftColumn = ['wallet', 'walletApp', 'p2p'] as const
const rightColumn = ['publicAddress', 'exchange', 'qrCode'] as const

export function GlossarySection (): React.ReactNode {
  const t = useTranslations('transactions.glossary')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-1'>
        <span className='text-lg font-extrabold text-primary-blue'>{t('subtitle')}</span>
        <Heading as='h2' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
          {t('title')}
        </Heading>
      </div>

      <div className='flex flex-col gap-4 lg:flex-row'>
        <div className='flex flex-1 flex-col gap-4'>
          {leftColumn.map((term) => (
            <AccordionItem key={term} title={t(`terms.${term}.title`)}>
              {t(`terms.${term}.content`)}
            </AccordionItem>
          ))}
        </div>
        <div className='flex flex-1 flex-col gap-4'>
          {rightColumn.map((term) => (
            <AccordionItem key={term} title={t(`terms.${term}.title`)}>
              {t(`terms.${term}.content`)}
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  )
}
