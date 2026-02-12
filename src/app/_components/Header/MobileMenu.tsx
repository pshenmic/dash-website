'use client'

import { useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme, Button } from 'dash-ui-kit/react'
import { useTranslations } from 'next-intl'
import { Link, usePathname } from '@/i18n/navigation'
import { LanguageSelector } from './LanguageSelector'
import { cn } from '@/lib/cn'

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
          {/* Home Section with submenu */}
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
              <Link
                href='/'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('buildWithDash')}
              </Link>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('individuals')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('businesses')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('downloads')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('newMerchantKit')}
              </span>
            </div>
          </div>
          {/* Get Started Section with submenu */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                pathname === '/get-started' || pathname === '/get-started/payments' || pathname === '/downloads' || pathname === '/get-started/buy-online' || pathname === '/get-started/spend' || pathname === '/get-started/transactions'
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('getStarted')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <Link
                href='/get-started'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/get-started'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('aboutDash')}
              </Link>
              <Link
                href='/get-started/payments'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/get-started/payments'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('takeControl')}
              </Link>
              <Link
                href='/downloads'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/downloads'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('downloads')}
              </Link>
              <Link
                href='/get-started/buy-online'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/get-started/buy-online'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('buyOnline')}
              </Link>
              <Link
                href='/get-started/spend'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/get-started/spend'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('whereToSpend')}
              </Link>
              <Link
                href='/get-started/transactions'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/get-started/transactions'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('easyTransactions')}
              </Link>
            </div>
          </div>
          {/* Institutions Section with submenu */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                pathname === '/institutions' || pathname === '/institutions/traders' || pathname === '/institutions/financial-services' || pathname === '/institutions/regulatory' || pathname === '/institutions/fastpass'
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('institutions')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <Link
                href='/institutions'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/institutions'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('operateWithConfidence')}
              </Link>
              <Link
                href='/institutions/traders'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/institutions/traders'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('tradeWithConfidence')}
              </Link>
              <Link
                href='/institutions/financial-services'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/institutions/financial-services'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('financialServices')}
              </Link>
              <Link
                href='/institutions/regulatory'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/institutions/regulatory'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('regulatory')}
              </Link>
              <Link
                href='/institutions/fastpass'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/institutions/fastpass'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('fastPass')}
              </Link>
            </div>
          </div>
          {/* Developers Section with submenu */}
          <div className='flex flex-col'>
            <span
              className={cn(
                'rounded-xl px-4 py-3 text-right text-lg transition-smooth',
                pathname === '/build' || pathname === '/developers/platform' || pathname === '/discover' || pathname === '/developers/contributing' || pathname === '/developers/tools' || pathname === '/developers/roadmap'
                  ? 'font-bold text-primary-dark dark:text-white'
                  : 'font-semibold text-primary-blue dark:text-primary-turquoise'
              )}
            >
              {t('developers')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <Link
                href='/build'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/build'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('buildNextGen')}
              </Link>
              <Link
                href='/developers/platform'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/developers/platform'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('dashPlatform')}
              </Link>
              <Link
                href='/discover'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/discover'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('discoverDash')}
              </Link>
              <Link
                href='/developers/contributing'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/developers/contributing'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('contributing')}
              </Link>
              <Link
                href='/developers/tools'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/developers/tools'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('providersTools')}
              </Link>
              <Link
                href='/developers/roadmap'
                className={cn(
                  'rounded-xl px-4 py-2.5 text-right text-base transition-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50 focus-visible:ring-offset-2',
                  pathname === '/developers/roadmap'
                    ? 'bg-primary-blue/10 dark:bg-primary-blue/20 font-semibold text-primary-blue dark:text-primary-turquoise'
                    : 'font-medium text-primary-dark dark:text-white hover:bg-primary-blue/5 dark:hover:bg-white/5'
                )}
                onClick={onClose}
              >
                {t('dashRoadmap')}
              </Link>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('documentation')}
              </span>
            </div>
          </div>
          {/* Community Section with submenu */}
          <div className='flex flex-col'>
            <span className='rounded-xl px-4 py-3 text-right text-lg font-semibold text-primary-blue dark:text-primary-turquoise'>
              {t('community')}
            </span>
            <div className='flex flex-col gap-1 pr-4'>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('bugBounty')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('learningResources')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('connectWithUs')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('forum')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('masternodes')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('mining')}
              </span>
              <span className='rounded-xl px-4 py-2.5 text-right text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
                {t('blog')}
              </span>
            </div>
          </div>
        </nav>

        <div className='p-6'>
          <Button
            variant='solid'
            colorScheme='brand'
            className='h-14 w-full rounded-xl text-base font-semibold'
          >
            {t('buyDash')}
          </Button>
        </div>
      </div>
    </div>
  )
}
