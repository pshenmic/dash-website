'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { ChevronDown, Sun, Moon, Menu } from 'lucide-react'
import { LanguageSelector } from './LanguageSelector'
import { MobileMenu } from './MobileMenu'

interface HeaderProps {
  nav: {
    home: string
    getStarted: string
    institutions: string
    developers: string
    community: string
    buyDash: string
  }
}

export function Header ({ nav: _nav }: HeaderProps) {
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
    const handleScroll = () => {
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

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 p-4 transition-transform duration-300 lg:p-6 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
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
              className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10'
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
            <a href='#' className='whitespace-nowrap text-sm font-extrabold text-primary-dark'>
              {_nav.home}
            </a>
            <a
              href='#'
              className='flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue'
            >
              {_nav.getStarted}
              <ChevronDown className='h-3 w-3 text-primary-blue' />
            </a>
            <a
              href='#'
              className='flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue'
            >
              {_nav.institutions}
              <ChevronDown className='h-3 w-3 text-primary-blue' />
            </a>
            <a
              href='#'
              className='flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue'
            >
              {_nav.developers}
              <ChevronDown className='h-3 w-3 text-primary-blue' />
            </a>
            <a
              href='#'
              className='flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue'
            >
              {_nav.community}
              <ChevronDown className='h-3 w-3 text-primary-blue' />
            </a>
          </nav>

          <div className='hidden shrink-0 items-center gap-3 lg:flex'>
            <button
              onClick={toggleTheme}
              className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10'
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
            <button className='h-[46px] min-w-[120px] shrink-0 whitespace-nowrap rounded-[12px] bg-primary-turquoise px-5 text-sm font-semibold text-primary-dark'>
              {_nav.buyDash}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <MobileMenu
          nav={_nav}
          onClose={() => setIsMobileMenuOpen(false)}
          mounted={mounted}
        />
      )}
    </>
  )
}
