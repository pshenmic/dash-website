import { useTranslations } from 'next-intl'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StatCard } from './StatCard'

export function GetDash (): React.ReactNode {
  const t = useTranslations('getDash')

  return (
    <div className='bg-primary-white px-4 py-12 dark:bg-primary-dark sm:px-6 lg:px-8 lg:py-16'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-10'>
          {/* Left Side - Text and Buttons */}
          <div className='flex flex-col gap-6 lg:gap-9'>
            {/* Chip */}
            <div className='w-fit rounded-full border border-primary-dark/50 px-6 py-2 dark:border-white lg:px-9 lg:py-2.5'>
              <span className='text-xs font-medium text-primary-dark dark:text-white'>
                {t('chip')}
              </span>
            </div>

            {/* Title and Description */}
            <div className='flex flex-col gap-2.5 lg:gap-4'>
              <h2 className='text-3xl leading-tight font-extrabold tracking-tight text-primary-dark dark:text-white lg:text-4xl lg:leading-10'>
                {t('title')}
              </h2>
              <p className='max-w-sm text-base font-medium text-primary-dark dark:text-white lg:text-lg'>
                {t('description')}
              </p>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-2.5 sm:flex-row sm:gap-4'>
              <Button
                variant='primary'
                inverted
                icon={
                  <div className='flex size-9 items-center justify-center rounded-full bg-white sm:size-11'>
                    <ArrowUpRight className='size-4 text-primary-blue sm:size-5' strokeWidth={2.5} />
                  </div>
                }
                className='h-12 rounded-2xl pl-6 pr-2 text-base sm:h-16 sm:rounded-2xl sm:pl-9 sm:pr-2.5 sm:text-lg'
              >
                {t('buyOnline')}
              </Button>
              <Button
                variant='outline'
                className='h-12 rounded-2xl px-6 text-base sm:h-16 sm:rounded-2xl sm:px-9 sm:text-lg'
              >
                {t('findAtm')}
              </Button>
            </div>
          </div>

          {/* Right Side - Stat Cards */}
          <div className='grid h-36 grid-cols-3 gap-2 sm:h-48 sm:gap-2.5 lg:h-64 lg:w-190 lg:gap-3'>
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
