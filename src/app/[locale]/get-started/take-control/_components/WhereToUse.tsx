import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'
import { LinkCard } from '@/components/ui/LinkCard'

const merchants = [
  { name: 'Travala', url: 'travala.com', logo: '/images/shared/logos/travala.png' },
  { name: 'Bitrefill', url: 'bitrefill.com', logo: '/images/shared/logos/bitrefill.svg' },
  { name: 'Mobile Topup', url: 'mobiletopup.com', logo: '/images/shared/logos/mobiletopup.svg' }
]

export function WhereToUse (): React.ReactNode {
  const t = useTranslations('payments.whereToUse')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='mb-6 flex items-center justify-between lg:mb-8'>
        <div>
          <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white sm:text-3xl sm:leading-9'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' className='mt-1.5 max-w-sm text-white/60 lg:text-base'>
            {t('subtitle')}
          </Text>
        </div>
        <Button
          variant='solid'
          colorScheme='brand'
          className='hidden h-12 rounded-2xl px-6 text-base sm:flex sm:h-16 sm:rounded-2xl sm:px-9 sm:text-lg bg-white! text-primary-dark! hover:bg-white/85!'
        >
          {t('seeAll')}
        </Button>
      </div>

      {/* Merchant Cards */}
      <div className='-mx-4 px-4 sm:mx-0 sm:px-0'>
        <div className='scrollbar-hide flex snap-x snap-mandatory gap-3 overflow-x-auto py-4 sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:py-0'>
          {merchants.map((merchant) => (
            <LinkCard
              key={merchant.name}
              name={merchant.name}
              url={merchant.url}
              logo={merchant.logo}
              variant='blue'
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
          className='h-12 w-full rounded-2xl text-base bg-white! text-primary-dark! hover:bg-white/85!'
        >
          {t('seeAll')}
        </Button>
      </div>
    </div>
  )
}
