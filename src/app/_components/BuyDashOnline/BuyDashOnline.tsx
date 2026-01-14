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
    <div className='bg-primary-white px-4 py-[40px] dark:bg-primary-dark lg:px-0 lg:py-[50px]'>
      <div className='mx-auto max-w-[1240px]'>
        {/* Header */}
        <div className='mb-[25px] flex items-center justify-between lg:mb-[32px]'>
          <h2 className='text-[24px] font-extrabold leading-[1.05] tracking-[-0.02em] text-primary-dark dark:text-white sm:text-[32px] sm:leading-[34px]'>
            {t('title')}
          </h2>
          <Button
            variant='primary'
            inverted
            className='hidden h-[50px] rounded-[16px] px-[25px] text-base sm:flex sm:h-[65px] sm:rounded-[20px] sm:px-[35px] sm:text-lg'
          >
            {t('seeAll')}
          </Button>
        </div>

        {/* Exchange Cards - horizontal scroll on mobile, flex-wrap on desktop */}
        <div className='-mx-4 px-4 sm:mx-0 sm:px-0'>
          <div className='scrollbar-hide flex snap-x snap-mandatory gap-[12px] overflow-x-auto pb-2 sm:flex-wrap sm:gap-[20px] sm:overflow-visible sm:pb-0'>
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
        <div className='mt-[20px] sm:hidden'>
          <Button
            variant='primary'
            inverted
            className='h-[50px] w-full rounded-[16px] text-base'
          >
            {t('seeAll')}
          </Button>
        </div>
      </div>
    </div>
  )
}
