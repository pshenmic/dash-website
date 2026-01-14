import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { StatCard } from './StatCard'

export function GetDash (): React.ReactNode {
  const t = useTranslations('getDash')

  return (
    <div className='bg-primary-white px-4 py-[50px] dark:bg-primary-dark lg:px-0 lg:py-[50px]'>
      <div className='mx-auto max-w-[1240px]'>
        <div className='flex flex-col gap-[30px] lg:flex-row lg:items-center lg:justify-between lg:gap-[40px]'>
          {/* Left Side - Text and Buttons */}
          <div className='flex flex-col gap-[25px] lg:gap-[35px]'>
            {/* Chip */}
            <div className='w-fit rounded-full border border-primary-dark/50 px-[25px] py-[8px] dark:border-white lg:px-[35px] lg:py-[10px]'>
              <span className='text-[11px] font-medium text-primary-dark dark:text-white lg:text-[12px]'>
                {t('chip')}
              </span>
            </div>

            {/* Title and Description */}
            <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
              <h2 className='text-[32px] leading-[1.05] font-extrabold tracking-[-0.03em] text-primary-dark dark:text-white lg:text-[38px] lg:leading-[40px]'>
                {t('title')}
              </h2>
              <p className='max-w-[360px] text-[16px] font-medium text-primary-dark dark:text-white lg:text-[18px]'>
                {t('description')}
              </p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-[10px] sm:flex-row sm:gap-[15px]'>
              <Button
                variant='primary'
                inverted
                icon={
                  <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white sm:h-[45px] sm:w-[45px]'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 15 15'
                      fill='none'
                      className='rotate-[-45deg] sm:h-[15px] sm:w-[15px]'
                    >
                      <path
                        d='M1 14L14 1M14 1H1M14 1V14'
                        stroke='#4C7EFF'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                }
                className='h-[50px] rounded-[16px] pl-[25px] pr-[8px] text-base sm:h-[65px] sm:rounded-[20px] sm:pl-[35px] sm:pr-[10px] sm:text-lg'
              >
                {t('buyOnline')}
              </Button>
              <Button
                variant='outline'
                className='h-[50px] rounded-[16px] px-[25px] text-base sm:h-[65px] sm:rounded-[20px] sm:px-[35px] sm:text-lg'
              >
                {t('findAtm')}
              </Button>
            </div>
          </div>

          {/* Right Side - Stat Cards */}
          <div className='grid h-[140px] grid-cols-3 gap-[8px] sm:h-[200px] sm:gap-[10px] lg:h-[256px] lg:w-[758px] lg:gap-[12px]'>
            <StatCard
              label={t('stats.merchants.label')}
              value={t('stats.merchants.value')}
            />
            <StatCard
              label={t('stats.exchanges.label')}
              value={t('stats.exchanges.value')}
            />
            <StatCard
              label={t('stats.speed.label')}
              value={t('stats.speed.value')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
