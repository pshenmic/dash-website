import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const cards = [
  { nameKey: 'stakehound', name: 'StakeHound', website: 'stakehound.com', logo: '/images/financial-services/logo-stakehound.png' },
  { nameKey: 'bidao', name: 'Bidao', website: 'bidaochain.com', logo: '/images/financial-services/logo-bidao.png' }
]

export function DefiSection (): React.ReactNode {
  const t = useTranslations('financialServicesPage.defi')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-12'>
        {/* Header */}
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>
          <div className='flex max-w-sm flex-col gap-2.5'>
            <Heading as='h2' weight='extrabold' className='text-3xl leading-9 dark:text-white'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-xs leading-normal text-primary-dark/50! dark:text-white/50!'>
              {t('description')}
            </Text>
          </div>
          <button className='h-16 shrink-0 rounded-2xl bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
            {t('seeAll')}
          </button>
        </div>

        {/* Cards */}
        <div className='flex flex-col gap-5 sm:flex-row'>
          {cards.map((card) => (
            <div
              key={card.nameKey}
              className='flex items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <div className='flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/5'>
                <Image
                  src={card.logo}
                  alt={card.name}
                  width={32}
                  height={32}
                  className='size-8 object-contain'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <Heading as='h3' weight='extrabold' className='text-3xl leading-10 tracking-tight text-primary-dark! dark:text-white!'>
                  {card.name}
                </Heading>
                <Text weight='medium' className='text-xs text-primary-dark/50! dark:text-white/50!'>
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
