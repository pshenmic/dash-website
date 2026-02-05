'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function FooterNewsletter (): React.ReactNode {
  const t = useTranslations('footer.newsletter')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (value: string): boolean => {
    if (value === '') {
      setError(t('errors.required'))
      return false
    }
    if (!EMAIL_REGEX.test(value)) {
      setError(t('errors.invalid'))
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (!validateEmail(email)) return
    // TODO: Implement newsletter subscription
    console.log('Subscribe:', email)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h3 className='animate-fade-in-up text-2xl font-extrabold leading-9 text-white lg:text-3xl'>
          {t('title')}
        </h3>
        <p className='animate-fade-in-up-1 text-sm font-medium text-white'>
          {t('subtitle')}
        </p>
      </div>
      <form onSubmit={handleSubmit} noValidate className='animate-fade-in-up-2 flex flex-col gap-3 sm:flex-row'>
        <div className='flex flex-col'>
          <input
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (error !== '') setError('')
            }}
            placeholder={t('placeholder')}
            className={cn(
              'h-16 w-full rounded-xl border border-transparent bg-white/15 px-6 text-lg font-semibold text-white placeholder:text-white/70 backdrop-blur-md transition-smooth sm:w-64',
              'hover:border-primary-turquoise/30 focus:border-primary-turquoise/50 focus:bg-white/20 focus:shadow-lg focus:shadow-primary-turquoise/20 focus:outline-none',
              error !== '' && 'ring-2 ring-red-400'
            )}
          />
          <p className={cn(
            'mt-1 text-sm text-red-400 transition-opacity',
            error !== '' ? 'opacity-100' : 'opacity-0'
          )}>
            {error || '\u00A0'}
          </p>
        </div>
        <button
          type='submit'
          className='h-16 rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue transition-all duration-300  hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-turquoise/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-blue dark:bg-primary-turquoise dark:text-primary-dark dark:hover:bg-primary-turquoise/90 dark:hover:shadow-primary-turquoise/30 dark:focus-visible:ring-primary-turquoise/50 dark:focus-visible:ring-offset-secondary-space-cadet'
        >
          {t('send')}
        </button>
      </form>
    </div>
  )
}
