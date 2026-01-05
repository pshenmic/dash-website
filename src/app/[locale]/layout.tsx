import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Header } from '../_components/Header'
import { Footer } from '../_components/Footer'
import { ThemeProvider } from '../_components/ThemeProvider'
import '../globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
  title: 'Dash - Digital Cash',
  description:
    'Money without borders: moving it instantly, transparently, conveniently, and almost for free',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const messages = await getMessages({ locale })
  const tFooter = await getTranslations('footer')
  const tNav = await getTranslations('nav')

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.variable} bg-primary-white font-sans antialiased dark:bg-primary-dark`}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header
              nav={{
                home: tNav('home'),
                getStarted: tNav('getStarted'),
                institutions: tNav('institutions'),
                developers: tNav('developers'),
                community: tNav('community'),
                buyDash: tNav('buyDash'),
              }}
            />
            {children}
            <Footer
              copyright={tFooter('copyright')}
              termsOfUse={tFooter('termsOfUse')}
              privacyStatement={tFooter('privacyStatement')}
              privacyPolicy={tFooter('privacyPolicy')}
            />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
