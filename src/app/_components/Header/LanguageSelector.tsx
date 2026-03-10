'use client'

import { useState, useRef, useEffect } from 'react'
import { USFlag } from '@/components/icons/USFlag'
import { RUFlag } from '@/components/icons/RUFlag'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/navigation'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/cn'

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: USFlag, title: 'English' },
  { code: 'ru', label: 'RU', flag: RUFlag, title: 'Русский' }
]

export function LanguageSelector (): React.ReactNode {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0]
  const CurrentFlag = currentLang.flag

  const changeLocale = (newLocale: string): void => {
    router.replace(pathname, { locale: newLocale as 'en' | 'ru' })
    setIsOpen(false)
  }

  // Close dropdown when clicking outside to prevent UI staying open unexpectedly
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current != null &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center gap-2 rounded-xl bg-primary-blue/15 px-3 py-2 backdrop-blur-sm transition-colors hover:bg-primary-blue/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue/50'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <div className='h-5 w-5 overflow-hidden rounded'>
          <CurrentFlag
            title={currentLang.title}
            className='h-full w-full object-cover'
          />
        </div>
        <span className='text-sm font-bold text-primary-blue dark:text-primary-turquoise'>
          {currentLang.label}
        </span>
        <ChevronDown
          className={cn('h-3 w-3 text-primary-blue dark:text-primary-turquoise transition-transform', isOpen && 'rotate-180')}
        />
      </button>

      {isOpen && (
        <div
          className='absolute top-full left-0 z-50 mt-2 min-w-full overflow-hidden rounded-xl bg-primary-white dark:bg-primary-dark shadow-lg dark:shadow-primary-dark/20'
          role='listbox'
        >
          {LANGUAGES.map((lang) => {
            const LangFlag = lang.flag
            return (
              <button
                key={lang.code}
                onClick={() => changeLocale(lang.code)}
                className={cn(
                  'flex w-full items-center gap-2 px-3 py-2 transition-colors hover:bg-primary-blue/10 dark:hover:bg-primary-blue/20 focus:outline-none focus-visible:bg-primary-blue/15',
                  lang.code === locale && 'bg-primary-blue/15'
                )}
                role='option'
                aria-selected={lang.code === locale}
              >
                <div className='h-5 w-5 overflow-hidden rounded'>
                  <LangFlag
                    title={lang.title}
                    className='h-full w-full object-cover'
                  />
                </div>
                <span className='text-sm font-bold text-primary-blue dark:text-primary-turquoise'>
                  {lang.label}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
