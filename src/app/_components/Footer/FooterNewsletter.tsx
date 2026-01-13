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
    <div className='flex flex-col gap-[15px]'>
      <div className='flex flex-col gap-[5px]'>
        <h3 className='text-[24px] font-extrabold leading-[34px] text-white lg:text-[32px]'>
          {t('title')}
        </h3>
        <p className='text-[13px] font-medium text-white'>
          {t('subtitle')}
        </p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-[12px] sm:flex-row'>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('placeholder')}
          className='h-[66px] w-full rounded-[12px] bg-white/15 px-[25px] text-[18px] font-semibold text-white placeholder:text-white/70 backdrop-blur-[7px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:w-[263px]'
          required
        />
        <button
          type='submit'
          className='h-[65px] rounded-[20px] bg-white px-[35px] text-[18px] font-semibold text-primary-blue transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-blue dark:bg-primary-blue dark:text-white dark:hover:bg-primary-blue/90 dark:focus-visible:ring-primary-blue/50 dark:focus-visible:ring-offset-secondary-space-cadet'
        >
          {t('send')}
        </button>
      </form>
    </div>
  )
}
