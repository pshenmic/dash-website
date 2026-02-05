'use client'

import { useTranslations } from 'next-intl'
import { Button } from 'dash-ui-kit/react'
import { LinkCard } from '@/components/ui/LinkCard'

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
    <div className='relative z-10 rounded-b-3xl bg-primary-white px-4 py-12 dark:bg-primary-dark sm:px-6 lg:px-8 lg:py-16'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-6 flex items-center justify-between lg:mb-8'>
          <h2 className='text-2xl font-extrabold leading-tight tracking-tight text-primary-dark dark:text-white sm:text-3xl sm:leading-9'>
            {t('title')}
          </h2>
          <Button
            variant='solid'
            colorScheme='brand'
            className='hidden h-12 rounded-2xl px-6 text-base sm:flex sm:h-16 sm:rounded-2xl sm:px-9 sm:text-lg'
          >
            {t('seeAll')}
          </Button>
        </div>

        {/* Exchange Cards - horizontal scroll on mobile, flex-wrap on desktop */}
        <div className='-mx-4 px-4 sm:mx-0 sm:px-0'>
          <div className='scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto py-4 sm:flex-wrap sm:gap-5 sm:overflow-visible sm:py-0'>
            {exchanges.map((exchange) => (
              <LinkCard
                key={exchange.name}
                name={exchange.name}
                url={exchange.url}
                logo={exchange.logo}
                variant='light'
              />
            ))}
          </div>
        </div>

        {/* Mobile See All Button */}
        <div className='mt-5 sm:hidden'>
          <Button
            variant='solid'
            colorScheme='brand'
            className='h-12 w-full rounded-2xl text-base'
          >
            {t('seeAll')}
          </Button>
        </div>
      </div>
    </div>
  )
}
