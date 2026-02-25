import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const otherRows = ['bitcoin', 'paypal', 'cards', 'wire'] as const

const benefits = [
  { key: 'instant', icon: '/images/payments/instant-icon.png' },
  { key: 'secure', icon: '/images/payments/secure-icon.png' },
  { key: 'microFees', icon: '/images/payments/microfees-icon.png' }
] as const

export function RevenueBlock (): React.ReactNode {
  const t = useTranslations('payments.revenue')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-8'>
        {/* Left: Blue card with title + table */}
        <div className='flex-1 overflow-hidden rounded-3xl bg-primary-blue p-6 dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl lg:p-12'>
          <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>
            {/* Left: Title text */}
            <div className='lg:flex-1'>
              <Heading as='h2' size='xl' weight='extrabold' className='max-w-72 leading-tight tracking-tight text-white lg:text-3xl lg:leading-10'>
                {t('title')}
              </Heading>
              <Text size='sm' weight='medium' className='mt-3 max-w-60 text-white/60 lg:text-base'>
                {t('subtitle')}
              </Text>
            </div>

            {/* Right: Table panel */}
            <div className='overflow-x-auto lg:w-90.75 lg:shrink-0'>
              <div className='min-w-64 rounded-3xl border border-white/15 bg-white/5 p-5 lg:p-6'>
                {/* Header */}
                <div className='mb-3 grid grid-cols-4 text-[10px] font-medium text-white/35'>
                  <span>{t('table.name')}</span>
                  <span className='text-center'>{t('table.speed')}</span>
                  <span className='text-center'>{t('table.settlement')}</span>
                  <span className='text-right'>{t('table.cost')}</span>
                </div>

                {/* Dash row – white highlighted */}
                <div className='mb-2 grid grid-cols-4 items-center rounded-xl bg-white px-3 py-3 dark:bg-white/10'>
                  <Image src='/images/payments/dash-wordmark.svg' alt='Dash' width={42} height={11} className='justify-self-start' />
                  <span className='text-center text-xs font-extrabold text-primary-blue'>{t('table.dash.speed')}</span>
                  <span className='text-center text-xs font-extrabold text-primary-blue'>{t('table.dash.settlement')}</span>
                  <span className='text-right text-xs font-extrabold text-primary-blue'>{t('table.dash.cost')}</span>
                </div>

                {/* Other rows */}
                {otherRows.map((row) => (
                  <div
                    key={row}
                    className='grid grid-cols-4 items-center border-b border-white/10 py-3 text-xs font-medium text-white last:border-0'
                  >
                    <span>{t(`table.${row}.name`)}</span>
                    <span className='text-center'>{t(`table.${row}.speed`)}</span>
                    <span className='text-center'>{t(`table.${row}.settlement`)}</span>
                    <span className='text-right'>{t(`table.${row}.cost`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Benefit cards */}
        <div className='flex flex-col gap-4 lg:w-96'>
          {benefits.map(({ key, icon }) => (
            <div
              key={key}
              className='flex items-center gap-5 rounded-2xl border border-primary-dark/10 bg-white p-5 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:rounded-3xl lg:p-6'
            >
              <div className='relative flex size-17 shrink-0 items-center justify-center rounded-full bg-primary-dark/5 dark:bg-white/10'>
                <Image src={icon} alt={t(`benefits.${key}.title`)} width={48} height={48} />
                <div className='pointer-events-none absolute inset-0 rounded-full shadow-inset' />
              </div>
              <div>
                <Heading as='h4' size='lg' weight='extrabold' className='text-[32px]! leading-10 tracking-tight text-primary-dark! dark:text-white!'>
                  {t(`benefits.${key}.title`)}
                </Heading>
                <Text size='sm' weight='medium' opacity={50} className='text-primary-dark! dark:text-white!'>
                  {t(`benefits.${key}.description`)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
