import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { DownloadsHero } from '../../_components/DownloadsHero'
import { WalletShowcase } from '../../_components/WalletShowcase'
import { DesktopWallets } from '../../_components/DesktopWallets'
import { HardwareWallets } from '../../_components/HardwareWallets'
import { Web3Wallets } from '../../_components/Web3Wallets'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function DownloadsPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <DownloadsHero />

      {/* Mobile Wallets Showcase Section */}
      <section className='bg-primary-white py-16 dark:bg-primary-dark lg:py-24'>
        <WalletShowcase />
      </section>

      {/* Subtle Divider */}
      <div className='h-px bg-linear-to-r from-transparent via-primary-blue/20 to-transparent dark:via-primary-turquoise/20' />

      {/* Desktop Wallets Section - with subtle turquoise tint */}
      <section className='bg-primary-turquoise/5 py-16 dark:bg-primary-turquoise/5 lg:py-24'>
        <DesktopWallets />
      </section>

      {/* Subtle Divider */}
      <div className='h-px bg-linear-to-r from-transparent via-primary-blue/20 to-transparent dark:via-primary-turquoise/20' />

      {/* Hardware Wallets Section */}
      <section className='bg-primary-white py-16 dark:bg-primary-dark lg:py-24'>
        <HardwareWallets />
      </section>

      {/* Subtle Divider */}
      <div className='h-px bg-linear-to-r from-transparent via-primary-turquoise/30 to-transparent' />

      {/* Web3 Wallets Section - with stronger turquoise tint */}
      <section className='bg-primary-turquoise/10 py-16 dark:bg-primary-turquoise/10 lg:py-24'>
        <Web3Wallets />
      </section>
    </main>
  )
}
