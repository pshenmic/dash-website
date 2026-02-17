import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { PlaceholderPage } from '@/app/_components/PlaceholderPage/PlaceholderPage'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function TransactionsPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return <PlaceholderPage title='Easy Crypto Transactions' />
}
