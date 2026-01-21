'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function DownloadsHero (): React.ReactNode {
  const t = useTranslations('downloadsHero')

  return (
    <section className='relative flex min-h-[50vh] items-end overflow-hidden rounded-b-3xl bg-primary-blue pb-16 pt-32 dark:bg-primary-dark lg:min-h-[60vh] lg:pb-24 lg:pt-40'>
      {/* Background decoration */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl' />
        <div className='absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-primary-turquoise/20 blur-3xl' />
      </div>

      <div className='relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-6'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          {/* Text Content */}
          <div className='flex max-w-2xl flex-col gap-4'>
            <h1 className='text-4xl font-extrabold leading-tight tracking-tight text-white lg:text-6xl lg:leading-none'>
              {t('title')}
            </h1>
            <p className='text-base font-medium text-white/80 lg:text-lg'>
              {t('description')}
            </p>
          </div>

          {/* CTA Button */}
          <div className='shrink-0'>
            <Button
              variant='secondary'
              className='h-14 rounded-2xl px-8 text-base font-semibold lg:h-16 lg:px-10 lg:text-lg'
            >
              {t('viewAll')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
