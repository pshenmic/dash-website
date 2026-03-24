import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'
import { Card } from '@/components/ui/Card'

export function PlatformBlocks (): React.ReactNode {
  const t = useTranslations('platformBlocks')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-8 lg:gap-12'>
        {/* Block 1: Providers and Tools - image LEFT, text RIGHT */}
        <Card
          variant='blue'
          className='relative flex h-72 flex-col justify-center px-5 py-6 lg:h-112 lg:px-0 lg:py-0'
        >
          {/* 3D image - left side on desktop, top on mobile */}
          <div className='pointer-events-none absolute -left-full -top-[200%] h-[600%] w-[300%] lg:-left-[60%] lg:-top-full lg:h-[400%] lg:w-[200%]'>
            <Image
              src='/images/shared/3d/smart-contracts.png'
              alt='Dash Platform illustration'
              fill
              className='scale-y-[-1] object-contain'
              priority
            />
          </div>

          {/* Content - right side on desktop */}
          <div className='relative z-10 ml-auto flex max-w-72 flex-col gap-6 lg:mr-24 lg:max-w-md lg:gap-9'>
            <div className='flex flex-col gap-2.5 lg:gap-4'>
              <Heading as='h3' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
                {t('providers.title')}
              </Heading>
              <Text size='sm' weight='medium' className='leading-normal text-white lg:text-lg'>
                {t('providers.description')}
              </Text>
            </div>
            <Button variant='solid' colorSchemeLight='white' colorSchemeDark='brand' size='xl' className='w-fit'>
              {t('providers.button')}
            </Button>
          </div>
        </Card>

        {/* Block 2: Client Libraries - text LEFT, image RIGHT */}
        <Card
          variant='blue'
          className='relative flex h-72 flex-col justify-center px-5 py-6 lg:h-112 lg:px-0 lg:py-0'
        >
          {/* Content - left side on desktop */}
          <div className='relative z-10 flex max-w-72 flex-col gap-6 lg:ml-24 lg:max-w-md lg:gap-9'>
            <div className='flex flex-col gap-2.5 lg:gap-4'>
              <Heading as='h3' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
                {t('libraries.title')}
                <br />
                {t('libraries.titleLine2')}
              </Heading>
              <Text size='sm' weight='medium' className='leading-normal text-white lg:text-lg'>
                {t('libraries.description')}
              </Text>
            </div>
            <div className='flex gap-4'>
              <Button variant='solid' colorSchemeLight='white' colorSchemeDark='brand' size='xl' className='w-fit'>
                {t('libraries.quickStart')}
              </Button>
              <Button variant='solid' colorSchemeLight='halfWhite' colorSchemeDark='halfBlue' size='xl' className='w-fit'>
                {t('libraries.jsSdk')}
              </Button>
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
    </div>
  )
}
