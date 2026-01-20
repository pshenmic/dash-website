import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

export function FutureOfMoney (): React.ReactNode {
  const t = useTranslations('futureOfMoney')

  return (
    <div className='relative bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between'>
          <div className='flex max-w-117 flex-col gap-9'>
            <div className='flex flex-col gap-4'>
              <Chip variant='outline'>{t('chip')}</Chip>
              <h2 className='text-4xl leading-10 font-extrabold tracking-tight text-primary-dark lg:text-4xl dark:text-primary-white'>
                {t('title')}
              </h2>
              <p className='max-w-99 text-lg font-medium text-primary-dark dark:text-primary-white/80'>
                {t('description')}
              </p>
            </div>

            <div className='flex gap-4'>
              <div className='flex h-28 flex-1 flex-col justify-center rounded-3xl border border-primary-blue px-7 lg:h-36 dark:border-0 dark:bg-primary-blue/15'>
                <span className='text-sm font-medium text-primary-blue'>
                  {t('transactionSpeed')}
                </span>
                <span className='text-4xl leading-10 font-extrabold tracking-tight text-primary-blue'>
                  {t('transactionSpeedValue')}
                </span>
              </div>
              <div className='flex h-28 flex-1 flex-col justify-center rounded-3xl border border-primary-blue px-7 lg:h-36 dark:border-0 dark:bg-primary-blue/15'>
                <span className='text-sm font-medium text-primary-blue'>
                  {t('costPerTransaction')}
                </span>
                <span className='text-4xl leading-10 font-extrabold tracking-tight text-primary-blue'>
                  {t('costPerTransactionValue')}
                </span>
              </div>
            </div>

            <div className='flex w-full flex-col gap-2.5 lg:w-auto lg:flex-row lg:gap-4'>
              <Button
                variant='primary'
                inverted
                className='h-12 w-full lg:h-16 lg:w-auto'
              >
                {t('connectTestnet')}
              </Button>
              <Button
                variant='outline'
                className='h-12 w-full lg:h-16 lg:w-auto'
              >
                {t('learnMore')}
              </Button>
            </div>
          </div>

          <div className='relative hidden w-full max-w-149 lg:block lg:h-138'>
            <Image
              src='/images/coin-3d-large.png'
              alt='Dash 3D Coin'
              fill
              className='object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
