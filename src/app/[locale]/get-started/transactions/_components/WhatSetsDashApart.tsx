import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'

const columns = [[0, 1, 2], [3, 4, 5], [6, 7]] as const

export function WhatSetsDashApart (): React.ReactNode {
  const t = useTranslations('transactions.whatSetsDashApart')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
        <h2 className='text-[32px] font-extrabold leading-8.5 text-white'>
          {t('title')}
        </h2>
        <button className='h-16.25 shrink-0 rounded-[20px] bg-white px-8.75 text-lg font-semibold text-primary-dark backdrop-blur-sm transition-smooth hover:opacity-90'>
          {t('learnMore')}
        </button>
      </div>

      {/* 3-column cards */}
      <div className='flex flex-col gap-5 lg:flex-row'>
        {columns.map((col, ci) => (
          <div key={ci} className='flex flex-1 flex-col gap-5'>
            {col.map((i) => (
              <div key={i} className='flex items-center gap-6 rounded-[25px] border border-white/15 bg-white/15 p-6.25'>
                <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-white/20'>
                  <Check className='size-5 text-white' />
                </div>
                <p className='text-2xl leading-6.5 font-medium text-white'>
                  {t.rich(`items.${i}`, {
                    bold: (chunks) => <strong className='font-extrabold'>{chunks}</strong>
                  })}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
