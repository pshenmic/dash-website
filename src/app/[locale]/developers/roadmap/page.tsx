import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { RoadmapHero } from './_components/RoadmapHero'
import { RoadmapTimeline } from './_components/RoadmapTimeline'
import { RoadmapBugBounty } from './_components/RoadmapBugBounty'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function RoadmapPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <RoadmapHero />

      <section className='bg-primary-blue pb-10 dark:bg-primary-dark lg:pb-16'>
        <RoadmapTimeline />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <RoadmapBugBounty />
      </section>
    </main>
  )
}
