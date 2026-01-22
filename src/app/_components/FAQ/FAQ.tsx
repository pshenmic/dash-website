'use client'

import { useTranslations } from 'next-intl'
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
    <div className='mx-auto max-w-7xl px-4 lg:px-0'>
      {/* Header */}
      <div className='mb-8 flex flex-col gap-1 lg:mb-9'>
        <p className='text-base font-extrabold text-primary-blue lg:text-lg'>
          {t('chip')}
        </p>
        <h2 className='text-3xl leading-tight font-extrabold text-white lg:text-3xl lg:leading-9'>
          {t('title')}
        </h2>
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
