import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { DownloadsHero } from '../../_components/DownloadsHero'
import { WalletShowcase } from '../../_components/WalletShowcase'

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

      <section className='bg-primary-white py-12 dark:bg-primary-dark lg:py-16'>
        <WalletShowcase />
      </section>
    </main>
  )
}
