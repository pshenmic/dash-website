import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { SpendHero } from './_components/SpendHero'
import { MerchantDirectory } from './_components/MerchantDirectory'
import { BecomeMerchant } from './_components/BecomeMerchant'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function SpendPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <SpendHero />

      {/* Merchant Directory */}
      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <MerchantDirectory />
      </section>

      {/* Become a Merchant CTA */}
      <section className='bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16'>
        <BecomeMerchant />
      </section>
    </main>
  )
}
