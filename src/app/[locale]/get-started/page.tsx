import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { GetStartedHero } from '../../_components/GetStartedHero'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((_locale) => ({ locale: _locale }))
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
    </main>
  )
}
