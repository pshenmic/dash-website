import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { TradersHero } from './_components/TradersHero'
import { OTCBlock } from './_components/OTCBlock'
import { OTCVendors } from './_components/OTCVendors'
import { TradingCategorySection } from './_components/TradingCategorySection'
import { getTranslations } from 'next-intl/server'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function TradersPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)
  const t = await getTranslations('tradersPage')

  const derivativesCards = [
    { name: 'Huobi Futures', subtitle: t('cards.perpetualSwap'), logo: '/images/traders/logo-huobi.svg' },
    { name: 'Gate.io', subtitle: t('cards.perpetualSwap'), logo: '/images/traders/logo-gate-io.svg' },
    { name: 'Binance', subtitle: t('cards.futures'), logo: '/images/traders/logo-binance.svg' },
    { name: 'OKEX', subtitle: t('cards.perpetualSwap'), logo: '/images/traders/logo-okex.svg' }
  ]

  const marginCards = [
    { name: 'Kraken', subtitle: t('cards.marginTrading'), logo: '/images/get-started/exchanges/kraken.svg' },
    { name: 'HitBTC', subtitle: t('cards.marginTrading'), logo: '/images/traders/logo-hitbtc.svg' },
    { name: 'CoinDCX', subtitle: t('cards.marginTrading'), logo: '/images/traders/logo-coindcx.svg' },
    { name: 'KuCoin', subtitle: t('cards.marginTrading'), logo: '/images/traders/logo-kucoin.svg' }
  ]

  const investmentCards = [
    { name: 'Webull', subtitle: t('cards.investments'), logo: '/images/traders/logo-webull.svg' },
    { name: 'eToro', subtitle: t('cards.investments'), logo: '/images/traders/logo-etoro.svg' },
    { name: 'QuantFury', subtitle: t('cards.investments'), logo: '/images/traders/logo-quantfury.svg' }
  ]

  return (
    <main>
      <TradersHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <OTCBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <OTCVendors />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <TradingCategorySection
          title={t('derivatives.title')}
          description={t('derivatives.description')}
          seeAllLabel={t('derivatives.seeAll')}
          cards={derivativesCards}
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <TradingCategorySection
          title={t('margin.title')}
          description={t('margin.description')}
          seeAllLabel={t('margin.seeAll')}
          cards={marginCards}
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <TradingCategorySection
          title={t('investment.title')}
          description={t('investment.description')}
          seeAllLabel={t('investment.seeAll')}
          cards={investmentCards}
        />
      </section>
    </main>
  )
}
