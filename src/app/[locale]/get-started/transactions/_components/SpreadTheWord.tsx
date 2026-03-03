import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function SpreadTheWord (): React.ReactNode {
  const t = useTranslations('transactions.spreadTheWord')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <Image
          src='/images/transactions/wave-3d.png'
          alt=''
          role='presentation'
          fill
          className='pointer-events-none object-cover object-right'
        />
        <div className='relative z-10 flex flex-col items-start gap-6 px-8 py-16 lg:max-w-md lg:py-24'>
          <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white sm:text-3xl sm:leading-9 lg:text-4xl'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' className='text-white/80 lg:text-base'>
            {t('description')}
          </Text>
          <button className='rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-blue transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}
