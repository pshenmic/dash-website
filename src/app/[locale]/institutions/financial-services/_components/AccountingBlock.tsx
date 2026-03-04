import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function AccountingBlock (): React.ReactNode {
  const t = useTranslations('financialServicesPage.accountingBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <Image
          src='/images/financial-services/accounting-bg.png'
          alt='Accounting block background'
          width={1024}
          height={1024}
          className='pointer-events-none absolute -right-[20%] top-1/2 h-auto w-[120%] -translate-y-1/2 rotate-180 object-contain opacity-80 lg:w-full'
        />

        <div className='relative z-10 flex flex-col gap-4 p-8 lg:p-16'>
          <Heading as='h2' weight='extrabold' className='text-4xl leading-10 tracking-tight text-white'>
            {t('title')}
          </Heading>
          <Text size='lg' weight='medium' className='max-w-100 leading-normal text-white'>
            {t('description')}
          </Text>
        </div>
      </div>
    </div>
  )
}
