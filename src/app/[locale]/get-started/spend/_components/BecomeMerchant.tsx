import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function BecomeMerchant (): React.ReactNode {
  const t = useTranslations('spend.becomeMerchant')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <div className='relative z-10 flex flex-col gap-6 px-8 py-10 lg:max-w-md lg:px-16 lg:py-14'>
          <div>
            <Heading as='h2' size='xl' weight='extrabold' className='whitespace-pre-line leading-tight tracking-tight text-white sm:text-3xl sm:leading-9'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='mt-3 text-white/80 lg:text-base'>
              {t('description')}
            </Text>
          </div>
          <div>
            <button className='rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('fillForm')}
            </button>
          </div>
        </div>

        {/* 3D Store illustration */}
        <div className='absolute -right-10 bottom-0 hidden h-80 w-96 lg:block'>
          <Image
            src='/images/spend/store-3d.png'
            alt='Dash Merchant Store'
            fill
            className='object-contain object-right-bottom'
          />
        </div>
      </div>
    </div>
  )
}
