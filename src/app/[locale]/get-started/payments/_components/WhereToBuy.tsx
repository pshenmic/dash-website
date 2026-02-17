import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'
import { LinkCard } from '@/components/ui/LinkCard'

const exchanges = [
  { name: 'Kraken', url: 'kraken.com', logo: '/images/payments/logo-kraken.svg' },
  { name: 'Coinbase', url: 'coinbase.com', logo: '/images/payments/logo-coinbase.svg' },
  { name: 'Uphold', url: 'uphold.com', logo: '/images/payments/logo-uphold.svg' },
  { name: 'Binance', url: 'binance.com', logo: '/images/payments/logo-binance.svg' }
]

export function WhereToBuy (): React.ReactNode {
  const t = useTranslations('payments.whereToBuy')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='mb-6 flex items-end justify-between lg:mb-8'>
        <div>
          <Text size='sm' weight='medium' opacity={60} className='dark:text-white lg:text-base'>
            {t('subtitle')}
          </Text>
          <Heading as='h2' size='xl' weight='extrabold' className='mt-1.5 leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
            {t('title')}
          </Heading>
        </div>
        <Button
          variant='solid'
          colorScheme='brand'
          className='hidden h-12 rounded-2xl px-6 text-base sm:flex sm:h-16 sm:rounded-2xl sm:px-9 sm:text-lg'
        >
          {t('seeAll')}
        </Button>
      </div>

      {/* Exchange Cards */}
      <div className='-mx-4 px-4 sm:mx-0 sm:px-0'>
        <div className='scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto py-4 sm:grid sm:grid-cols-4 sm:gap-5 sm:overflow-visible sm:py-0'>
          {exchanges.map((exchange) => (
            <LinkCard
              key={exchange.name}
              name={exchange.name}
              url={exchange.url}
              logo={exchange.logo}
              variant='light'
              className='min-w-52 shrink-0 snap-start sm:min-w-0 sm:shrink'
            />
          ))}
        </div>
      </div>

      {/* Mobile See All */}
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
  )
}
