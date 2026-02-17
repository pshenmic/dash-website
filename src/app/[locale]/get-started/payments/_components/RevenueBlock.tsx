import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const tableRows = ['dash', 'bitcoin', 'paypal', 'cards', 'wire'] as const

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
        {/* Left: Blue card with table */}
        <div className='flex-1 overflow-hidden rounded-3xl bg-primary-blue p-6 dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl lg:p-12'>
          <div className='mb-8'>
            <Heading as='h2' size='xl' weight='extrabold' className='max-w-72 leading-tight tracking-tight text-white lg:text-3xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='mt-3 max-w-60 text-white/60 lg:text-base'>
              {t('subtitle')}
            </Text>
          </div>

          {/* Comparison Table */}
          <div className='overflow-x-auto'>
            <table className='w-full min-w-80 text-sm text-white'>
              <thead>
                <tr className='border-b border-white/10 text-left text-xs font-medium text-white/50'>
                  <th className='pb-3 pr-4'>{t('table.name')}</th>
                  <th className='pb-3 pr-4'>{t('table.speed')}</th>
                  <th className='pb-3 pr-4'>{t('table.settlement')}</th>
                  <th className='pb-3'>{t('table.cost')}</th>
                </tr>
              </thead>
              <tbody className='text-sm font-medium'>
                {tableRows.map((row) => (
                  <tr
                    key={row}
                    className={row === 'dash' ? 'bg-white/10' : 'border-b border-white/5'}
                  >
                    <td className='rounded-l-xl py-3 pr-4 pl-3 font-bold'>
                      {row === 'dash'
                        ? (
                          <Image src='/images/payments/dash-d.svg' alt='Dash' width={42} height={11} className='brightness-0 invert' />
                          )
                        : t(`table.${row}.name`)}
                    </td>
                    <td className='py-3 pr-4'>{t(`table.${row}.speed`)}</td>
                    <td className='py-3 pr-4'>{t(`table.${row}.settlement`)}</td>
                    <td className='rounded-r-xl py-3 pr-3'>{t(`table.${row}.cost`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right: Benefit cards */}
        <div className='flex flex-col gap-4 lg:w-96'>
          {benefits.map(({ key, icon }) => (
            <div
              key={key}
              className='flex items-center gap-5 rounded-2xl border border-primary-dark/10 bg-white p-5 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:rounded-3xl lg:p-6'
            >
              <div className='flex size-17 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/10'>
                <Image src={icon} alt={t(`benefits.${key}.title`)} width={48} height={48} />
              </div>
              <div>
                <Heading as='h4' size='lg' weight='extrabold' className='tracking-tight text-primary-dark! dark:text-white!'>
                  {t(`benefits.${key}.title`)}
                </Heading>
                <Text size='sm' weight='medium' opacity={60} className='text-primary-dark! dark:text-white!'>
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
