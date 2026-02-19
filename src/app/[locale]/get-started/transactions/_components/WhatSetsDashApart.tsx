import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading, Button } from 'dash-ui-kit/react'

export function WhatSetsDashApart (): React.ReactNode {
  const t = useTranslations('transactions.whatSetsDashApart')
  const items = t.raw('items') as string[]

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mb-10'>
        <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
          {t('title')}
        </Heading>
        <Button variant='solid' colorScheme='brand'>{t('learnMore')}</Button>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((item, index) => (
          <div key={index} className='flex items-start gap-4 rounded-2xl bg-primary-blue px-6 py-5'>
            <div className='flex size-6 shrink-0 items-center justify-center rounded-full bg-white/20'>
              <Check className='size-3.5 text-white' />
            </div>
            <p className='text-sm font-medium leading-snug text-white'>
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
