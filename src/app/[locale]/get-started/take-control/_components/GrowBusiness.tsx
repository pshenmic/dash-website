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
        <Text size='lg' weight='extrabold' className='text-primary-blue'>
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
            className='flex flex-col rounded-[25px] border border-primary-dark/10 bg-white p-6.25 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
          >
            <Image src={icon} alt={t(`cards.${key}.title`)} width={68} height={68} className='mb-8.75' />
            <Heading as='h3' size='xl' weight='extrabold' className='text-2xl leading-tight tracking-tight sm:text-[32px] sm:leading-10 sm:tracking-[-0.96px] text-primary-dark! dark:text-white!'>
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
