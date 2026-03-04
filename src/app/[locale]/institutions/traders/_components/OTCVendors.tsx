import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const vendors = [
  { name: 'Galaxy Digital', website: 'galaxydigital.io', logo: '/images/traders/logo-galaxy-digital.svg' },
  { name: 'Bitcoin Suisse', website: 'bitcoinsuisse.com', logo: '/images/traders/logo-bitcoin-suisse.svg' },
  { name: 'Koi Trading', website: 'koi.trade', logo: '/images/traders/logo-koi-trading.svg' },
  { name: 'CoinSpot', website: 'www.coinspot.com.au', logo: '/images/traders/logo-coinspot.svg' },
  { name: 'Kraken OTC', website: 'www.kraken.com', logo: '/images/traders/logo-kraken.svg' },
  { name: 'GSR', website: 'gsr.io', logo: '/images/traders/logo-gsr.svg' }
] as const

export function OTCVendors (): React.ReactNode {
  const t = useTranslations('tradersPage.otcVendors')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Heading as='h2' size='xl' weight='extrabold' className='mb-10 text-[32px]! leading-8.5 tracking-tight dark:text-white'>
        {t('title')}
      </Heading>
      <div className='grid grid-cols-2 gap-5 sm:grid-cols-3 xl:grid-cols-6'>
        {vendors.map((vendor) => (
          <div
            key={vendor.name}
            className='flex flex-col gap-5 rounded-[25px] border border-primary-dark/15 bg-white p-6.25 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
          >
            <Image
              src={vendor.logo}
              alt={vendor.name}
              width={47}
              height={47}
              className='size-12 object-contain'
            />
            <div className='flex flex-col gap-1.25'>
              <Heading as='h3' size='lg' weight='extrabold' className='leading-tight text-primary-dark! dark:text-white!'>
                {vendor.name}
              </Heading>
              <Text size='xs' weight='medium' className='text-primary-dark/35! dark:text-white/35!'>
                {vendor.website}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
