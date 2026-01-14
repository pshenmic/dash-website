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
    <div className='mx-auto max-w-[1240px] px-4 lg:px-0'>
      {/* Header */}
      <div className='mb-[30px] flex flex-col gap-[5px] lg:mb-[35px]'>
        <p className='text-[16px] font-extrabold text-primary-blue lg:text-[18px]'>
          {t('chip')}
        </p>
        <h2 className='text-[28px] leading-[1.1] font-extrabold text-white lg:text-[32px] lg:leading-[34px]'>
          {t('title')}
        </h2>
      </div>

      {/* Accordion List */}
      <div className='flex flex-col gap-[20px] lg:gap-[35px]'>
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
