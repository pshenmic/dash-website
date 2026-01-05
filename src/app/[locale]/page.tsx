import { getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { HeroSection } from '../_components/HeroSection'
import { VideosSlider } from '../_components/VideosSlider'
import { FutureOfMoney } from '../_components/FutureOfMoney'
import { BulletsGrid } from '../_components/BulletsGrid'
import { ForDevelopers } from '../_components/ForDevelopers'
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
  const tBullets = await getTranslations('bullets')
  const tDevelopers = await getTranslations('forDevelopers')

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

      <BulletsGrid
        translations={{
          stableOperation: {
            line1: tBullets('stableOperation.line1'),
            line2: tBullets('stableOperation.line2'),
            highlight: tBullets('stableOperation.highlight'),
          },
          longestDao: {
            line1: tBullets('longestDao.line1'),
            highlight1: tBullets('longestDao.highlight1'),
            line2: tBullets('longestDao.line2'),
            highlight2: tBullets('longestDao.highlight2'),
          },
          optionalPrivacy: {
            line1: tBullets('optionalPrivacy.line1'),
            highlight: tBullets('optionalPrivacy.highlight'),
          },
          mainCard: {
            chip: tBullets('mainCard.chip'),
          },
          priceChart: {
            price: tBullets('priceChart.price'),
            currency: tBullets('priceChart.currency'),
            change: tBullets('priceChart.change'),
            period: tBullets('priceChart.period'),
          },
          passiveIncome: {
            highlight: tBullets('passiveIncome.highlight'),
            text: tBullets('passiveIncome.text'),
          },
          selfFinancing: {
            highlight: tBullets('selfFinancing.highlight'),
            line1: tBullets('selfFinancing.line1'),
            line2: tBullets('selfFinancing.line2'),
          },
          activeCommunity: {
            highlight: tBullets('activeCommunity.highlight'),
            text: tBullets('activeCommunity.text'),
          },
          instantSecure: {
            line1: tBullets('instantSecure.line1'),
            line2: tBullets('instantSecure.line2'),
            text: tBullets('instantSecure.text'),
          },
          uniqueOpportunities: {
            highlight: tBullets('uniqueOpportunities.highlight'),
            text: tBullets('uniqueOpportunities.text'),
          },
          restrictedIssue: {
            line1: tBullets('restrictedIssue.line1'),
            line2: tBullets('restrictedIssue.line2'),
            value: tBullets('restrictedIssue.value'),
          },
        }}
      />

      <ForDevelopers
        translations={{
          label: tDevelopers('label'),
          title: tDevelopers('title'),
          joinDiscord: tDevelopers('joinDiscord'),
          cards: {
            apiSdk: {
              chip: tDevelopers('cards.apiSdk.chip'),
              title: tDevelopers('cards.apiSdk.title'),
            },
            nodes: {
              chip: tDevelopers('cards.nodes.chip'),
              title: tDevelopers('cards.nodes.title'),
            },
            smartContracts: {
              chip: tDevelopers('cards.smartContracts.chip'),
              title: tDevelopers('cards.smartContracts.title'),
            },
            testnet: {
              chip: tDevelopers('cards.testnet.chip'),
              title: tDevelopers('cards.testnet.title'),
            },
          },
          codeExample: {
            language: tDevelopers('codeExample.language'),
          },
        }}
      />
    </main>
  )
}
