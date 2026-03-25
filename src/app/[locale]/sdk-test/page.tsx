import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { SdkTestPageLoader } from './_components/SdkTestPageLoader'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function SdkTestRoute ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return <SdkTestPageLoader />
}
