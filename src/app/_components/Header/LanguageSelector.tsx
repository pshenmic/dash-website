'use client'

import { useState, useRef, useEffect } from 'react'
import { US, RU } from 'country-flag-icons/react/3x2'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const languages = [
  { code: 'en', label: 'EN', flag: US, title: 'English' },
  { code: 'ru', label: 'RU', flag: RU, title: 'Русский' },
  // { code: 'zh', label: 'ZH', flag: CN, title: '中文' }, // Готово для будущего
]

export function LanguageSelector() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === locale) || languages[0]

  const changeLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
    setIsOpen(false)
  }

  // Закрытие dropdown при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-[12px] bg-primary-blue/15 px-3 py-2 backdrop-blur-sm"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="h-5 w-5 overflow-hidden rounded">
          <currentLang.flag title={currentLang.title} className="h-full w-full object-cover" />
        </div>
        <span className="text-sm font-bold text-primary-blue">
          {currentLang.label}
        </span>
        <ChevronDown className={`h-3 w-3 text-primary-blue transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-[12px] bg-primary-white shadow-lg"
          role="listbox"
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLocale(lang.code)}
              className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-primary-blue/10 ${
                lang.code === locale ? 'bg-primary-blue/15' : ''
              }`}
              role="option"
              aria-selected={lang.code === locale}
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
  )
}
