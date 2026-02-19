import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { TransactionsHero } from './_components/TransactionsHero'
import { StarterKitNav } from './_components/StarterKitNav'
import { GlossarySection } from './_components/GlossarySection'
import { WhyCryptoBlocks } from './_components/WhyCryptoBlocks'
import { QuoteBlock } from './_components/QuoteBlock'
import { DashFeatures } from './_components/DashFeatures'
import { WhatSetsDashApart } from './_components/WhatSetsDashApart'
import { WalletSetupSection } from './_components/WalletSetupSection'
import { SendReceiveDash } from './_components/SendReceiveDash'
import { HowToBuySection } from './_components/HowToBuySection'
import { BuySellDash } from './_components/BuySellDash'
import { SpreadTheWord } from './_components/SpreadTheWord'
import { FreeDashCoin } from './_components/FreeDashCoin'
import { MerchantGiftCTA } from './_components/MerchantGiftCTA'
import { POSGuide } from './_components/POSGuide'
import { POSAccordion } from './_components/POSAccordion'
import { POSTable } from './_components/POSTable'
import { POSWebsites } from './_components/POSWebsites'
import { MerchantDownloads } from './_components/MerchantDownloads'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function TransactionsPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <TransactionsHero />

      {/* Starter Kit Navigation */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <StarterKitNav />
      </section>

      {/* Glossary of Terms */}
      <section className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <GlossarySection />
      </section>

      {/* Why Crypto? */}
      <section id='why-crypto' className='bg-primary-blue py-10 lg:py-16'>
        <WhyCryptoBlocks />
      </section>

      {/* Quote */}
      <section className='bg-primary-white py-14 dark:bg-primary-dark lg:py-20'>
        <QuoteBlock />
      </section>

      {/* Why Dash? - Features */}
      <section id='why-dash' className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <DashFeatures />
      </section>

      {/* What Sets Dash Apart */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <WhatSetsDashApart />
      </section>

      {/* Wallet Setup */}
      <section id='wallet-setup' className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <WalletSetupSection />
      </section>

      {/* Send & Receive Dash */}
      <section className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <SendReceiveDash />
      </section>

      {/* How to Buy Dash */}
      <section id='how-to-buy' className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <HowToBuySection />
      </section>

      {/* Buy/Sell Dash - Exchanges */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <BuySellDash />
      </section>

      {/* Spread the Word CTA */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <SpreadTheWord />
      </section>

      {/* Free Dash Coin Gift */}
      <section id='free-gift' className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FreeDashCoin />
      </section>

      {/* Merchant Gift CTA */}
      <section className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <MerchantGiftCTA />
      </section>

      {/* POS Guide */}
      <section id='pos-guide' className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <POSGuide />
      </section>

      {/* POS Accordion */}
      <section className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <POSAccordion />
      </section>

      {/* POS Comparison Table */}
      <section className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <POSTable />
      </section>

      {/* POS Websites */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <POSWebsites />
      </section>

      {/* Merchant Downloads */}
      <section id='merchant-downloads' className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <MerchantDownloads />
      </section>
    </main>
  )
}
