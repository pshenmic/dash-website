'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { MerchantCard } from './MerchantCard'
import { cn } from '@/lib/cn'

const filters = ['all', 'giftCards', 'privacy', 'travel', 'bills', 'cards'] as const

const merchants = [
  { name: 'DashSpend', category: 'Gift Cards and Spending Apps', logo: '/images/spend/logo-dashspend.svg' },
  { name: 'NYM', category: 'Privacy', logo: '/images/spend/logo-nym.png' },
  { name: 'Travala.com', category: 'Travel', logo: '/images/spend/logo-travala.png' },
  { name: 'Bitrefill', category: 'Gift Cards and Spending Apps', logo: '/images/spend/logo-bitrefill.png' },
  { name: 'Spritz', category: 'Bills', logo: '/images/spend/logo-spritz.svg' },
  { name: 'Swapin', category: 'Bills', logo: '/images/spend/logo-swapin.svg', logoClassName: 'h-8 w-[100px]', imageClassName: 'dark:invert' },
  { name: 'Zypto', category: 'Bills', logo: '/images/spend/logo-zypto.png' },
  { name: 'Flexa', category: 'Gift Cards and Spending Apps', logo: '/images/spend/logo-flexa.svg' },
  { name: 'Coinbase', category: 'Cards', logo: '/images/spend/logo-coinbase.svg' },
  { name: 'Piggy Cards', category: 'Gift Cards and Spending Apps', logo: '/images/spend/logo-piggycards.png' },
  { name: 'Alternative Airlines', category: 'Travel', logo: '/images/spend/logo-alternative-airlines.svg' }
]

export function MerchantDirectory (): React.ReactNode {
  const t = useTranslations('spend.merchants')
  const [activeFilter, setActiveFilter] = useState<string>('all')

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
        {merchants.map((merchant) => (
          <MerchantCard
            key={merchant.name}
            {...merchant}
          />
        ))}
      </div>
    </div>
  )
}
