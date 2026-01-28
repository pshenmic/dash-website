'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LanguageSelector } from './LanguageSelector'
import { MobileMenu } from './MobileMenu'

export function Header (): React.ReactNode {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // SSR renders without theme, causes hydration mismatch if we render theme-dependent UI immediately
  useEffect(() => {
    setMounted(true)
  }, [])

  // Smart header: hides on scroll down to maximize content space, reappears on scroll up
  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 p-4 transition-all duration-500 lg:p-6 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {/* Subtle gradient overlay for depth */}
        <div className='pointer-events-none absolute inset-0 bg-linear-to-b from-primary-blue/5 to-transparent dark:from-primary-turquoise/5' />

        <div className='relative mx-auto flex max-w-7xl items-center justify-between rounded-3xl bg-white/80 dark:bg-primary-dark/90 backdrop-blur-md border border-primary-dark/5 dark:border-white/10 shadow-lg shadow-primary-dark/5 p-4 lg:p-5'>
          <div className='flex w-full items-center justify-between lg:hidden'>
            <Image
              src='/images/logo.svg'
              alt='Dash'
              width={79}
              height={21}
              priority
            />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 hover:scale-110 hover:rotate-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 active:scale-95'
              aria-label='Open menu'
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className='h-5 w-5 text-primary-dark dark:text-white transition-transform duration-300' />
            </button>
          </div>

          <div className='hidden shrink-0 items-center gap-4 pl-3 lg:flex'>
            <Image
              src='/images/logo.svg'
              alt='Dash'
              width={79}
              height={21}
              priority
            />
            <LanguageSelector />
          </div>

          <nav className='hidden shrink-0 items-center gap-10 lg:flex'>
            <Link
              href='/'
              className={`text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2 ${pathname === '/' ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20' : 'font-semibold text-primary-blue hover:text-primary-blue/80 hover:bg-primary-blue/5 dark:text-primary-turquoise dark:hover:bg-white/5'}`}
            >
              {t('home')}
            </Link>
            {/* Get Started Dropdown */}
            <div className='group relative'>
              <button
                className={`flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2 ${
                  pathname === '/get-started' || pathname === '/downloads'
                    ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20'
                    : 'font-semibold text-primary-blue hover:text-primary-blue/80 hover:bg-primary-blue/5 dark:text-primary-turquoise dark:hover:bg-white/5'
                }`}
              >
                {t('getStarted')}
                <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180 group-hover:scale-110' />
              </button>

              {/* Dropdown Menu */}
              <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 scale-95 transition-all duration-300 group-hover:visible group-hover:opacity-100 group-hover:scale-100'>
                <div className='min-w-48 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md p-2 shadow-xl shadow-primary-dark/10 dark:shadow-black/30 border border-primary-dark/5 dark:border-white/10'>
                  <Link
                    href='/get-started'
                    className={`block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-all duration-200 transform ${
                      pathname === '/get-started'
                        ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise scale-[0.98]'
                        : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1'
                    }`}
                  >
                    {t('aboutDash')}
                  </Link>
                  <Link
                    href='/downloads'
                    className={`block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-all duration-200 transform ${
                      pathname === '/downloads'
                        ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise scale-[0.98]'
                        : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1'
                    }`}
                  >
                    {t('downloads')}
                  </Link>
                </div>
              </div>
            </div>
            <a
              href='#'
              className='text-sm lg:text-base font-semibold whitespace-nowrap text-primary-blue dark:text-primary-turquoise transition-all duration-300 hover:text-primary-blue/80 hover:bg-primary-blue/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2'
            >
              {t('institutions')}
            </a>
            <a
              href='#'
              className='text-sm lg:text-base font-semibold whitespace-nowrap text-primary-blue dark:text-primary-turquoise transition-all duration-300 hover:text-primary-blue/80 hover:bg-primary-blue/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2'
            >
              {t('developers')}
            </a>
            <a
              href='#'
              className='text-sm lg:text-base font-semibold whitespace-nowrap text-primary-blue dark:text-primary-turquoise transition-all duration-300 hover:text-primary-blue/80 hover:bg-primary-blue/5 dark:hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2'
            >
              {t('community')}
            </a>
          </nav>

          <div className='hidden shrink-0 items-center gap-3 lg:flex'>
            <button
              onClick={toggleTheme}
              className='flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 hover:scale-110 hover:rotate-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
              aria-label='Toggle theme'
            >
              {mounted && theme === 'dark'
                ? (
                  <Moon className='size-5 lg:size-6 text-primary-dark transition-transform duration-300' />
                  )
                : (
                  <Sun className='size-5 lg:size-6 text-primary-dark transition-transform duration-300' />
                  )}
            </button>
            <button className='h-12 lg:h-14 min-w-30 shrink-0 rounded-xl bg-primary-turquoise px-5 lg:px-7 text-sm lg:text-base font-semibold whitespace-nowrap text-primary-dark transition-all duration-300 hover:bg-primary-turquoise/90 hover:scale-105 hover:shadow-lg hover:shadow-primary-turquoise/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-turquoise focus-visible:ring-offset-2 active:scale-95'>
              {t('buyDash')}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          mounted={mounted}
        />
      )}
    </>
  )
}
