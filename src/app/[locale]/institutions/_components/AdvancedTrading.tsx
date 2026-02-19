import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function AdvancedTrading (): React.ReactNode {
  const t = useTranslations('institutionsPage.trading')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center gap-8 lg:flex-row lg:gap-16'>
        {/* Left - Text */}
        <div className='flex flex-1 flex-col items-start gap-6'>
          <Badge variant='bordered' color='gray' size='sm'>{t('chip')}</Badge>
          <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight dark:text-white'>
            {t('title')}
          </Heading>
          <div className='flex flex-col gap-4'>
            <Text size='sm' weight='medium' className='leading-relaxed dark:text-white/80 lg:text-base'>
              {t('description1')}
            </Text>
            <Text size='sm' weight='medium' className='leading-relaxed dark:text-white/80 lg:text-base'>
              {t('description2')}
            </Text>
          </div>
          <div className='flex flex-wrap gap-4'>
            <button className='rounded-2xl bg-primary-blue px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90'>
              {t('tradersButton')}
            </button>
            <button className='rounded-2xl bg-primary-blue/15 px-8 py-4 text-base font-semibold text-primary-blue transition-opacity hover:opacity-90 dark:bg-white/15 dark:text-white'>
              {t('metricsButton')}
            </button>
          </div>
        </div>

        {/* Right - 3D coin */}
        <div className='relative h-64 w-full shrink-0 lg:h-96 lg:w-96'>
          <Image
            src='/images/institutions/trading-coin.png'
            alt='Dash trading coin'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}
