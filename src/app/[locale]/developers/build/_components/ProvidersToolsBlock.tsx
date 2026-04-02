import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function ProvidersToolsBlock (): React.ReactNode {
  const t = useTranslations('buildPage.providersTools')

  return (
    <div data-testid='providers-tools-block' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-4xl bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
        {/* 3D Image — left side */}
        <div className='pointer-events-none absolute -left-[10%] -top-[10%] hidden h-[130%] w-[50%] lg:block'>
          <Image
            src='/images/developers/build/hero-bg.png'
            alt='Providers and tools'
            fill
            className='-scale-y-100 object-cover'
          />
        </div>

        {/* Content — right side */}
        <div className='relative z-10 flex flex-col gap-9 p-8 lg:ml-auto lg:max-w-[50%] lg:p-24'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <button className='flex h-16 w-fit items-center justify-center rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}
