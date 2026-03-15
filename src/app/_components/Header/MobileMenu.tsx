'use client'

import { useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme, Button } from 'dash-ui-kit/react'
import { useTranslations } from 'next-intl'
import { usePathname } from '@/i18n/navigation'
import { LanguageSelector } from './LanguageSelector'
import { MobileNavLink } from './MobileNavLink'
import { cn } from '@/lib/cn'

interface MobileMenuProps {
  onClose: () => void
  mounted: boolean
}

const GET_STARTED_ROUTES = ['/get-started', '/get-started/take-control', '/downloads', '/get-started/buy-online', '/get-started/spend', '/get-started/transactions']
const INSTITUTIONS_ROUTES = ['/institutions', '/institutions/traders', '/institutions/financial-services', '/institutions/regulatory', '/institutions/fastpass']
const DEVELOPERS_ROUTES = ['/build', '/developers/platform', '/developers/discover', '/developers/contributing', '/developers/tools', '/developers/roadmap']

export function MobileMenu ({
  onClose,
  mounted
}: MobileMenuProps): React.ReactNode {
  const t = useTranslations('nav')
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

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
            className='flex size-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-white/10 transition-all duration-300 hover:bg-primary-dark/20 dark:hover:bg-white/20 hover:rotate-12 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2'
            aria-label='Toggle theme'
          >
            {mounted && theme === 'dark'
              ? (
                <Moon className='size-5 text-primary-dark dark:text-white transition-transform duration-300' />
                )
              : (
                <Sun className='size-5 text-primary-dark dark:text-white transition-transform duration-300' />
                )}
          </button>
        </div>

        <nav className='flex flex-1 flex-col gap-2 overflow-y-auto px-6 py-4'>
          {/* Home Section */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                pathname === '/'
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('home')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <MobileNavLink href='/' onClose={onClose}>{t('buildWithDash')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('individuals')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('businesses')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('downloads')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('newMerchantKit')}</MobileNavLink>
            </div>
          </div>

          {/* Get Started Section */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                GET_STARTED_ROUTES.includes(pathname)
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('getStarted')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <MobileNavLink href='/get-started' onClose={onClose}>{t('aboutDash')}</MobileNavLink>
              <MobileNavLink href='/get-started/take-control' onClose={onClose}>{t('takeControl')}</MobileNavLink>
              <MobileNavLink href='/downloads' onClose={onClose}>{t('downloads')}</MobileNavLink>
              <MobileNavLink href='/get-started/buy-online' onClose={onClose}>{t('buyOnline')}</MobileNavLink>
              <MobileNavLink href='/get-started/spend' onClose={onClose}>{t('whereToSpend')}</MobileNavLink>
              <MobileNavLink href='/get-started/transactions' onClose={onClose}>{t('easyTransactions')}</MobileNavLink>
            </div>
          </div>

          {/* Institutions Section */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                INSTITUTIONS_ROUTES.includes(pathname)
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('institutions')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <MobileNavLink href='/institutions' onClose={onClose}>{t('operateWithConfidence')}</MobileNavLink>
              <MobileNavLink href='/institutions/traders' onClose={onClose}>{t('tradeWithConfidence')}</MobileNavLink>
              <MobileNavLink href='/institutions/financial-services' onClose={onClose}>{t('financialServices')}</MobileNavLink>
              <MobileNavLink href='/institutions/regulatory' onClose={onClose}>{t('regulatory')}</MobileNavLink>
              <MobileNavLink href='/institutions/fastpass' onClose={onClose}>{t('fastPass')}</MobileNavLink>
            </div>
          </div>

          {/* Developers Section */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                DEVELOPERS_ROUTES.includes(pathname)
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('developers')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <MobileNavLink href='/build' onClose={onClose}>{t('buildNextGen')}</MobileNavLink>
              <MobileNavLink href='/developers/platform' onClose={onClose}>{t('dashPlatform')}</MobileNavLink>
              <MobileNavLink href='/developers/discover' onClose={onClose}>{t('discoverDash')}</MobileNavLink>
              <MobileNavLink href='/developers/contributing' onClose={onClose}>{t('contributing')}</MobileNavLink>
              <MobileNavLink href='/developers/tools' onClose={onClose}>{t('providersTools')}</MobileNavLink>
              <MobileNavLink href='/developers/roadmap' onClose={onClose}>{t('dashRoadmap')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('documentation')}</MobileNavLink>
            </div>
          </div>

          {/* Community Section */}
          <div className='flex flex-col'>
            <span className='rounded-xl px-4 py-3 text-right text-lg font-semibold text-primary-blue dark:text-primary-turquoise'>
              {t('community')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <MobileNavLink href='#' disabled>{t('bugBounty')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('learningResources')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('connectWithUs')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('forum')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('masternodes')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('mining')}</MobileNavLink>
              <MobileNavLink href='#' disabled>{t('blog')}</MobileNavLink>
            </div>
          </div>
        </nav>

        <div className='p-6'>
          <Button
            variant='solid'
            colorScheme='mint'
            className='h-14 w-full rounded-xl text-base font-semibold'
          >
            {t('buyDash')}
          </Button>
        </div>
      </div>
    </div>
  )
}
