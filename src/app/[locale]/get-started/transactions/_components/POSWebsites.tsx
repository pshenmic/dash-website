import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'

const posWebsites = [
  { name: 'Binance Pay', logo: '/images/transactions/logo-binancepay.svg', width: 47, height: 47 },
  { name: 'CoinPayments', logo: '/images/transactions/logo-coinpayments.svg', width: 30, height: 47 },
  { name: 'CTX', logo: '/images/transactions/logo-ctx.svg', width: 73, height: 27 },
  { name: 'Cyclebit', logo: '/images/transactions/logo-cyclebit.svg', width: 44, height: 47 },
  { name: 'Salamantex', logo: '/images/transactions/logo-salamantex.svg', width: 48, height: 48 },
  { name: 'xMoney', logo: '/images/transactions/logo-xmoney.svg', width: 47, height: 47 }
]

export function POSWebsites (): React.ReactNode {
  const t = useTranslations('transactions.posWebsites')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-8 flex flex-col gap-1.25'>
        <span className='text-lg font-extrabold text-primary-blue'>{t('subtitle')}</span>
        <Heading as='h2' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
          {t('title')}
        </Heading>
      </div>

      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {posWebsites.map((website) => (
          <div key={website.name} className='flex flex-col gap-5 overflow-hidden rounded-[25px] border border-primary-dark/15 bg-white p-6.25 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
            <div className='flex h-[47px] items-center'>
              <Image src={website.logo} alt={website.name} width={website.width} height={website.height} />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='text-lg font-extrabold text-primary-dark dark:text-white'>
                {website.name}
              </p>
              <button className='h-10 w-full rounded-[12px] bg-primary-blue/15 text-lg font-semibold text-primary-dark backdrop-blur-[5px] transition-smooth hover:bg-primary-blue/25 dark:text-white'>
                {t('learnMore')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
