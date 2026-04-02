import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { DiscoverHero } from './_components/DiscoverHero'
import { DocBlock } from './_components/DocBlock'
import { DiscoverBugBounty } from './_components/DiscoverBugBounty'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function DiscoverDashPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <DiscoverHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DocBlock
          translationKey='discoverPage.core'
          imageSrc='/images/developers/discover/core-3d.png'
          imageAlt='Dash Core'
          variant='core'
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DocBlock
          translationKey='discoverPage.platform'
          imageSrc='/images/developers/discover/platform-3d.png'
          imageAlt='Dash Platform'
          variant='platform'
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DocBlock
          translationKey='discoverPage.users'
          imageSrc='/images/developers/discover/users-3d.png'
          imageAlt='Dash Users'
          variant='users'
        />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <DiscoverBugBounty />
      </section>
    </main>
  )
}
