'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FooterBrand (): React.ReactNode {
  const t = useTranslations('footer.brand')

  return (
    <div className='flex max-w-[407px] flex-col gap-[15px]'>
      <div className='flex items-center gap-[20px]'>
        <Image
          src='/images/footer/logo-dash-white.svg'
          alt='Dash'
          width={121}
          height={33}
          className='h-[28px] w-auto lg:h-[33px]'
        />
        <p className='text-[13px] font-medium text-white/50'>
          {t('slogan')}
        </p>
      </div>

      <div className='h-px w-full bg-white/25' />

      <p className='text-[13px] font-medium text-white/50'>
        {t('description')}
      </p>

      <a
        href='/support'
        className='inline-flex h-[65px] w-fit items-center justify-center rounded-[20px] bg-white/15 px-[35px] text-[18px] font-semibold text-white backdrop-blur-[5px] transition-colors hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 dark:text-primary-turquoise dark:focus-visible:ring-primary-turquoise/50'
      >
        {t('support')}
      </a>
    </div>
  )
}
