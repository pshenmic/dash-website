import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { PaymentsHero } from './_components/PaymentsHero'
import { FeatureCards } from './_components/FeatureCards'
import { RevenueBlock } from './_components/RevenueBlock'
import { IntegrationsSection } from './_components/IntegrationsSection'
import { ComplianceBlock } from './_components/ComplianceBlock'
import { GrowBusiness } from './_components/GrowBusiness'
import { WhereToBuy } from './_components/WhereToBuy'
import { WhereToUse } from './_components/WhereToUse'
import { BrandGuidelines } from './_components/BrandGuidelines'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function PaymentsPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <PaymentsHero />

      {/* Feature Cards - overlapping hero */}
      <section className='relative z-20 -mt-16 pb-10 lg:-mt-28 lg:pb-16'>
        <FeatureCards />
      </section>

      {/* Revenue Comparison */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <RevenueBlock />
      </section>

      {/* Integrations */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <IntegrationsSection />
      </section>

      {/* Compliance */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ComplianceBlock />
      </section>

      {/* Grow Business */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <GrowBusiness />
      </section>

      {/* Where to Buy */}
      <section className='bg-primary-blue py-10 dark:bg-primary-dark lg:py-16'>
        <WhereToBuy />
      </section>

      {/* Where to Use */}
      <section className='bg-primary-blue py-10 dark:bg-primary-dark lg:py-16'>
        <WhereToUse />
      </section>

      {/* Brand Guidelines */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <BrandGuidelines />
      </section>
    </main>
  )
}
