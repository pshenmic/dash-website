import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { FinancialServicesHero } from './_components/FinancialServicesHero'
import { InterestSection } from './_components/InterestSection'
import { StakingBlock } from './_components/StakingBlock'
import { VendorCardSection } from './_components/VendorCardSection'
import { DefiSection } from './_components/DefiSection'
import { CustodyBlock } from './_components/CustodyBlock'
import { SelfCustodialSection } from './_components/SelfCustodialSection'
import { AccountingBlock } from './_components/AccountingBlock'
import { AccountingProvidersSection } from './_components/AccountingProvidersSection'

const stakingCards = [
  { name: 'Bitcoin Suisse', website: 'bitcoinsuisse.com', logo: '/images/financial-services/logo-bitcoin-suisse.svg' },
  { name: 'Smart Valor', website: 'smartvalor.com', logo: '/images/financial-services/logo-smart-valor.svg' },
  { name: 'Crowdnode', website: 'crowdnode.io', logo: '/images/financial-services/logo-crowdnode.svg' },
  { name: 'WhiteBIT', website: 'whitebit.com', logo: '/images/financial-services/logo-whitebit.svg' },
  { name: 'Huobi Pool', website: 'www.hpt.com', logo: '/images/financial-services/logo-huobi-pool.svg' },
  { name: 'Pool of Stake', website: 'www.poolofstake.io', logo: '/images/financial-services/logo-pool-of-stake.svg' },
  { name: 'Staked', website: 'staked.us', logo: '/images/financial-services/logo-staked.png' },
  { name: 'Binance', website: 'accounts.binance.com', logo: '/images/financial-services/logo-binance-staking.svg' }
]



export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function FinancialServicesPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)
  const t = await getTranslations('financialServicesPage')

  return (
    <main>
      <FinancialServicesHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <InterestSection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <StakingBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <VendorCardSection
          title={t('stakingProviders.title')}
          cards={stakingCards}
          columns={6}
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DefiSection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <CustodyBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <SelfCustodialSection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <AccountingBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <AccountingProvidersSection />
      </section>
    </main>
  )
}
