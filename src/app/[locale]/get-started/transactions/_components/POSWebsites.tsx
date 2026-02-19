import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'

const posWebsites = [
  { name: 'Binance Pay', logo: '/images/transactions/logo-binancepay.svg' },
  { name: 'CoinPayments', logo: '/images/transactions/logo-coinpayments.svg' },
  { name: 'CTX', logo: '/images/transactions/logo-ctx.svg' },
  { name: 'Cyclebit', logo: '/images/transactions/logo-cyclebit.svg' },
  { name: 'Salamantex', logo: '/images/transactions/logo-salamantex.svg' },
  { name: 'xMoney', logo: '/images/transactions/logo-xmoney.svg' }
]

export function POSWebsites (): React.ReactNode {
  const t = useTranslations('transactions.posWebsites')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <Heading as='h2' size='xl' weight='extrabold' className='mb-8 leading-tight tracking-tight dark:text-white sm:text-3xl sm:leading-9 lg:mb-10'>
        {t('title')}
      </Heading>

      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {posWebsites.map((website) => (
          <div key={website.name} className='flex flex-col items-center gap-4 overflow-hidden rounded-3xl border border-primary-dark/10 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
            <div className='relative size-12 overflow-hidden rounded-xl'>
              <Image src={website.logo} alt={website.name} fill className='object-contain' />
            </div>
            <p className='text-sm font-bold text-primary-dark dark:text-white'>
              {website.name}
            </p>
            <button className='w-full rounded-full border border-primary-blue/20 px-4 py-2.5 text-xs font-semibold text-primary-blue transition-colors hover:bg-primary-blue/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5'>
              {t('learnMore')}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
