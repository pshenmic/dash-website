'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { ExchangeCard } from './ExchangeCard'

const exchanges = [
  { name: 'Kraken', url: 'kraken.com', logo: '/images/get-started/exchanges/kraken.svg' },
  { name: 'Coinbase', url: 'coinbase.com', logo: '/images/get-started/exchanges/coinbase.svg' },
  { name: 'Uphold', url: 'uphold.com', logo: '/images/get-started/exchanges/uphold.svg' },
  { name: 'Binance', url: 'binance.com', logo: '/images/get-started/exchanges/binance.svg' },
  { name: 'Edge', url: 'edge.app', logo: '/images/get-started/exchanges/edge.png' }
]

export function BuyDashOnline (): React.ReactNode {
  const t = useTranslations('buyDashOnline')

  return (
    <div className='bg-primary-white px-4 py-10 dark:bg-primary-dark lg:px-0 lg:py-12'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-6 flex items-center justify-between lg:mb-8'>
          <h2 className='text-2xl font-extrabold leading-tight tracking-tight text-primary-dark dark:text-white sm:text-3xl sm:leading-9'>
            {t('title')}
          </h2>
          <Button
            variant='primary'
            inverted
            className='hidden h-12 rounded-2xl px-6 text-base sm:flex sm:h-16 sm:rounded-2xl sm:px-9 sm:text-lg'
          >
            {t('seeAll')}
          </Button>
        </div>

        {/* Exchange Cards - horizontal scroll on mobile, flex-wrap on desktop */}
        <div className='-mx-4 px-4 sm:mx-0 sm:px-0'>
          <div className='scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:gap-5 sm:overflow-visible sm:pb-0'>
            {exchanges.map((exchange) => (
              <ExchangeCard
                key={exchange.name}
                name={exchange.name}
                url={exchange.url}
                logo={exchange.logo}
              />
            ))}
          </div>
        </div>

        {/* Mobile See All Button */}
        <div className='mt-5 sm:hidden'>
          <Button
            variant='primary'
            inverted
            className='h-12 w-full rounded-2xl text-base'
          >
            {t('seeAll')}
          </Button>
        </div>
      </div>
    </div>
  )
}
