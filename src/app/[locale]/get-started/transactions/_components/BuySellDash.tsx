import Image from 'next/image'
import { useTranslations } from 'next-intl'

const exchanges = [
  { key: 'kraken', logo: '/images/transactions/logo-kraken.svg' },
  { key: 'binance', logo: '/images/transactions/logo-binance.svg' },
  { key: 'coinbase', logo: '/images/transactions/logo-coinbase.svg' },
  { key: 'uphold', logo: '/images/transactions/logo-uphold.svg' }
] as const

export function BuySellDash (): React.ReactNode {
  const t = useTranslations('transactions.buySellDash')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16'>
        {/* Left side */}
        <div className='flex flex-col gap-3.75'>
          <span className='self-start rounded-[35px] border border-primary-dark px-8.75 py-2.5 text-xs font-medium text-primary-dark dark:border-white dark:text-white'>
            {t('chip')}
          </span>
          <h2 className='text-[38px] font-extrabold leading-10 text-primary-dark dark:text-white' style={{ letterSpacing: '-0.03em' }}>
            {t('title')}
          </h2>
          <div className='max-w-98.75 text-lg font-medium leading-normal text-primary-dark dark:text-white'>
            <p>{t('description')}</p>
            <p className='mt-5'>
              {t.rich('tip', {
                bold: (chunks) => <strong className='font-extrabold'>{chunks}</strong>
              })}
            </p>
          </div>
          <button className='mt-1 h-16.25 self-start rounded-[20px] bg-primary-blue px-8.75 text-lg font-semibold text-white backdrop-blur-sm transition-smooth hover:opacity-90'>
            {t('additionalExchanges')}
          </button>
        </div>

        {/* Right side — cards in flex-wrap */}
        <div className='flex flex-1 flex-wrap gap-8.75'>
          {exchanges.map((exchange) => (
            <div key={exchange.key} className='flex items-center gap-6.25 rounded-[25px] border border-primary-dark/15 bg-white p-6.25 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
              <div className='flex size-17 shrink-0 items-center justify-center rounded-[15px] bg-primary-dark/5 dark:bg-white/5'>
                <Image src={exchange.logo} alt={t(`exchanges.${exchange.key}.name`)} width={32} height={32} className='object-contain' />
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-[32px] font-extrabold leading-10 text-primary-dark dark:text-white' style={{ letterSpacing: '-0.03em' }}>
                  {t(`exchanges.${exchange.key}.name`)}
                </p>
                <p className='text-[13px] font-medium text-primary-dark/50 dark:text-white/50'>
                  {t(`exchanges.${exchange.key}.type`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
