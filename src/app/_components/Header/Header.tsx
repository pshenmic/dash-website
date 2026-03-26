'use client'

import { useState, useEffect } from 'react'
import { useTheme, DashLogo } from 'dash-ui-kit/react'
import { Sun, Moon, Menu, Wallet } from 'lucide-react'
import { useWalletContext } from '@/lib/dash-platform/wallet-context'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { LanguageSelector } from './LanguageSelector'
import { MobileMenu } from './MobileMenu'
import { NavDropdown } from './NavDropdown'
import { NavDropdownLink } from './NavDropdownLink'
import { NavDropdownDisabledItem } from './NavDropdownDisabledItem'

export function Header (): React.ReactNode {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { walletInfo, isConnecting, connect, disconnect } = useWalletContext()

  const GET_STARTED_ROUTES = ['/get-started', '/get-started/take-control', '/downloads', '/get-started/buy-online', '/get-started/spend', '/get-started/transactions']
  const INSTITUTIONS_ROUTES = ['/institutions', '/institutions/traders', '/institutions/financial-services', '/institutions/regulatory', '/institutions/fastpass']
  const DEVELOPERS_ROUTES = ['/build', '/developers/platform', '/discover', '/developers/contributing', '/developers/tools', '/developers/roadmap']

  const isGetStartedActive = GET_STARTED_ROUTES.includes(pathname)
  const isInstitutionsActive = INSTITUTIONS_ROUTES.includes(pathname)
  const isDevelopersActive = DEVELOPERS_ROUTES.includes(pathname)

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
              <NavDropdown label={t('home')} isActive={pathname === '/'}>
                <NavDropdownLink href='/'>{t('buildWithDash')}</NavDropdownLink>
                <NavDropdownDisabledItem>{t('individuals')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('businesses')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('downloads')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('newMerchantKit')}</NavDropdownDisabledItem>
              </NavDropdown>

              <NavDropdown label={t('getStarted')} isActive={isGetStartedActive}>
                <NavDropdownLink href='/get-started'>{t('aboutDash')}</NavDropdownLink>
                <NavDropdownLink href='/get-started/take-control'>{t('takeControl')}</NavDropdownLink>
                <NavDropdownLink href='/downloads'>{t('downloads')}</NavDropdownLink>
                <NavDropdownLink href='/get-started/buy-online'>{t('buyOnline')}</NavDropdownLink>
                <NavDropdownLink href='/get-started/spend'>{t('whereToSpend')}</NavDropdownLink>
                <NavDropdownLink href='/get-started/transactions'>{t('easyTransactions')}</NavDropdownLink>
              </NavDropdown>

              <NavDropdown label={t('institutions')} isActive={isInstitutionsActive} className='min-w-56'>
                <NavDropdownLink href='/institutions'>{t('operateWithConfidence')}</NavDropdownLink>
                <NavDropdownLink href='/institutions/traders'>{t('tradeWithConfidence')}</NavDropdownLink>
                <NavDropdownLink href='/institutions/financial-services'>{t('financialServices')}</NavDropdownLink>
                <NavDropdownLink href='/institutions/regulatory'>{t('regulatory')}</NavDropdownLink>
                <NavDropdownLink href='/institutions/fastpass'>{t('fastPass')}</NavDropdownLink>
              </NavDropdown>

              <NavDropdown label={t('developers')} isActive={isDevelopersActive} className='min-w-64'>
                <NavDropdownLink href='/build'>{t('buildNextGen')}</NavDropdownLink>
                <NavDropdownLink href='/developers/platform'>{t('dashPlatform')}</NavDropdownLink>
                <NavDropdownLink href='/discover'>{t('discoverDash')}</NavDropdownLink>
                <NavDropdownLink href='/developers/contributing'>{t('contributing')}</NavDropdownLink>
                <NavDropdownLink href='/developers/tools'>{t('providersTools')}</NavDropdownLink>
                <NavDropdownLink href='/developers/roadmap'>{t('dashRoadmap')}</NavDropdownLink>
                <NavDropdownDisabledItem>{t('documentation')}</NavDropdownDisabledItem>
              </NavDropdown>

              <NavDropdown label={t('community')} isActive={false} align='right'>
                <NavDropdownDisabledItem>{t('bugBounty')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('learningResources')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('connectWithUs')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('forum')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('masternodes')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('mining')}</NavDropdownDisabledItem>
                <NavDropdownDisabledItem>{t('blog')}</NavDropdownDisabledItem>
              </NavDropdown>
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
              {walletInfo.connected && walletInfo.currentIdentity != null
                ? (
                  <button
                    onClick={disconnect}
                    className='flex h-10 lg:h-12 w-24 lg:w-28 items-center justify-center gap-1.5 rounded-full bg-primary-turquoise/15 transition-all duration-300 hover:bg-primary-turquoise/25'
                    title='Click to disconnect'
                    aria-label='Disconnect wallet'
                  >
                    <span className='h-2 w-2 shrink-0 rounded-full bg-primary-turquoise' />
                    <span className='text-xs font-medium text-primary-dark dark:text-white truncate'>
                      {walletInfo.currentIdentity.slice(0, 4)}...{walletInfo.currentIdentity.slice(-4)}
                    </span>
                  </button>
                  )
                : (
                  <button
                    onClick={() => { void connect() }}
                    disabled={isConnecting}
                    className='flex h-10 lg:h-12 w-24 lg:w-28 items-center justify-center gap-1.5 rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 disabled:opacity-50'
                    aria-label='Connect wallet'
                  >
                    <Wallet className='size-4 shrink-0 text-primary-dark dark:text-white' />
                    <span className='text-xs font-medium text-primary-dark dark:text-white'>
                      {isConnecting ? '...' : 'Connect'}
                    </span>
                  </button>
                  )}
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
