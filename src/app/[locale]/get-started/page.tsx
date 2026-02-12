import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { GetStartedHero } from '../../_components/GetStartedHero'
import { GetStartedActions } from '../../_components/GetStartedActions'
import { GetDash } from '../../_components/GetDash'
import { BuyDashOnline } from '../../_components/BuyDashOnline'
import { GetGoing } from '../../_components/GetGoing'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function GetStartedPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <GetStartedHero />

      {/* Negative margin creates overlap with hero section */}
      <section className='relative z-20 -mt-16 pb-10 lg:-mt-28 lg:pb-16'>
        <GetStartedActions />
      </section>

      <section>
        <GetDash />
      </section>

      <section>
        <BuyDashOnline />
      </section>

      <section>
        <GetGoing />
      </section>
    </main>
  )
}
