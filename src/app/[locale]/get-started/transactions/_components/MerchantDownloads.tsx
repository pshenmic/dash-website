import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const downloads = ['fullKit', 'stickers', 'quickStart'] as const

export function MerchantDownloads (): React.ReactNode {
  const t = useTranslations('transactions.merchantDownloads')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl bg-primary-blue p-8 lg:rounded-4xl lg:p-16'>
        <Heading as='h2' size='xl' weight='extrabold' className='mb-8 leading-tight tracking-tight text-white sm:text-3xl sm:leading-9 lg:mb-10'>
          {t('title')}
        </Heading>

        <div className='grid gap-6 lg:grid-cols-3'>
          {downloads.map((card) => (
            <div key={card} className='flex flex-col gap-4 rounded-2xl bg-white p-6 lg:p-8'>
              <div className='relative size-10'>
                <Image src='/images/buy-online/dash-icon.svg' alt='Dash' width={40} height={40} className='rounded-full bg-primary-blue p-2' />
              </div>
              <Heading as='h3' size='md' weight='extrabold' className='leading-tight tracking-tight text-primary-dark!'>
                {t(`cards.${card}.title`)}
              </Heading>
              <Text size='sm' weight='medium' className='text-primary-dark/60!'>
                {t(`cards.${card}.description`)}
              </Text>
              <div className='mt-auto'>
                <button className='w-full rounded-full bg-primary-blue px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90'>
                  {t(`cards.${card}.button`)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
