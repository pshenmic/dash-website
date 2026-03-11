import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { Card } from '@/components/ui/Card'

export function ClientLibraries (): React.ReactNode {
  const t = useTranslations('institutionsPage.clientLibraries')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Card variant='blue' className='relative flex h-72 flex-col justify-center px-5 py-6 lg:h-112 lg:px-0 lg:py-0'>
        {/* Content - left side on desktop */}
        <div className='relative z-10 flex max-w-72 flex-col gap-6 lg:ml-24 lg:max-w-md lg:gap-9'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}<br />{t('titleLine2')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>
          <div className='flex gap-4'>
            <button className='h-16 rounded-2xl bg-white px-9 py-2.5 text-lg font-semibold text-primary-blue backdrop-blur-sm transition-opacity hover:opacity-90'>
              {t('quickStart')}
            </button>
            <button className='h-16 rounded-2xl bg-white/15 px-9 py-2.5 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
              {t('jsSdk')}
            </button>
          </div>
        </div>

        {/* 3D image - right side on desktop */}
        <div className='pointer-events-none absolute -right-full -top-[200%] h-[600%] w-[300%] lg:-right-[60%] lg:-top-full lg:h-[400%] lg:w-[200%]'>
          <Image
            src='/images/shared/3d/platform.png'
            alt='Client libraries illustration'
            fill
            className='rotate-180 object-contain'
          />
        </div>
      </Card>
    </div>
  )
}
