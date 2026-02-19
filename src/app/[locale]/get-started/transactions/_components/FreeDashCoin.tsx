import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function FreeDashCoin (): React.ReactNode {
  const t = useTranslations('transactions.freeDashCoin')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
        {/* Left - Blue block */}
        <div className='flex flex-1 flex-col overflow-hidden rounded-3xl bg-primary-blue lg:flex-row lg:items-center'>
          <div className='flex flex-1 flex-col gap-4 p-8 lg:p-10'>
            <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-white'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='text-white/80 lg:text-base'>
              {t('description')}
            </Text>
          </div>
          <div className='relative h-48 w-full shrink-0 lg:h-64 lg:w-64'>
            <Image
              src='/images/transactions/coin-box.png'
              alt='Dash coin gift box'
              fill
              className='object-contain'
            />
          </div>
        </div>

        {/* Right - Gift info */}
        <div className='flex flex-1 flex-col gap-4 rounded-3xl border border-primary-dark/10 bg-white p-8 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:p-10'>
          <Badge variant='bordered' color='blue' size='sm'>{t('giftChip')}</Badge>
          <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white!'>
            {t('giftTitle')}
          </Heading>
          <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark/60! dark:text-white/60! lg:text-base'>
            {t('giftDescription')}
          </Text>
        </div>
      </div>
    </div>
  )
}
