import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ArticlePageLoader } from './_components/ArticlePageLoader'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function ArticleRoute ({
  params: _params
}: {
  params: Promise<{ locale: string, id: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return <ArticlePageLoader />
}
