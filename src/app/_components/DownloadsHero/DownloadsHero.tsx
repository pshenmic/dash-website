'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'

export function DownloadsHero (): React.ReactNode {
  const t = useTranslations('downloadsHero')

  return (
    <section className='relative flex min-h-svh flex-col bg-primary-white dark:bg-primary-dark'>
      {/* Background Image */}
      <div className='pointer-events-none absolute right-0 top-0 h-80 w-96 lg:h-auto lg:w-auto'>
        <Image
          src='/images/downloads/hero-bg.png'
          alt=''
          width={1800}
          height={1200}
          className='object-contain object-top-right dark:brightness-50'
          priority
        />
      </div>

      {/* Main Content */}
      <div className='relative z-10 mx-auto w-full max-w-7xl flex-1 px-4 pt-28 lg:px-6 lg:pt-40'>
        {/* Hero Header */}
        <div className='flex flex-col gap-4 lg:gap-6'>
          {/* Title + CTA in one row */}
          <div className='flex items-start justify-between gap-4'>
            <h1 className='text-4xl font-extrabold leading-tight tracking-tight text-primary-dark dark:text-white lg:text-8xl lg:leading-none'>
              {t('title')}
            </h1>
            <div className='shrink-0'>
              <button className='flex h-10 items-center gap-2 rounded-full bg-primary-dark/5 pl-4 pr-1.5 backdrop-blur-sm transition-colors hover:bg-primary-dark/10 dark:bg-white/10 dark:hover:bg-white/20 lg:h-16 lg:gap-4 lg:pl-9 lg:pr-2.5'>
                <span className='text-sm font-semibold text-primary-dark dark:text-white lg:text-lg'>
                  {t('learnMore')}
                </span>
                <div className='flex size-7 items-center justify-center rounded-full bg-white shadow-sm lg:size-11'>
                  <ArrowUpRight className='size-3 text-primary-blue lg:size-4' />
                </div>
              </button>
            </div>
          </div>
          {/* Description */}
          <p className='max-w-3xl text-base font-light text-primary-dark dark:text-white/80 lg:text-lg'>
            {t('description')}
          </p>
        </div>

        {/* Mobile Wallets Section */}
        <div className='pb-4 pt-10 lg:pb-10 lg:pt-32'>
          <div className='flex flex-col gap-3 lg:gap-4'>
            {/* Title + Filters in one row */}
            <div className='flex items-center justify-between gap-4'>
              <h2 className='text-xl font-extrabold leading-tight text-primary-dark dark:text-white lg:text-3xl'>
                {t('mobileWallets.title')}
              </h2>
              <div className='flex shrink-0 gap-2 lg:gap-3'>
                <button className='h-8 rounded-xl bg-primary-blue/15 px-4 text-sm font-medium text-primary-blue backdrop-blur-sm transition-colors hover:bg-primary-blue/25 lg:px-6'>
                  Android
                </button>
                <button className='h-8 rounded-xl bg-primary-blue/15 px-4 text-sm font-medium text-primary-blue backdrop-blur-sm transition-colors hover:bg-primary-blue/25 lg:px-6'>
                  iOS
                </button>
              </div>
            </div>
            {/* Description */}
            <p className='text-sm font-medium text-primary-dark/50 dark:text-white/50'>
              {t('mobileWallets.description1')}
              <br className='hidden lg:block' />
              <span className='lg:hidden'> </span>
              {t('mobileWallets.description2')}
            </p>
          </div>
        </div>

        {/* DashPay App Block */}
        <div className='relative mb-6 overflow-hidden rounded-3xl bg-primary-blue py-6 dark:bg-secondary-space-cadet lg:mb-16 lg:h-72 lg:rounded-4xl lg:py-0'>
          {/* Decorative Ellipses - centered behind app screenshots */}
          <div className='pointer-events-none absolute -right-20 -top-48 size-180 rounded-full bg-white/15' />
          <div className='pointer-events-none absolute -right-10 -top-32 size-140 rounded-full bg-white/10' />

          {/* Content */}
          <div className='relative z-10 flex h-full flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-24'>
            {/* Left: Text + Buttons */}
            <div className='flex flex-col gap-4 lg:gap-8'>
              <div className='flex flex-col'>
                <span className='text-xl font-medium text-white lg:text-4xl'>
                  {t('dashPayApp.titleLine1')}
                </span>
                <span className='text-xl font-extrabold tracking-tight text-white lg:text-4xl'>
                  {t('dashPayApp.titleLine2')}
                </span>
              </div>
              <div className='flex gap-3 lg:gap-4'>
                <button className='h-12 rounded-xl bg-white px-6 text-base font-semibold text-primary-dark transition-colors hover:bg-white/90 lg:h-16 lg:rounded-2xl lg:px-9 lg:text-lg'>
                  {t('dashPayApp.android')}
                </button>
                <button className='h-12 rounded-xl bg-white/15 px-6 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/25 lg:h-16 lg:rounded-2xl lg:px-9 lg:text-lg'>
                  {t('dashPayApp.ios')}
                </button>
              </div>
            </div>

            {/* Right: App Screenshots */}
            <div className='absolute -top-16 right-8 hidden h-110 w-130 lg:block'>
              <Image
                src='/images/downloads/dashpay-app.png'
                alt='DashPay App'
                fill
                className='object-contain object-right'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
