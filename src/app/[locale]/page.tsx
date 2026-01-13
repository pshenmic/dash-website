import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { HeroSection } from '../_components/HeroSection'
import { VideosSlider } from '../_components/VideosSlider'
import { FutureOfMoney } from '../_components/FutureOfMoney'
import { BulletsGrid } from '../_components/BulletsGrid'
import { ForDevelopers } from '../_components/ForDevelopers'
import { FirstSteps } from '../_components/FirstSteps'
import { Reviews } from '../_components/Reviews'
import { PlatformBlocks } from '../_components/PlatformBlocks'
import { LatestNews } from '../_components/LatestNews'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((_locale) => ({ locale: _locale }))
}

export default async function HomePage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <HeroSection />

      {/* Negative margin creates overlap with hero section */}
      <section className='relative z-20 -mt-[60px] pb-10 lg:-mt-[108px] lg:pb-16'>
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

      {/* Negative margin creates overlap with ForDevelopers section */}
      <section className='relative z-0 -mt-[60px] lg:-mt-[108px]'>
        <FirstSteps />
      </section>

      <section className='bg-primary-dark py-[60px] lg:py-[100px]'>
        <Reviews />
      </section>

      <section className='bg-primary-dark pb-[60px] lg:pb-[100px]'>
        <PlatformBlocks />
      </section>

      <section className='bg-primary-dark py-[60px] lg:py-[100px]'>
        <LatestNews />
      </section>
    </main>
  )
}
