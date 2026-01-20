'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function FooterNewsletter (): React.ReactNode {
  const t = useTranslations('footer.newsletter')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    console.log('Subscribe:', email)
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-extrabold leading-9 text-white lg:text-3xl'>
          {t('title')}
        </h3>
        <p className='text-sm font-medium text-white'>
          {t('subtitle')}
        </p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 sm:flex-row'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          className='h-16 w-full rounded-xl bg-white/15 px-6 text-lg font-semibold text-white placeholder:text-white/70 backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-64'
          required
        />
        <button
          type='submit'
          className='h-16 rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-blue dark:bg-primary-blue dark:text-white dark:hover:bg-primary-blue/90 dark:focus-visible:ring-primary-blue/50 dark:focus-visible:ring-offset-secondary-space-cadet'
        >
          {t('send')}
        </button>
      </form>
    </div>
  )
}
