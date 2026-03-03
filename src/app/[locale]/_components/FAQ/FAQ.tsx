'use client'

import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { AccordionItem } from './AccordionItem'

export function FAQ (): React.ReactNode {
  const t = useTranslations('faq')

  const questions = [
    { key: 'whatIsDash', defaultOpen: false },
    { key: 'whoInvented', defaultOpen: true },
    { key: 'whatUsedFor', defaultOpen: false },
    { key: 'whoControls', defaultOpen: false }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='mb-8 flex flex-col gap-1 lg:mb-9'>
        <p className='text-base font-extrabold text-primary-blue lg:text-lg'>
          {t('chip')}
        </p>
        <Heading as='h2' weight='extrabold' className='text-3xl leading-tight text-white lg:text-3xl lg:leading-9'>
          {t('title')}
        </Heading>
      </div>

      {/* Accordion List */}
      <div className='flex flex-col gap-5 lg:gap-9'>
        {questions.map(({ key, defaultOpen }) => (
          <AccordionItem
            key={key}
            question={t(`questions.${key}.question`)}
            answer={t(`questions.${key}.answer`)}
            defaultOpen={defaultOpen}
          />
        ))}
      </div>
    </div>
  )
}
