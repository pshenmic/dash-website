import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { HeroSection } from '../_components/HeroSection'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('hero')

  return (
    <main>
      <HeroSection
        chip={t('chip')}
        title={t('title')}
        subtitle={t('subtitle')}
        downloadWallet={t('downloadWallet')}
        documentation={t('documentation')}
      />
    </main>
  )
}
