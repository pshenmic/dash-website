import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { Card } from '@/components/ui/Card'

export function ComprehensiveServices (): React.ReactNode {
  const t = useTranslations('institutionsPage.services')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Card
        variant='blue'
        className='relative flex h-72 flex-col justify-center px-5 py-6 lg:h-112 lg:px-0 lg:py-0'
      >
        {/* 3D spiral image - left side, vertically flipped */}
        <div className='pointer-events-none absolute -left-full -top-[200%] h-[600%] w-[300%] lg:-left-[60%] lg:-top-full lg:h-[400%] lg:w-[200%]'>
          <Image
            src='/images/shared/3d/smart-contracts.png'
            alt='Comprehensive services illustration'
            fill
            className='scale-y-[-1] object-contain'
          />
        </div>

        {/* Content - right side */}
        <div className='relative z-10 ml-auto flex max-w-72 flex-col gap-6 lg:mr-24 lg:max-w-[450px] lg:gap-[35px]'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <Heading
              as='h2'
              size='xl'
              weight='extrabold'
              className='leading-tight tracking-tight whitespace-pre-line text-white lg:text-4xl lg:leading-10'
            >
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>
          <button className='h-16 w-fit rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue backdrop-blur-sm transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>
      </Card>
    </div>
  )
}
