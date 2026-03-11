import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { FastPassHero } from './_components/FastPassHero'
import { FastPassInfo } from './_components/FastPassInfo'
import { FastPassFeatures } from './_components/FastPassFeatures'
import { FastPassPartners } from './_components/FastPassPartners'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function FastPassPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <FastPassHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FastPassInfo />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FastPassFeatures />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FastPassPartners />
      </section>
    </main>
  )
}
