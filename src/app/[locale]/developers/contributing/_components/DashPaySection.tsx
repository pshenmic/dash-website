import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function DashPaySection (): React.ReactNode {
  const t = useTranslations('contributingPage.dashPay')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-20'>
        {/* Left — Phone Image */}
        <div className='relative h-72 w-full shrink-0 lg:h-[425px] lg:w-[442px]'>
          <Image
            src='/images/developers/contributing/dashpay-phones.png'
            alt='DashPay wallets'
            fill
            className='object-contain'
          />
        </div>

        {/* Right — Text Content */}
        <div className='flex flex-col gap-4'>
          <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight dark:text-white lg:text-4xl lg:leading-10 lg:tracking-[-1.14px]'>
            {t('title')}
          </Heading>
          <Text weight='medium' className='whitespace-pre-line text-base leading-normal dark:text-white lg:text-lg'>
            {t('description')}
          </Text>
        </div>
      </div>
    </div>
  )
}
