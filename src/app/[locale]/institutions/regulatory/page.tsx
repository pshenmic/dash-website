import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { RegulatoryHero } from './_components/RegulatoryHero'
import { FinCENSection } from './_components/FinCENSection'
import { FATFBlock } from './_components/FATFBlock'
import { SecuritySection } from './_components/SecuritySection'
import { KYCAMLBlock } from './_components/KYCAMLBlock'
import { KYCAMLPartners } from './_components/KYCAMLPartners'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RegulatoryPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <RegulatoryHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FinCENSection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FATFBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <SecuritySection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <KYCAMLBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <KYCAMLPartners />
      </section>
    </main>
  )
}
