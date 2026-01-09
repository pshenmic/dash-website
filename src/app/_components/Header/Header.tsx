'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu } from 'lucide-react'
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
        style={{ viewTransitionName: 'header' }}
        className={`fixed top-0 right-0 left-0 z-50 p-4 transition-transform duration-300 lg:p-6 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between rounded-[25px] bg-primary-white p-[15px]'>
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
              className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 transition-colors hover:bg-primary-dark/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50'
              aria-label='Open menu'
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className='h-5 w-5 text-primary-dark' />
            </button>
          </div>

          <div className='hidden shrink-0 items-center gap-[15px] pl-[13px] lg:flex'>
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
              className={`text-sm whitespace-nowrap transition-colors focus:outline-none focus-visible:underline ${pathname === '/' ? 'font-extrabold text-primary-dark hover:text-primary-dark/70' : 'font-semibold text-primary-blue hover:text-primary-blue/70'}`}
            >
              {t('home')}
            </Link>
            <Link
              href='/get-started'
              className={`text-sm whitespace-nowrap transition-colors focus:outline-none focus-visible:underline ${pathname === '/get-started' ? 'font-extrabold text-primary-dark hover:text-primary-dark/70' : 'font-semibold text-primary-blue hover:text-primary-blue/70'}`}
            >
              {t('getStarted')}
            </Link>
            <a
              href='#'
              className='text-sm font-semibold whitespace-nowrap text-primary-blue transition-colors hover:text-primary-blue/70 focus:outline-none focus-visible:underline'
            >
              {t('institutions')}
            </a>
            <a
              href='#'
              className='text-sm font-semibold whitespace-nowrap text-primary-blue transition-colors hover:text-primary-blue/70 focus:outline-none focus-visible:underline'
            >
              {t('developers')}
            </a>
            <a
              href='#'
              className='text-sm font-semibold whitespace-nowrap text-primary-blue transition-colors hover:text-primary-blue/70 focus:outline-none focus-visible:underline'
            >
              {t('community')}
            </a>
          </nav>

          <div className='hidden shrink-0 items-center gap-3 lg:flex'>
            <button
              onClick={toggleTheme}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 transition-colors hover:bg-primary-dark/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50'
              aria-label='Toggle theme'
            >
              {mounted && theme === 'dark'
                ? (
                  <Moon className='h-[18px] w-[18px] text-primary-dark' />
                  )
                : (
                  <Sun className='h-[18px] w-[18px] text-primary-dark' />
                  )}
            </button>
            <button className='h-[46px] min-w-[120px] shrink-0 rounded-[12px] bg-primary-turquoise px-5 text-sm font-semibold whitespace-nowrap text-primary-dark transition-colors hover:bg-primary-turquoise/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-turquoise focus-visible:ring-offset-2'>
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
