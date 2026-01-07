import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { HeroSection } from '../_components/HeroSection'
import { VideosSlider } from '../_components/VideosSlider'
import { FutureOfMoney } from '../_components/FutureOfMoney'
import { BulletsGrid } from '../_components/BulletsGrid'
import { ForDevelopers } from '../_components/ForDevelopers'

export function generateStaticParams () {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function HomePage ({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <main>
      <HeroSection />

      {/* Videos Slider - overlaps hero section */}
      <section className='relative z-20 -mt-[108px] pb-10 lg:pb-16'>
        <VideosSlider />
      </section>

      {/* FutureOfMoney section */}
      <section className='py-10 lg:py-16'>
        <FutureOfMoney />
      </section>

      {/* BulletsGrid section */}
      <section className='pb-6 lg:pb-10'>
        <BulletsGrid />
      </section>

      {/* ForDevelopers section */}
      <section className='py-10 lg:py-16'>
        <ForDevelopers />
      </section>
    </main>
  )
}
