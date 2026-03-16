import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ContributingHero } from './_components/ContributingHero'
import { ProtocolDevelopment } from './_components/ProtocolDevelopment'
import { FeaturedRepos } from './_components/FeaturedRepos'
import { PlatformDevelopment } from './_components/PlatformDevelopment'
import { DashPaySection } from './_components/DashPaySection'
import { ContributingBugBounty } from './_components/ContributingBugBounty'

import type { RepoItem } from './_components/FeaturedRepos'

const protocolRepoRows: RepoItem[][] = [
  [
    { name: 'Dash Core', icon: 'dashcore', fill: true, url: 'https://github.com/dashpay/dash' },
    { name: 'Dash Sdk', icon: 'js', fill: true, url: 'https://github.com/dashpay/platform' },
    { name: 'DPP', icon: 'js', url: 'https://github.com/dashpay/platform' },
    { name: 'Drive', icon: 'js', url: 'https://github.com/dashpay/platform' }
  ],
  [
    { name: 'DAPI', icon: 'js', fill: true, url: 'https://github.com/dashpay/platform' },
    { name: 'wallet-lib', icon: 'js', url: 'https://github.com/dashpay/platform' },
    { name: 'dashcore-lib', icon: 'js', url: 'https://github.com/dashpay/platform' },
    { name: 'Dashmate', icon: 'js', url: 'https://github.com/dashpay/platform' }
  ],
  [
    { name: 'test-suite', icon: 'js', url: 'https://github.com/dashpay/platform' },
    { name: 'network-deploy', icon: 'js', url: 'https://github.com/dashpay/platform' }
  ]
]

const walletRepoRows: RepoItem[][] = [
  [
    { name: 'iOS Wallet', icon: 'apple', url: 'https://github.com/dashpay/dashwallet-ios' },
    { name: 'Android Wallet', icon: 'android', url: 'https://github.com/dashpay/dash-wallet' }
  ]
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
        <FeaturedRepos rows={protocolRepoRows} />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <PlatformDevelopment />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DashPaySection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FeaturedRepos rows={walletRepoRows} />
      </section>

      <section className='bg-primary-blue py-10 dark:bg-primary-dark lg:py-16'>
        <ContributingBugBounty />
      </section>
    </main>
  )
}
