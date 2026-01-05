import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { HeroSection } from '../_components/HeroSection'
import { VideosSlider } from '../_components/VideosSlider'
import { FutureOfMoney } from '../_components/FutureOfMoney'
import type { VideoCardData } from '../_components/VideosSlider/VideoCard'

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
  const tHero = await getTranslations('hero')
  const tSlider = await getTranslations('videosSlider')
  const tFuture = await getTranslations('futureOfMoney')

  // Get videos data from translations
  const videosRaw = tSlider.raw('videos') as VideoCardData[]

  return (
    <main>
      <HeroSection
        chip={tHero('chip')}
        title={tHero('title')}
        subtitle={tHero('subtitle')}
        downloadWallet={tHero('downloadWallet')}
        documentation={tHero('documentation')}
      />

      {/* Videos Slider - overlaps hero section */}
      <section className="relative z-20 -mt-[108px] pb-16">
        <VideosSlider videos={videosRaw} />
      </section>

      <FutureOfMoney
        chip={tFuture('chip')}
        title={tFuture('title')}
        description={tFuture('description')}
        transactionSpeed={tFuture('transactionSpeed')}
        transactionSpeedValue={tFuture('transactionSpeedValue')}
        costPerTransaction={tFuture('costPerTransaction')}
        costPerTransactionValue={tFuture('costPerTransactionValue')}
        connectTestnet={tFuture('connectTestnet')}
        learnMore={tFuture('learnMore')}
      />
    </main>
  )
}
