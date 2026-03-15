import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { ToolsHero } from './_components/ToolsHero'
import { PaymentProcessors } from './_components/PaymentProcessors'
import { CustodyProviders } from './_components/CustodyProviders'
import { SDKsAndTools } from './_components/SDKsAndTools'
import { ToolsBugBounty } from './_components/ToolsBugBounty'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function ProvidersToolsPage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main>
      <ToolsHero />

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <PaymentProcessors />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <CustodyProviders />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <SDKsAndTools />
      </section>

      <section className='bg-primary-white py-10 dark:bg-primary-dark lg:py-16'>
        <ToolsBugBounty />
      </section>
    </main>
  )
}
