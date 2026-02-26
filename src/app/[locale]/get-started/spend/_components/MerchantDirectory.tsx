'use client'

import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { MerchantCard } from './MerchantCard'
import { cn } from '@/lib/cn'

const filters = ['all', 'giftCards', 'privacy', 'travel', 'bills', 'cards'] as const
type Filter = typeof filters[number]

const merchants = [
  { name: 'DashSpend', filter: 'giftCards' as Filter, logo: '/images/spend/logo-dashspend.svg' },
  { name: 'NYM', filter: 'privacy' as Filter, logo: '/images/spend/logo-nym.png' },
  { name: 'Travala.com', filter: 'travel' as Filter, logo: '/images/spend/logo-travala.png' },
  { name: 'Bitrefill', filter: 'giftCards' as Filter, logo: '/images/spend/logo-bitrefill.png' },
  { name: 'Spritz', filter: 'bills' as Filter, logo: '/images/spend/logo-spritz.svg' },
  { name: 'Swapin', filter: 'bills' as Filter, logo: '/images/spend/logo-swapin.svg', logoClassName: 'h-8 w-[100px]', imageClassName: 'dark:invert' },
  { name: 'Zypto', filter: 'bills' as Filter, logo: '/images/spend/logo-zypto.png' },
  { name: 'Flexa', filter: 'giftCards' as Filter, logo: '/images/spend/logo-flexa.svg' },
  { name: 'Coinbase', filter: 'cards' as Filter, logo: '/images/spend/logo-coinbase.svg' },
  { name: 'Piggy Cards', filter: 'giftCards' as Filter, logo: '/images/spend/logo-piggycards.png' },
  { name: 'Alternative Airlines', filter: 'travel' as Filter, logo: '/images/spend/logo-alternative-airlines.svg' }
]

export function MerchantDirectory (): React.ReactNode {
  const t = useTranslations('spend.merchants')
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const filteredMerchants = useMemo(
    () => activeFilter === 'all' ? merchants : merchants.filter((m) => m.filter === activeFilter),
    [activeFilter]
  )

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
        <div className='flex flex-wrap gap-2'>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                'rounded-xl px-5 py-2 text-sm font-medium transition-colors',
                activeFilter === filter
                  ? 'bg-primary-blue text-white'
                  : 'bg-primary-blue/15 text-primary-dark hover:bg-primary-blue/25 dark:bg-primary-blue/15 dark:text-white dark:hover:bg-primary-blue/25'
              )}
            >
              {t(`filters.${filter}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Merchant Cards Grid */}
      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {filteredMerchants.map((merchant) => (
          <MerchantCard
            key={merchant.name}
            name={merchant.name}
            category={t(`filters.${merchant.filter}`)}
            logo={merchant.logo}
            logoClassName={merchant.logoClassName}
            imageClassName={merchant.imageClassName}
          />
        ))}
      </div>
    </div>
  )
}
