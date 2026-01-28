'use client'

import { useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LanguageSelector } from './LanguageSelector'

interface MobileMenuProps {
  onClose: () => void
  mounted: boolean
}

export function MobileMenu ({
  onClose,
  mounted
}: MobileMenuProps): React.ReactNode {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  // Prevent background scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return (): void => {
      document.body.style.overflow = ''
    }
  }, [])

  // Allow keyboard navigation for accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const toggleTheme = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='fixed inset-0 z-50'>
      {/* Backdrop with fade animation */}
      <div
        className='animate-in fade-in absolute inset-0 bg-primary-dark/50 backdrop-blur-sm duration-200'
        onClick={onClose}
      />

      {/* Slide-in drawer */}
      <div className='animate-in slide-in-from-right absolute top-0 right-0 bottom-0 flex w-75 max-w-[85vw] flex-col rounded-l-3xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-xl shadow-2xl border-l border-primary-dark/5 dark:border-white/10 duration-300'>
        <div className='flex items-center justify-between p-6 pl-8'>
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className='flex size-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 hover:scale-110 hover:rotate-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 active:scale-95'
            aria-label='Toggle theme'
          >
            {mounted && theme === 'dark'
              ? (
                <Moon className='size-5 text-primary-dark transition-transform duration-300' />
                )
              : (
                <Sun className='size-5 text-primary-dark transition-transform duration-300' />
                )}
          </button>
        </div>

        <nav className='flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-4'>
          <Link
            href='/'
            className={`rounded-xl px-4 py-3 text-right text-lg transition-all duration-300 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 ${pathname === '/' ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20 scale-[0.98]' : 'font-semibold text-primary-blue dark:text-primary-turquoise hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1'}`}
            onClick={onClose}
          >
            {t('home')}
          </Link>
          {/* Get Started Section with submenu */}
          <div className='flex flex-col'>
            <span
              className={`rounded-xl px-4 py-3 text-right text-lg transition-all duration-300 ${
                pathname === '/get-started' || pathname === '/downloads'
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              }`}
            >
              {t('getStarted')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <Link
                href='/get-started'
                className={`rounded-xl px-4 py-2.5 text-right text-base transition-all duration-200 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 ${
                  pathname === '/get-started'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise scale-[0.98]'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1'
                }`}
                onClick={onClose}
              >
                {t('aboutDash')}
              </Link>
              <Link
                href='/downloads'
                className={`rounded-xl px-4 py-2.5 text-right text-base transition-all duration-200 transform focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 ${
                  pathname === '/downloads'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise scale-[0.98]'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1'
                }`}
                onClick={onClose}
              >
                {t('downloads')}
              </Link>
            </div>
          </div>
          <a
            href='#'
            className='rounded-xl px-4 py-3 text-right text-lg font-semibold text-primary-blue dark:text-primary-turquoise transition-all duration-300 transform hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
          >
            {t('institutions')}
          </a>
          <a
            href='#'
            className='rounded-xl px-4 py-3 text-right text-lg font-semibold text-primary-blue dark:text-primary-turquoise transition-all duration-300 transform hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
          >
            {t('developers')}
          </a>
          <a
            href='#'
            className='rounded-xl px-4 py-3 text-right text-lg font-semibold text-primary-blue dark:text-primary-turquoise transition-all duration-300 transform hover:bg-primary-blue/5 dark:hover:bg-white/5 hover:scale-[1.02] hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
          >
            {t('community')}
          </a>
        </nav>

        <div className='p-6'>
          <button className='h-14 w-full rounded-xl bg-primary-turquoise text-base font-semibold text-primary-dark transition-all duration-300 hover:bg-primary-turquoise/90 hover:scale-105 hover:shadow-xl hover:shadow-primary-turquoise/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-turquoise focus-visible:ring-offset-2 active:scale-95'>
            {t('buyDash')}
          </button>
        </div>
      </div>
    </div>
  )
}
