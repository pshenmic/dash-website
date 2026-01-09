import type { Metadata } from 'next'
import { ViewTransitions } from 'next-view-transitions'
import { Manrope } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Header } from '../_components/Header'
import { Footer } from '../_components/Footer'
import { ThemeProvider } from '../_components/ThemeProvider'
import '../globals.css'

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin', 'cyrillic']
})

export const metadata: Metadata = {
  title: 'Dash - Digital Cash',
  description:
    'Money without borders: moving it instantly, transparently, conveniently, and almost for free'
}

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((_locale) => ({ locale: _locale }))
}

export default async function LocaleLayout ({
  children: _children,
  params: _params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)
  const messages = await getMessages({ locale })

  return (
    <ViewTransitions>
      <html lang={locale} suppressHydrationWarning>
        <body
          className={`${manrope.variable} bg-primary-white font-sans antialiased dark:bg-primary-dark`}
        >
          <ThemeProvider>
            <NextIntlClientProvider messages={messages}>
              <Header />
              {_children}
              <Footer />
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
