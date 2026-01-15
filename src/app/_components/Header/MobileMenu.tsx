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
      <div className='animate-in slide-in-from-right absolute top-0 right-0 bottom-0 flex w-[300px] max-w-[85vw] flex-col rounded-l-[50px] bg-primary-white shadow-2xl duration-300 dark:bg-primary-dark'>
        <div className='flex items-center justify-between p-6 pl-8'>
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 transition-colors hover:bg-primary-dark/20 dark:bg-primary-white/10 dark:hover:bg-primary-white/20'
            aria-label='Toggle theme'
          >
            {mounted && theme === 'dark'
              ? (
                <Moon className='h-[18px] w-[18px] text-primary-white' />
                )
              : (
                <Sun className='h-[18px] w-[18px] text-primary-dark' />
                )}
          </button>
        </div>

        <nav className='flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-4'>
          <Link
            href='/'
            className={`rounded-[12px] px-4 py-3 text-right text-lg transition-colors ${pathname === '/' ? 'font-extrabold text-primary-dark hover:bg-primary-dark/5 dark:text-primary-white dark:hover:bg-primary-white/5' : 'font-semibold text-primary-blue hover:bg-primary-blue/10'}`}
            onClick={onClose}
          >
            {t('home')}
          </Link>
          <Link
            href='/get-started'
            className={`rounded-[12px] px-4 py-3 text-right text-lg transition-colors ${pathname === '/get-started' ? 'font-extrabold text-primary-dark hover:bg-primary-dark/5 dark:text-primary-white dark:hover:bg-primary-white/5' : 'font-semibold text-primary-blue hover:bg-primary-blue/10'}`}
            onClick={onClose}
          >
            {t('getStarted')}
          </Link>
          <a
            href='#'
            className='rounded-[12px] px-4 py-3 text-right text-lg font-semibold text-primary-blue transition-colors hover:bg-primary-blue/10'
          >
            {t('institutions')}
          </a>
          <a
            href='#'
            className='rounded-[12px] px-4 py-3 text-right text-lg font-semibold text-primary-blue transition-colors hover:bg-primary-blue/10'
          >
            {t('developers')}
          </a>
          <a
            href='#'
            className='rounded-[12px] px-4 py-3 text-right text-lg font-semibold text-primary-blue transition-colors hover:bg-primary-blue/10'
          >
            {t('community')}
          </a>
        </nav>

        <div className='p-6'>
          <button className='h-[50px] w-full rounded-[12px] bg-primary-turquoise text-base font-semibold text-primary-dark transition-colors hover:bg-primary-turquoise/90'>
            {t('buyDash')}
          </button>
        </div>
      </div>
    </div>
  )
}
