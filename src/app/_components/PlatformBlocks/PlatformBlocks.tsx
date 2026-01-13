import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export function PlatformBlocks (): React.ReactNode {
  const t = useTranslations('platformBlocks')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='flex flex-col gap-[30px] lg:gap-[50px]'>
        {/* Block 1: Providers and Tools - image LEFT, text RIGHT */}
        <Card
          variant='blue'
          className='relative flex h-[280px] flex-col justify-center px-5 py-6 lg:h-[440px] lg:px-0 lg:py-0'
        >
          {/* 3D image - left side on desktop, top on mobile */}
          <div className='pointer-events-none absolute -left-[100%] -top-[200%] h-[600%] w-[300%] lg:-left-[60%] lg:-top-[100%] lg:h-[400%] lg:w-[200%]'>
            <Image
              src='/images/home/platform/providers-bg.png'
              alt=''
              fill
              className='scale-y-[-1] object-contain'
              priority
            />
          </div>

          {/* Content - right side on desktop */}
          <div className='relative z-10 ml-auto flex max-w-[280px] flex-col gap-[25px] lg:mr-[100px] lg:max-w-[400px] lg:gap-[35px]'>
            <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
              <h3 className='text-[24px] leading-[1.05] font-extrabold tracking-[-0.03em] text-white lg:text-[38px] lg:leading-[40px]'>
                {t('providers.title')}
              </h3>
              <p className='text-[14px] leading-[1.4] font-medium text-white lg:text-[18px]'>
                {t('providers.description')}
              </p>
            </div>
            <Button variant='primary' className='w-fit'>
              {t('providers.button')}
            </Button>
          </div>
        </Card>

        {/* Block 2: Client Libraries - text LEFT, image RIGHT */}
        <Card
          variant='blue'
          className='relative flex h-[280px] flex-col justify-center px-5 py-6 lg:h-[440px] lg:px-0 lg:py-0'
        >
          {/* Content - left side on desktop */}
          <div className='relative z-10 flex max-w-[280px] flex-col gap-[25px] lg:ml-[100px] lg:max-w-[400px] lg:gap-[35px]'>
            <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
              <h3 className='text-[24px] leading-[1.05] font-extrabold tracking-[-0.03em] text-white lg:text-[38px] lg:leading-[40px]'>
                {t('libraries.title')}
                <br />
                {t('libraries.titleLine2')}
              </h3>
              <p className='text-[14px] leading-[1.4] font-medium text-white lg:text-[18px]'>
                {t('libraries.description')}
              </p>
            </div>
            <div className='flex gap-[15px]'>
              <Button variant='primary' className='w-fit'>
                {t('libraries.quickStart')}
              </Button>
              <Button variant='secondary' className='w-fit'>
                {t('libraries.jsSdk')}
              </Button>
            </div>
          </div>

          {/* 3D image - right side on desktop */}
          <div className='pointer-events-none absolute -right-[100%] -top-[200%] h-[600%] w-[300%] lg:-right-[60%] lg:-top-[100%] lg:h-[400%] lg:w-[200%]'>
            <Image
              src='/images/home/platform/libraries-bg.png'
              alt=''
              fill
              className='rotate-180 object-contain'
            />
          </div>
        </Card>
      </div>
    </div>
  )
}
