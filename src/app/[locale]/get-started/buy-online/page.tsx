import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { BuyOnlineHero } from './_components/BuyOnlineHero'
import { DashPriceChart } from './_components/DashPriceChart'
import { ExchangeDirectory } from './_components/ExchangeDirectory'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function BuyOnlinePage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <BuyOnlineHero />

      {/* Dash Price Chart - overlapping hero */}
      <section className='relative z-20 -mt-24 pb-10 lg:-mt-44 lg:pb-16'>
        <DashPriceChart />
      </section>

      {/* Exchange Directory */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ExchangeDirectory />
      </section>
    </main>
  )
}
