import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { Header } from '../_components/Header'
import { Footer } from '../_components/Footer'
import { ThemeProvider } from '../_components/ThemeProvider'
import 'dash-ui-kit/theme'
import 'dash-ui-kit/styles'
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

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#0C1C33' }
  ]
}

export function generateStaticParams (): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout ({
  children,
  params: _params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}): Promise<React.ReactNode> {
  const { locale } = await _params
  setRequestLocale(locale)
  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${manrope.variable} bg-primary-white font-sans antialiased dark:bg-primary-dark`}
      >
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
