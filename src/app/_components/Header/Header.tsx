'use client'

import { useState, useEffect } from 'react'
import { useTheme, Button, DashLogo } from 'dash-ui-kit/react'
import { Sun, Moon, Menu, ChevronDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { LanguageSelector } from './LanguageSelector'
import { MobileMenu } from './MobileMenu'

export function Header (): React.ReactNode {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
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

  return (
    <>
      <header
        className={cn(
          'fixed top-0 right-0 left-0 z-50 p-4 transition-transform duration-300 lg:p-6',
          isVisible ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        <div className='mx-auto flex max-w-7xl items-center justify-between rounded-3xl bg-white/80 dark:bg-primary-dark/80 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-4 lg:p-5'>
            <div className='flex w-full items-center justify-between lg:hidden'>
              <DashLogo
                width={79}
                height={21}
                className="text-primary-dark dark:text-white"
              />
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className='flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 hover:rotate-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
                aria-label='Open menu'
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className='h-5 w-5 text-primary-dark dark:text-white transition-transform duration-300' />
              </button>
            </div>

            <div className='hidden shrink-0 items-center gap-4 pl-3 lg:flex'>
              <DashLogo
                width={79}
                height={21}
                className="text-primary-dark dark:text-white"
              />
              <LanguageSelector />
            </div>

            <nav className='hidden shrink-0 items-center gap-10 lg:flex'>
              {/* Home Dropdown */}
              <div className='group relative'>
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2',
                    pathname === '/'
                      ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20'
                      : 'font-semibold text-primary-dark hover:text-primary-dark/80 hover:bg-white/20 dark:text-primary-turquoise dark:hover:bg-white/5'
                  )}
                >
                  {t('home')}
                  <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180' />
                </button>

                {/* Dropdown Menu */}
                <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
                  <div className='min-w-52 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-2'>
                    <Link
                      href='/'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('buildWithDash')}
                    </Link>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('individuals')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('businesses')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('downloads')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('newMerchantKit')}
                    </span>
                  </div>
                </div>
              </div>
              {/* Get Started Dropdown */}
              <div className='group relative'>
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2',
                    pathname === '/get-started' || pathname === '/get-started/payments' || pathname === '/downloads' || pathname === '/get-started/buy-online' || pathname === '/get-started/spend' || pathname === '/get-started/transactions'
                      ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20'
                      : 'font-semibold text-primary-dark hover:text-primary-dark/80 hover:bg-white/20 dark:text-primary-turquoise dark:hover:bg-white/5'
                  )}
                >
                  {t('getStarted')}
                  <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180' />
                </button>

                {/* Dropdown Menu */}
                <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
                  <div className='min-w-52 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-2'>
                    <Link
                      href='/get-started'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/get-started'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('aboutDash')}
                    </Link>
                    <Link
                      href='/get-started/payments'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/get-started/payments'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('takeControl')}
                    </Link>
                    <Link
                      href='/downloads'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/downloads'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('downloads')}
                    </Link>
                    <Link
                      href='/get-started/buy-online'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/get-started/buy-online'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('buyOnline')}
                    </Link>
                    <Link
                      href='/get-started/spend'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/get-started/spend'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('whereToSpend')}
                    </Link>
                    <Link
                      href='/get-started/transactions'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/get-started/transactions'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('easyTransactions')}
                    </Link>
                  </div>
                </div>
              </div>
              {/* Institutions Dropdown */}
              <div className='group relative'>
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2',
                    pathname === '/institutions' || pathname === '/institutions/traders' || pathname === '/institutions/financial-services' || pathname === '/institutions/regulatory' || pathname === '/institutions/fastpass'
                      ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20'
                      : 'font-semibold text-primary-dark hover:text-primary-dark/80 hover:bg-white/20 dark:text-primary-turquoise dark:hover:bg-white/5'
                  )}
                >
                  {t('institutions')}
                  <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180' />
                </button>

                {/* Dropdown Menu */}
                <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
                  <div className='min-w-56 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-2'>
                    <Link
                      href='/institutions'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/institutions'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('operateWithConfidence')}
                    </Link>
                    <Link
                      href='/institutions/traders'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/institutions/traders'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('tradeWithConfidence')}
                    </Link>
                    <Link
                      href='/institutions/financial-services'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/institutions/financial-services'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('financialServices')}
                    </Link>
                    <Link
                      href='/institutions/regulatory'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/institutions/regulatory'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('regulatory')}
                    </Link>
                    <Link
                      href='/institutions/fastpass'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/institutions/fastpass'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('fastPass')}
                    </Link>
                  </div>
                </div>
              </div>
              {/* Developers Dropdown */}
              <div className='group relative'>
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2',
                    pathname === '/build' || pathname === '/developers/platform' || pathname === '/discover' || pathname === '/developers/contributing' || pathname === '/developers/tools' || pathname === '/developers/roadmap'
                      ? 'font-bold text-primary-dark dark:text-white bg-primary-blue/10 dark:bg-primary-blue/20'
                      : 'font-semibold text-primary-dark hover:text-primary-dark/80 hover:bg-white/20 dark:text-primary-turquoise dark:hover:bg-white/5'
                  )}
                >
                  {t('developers')}
                  <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180' />
                </button>

                {/* Dropdown Menu */}
                <div className='invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
                  <div className='min-w-64 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-2'>
                    <Link
                      href='/build'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/build'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('buildNextGen')}
                    </Link>
                    <Link
                      href='/developers/platform'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/developers/platform'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('dashPlatform')}
                    </Link>
                    <Link
                      href='/discover'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/discover'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('discoverDash')}
                    </Link>
                    <Link
                      href='/developers/contributing'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/developers/contributing'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('contributing')}
                    </Link>
                    <Link
                      href='/developers/tools'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/developers/tools'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('providersTools')}
                    </Link>
                    <Link
                      href='/developers/roadmap'
                      prefetch={false}
                      className={cn(
                        'block rounded-xl px-4 py-2.5 text-sm lg:text-base transition-colors duration-200',
                        pathname === '/developers/roadmap'
                          ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-medium text-primary-blue dark:text-primary-turquoise'
                          : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                      )}
                    >
                      {t('dashRoadmap')}
                    </Link>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('documentation')}
                    </span>
                  </div>
                </div>
              </div>
              {/* Community Dropdown */}
              <div className='group relative'>
                <button
                  className={cn(
                    'flex items-center gap-1.5 text-sm lg:text-base whitespace-nowrap transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2 rounded-lg px-3 py-2',
                    'font-semibold text-primary-dark hover:text-primary-dark/80 hover:bg-white/20 dark:text-primary-turquoise dark:hover:bg-white/5'
                  )}
                >
                  {t('community')}
                  <ChevronDown className='size-3.5 transition-all duration-300 group-hover:rotate-180' />
                </button>

                {/* Dropdown Menu */}
                <div className='invisible absolute top-full right-0 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100'>
                  <div className='min-w-52 rounded-2xl bg-white/95 dark:bg-primary-dark/95 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg p-2'>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('bugBounty')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('learningResources')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('connectWithUs')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('forum')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('masternodes')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('mining')}
                    </span>
                    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                      {t('blog')}
                    </span>
                  </div>
                </div>
              </div>
            </nav>

            <div className='hidden shrink-0 items-center gap-3 lg:flex'>
              <button
                onClick={toggleTheme}
                className='flex h-10 w-10 lg:h-12 lg:w-12 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 hover:rotate-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
                aria-label='Toggle theme'
              >
                {mounted && theme === 'dark'
                  ? (
                    <Moon className='size-5 lg:size-6 text-primary-dark dark:text-white transition-transform duration-300' />
                    )
                  : (
                    <Sun className='size-5 lg:size-6 text-primary-dark dark:text-white transition-transform duration-300' />
                    )}
              </button>
              <Button
                variant='solid'
                colorScheme='mint'
                className='h-12 lg:h-14 min-w-30 shrink-0 rounded-xl px-5 lg:px-7 text-sm lg:text-base font-semibold whitespace-nowrap'
              >
                {t('buyDash')}
              </Button>
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
