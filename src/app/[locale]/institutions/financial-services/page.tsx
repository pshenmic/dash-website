import { setRequestLocale, getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { FinancialServicesHero } from './_components/FinancialServicesHero'
import { InterestSection } from './_components/InterestSection'
import { StakingBlock } from './_components/StakingBlock'
import { VendorCardSection } from './_components/VendorCardSection'
import { CustodyBlock } from './_components/CustodyBlock'
import { AccountingBlock } from './_components/AccountingBlock'

const stakingCards = [
  { name: 'Bitcoin Suisse', website: 'bitcoinsuisse.com', logo: '/images/traders/logo-bitcoin-suisse.svg' },
  { name: 'Smart Valor', website: 'smartvalor.com', logo: '/images/financial-services/logo-smart-valor.svg' },
  { name: 'Crowdnode', website: 'crowdnode.io', logo: '/images/financial-services/logo-crowdnode.svg' },
  { name: 'WhiteBIT', website: 'whitebit.com', logo: '/images/financial-services/logo-whitebit.svg' },
  { name: 'Huobi Pool', website: 'www.hpt.com', logo: '/images/financial-services/logo-huobi-pool.svg' },
  { name: 'Pool of Stake', website: 'www.poolofstake.io', logo: '/images/financial-services/logo-pool-of-stake.svg' },
  { name: 'Staked', website: 'staked.us', logo: '/images/financial-services/logo-staked.png' },
  { name: 'Binance', website: 'accounts.binance.com', logo: '/images/financial-services/logo-binance-staking.svg' }
]

const defiCards = [
  { name: 'StakeHound', website: 'stakehound.com', logo: '/images/financial-services/logo-stakehound.png' },
  { name: 'Bidao', website: 'bidaochain.com', logo: '/images/financial-services/logo-bidao.png' }
]

const selfCustodialCards = [
  { name: 'Trezor', website: 'trezor.io', logo: '/images/financial-services/logo-trezor.svg' },
  { name: 'Ledger', website: 'www.ledger.com', logo: '/images/financial-services/logo-ledger.svg' },
  { name: 'KeepKey', website: 'keepkey.com', logo: '/images/financial-services/logo-keepkey.png' }
]

const accountingCards = [
  { name: 'NODE40', website: 'www.node40.com', logo: '/images/financial-services/logo-node40.png' },
  { name: 'Blox', website: 'www.blox.io', logo: '/images/financial-services/logo-blox.png' },
  { name: 'Cryptoworth', website: 'cryptoworth.app', logo: '/images/financial-services/logo-cryptoworth.png' }
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
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <VendorCardSection
          title={t('defi.title')}
          description={t('defi.description')}
          seeAllLabel={t('defi.seeAll')}
          cards={defiCards}
          columns={2}
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <CustodyBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <VendorCardSection
          chip={t('selfCustodial.chip')}
          title={t('selfCustodial.title')}
          cards={selfCustodialCards}
          columns={3}
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <AccountingBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <VendorCardSection
          chip={t('accountingProviders.chip')}
          title={t('accountingProviders.title')}
          cards={accountingCards}
          columns={3}
        />
      </section>
    </main>
  )
}
