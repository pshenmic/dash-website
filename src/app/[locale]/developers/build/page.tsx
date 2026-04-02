import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { BuildHero } from './_components/BuildHero'
import { FirstStepsCards } from './_components/FirstStepsCards'
import { ClientLibrariesBlock } from './_components/ClientLibrariesBlock'
import { ProvidersToolsBlock } from './_components/ProvidersToolsBlock'
import { FutureOfMoneySection } from './_components/FutureOfMoneySection'
import { RoadmapPreview } from './_components/RoadmapPreview'
import { JoinCommunity } from './_components/JoinCommunity'
import { BuildBugBounty } from './_components/BuildBugBounty'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function BuildNextGenPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <BuildHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FirstStepsCards />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ClientLibrariesBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ProvidersToolsBlock />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <FutureOfMoneySection />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <RoadmapPreview />
      </section>

      <section className='bg-primary-blue py-10 dark:bg-primary-dark lg:py-16'>
        <JoinCommunity />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <BuildBugBounty />
      </section>
    </main>
  )
}
