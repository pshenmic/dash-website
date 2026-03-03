import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading } from 'dash-ui-kit/react'

const downloads = ['fullKit', 'stickers', 'quickStart'] as const

export function MerchantDownloads (): React.ReactNode {
  const t = useTranslations('transactions.merchantDownloads')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header row — title left, button right */}
      <div className='mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
        <Heading as='h2' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
          {t('title')}
        </Heading>
        <Button variant='solid' colorScheme='brand' className='h-16.25 shrink-0 rounded-[20px] px-8.75 text-lg'>
          {t('helpButton')}
        </Button>
      </div>

      {/* Cards grid */}
      <div className='grid gap-6 lg:grid-cols-3'>
        {downloads.map((card) => (
          <div key={card} className='flex flex-col overflow-hidden rounded-[36px] border border-primary-dark/15 bg-white p-7.25 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
            {/* Dash logo */}
            <div className='mb-auto'>
              <Image
                src='/images/transactions/icon-dash-logo.svg'
                alt='Dash'
                width={39}
                height={32}
                className='dark:brightness-0 dark:invert'
              />
            </div>

            {/* Card content */}
            <div className='mt-7.5 flex flex-col gap-7.5'>
              <div className='flex flex-col gap-3.75'>
                <Heading as='h3' weight='extrabold' className='whitespace-pre-line text-[38px] leading-10 tracking-tight dark:text-white'>
                  {t(`cards.${card}.title`)}
                </Heading>
                <p className='text-[13px] font-medium leading-normal text-primary-dark dark:text-white'>
                  {t(`cards.${card}.description`)}
                </p>
              </div>
              <Button variant='solid' colorScheme='brand' className='h-16.25 w-full rounded-[20px] text-lg'>
                {t(`cards.${card}.button`)}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
