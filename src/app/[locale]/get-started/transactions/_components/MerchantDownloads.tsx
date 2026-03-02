import Image from 'next/image'
import { useTranslations } from 'next-intl'

const downloads = ['fullKit', 'stickers', 'quickStart'] as const

export function MerchantDownloads (): React.ReactNode {
  const t = useTranslations('transactions.merchantDownloads')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header row — title left, button right */}
      <div className='mb-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center'>
        <h2 className='text-[32px] font-extrabold leading-8.5 text-primary-dark dark:text-white'>
          {t('title')}
        </h2>
        <button className='h-16.25 shrink-0 rounded-[20px] bg-primary-blue px-8.75 text-lg font-semibold text-white backdrop-blur-[5px] transition-smooth hover:opacity-90'>
          {t('helpButton')}
        </button>
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
                <h3 className='whitespace-pre-line text-[38px] font-extrabold leading-10 text-primary-dark dark:text-white' style={{ letterSpacing: '-0.03em' }}>
                  {t(`cards.${card}.title`)}
                </h3>
                <p className='text-[13px] font-medium leading-normal text-primary-dark dark:text-white'>
                  {t(`cards.${card}.description`)}
                </p>
              </div>
              <button className='h-16.25 w-full rounded-[20px] bg-primary-blue text-lg font-semibold text-white backdrop-blur-[5px] transition-smooth hover:opacity-90'>
                {t(`cards.${card}.button`)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
