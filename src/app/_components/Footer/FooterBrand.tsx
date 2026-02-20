'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FooterBrand (): React.ReactNode {
  const t = useTranslations('footer.brand')

  return (
    <div className='flex max-w-md flex-col gap-4'>
      <div className='animate-fade-in-up flex items-center gap-5'>
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

      <div className='h-px w-full bg-linear-to-r from-white/5 via-white/25 to-white/5' />

      <p className='animate-fade-in-up-1 text-sm font-medium text-white/50'>
        {t('description')}
      </p>

      <a
        href='/support'
        className='animate-fade-in-up-2 inline-flex h-16 w-fit items-center justify-center rounded-2xl bg-white/15 px-9 text-lg font-semibold text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary-turquoise/25 hover:text-primary-turquoise hover:shadow-lg hover:shadow-primary-turquoise/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-turquoise/50'
      >
        {t('support')}
      </a>
    </div>
  )
}
