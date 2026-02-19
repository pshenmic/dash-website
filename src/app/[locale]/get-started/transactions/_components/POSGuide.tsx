import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function POSGuide (): React.ReactNode {
  const t = useTranslations('transactions.posGuide')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
        {/* Left - Blue block with keyboard image */}
        <div className='flex flex-1 flex-col overflow-hidden rounded-3xl bg-primary-blue'>
          <div className='relative h-48 w-full lg:h-56'>
            <Image
              src='/images/transactions/pos-keyboard.png'
              alt='POS terminal keyboard'
              fill
              className='object-cover'
            />
          </div>
          <div className='flex flex-col gap-4 p-8 lg:p-10'>
            <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-white'>
              {t('title')}
            </Heading>
            <div>
              <Text size='sm' weight='semibold' className='text-white'>
                {t('posQuestion')}
              </Text>
              <Text size='sm' weight='medium' className='mt-2 text-white/80 lg:text-base'>
                {t('posAnswer')}
              </Text>
            </div>
          </div>
        </div>

        {/* Right - Description */}
        <div className='flex flex-1 flex-col gap-4 rounded-3xl border border-primary-dark/10 bg-white p-8 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:p-10'>
          <Badge variant='bordered' color='blue' size='sm'>{t('chip')}</Badge>
          <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark/60! dark:text-white/60! lg:text-base'>
            {t('description')}
          </Text>
        </div>
      </div>
    </div>
  )
}
