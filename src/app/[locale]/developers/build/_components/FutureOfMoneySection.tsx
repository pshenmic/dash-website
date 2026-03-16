import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Button, Heading, Text } from 'dash-ui-kit/react'

export function FutureOfMoneySection (): React.ReactNode {
  const t = useTranslations('buildPage.futureOfMoney')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between'>
        {/* Left — text content */}
        <div className='flex max-w-117 flex-col gap-9'>
          <div className='flex flex-col gap-4'>
            <Badge variant='bordered' color='blue' size='sm'>{t('chip')}</Badge>
            <Heading as='h2' size='2xl' weight='extrabold' className='leading-10 tracking-tight dark:text-white lg:text-4xl'>
              {t('title')}
            </Heading>
            <Text size='lg' weight='medium' opacity={80} className='max-w-99 dark:text-white'>
              {t('description')}
            </Text>
          </div>

          {/* Stats */}
          <div className='flex gap-4'>
            <div className='flex h-28 flex-1 flex-col justify-center rounded-3xl border border-primary-blue px-7 lg:h-36 dark:border-0 dark:bg-primary-blue/15'>
              <span className='text-sm font-medium text-primary-blue'>
                {t('stats.speed.label')}
              </span>
              <span className='text-4xl leading-10 font-extrabold tracking-tight text-primary-blue'>
                {t('stats.speed.value')}
              </span>
            </div>
            <div className='flex h-28 flex-1 flex-col justify-center rounded-3xl border border-primary-blue px-7 lg:h-36 dark:border-0 dark:bg-primary-blue/15'>
              <span className='text-sm font-medium text-primary-blue'>
                {t('stats.cost.label')}
              </span>
              <span className='text-4xl leading-10 font-extrabold tracking-tight text-primary-blue'>
                {t('stats.cost.value')}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex w-full flex-col gap-2.5 lg:w-auto lg:flex-row lg:gap-4'>
            <Button
              variant='solid'
              colorScheme='brand'
              className='h-12 w-full lg:h-16 lg:w-auto'
            >
              {t('primaryButton')}
            </Button>
            <Button
              variant='outline'
              colorScheme='brand'
              className='h-12 w-full lg:h-16 lg:w-auto'
            >
              {t('secondaryButton')}
            </Button>
          </div>
        </div>

        {/* Right — 3D coin image */}
        <div className='relative hidden w-full max-w-149 lg:block lg:h-138'>
          <Image
            src='/images/developers/build/coin-3d.png'
            alt='Dash coin'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}
