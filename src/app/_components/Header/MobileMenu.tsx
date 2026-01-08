'use client'

import { useEffect } from 'react'
import { ChevronDown, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useTranslations } from 'next-intl'
import { LanguageSelector } from './LanguageSelector'

interface MobileMenuProps {
  onClose: () => void
  mounted: boolean
}

export function MobileMenu ({ onClose: _onClose, mounted: _mounted }: MobileMenuProps) {
  const t = useTranslations('nav')
  const { theme, setTheme } = useTheme()

  // Prevent background scrolling while menu is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  // Allow keyboard navigation for accessibility
  useEffect(() => {
    const handleEscape = (_e: KeyboardEvent) => {
      if (_e.key === 'Escape') _onClose()
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [_onClose])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className='fixed inset-0 z-50'>
      <div
        className='absolute inset-0 bg-primary-dark/50'
        onClick={_onClose}
      />

      <div className='absolute bottom-0 right-0 top-0 flex w-[300px] max-w-[85vw] flex-col bg-primary-white shadow-2xl dark:bg-primary-dark'>
        <div className='flex items-center justify-between border-b border-primary-dark/10 p-4 dark:border-primary-white/10'>
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-primary-white/10'
            aria-label='Toggle theme'
          >
            {_mounted && theme === 'dark'
              ? (
                <Moon className='h-[18px] w-[18px] text-primary-white' />
                )
              : (
                <Sun className='h-[18px] w-[18px] text-primary-dark' />
                )}
          </button>
        </div>

        <nav className='flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6'>
          <a
            href='#'
            className='rounded-[12px] px-4 py-3 text-lg font-extrabold text-primary-dark dark:text-primary-white'
          >
            {t('home')}
          </a>
          <a
            href='#'
            className='flex items-center justify-between rounded-[12px] px-4 py-3 text-lg font-semibold text-primary-blue'
          >
            {t('getStarted')}
            <ChevronDown className='h-4 w-4' />
          </a>
          <a
            href='#'
            className='flex items-center justify-between rounded-[12px] px-4 py-3 text-lg font-semibold text-primary-blue'
          >
            {t('institutions')}
            <ChevronDown className='h-4 w-4' />
          </a>
          <a
            href='#'
            className='flex items-center justify-between rounded-[12px] px-4 py-3 text-lg font-semibold text-primary-blue'
          >
            {t('developers')}
            <ChevronDown className='h-4 w-4' />
          </a>
          <a
            href='#'
            className='flex items-center justify-between rounded-[12px] px-4 py-3 text-lg font-semibold text-primary-blue'
          >
            {t('community')}
            <ChevronDown className='h-4 w-4' />
          </a>
        </nav>

        <div className='p-4'>
          <button className='h-[50px] w-full rounded-[12px] bg-primary-turquoise text-base font-semibold text-primary-dark'>
            {t('buyDash')}
          </button>
        </div>
      </div>
    </div>
  )
}
