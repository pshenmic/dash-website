import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const cards = [
  { key: 'ecommerce', icon: '/images/payments/icon-ecommerce.svg' },
  { key: 'custom', icon: '/images/payments/icon-integration.svg' },
  { key: 'compliance', icon: '/images/payments/icon-compliance.svg' },
  { key: 'auditing', icon: '/images/payments/icon-auditing.svg' }
] as const

export function GrowBusiness (): React.ReactNode {
  const t = useTranslations('payments.growBusiness')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-8 lg:mb-10'>
        <Text size='sm' weight='medium' opacity={60} className='dark:text-white lg:text-base'>
          {t('subtitle')}
        </Text>
        <Heading as='h2' size='xl' weight='extrabold' className='mt-1.5 leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9'>
          {t('title')}
        </Heading>
      </div>

      {/* Cards Grid */}
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {cards.map(({ key, icon }) => (
          <div
            key={key}
            className='flex flex-col rounded-3xl border border-primary-dark/10 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:rounded-4xl lg:p-7'
          >
            <div className='mb-6 flex size-17 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/10'>
              <Image src={icon} alt={t(`cards.${key}.title`)} width={32} height={32} />
            </div>
            <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white!'>
              {t(`cards.${key}.title`)}
            </Heading>
            <Text size='sm' weight='medium' opacity={60} className='mt-3 text-primary-dark! dark:text-white!'>
              {t(`cards.${key}.description`)}
            </Text>
          </div>
        ))}
      </div>
    </div>
  )
}
