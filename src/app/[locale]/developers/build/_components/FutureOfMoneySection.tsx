import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Button, Heading, Text } from 'dash-ui-kit/react'

export function FutureOfMoneySection (): React.ReactNode {
  const t = useTranslations('buildPage.futureOfMoney')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between'>
        {/* Left — text content */}
        <div className='flex flex-col gap-9 lg:max-w-[470px]'>
          <div className='flex flex-col gap-4'>
            <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
            <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight dark:text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal dark:text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          {/* Stats */}
          <div className='flex gap-4'>
            <div className='flex flex-1 flex-col gap-1 overflow-hidden rounded-[36px] border border-primary-blue px-7 py-6 lg:py-9'>
              <Text weight='medium' className='text-xs text-primary-blue lg:text-sm'>
                {t('stats.speed.label')}
              </Text>
              <Heading as='h3' weight='extrabold' className='text-2xl tracking-tight text-primary-blue lg:text-4xl lg:leading-10'>
                {t('stats.speed.value')}
              </Heading>
            </div>
            <div className='flex flex-1 flex-col gap-1 overflow-hidden rounded-[36px] border border-primary-blue px-7 py-6 lg:py-9'>
              <Text weight='medium' className='text-xs text-primary-blue lg:text-sm'>
                {t('stats.cost.label')}
              </Text>
              <Heading as='h3' weight='extrabold' className='text-2xl tracking-tight text-primary-blue lg:text-4xl lg:leading-10'>
                {t('stats.cost.value')}
              </Heading>
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-wrap gap-4'>
            <Button variant='solid' colorScheme='brand'>
              {t('primaryButton')}
            </Button>
            <Button variant='outline' colorScheme='brand'>
              {t('secondaryButton')}
            </Button>
          </div>
        </div>

        {/* Right — 3D coin image */}
        <div className='relative h-72 w-full lg:h-140 lg:w-[596px]'>
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
