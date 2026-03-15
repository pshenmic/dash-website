import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { PlatformHero } from './_components/PlatformHero'
import { ActionCards } from './_components/ActionCards'
import { PaymentsInfraBlock } from './_components/PaymentsInfraBlock'
import { WhyChooseSection } from './_components/WhyChooseSection'
import { DeveloperSDKs } from './_components/DeveloperSDKs'
import { SDKActionCards } from './_components/SDKActionCards'
import { VerifiableBanner } from './_components/VerifiableBanner'
import { DashPayWalletBlock } from './_components/DashPayWalletBlock'
import { BugBountyBlock } from './_components/BugBountyBlock'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function DashPlatformPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <PlatformHero />

      <section className='-mt-16 relative z-10 bg-primary-white pt-26 pb-10 dark:bg-primary-dark lg:pb-16'>
        <ActionCards />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <PaymentsInfraBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <WhyChooseSection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DeveloperSDKs />
      </section>

      <section className='bg-primary-white py-5 dark:bg-primary-dark lg:py-8'>
        <SDKActionCards />
      </section>

      <section className='bg-primary-dark py-10 lg:py-16'>
        <VerifiableBanner />
      </section>

      <section className='bg-primary-dark py-10 lg:py-16'>
        <DashPayWalletBlock />
      </section>

      <section className='bg-primary-dark py-10 lg:py-16'>
        <BugBountyBlock />
      </section>
    </main>
  )
}
