import { setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function BuyOnlinePage ({
  params: _params
}: {
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)

  return (
    <main className='min-h-screen bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 py-32 lg:px-6 lg:py-40'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <h1 className='text-4xl font-bold text-primary-dark dark:text-white lg:text-6xl'>
            Buying Dash Online
          </h1>
          <p className='text-lg text-primary-dark/70 dark:text-white/70 lg:text-xl'>
            Coming Soon
          </p>
        </div>
      </div>
    </main>
  )
}
