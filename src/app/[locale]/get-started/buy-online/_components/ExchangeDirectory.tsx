'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { ExchangeCard } from './ExchangeCard'
import { cn } from '@/lib/cn'

const filters = ['exchange', 'onramp', 'dex', 'swap'] as const

const exchanges = [
  {
    name: 'Coinbase',
    type: 'Exchange',
    logo: '/images/buy-online/logo-coinbase.svg',
    features: 'ChainLocks',
    time: '5 Min',
    pairs: 'BTC / ETH / USD / EUR'
  },
  {
    name: 'Coinbase Pro',
    type: 'Exchange',
    logo: '/images/buy-online/logo-coinbase-pro.svg',
    features: 'ChainLocks',
    time: '5 Min',
    pairs: 'BTC / ETH / USD / EUR'
  },
  {
    name: 'HitBTC',
    type: 'Exchange',
    logo: '/images/buy-online/logo-hitbtc.svg',
    features: 'ChainLocks',
    time: '2.5 Min',
    pairs: 'USD / BTC / ETH / EOS / BCH'
  },
  {
    name: 'CEX.IO',
    type: 'Exchange',
    logo: '/images/buy-online/logo-cexio.svg',
    features: 'InstantSend',
    time: '2.5 Min',
    pairs: 'USD / EUR'
  },
  {
    name: 'WhiteBIT',
    type: 'Exchange',
    logo: '/images/buy-online/logo-whitebit.svg',
    features: 'ChainLocks / InstantSend',
    time: '0 Min',
    pairs: 'USD / BTC / ETH'
  },
  {
    name: 'KuCoin',
    type: 'Exchange',
    logo: '/images/buy-online/logo-kucoin.svg',
    features: 'ChainLocks / InstantSend',
    time: '0 Min',
    pairs: 'USD / BTC / ETH'
  },
  {
    name: 'Binance',
    type: 'Exchange',
    logo: '/images/buy-online/logo-binance.png',
    features: 'None',
    time: '2.5 Min',
    pairs: 'USD / BTC / ETH'
  },
  {
    name: 'Bitfinex',
    type: 'Exchange',
    logo: '/images/buy-online/logo-bitfinex.png',
    features: 'None',
    time: '22.5 min',
    pairs: 'USD / BTC'
  }
]

export function ExchangeDirectory (): React.ReactNode {
  const t = useTranslations('buyOnline.exchanges')
  const [activeFilter, setActiveFilter] = useState<string>('exchange')

  const labels = {
    features: t('labels.features'),
    time: t('labels.time'),
    pairs: t('labels.pairs')
  }

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header + Filters */}
      <div className='mb-8 flex flex-col gap-4 lg:mb-10 lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' opacity={60} className='mt-1 dark:text-white lg:text-base'>
            {t('subtitle')}
          </Text>
        </div>

        {/* Filter Tabs */}
        <div className='flex gap-2'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'bg-primary-blue text-white'
                  : 'border border-primary-dark/15 bg-white text-primary-dark/60 hover:bg-primary-dark/5 dark:border-white/15 dark:bg-secondary-space-cadet dark:text-white/60 dark:hover:bg-white/10'
              )}
            >
              {t(`filters.${filter}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Exchange Cards Grid */}
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {exchanges.map((exchange) => (
          <ExchangeCard
            key={exchange.name}
            {...exchange}
            labels={labels}
          />
        ))}
      </div>
    </div>
  )
}
