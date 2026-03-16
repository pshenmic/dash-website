import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ContributingHero } from './_components/ContributingHero'
import { ProtocolDevelopment } from './_components/ProtocolDevelopment'
import { FeaturedRepos } from './_components/FeaturedRepos'
import { PlatformDevelopment } from './_components/PlatformDevelopment'
import { DashPaySection } from './_components/DashPaySection'
import { ContributingBugBounty } from './_components/ContributingBugBounty'

const protocolRepos = [
  { name: 'Dash Core', icon: 'dashcore' as const, url: 'https://github.com/dashpay/dash' },
  { name: 'Dash Sdk', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'DPP', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'Drive', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'DAPI', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'wallet-lib', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'dashcore-lib', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'Dashmate', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'test-suite', icon: 'js' as const, url: 'https://github.com/dashpay/platform' },
  { name: 'network-deploy', icon: 'js' as const, url: 'https://github.com/dashpay/platform' }
]

const walletRepos = [
  { name: 'iOS Wallet', icon: 'apple' as const, url: 'https://github.com/dashpay/dashwallet-ios' },
  { name: 'Android Wallet', icon: 'android' as const, url: 'https://github.com/dashpay/dash-wallet' }
]

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function ContributingPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <ContributingHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ProtocolDevelopment />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FeaturedRepos repos={protocolRepos} />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <PlatformDevelopment />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DashPaySection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FeaturedRepos repos={walletRepos} />
      </section>

      <section className='bg-primary-blue py-10 dark:bg-primary-dark lg:py-16'>
        <ContributingBugBounty />
      </section>
    </main>
  )
}
