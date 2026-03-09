import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const partners = [
  { name: 'Coinbase Pro', website: 'pro.coinbase.com', logo: '/images/fastpass/logo-coinbase.svg' },
  { name: 'Binance', website: 'binance.com', logo: '/images/fastpass/logo-binance.svg' },
  { name: 'Indodax', website: 'indodax.com', logo: '/images/fastpass/logo-indodax.svg' },
  { name: 'WhiteBIT', website: 'whitebit.com', logo: '/images/fastpass/logo-whitebit.svg' },
  { name: 'KuCoin', website: 'kucoin.com', logo: '/images/fastpass/logo-kucoin.svg' },
  { name: 'Hummingbot', website: 'hummingbot.io', logo: '/images/fastpass/logo-hummingbot.png' },
  { name: 'Quadency', website: 'quadency.com', logo: '/images/fastpass/logo-quadency.svg' }
] as const

export function FastPassPartners (): React.ReactNode {
  const t = useTranslations('fastpassPage.partners')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-12'>
        {/* Header row */}
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-2.5'>
            <Heading as='h2' size='lg' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
              {t('title')}
            </Heading>
            <Text size='xs' weight='medium' className='max-w-2xl leading-normal text-primary-dark/50! dark:text-white/50!'>
              {t('description')}
            </Text>
          </div>
          <button className='shrink-0 rounded-[20px] bg-primary-blue px-8.75 py-2.5 text-lg font-semibold text-white backdrop-blur-[5px] transition-opacity hover:opacity-90'>
            {t('seeAll')}
          </button>
        </div>

        {/* Cards grid */}
        <div className='flex flex-wrap gap-5'>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className='flex items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <div className='flex size-17 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/5'>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={32}
                  height={32}
                  className='size-8 object-contain'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <Heading as='h3' size='lg' weight='extrabold' className='text-[32px] leading-10 tracking-[-0.96px] text-primary-dark! dark:text-white!'>
                  {partner.name}
                </Heading>
                <Text size='xs' weight='medium' className='text-primary-dark/50! dark:text-white/50!'>
                  {partner.website}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
