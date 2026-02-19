import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function ComprehensiveServices (): React.ReactNode {
  const t = useTranslations('institutionsPage.services')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        {/* 3D spiral image - positioned left */}
        <Image
          src='/images/institutions/hero-bg.png'
          alt=''
          width={1024}
          height={1024}
          className='pointer-events-none absolute left-0 top-1/2 h-auto w-[60%] max-w-xl -translate-y-1/2 -scale-y-100 object-contain opacity-60 lg:w-[50%]'
        />

        {/* Content - positioned right */}
        <div className='relative z-10 ml-auto flex max-w-xl flex-col gap-6 p-8 lg:p-16'>
          <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line text-white'>
            {t('title')}
          </Heading>
          <div className='flex flex-col gap-4'>
            <Text size='sm' weight='medium' className='leading-relaxed text-white/80 lg:text-base'>
              {t('description1')}
            </Text>
            <Text size='sm' weight='medium' className='leading-relaxed text-white/80 lg:text-base'>
              {t('description2')}
            </Text>
          </div>
          <div>
            <button className='rounded-2xl bg-white px-8 py-4 text-base font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
