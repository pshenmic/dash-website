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
          alt=''
          width={1024}
          height={1024}
          className='pointer-events-none absolute right-0 top-1/2 h-auto w-[60%] max-w-lg -translate-y-1/2 rotate-180 object-contain opacity-80 lg:w-[50%]'
        />

        <div className='relative z-10 flex flex-col gap-4 p-8 lg:max-w-md lg:p-16'>
          <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight text-white'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' className='leading-relaxed text-white lg:text-base'>
            {t('description')}
          </Text>
        </div>
      </div>
    </div>
  )
}
