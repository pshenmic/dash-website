'use client'

import { useState, useRef, useEffect } from 'react'
import { US, RU } from 'country-flag-icons/react/3x2'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: US, title: 'English' },
  { code: 'ru', label: 'RU', flag: RU, title: 'Русский' }
]

export function LanguageSelector () {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = LANGUAGES.find((_l) => _l.code === locale) ?? LANGUAGES[0]

  const changeLocale = (_newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${_newLocale}`)
    router.push(newPath)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside to prevent UI staying open unexpectedly
  useEffect(() => {
    const handleClickOutside = (_event: MouseEvent) => {
      if ((dropdownRef.current != null) && !dropdownRef.current.contains(_event.target as Node)) {
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
        className='flex items-center gap-2 rounded-[12px] bg-primary-blue/15 px-3 py-2 backdrop-blur-sm'
        aria-expanded={isOpen}
        aria-haspopup='listbox'
      >
        <div className='h-5 w-5 overflow-hidden rounded'>
          <currentLang.flag title={currentLang.title} className='h-full w-full object-cover' />
        </div>
        <span className='text-sm font-bold text-primary-blue'>
          {currentLang.label}
        </span>
        <ChevronDown className={`h-3 w-3 text-primary-blue transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className='absolute left-0 top-full z-50 mt-2 min-w-full overflow-hidden rounded-[12px] bg-primary-white shadow-lg'
          role='listbox'
        >
          {LANGUAGES.map((_lang) => (
            <button
              key={_lang.code}
              onClick={() => changeLocale(_lang.code)}
              className={`flex w-full items-center gap-2 px-3 py-2 hover:bg-primary-blue/10 ${
                _lang.code === locale ? 'bg-primary-blue/15' : ''
              }`}
              role='option'
              aria-selected={_lang.code === locale}
            >
              <div className='h-5 w-5 overflow-hidden rounded'>
                <_lang.flag title={_lang.title} className='h-full w-full object-cover' />
              </div>
              <span className='text-sm font-bold text-primary-blue'>
                {_lang.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
