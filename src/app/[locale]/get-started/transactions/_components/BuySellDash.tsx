import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

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
        <div className='flex flex-1 flex-col gap-4'>
          <Badge variant='bordered' color='blue' size='sm'>{t('chip')}</Badge>
          <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' className='text-primary-dark/60 dark:text-white/60 lg:text-base'>
            {t('description')}
          </Text>
          <Text size='sm' weight='semibold' className='text-primary-blue'>
            {t('tip')}
          </Text>
          <div className='mt-2'>
            <button className='rounded-full border border-primary-blue px-8 py-4 text-sm font-semibold text-primary-blue transition-colors hover:bg-primary-blue/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5'>
              {t('additionalExchanges')}
            </button>
          </div>
        </div>

        {/* Right side - 2×2 grid */}
        <div className='grid flex-1 grid-cols-2 gap-4'>
          {exchanges.map((exchange) => (
            <div key={exchange.key} className='flex flex-col items-center gap-3 rounded-2xl border border-primary-dark/10 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
              <div className='relative size-12 overflow-hidden rounded-xl'>
                <Image src={exchange.logo} alt={t(`exchanges.${exchange.key}.name`)} fill className='object-contain' />
              </div>
              <div className='text-center'>
                <p className='text-sm font-bold text-primary-dark dark:text-white'>
                  {t(`exchanges.${exchange.key}.name`)}
                </p>
                <p className='mt-0.5 text-xs text-primary-dark/40 dark:text-white/40'>
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
