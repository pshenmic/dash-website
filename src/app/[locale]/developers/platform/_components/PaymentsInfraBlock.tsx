import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function PaymentsInfraBlock (): React.ReactNode {
  const t = useTranslations('platformPage.paymentsInfra')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-[35px] bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
        {/* 3D Image — right side */}
        <div className='pointer-events-none absolute -top-[25%] right-0 hidden h-[130%] w-[55%] lg:block' style={{ filter: 'drop-shadow(0px 0px 125px rgba(0,0,0,0.15))' }}>
          <Image
            src='/images/developers/platform/payments-infra.png'
            alt='Payments infrastructure'
            fill
            className='object-cover'
          />
        </div>

        {/* Content — left side */}
        <div className='relative z-10 flex flex-col gap-9 p-8 lg:max-w-[50%] lg:px-25 lg:py-16'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='whitespace-pre-line text-2xl leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <div>
            <button className='flex h-16 items-center justify-center rounded-[20px] bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
