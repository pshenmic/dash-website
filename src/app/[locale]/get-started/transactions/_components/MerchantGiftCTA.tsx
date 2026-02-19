import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function MerchantGiftCTA (): React.ReactNode {
  const t = useTranslations('transactions.merchantGift')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center gap-8 overflow-hidden rounded-3xl border border-primary-dark/10 bg-white p-8 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:flex-row lg:gap-12 lg:p-12'>
        {/* 3D Dash logo */}
        <div className='relative h-48 w-full shrink-0 lg:h-auto lg:w-64'>
          <Image
            src='/images/transactions/merchant-gift.png'
            alt='Dash merchant gift'
            fill
            className='object-contain'
          />
        </div>

        {/* Content */}
        <div className='flex flex-1 flex-col gap-4'>
          <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white!'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark/60! dark:text-white/60! lg:text-base'>
            {t('description')}
          </Text>
          <div>
            <button className='w-full rounded-full border border-primary-blue px-8 py-4 text-sm font-semibold text-primary-blue transition-colors hover:bg-primary-blue/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5'>
              {t('button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
