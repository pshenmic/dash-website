import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { Heading, Text } from 'dash-ui-kit/react'

const features = ['instant', 'turnkey', 'enterprise'] as const

export function FeatureCards (): React.ReactNode {
  const t = useTranslations('payments.featureCards')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid gap-5 sm:grid-cols-3'>
        {features.map((key) => (
          <div
            key={key}
            className='flex items-start justify-between rounded-3xl border border-primary-dark/10 bg-white p-7 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:rounded-4xl lg:p-9'
          >
            <div className='flex flex-col gap-4'>
              <Heading as='h3' size='xl' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! lg:text-2xl'>
                {t(`${key}.title`)}
              </Heading>
              <Text size='sm' weight='medium' opacity={60} className='max-w-60 text-primary-dark! lg:text-base'>
                {t(`${key}.description`)}
              </Text>
            </div>
            <div className='flex size-14 shrink-0 items-center justify-center rounded-2xl border border-primary-blue/20 lg:size-16'>
              <ArrowUpRight className='size-5 text-primary-blue' strokeWidth={2.5} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
