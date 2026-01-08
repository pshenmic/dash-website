import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { HeroSection } from '../_components/HeroSection'
import { VideosSlider } from '../_components/VideosSlider'
import { FutureOfMoney } from '../_components/FutureOfMoney'
import { BulletsGrid } from '../_components/BulletsGrid'
import { ForDevelopers } from '../_components/ForDevelopers'

export function generateStaticParams () {
  return routing.locales.map((_locale) => ({ locale: _locale }))
}

export default async function HomePage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <HeroSection />

      {/* Negative margin creates overlap with hero section */}
      <section className='relative z-20 -mt-[108px] pb-10 lg:pb-16'>
        <VideosSlider />
      </section>

      <section className='py-10 lg:py-16'>
        <FutureOfMoney />
      </section>

      <section className='pb-6 lg:pb-10'>
        <BulletsGrid />
      </section>

      <section className='relative z-10 pt-10 lg:pt-16'>
        <ForDevelopers />
      </section>
    </main>
  )
}
