import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { Card } from '@/components/ui/Card'

export function StakingBlock (): React.ReactNode {
  const t = useTranslations('financialServicesPage.stakingBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Card
        variant='blue'
        className='relative flex h-72 flex-col justify-center px-5 py-6 lg:h-112 lg:px-0 lg:py-0'
      >
        {/* Content - left side */}
        <div className='relative z-10 flex max-w-72 flex-col gap-6 lg:ml-24 lg:max-w-150 lg:gap-9'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line text-white lg:text-4xl lg:leading-10 lg:tracking-tight'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>
          <button className='w-fit h-16 rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue backdrop-blur-sm transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>

        {/* 3D Dash logo - right side */}
        <div className='pointer-events-none absolute -right-full -top-[200%] h-[600%] w-[300%] lg:-right-[60%] lg:-top-full lg:h-[400%] lg:w-[200%]'>
          <Image
            src='/images/shared/3d/dash-logo.png'
            alt='Dash logo'
            fill
            className='rotate-180 object-contain'
          />
        </div>
      </Card>
    </div>
  )
}
