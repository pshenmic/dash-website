import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function SendReceiveDash (): React.ReactNode {
  const t = useTranslations('transactions.sendReceive')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <div className='flex flex-col items-center gap-8 p-8 lg:flex-row lg:gap-16 lg:p-16'>
          {/* Phone mockups */}
          <div className='relative h-64 w-full max-w-sm lg:h-80 lg:max-w-md'>
            <Image
              src='/images/transactions/phones-mockup.png'
              alt='DashPay app mockup'
              fill
              className='object-contain'
            />
          </div>

          {/* Content */}
          <div className='flex flex-1 flex-col gap-6'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white sm:text-3xl sm:leading-9'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='text-white/80 lg:text-base'>
              {t('description')}
            </Text>
            <div>
              <button className='rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-blue transition-opacity hover:opacity-90'>
                {t('button')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
