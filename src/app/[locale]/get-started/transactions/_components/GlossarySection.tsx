'use client'

import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { AccordionItem } from './AccordionItem'

const glossaryTerms = ['wallet', 'walletApp', 'p2p', 'publicAddress', 'exchange', 'qrCode'] as const

export function GlossarySection (): React.ReactNode {
  const t = useTranslations('transactions.glossary')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Heading as='h2' size='xl' weight='extrabold' className='mb-8 leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
        {t('title')}
      </Heading>

      <div className='grid gap-4 lg:grid-cols-2'>
        {glossaryTerms.map((term) => (
          <AccordionItem key={term} title={t(`terms.${term}.title`)}>
            {t(`terms.${term}.content`)}
          </AccordionItem>
        ))}
      </div>
    </div>
  )
}
