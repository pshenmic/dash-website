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
          <div className='flex max-w-[469px] flex-col gap-[35px]'>
            <div className='flex flex-col gap-[15px]'>
              <Chip variant='outline'>{t('chip')}</Chip>
              <h2 className='text-4xl leading-[40px] font-extrabold tracking-[-0.03em] text-primary-dark lg:text-4xl dark:text-primary-white'>
                {t('title')}
              </h2>
              <p className='max-w-[395px] text-lg font-medium text-primary-dark dark:text-primary-white/80'>
                {t('description')}
              </p>
            </div>

            <div className='flex gap-[15px]'>
              <div className='flex h-[111px] flex-1 flex-col justify-center rounded-[36px] border border-primary-blue px-[29px] lg:h-[143px] dark:border-0 dark:bg-primary-blue/15'>
                <span className='text-sm font-medium text-primary-blue'>
                  {t('transactionSpeed')}
                </span>
                <span className='text-4xl leading-[40px] font-extrabold tracking-[-0.03em] text-primary-blue'>
                  {t('transactionSpeedValue')}
                </span>
              </div>
              <div className='flex h-[111px] flex-1 flex-col justify-center rounded-[36px] border border-primary-blue px-[29px] lg:h-[143px] dark:border-0 dark:bg-primary-blue/15'>
                <span className='text-sm font-medium text-primary-blue'>
                  {t('costPerTransaction')}
                </span>
                <span className='text-4xl leading-[40px] font-extrabold tracking-[-0.03em] text-primary-blue'>
                  {t('costPerTransactionValue')}
                </span>
              </div>
            </div>

            <div className='flex w-full flex-col gap-[10px] lg:w-auto lg:flex-row lg:gap-[15px]'>
              <Button
                variant='primary'
                inverted
                className='h-[50px] w-full lg:h-[65px] lg:w-auto'
              >
                {t('connectTestnet')}
              </Button>
              <Button
                variant='outline'
                className='h-[50px] w-full lg:h-[65px] lg:w-auto'
              >
                {t('learnMore')}
              </Button>
            </div>
          </div>

          <div className='relative hidden w-full max-w-[596px] lg:block lg:h-[551px]'>
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
