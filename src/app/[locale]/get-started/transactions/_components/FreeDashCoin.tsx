import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function FreeDashCoin (): React.ReactNode {
  const t = useTranslations('transactions.freeDashCoin')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-8 lg:flex-row'>
        {/* Left — text block (constrained width) */}
        <div className='flex shrink-0 flex-col gap-3.75 lg:max-w-98.75'>
          <span className='self-start rounded-[35px] border border-primary-dark px-8.75 py-2.5 text-xs font-medium text-primary-dark dark:border-white dark:text-white'>
            {t('chip')}
          </span>
          <h2 className='text-[38px] font-extrabold leading-10 text-primary-dark dark:text-white' style={{ letterSpacing: '-0.03em' }}>
            {t('giftTitle')}
          </h2>
          <div className='max-w-98.75 text-lg font-medium leading-normal text-primary-dark dark:text-white'>
            <p>{t('giftDescription1')}</p>
            <p className='mt-5'>{t('giftDescription2')}</p>
          </div>
        </div>

        {/* Right — blue card with coin image */}
        <div className='flex flex-1 overflow-hidden rounded-[35px] bg-primary-blue'>
          <div className='flex shrink-0 flex-col gap-3 p-12.5'>
            <h3 className='text-[38px] font-extrabold leading-10 text-white' style={{ letterSpacing: '-0.03em' }}>
              {t('title')}
            </h3>
            <p className='max-w-87.5 text-[13px] font-medium leading-normal text-white'>
              {t('description')}
            </p>
          </div>
          <div className='relative hidden min-w-50 flex-1 lg:block'>
            <Image
              src='/images/transactions/coin-box.png'
              alt='Dash coin gift box'
              width={513}
              height={424}
              className='pointer-events-none absolute -right-20 -top-20 max-w-none shadow-[21px_15px_32px_rgba(0,0,0,0.35)]'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
