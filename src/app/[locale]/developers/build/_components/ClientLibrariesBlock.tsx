import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function ClientLibrariesBlock (): React.ReactNode {
  const t = useTranslations('buildPage.clientLibraries')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-[35px] bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
        {/* 3D Image — right side */}
        <div className='pointer-events-none absolute -right-[10%] -bottom-[30%] hidden h-[160%] w-[55%] lg:block'>
          <Image
            src='/images/developers/build/client-libraries-bg.png'
            alt='Client libraries'
            fill
            className='rotate-180 object-cover'
          />
        </div>

        {/* Content — left side */}
        <div className='relative z-10 flex flex-col gap-9 p-8 lg:max-w-[50%] lg:p-24'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='whitespace-pre-line text-2xl leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <div className='flex flex-wrap gap-4'>
            <button className='flex h-16 items-center justify-center rounded-[20px] bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('primaryButton')}
            </button>
            <button className='flex h-16 items-center justify-center rounded-[20px] bg-white/15 px-9 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
              {t('secondaryButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
