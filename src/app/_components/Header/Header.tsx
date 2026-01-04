'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { US, RU, CN } from 'country-flag-icons/react/3x2'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { ChevronDown, Sun, Moon } from 'lucide-react'

const languages = [
  { code: 'en', label: 'EN', flag: US, title: 'English' },
  { code: 'ru', label: 'RU', flag: RU, title: 'Русский' },
  // { code: 'zh', label: 'ZH', flag: CN, title: '中文' }, // Готово для будущего
]

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

export function Header({ nav }: HeaderProps) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isLangOpen, setIsLangOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const currentLang = languages.find((l) => l.code === locale) || languages[0]

  const changeLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setIsLangOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="absolute left-0 right-0 top-0 z-50 p-4 lg:p-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[25px] bg-primary-white p-[15px]">
        {/* Left Nav */}
        <div className="flex shrink-0 items-center gap-[15px] pl-[13px]">
          <Image
            src="/images/logo.svg"
            alt="Dash"
            width={79}
            height={21}
            priority
          />
          {/* Language Selector Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 rounded-[12px] bg-primary-blue/15 px-3 py-2 backdrop-blur-sm"
            >
              <div className="h-5 w-5 overflow-hidden rounded">
                <currentLang.flag title={currentLang.title} className="h-full w-full object-cover" />
              </div>
              <span className="text-sm font-bold text-primary-blue">
                {currentLang.label}
              </span>
              <ChevronDown className={`h-3 w-3 text-primary-blue transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isLangOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-[12px] bg-primary-white shadow-lg">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLocale(lang.code)}
                    className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-primary-blue/10 ${
                      lang.code === locale ? 'bg-primary-blue/15' : ''
                    }`}
                  >
                    <div className="h-5 w-5 overflow-hidden rounded">
                      <lang.flag title={lang.title} className="h-full w-full object-cover" />
                    </div>
                    <span className="text-sm font-bold text-primary-blue">
                      {lang.label}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center Nav - Desktop only */}
        <nav className="hidden shrink-0 items-center gap-10 lg:flex">
          <a href="#" className="whitespace-nowrap text-sm font-extrabold text-primary-dark">
            {nav.home}
          </a>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue"
          >
            {nav.getStarted}
            <ChevronDown className="h-3 w-3 text-primary-blue" />
          </a>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue"
          >
            {nav.institutions}
            <ChevronDown className="h-3 w-3 text-primary-blue" />
          </a>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue"
          >
            {nav.developers}
            <ChevronDown className="h-3 w-3 text-primary-blue" />
          </a>
          <a
            href="#"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-primary-blue"
          >
            {nav.community}
            <ChevronDown className="h-3 w-3 text-primary-blue" />
          </a>
        </nav>

        {/* Right Nav */}
        <div className="flex shrink-0 items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10"
            aria-label="Toggle theme"
          >
            {mounted && theme === 'dark' ? <Moon className="h-[18px] w-[18px] text-primary-dark" /> : <Sun className="h-[18px] w-[18px] text-primary-dark" />}
          </button>
          {/* Buy Dash Button */}
          <button className="h-[46px] min-w-[120px] shrink-0 whitespace-nowrap rounded-[12px] bg-primary-turquoise px-5 text-sm font-semibold text-primary-dark">
            {nav.buyDash}
          </button>
        </div>
      </div>
    </header>
  )
}
