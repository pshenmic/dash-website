import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { InstitutionsHero } from './_components/InstitutionsHero'
import { InstitutionsNav } from './_components/InstitutionsNav'
import { AdvancedTrading } from './_components/AdvancedTrading'
import { ComprehensiveServices } from './_components/ComprehensiveServices'
import { ClientLibraries } from './_components/ClientLibraries'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function InstitutionsPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <InstitutionsHero />

      {/* Navigation Cards - overlaps hero bottom */}
      <section className='relative z-20 -mt-16 pb-10 lg:-mt-28 lg:pb-16'>
        <InstitutionsNav />
      </section>

      {/* Advanced Trading */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <AdvancedTrading />
      </section>

      {/* Comprehensive Services */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ComprehensiveServices />
      </section>

      {/* Client Libraries */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ClientLibraries />
      </section>
    </main>
  )
}
