'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FooterBrand (): React.ReactNode {
  const t = useTranslations('footer.brand')

  return (
    <div className='flex max-w-md flex-col gap-4'>
      <div className='flex items-center gap-5'>
        <Image
          src='/images/footer/logo-dash-white.svg'
          alt='Dash'
          width={121}
          height={33}
          className='h-7 w-auto lg:h-8'
        />
        <p className='text-sm font-medium text-white/50'>
          {t('slogan')}
        </p>
      </div>

      <div className='h-px w-full bg-white/25' />

      <p className='text-sm font-medium text-white/50'>
        {t('description')}
      </p>

      <a
        href='/support'
        className='inline-flex h-16 w-fit items-center justify-center rounded-2xl bg-white/15 px-9 text-lg font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 dark:text-primary-turquoise dark:focus-visible:ring-primary-turquoise/50'
      >
        {t('support')}
      </a>
    </div>
  )
}
