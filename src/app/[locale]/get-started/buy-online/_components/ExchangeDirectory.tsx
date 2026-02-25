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
          <Heading as='h2' size='xl' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' opacity={50} className='mt-1 dark:text-white'>
            {t('subtitle')}
          </Text>
        </div>

        {/* Filter Tabs */}
        <div className='flex flex-wrap gap-2'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={cn(
                'h-8 rounded-xl px-6.25 text-sm font-semibold transition-colors',
                activeFilter === filter
                  ? 'bg-primary-blue text-white'
                  : 'bg-primary-blue/15 text-primary-blue hover:bg-primary-blue/20 dark:bg-primary-blue/20 dark:text-primary-blue'
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
