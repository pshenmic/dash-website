import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

const cards = [
  { name: 'Trezor', website: 'trezor.io', logo: '/images/financial-services/logo-trezor.svg' },
  { name: 'Ledger', website: 'www.ledger.com', logo: '/images/financial-services/logo-ledger.svg' },
  { name: 'KeepKey', website: 'keepkey.com', logo: '/images/financial-services/logo-keepkey.png' }
]

export function SelfCustodialSection (): React.ReactNode {
  const t = useTranslations('financialServicesPage.selfCustodial')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
        {/* Left - Text */}
        <div className='flex flex-col gap-4'>
          <Badge variant='bordered' color='gray' size='sm' className='self-start border-primary-dark! text-primary-dark! dark:border-white! dark:text-white!'>{t('chip')}</Badge>
          <Heading as='h2' weight='extrabold' className='whitespace-pre-line text-4xl leading-10 tracking-tight dark:text-white'>
            {t('title')}
          </Heading>
        </div>

        {/* Right - Cards */}
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-3'>
          {cards.map((card) => (
            <div
              key={card.name}
              className='flex flex-col justify-between gap-5 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <Image
                src={card.logo}
                alt={card.name}
                width={47}
                height={47}
                className='size-12 object-contain'
              />
              <div className='flex flex-col gap-1'>
                <Text weight='extrabold' className='text-lg text-primary-dark! dark:text-white!'>
                  {card.name}
                </Text>
                <Text weight='medium' className='text-xs text-primary-dark/35! dark:text-white/35!'>
                  {card.website}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
