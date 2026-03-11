import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function AdvancedTrading (): React.ReactNode {
  const t = useTranslations('institutionsPage.trading')

  return (
    <div className='bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between'>
          <div className='flex max-w-117 flex-col gap-9'>
            <div className='flex flex-col gap-4'>
              <Badge variant='bordered' color='gray' size='sm' className='self-start border-primary-dark! text-primary-dark! dark:border-white! dark:text-white!'>{t('chip')}</Badge>
              <Heading as='h2' size='2xl' weight='extrabold' className='leading-10 tracking-tight dark:text-white lg:text-4xl'>
                {t('title')}
              </Heading>
              <Text size='lg' weight='medium' className='dark:text-white'>
                {t('description1')}
              </Text>
              <Text size='lg' weight='medium' className='dark:text-white'>
                {t('description2')}
              </Text>
            </div>

            <div className='flex w-full flex-col gap-4 lg:w-auto lg:flex-row'>
              <button className='h-12 rounded-2xl bg-primary-blue px-9 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90 lg:h-16'>
                {t('tradersButton')}
              </button>
              <button className='h-12 rounded-2xl bg-primary-blue/15 px-9 text-lg font-semibold text-primary-blue backdrop-blur-sm transition-opacity hover:opacity-90 lg:h-16 dark:bg-white/15 dark:text-white'>
                {t('metricsButton')}
              </button>
            </div>
          </div>

          <div className='relative hidden w-full max-w-149 lg:block lg:h-138'>
            <Image
              src='/images/institutions/trading-coin.png'
              alt='Dash trading coin'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
