import { useTranslations } from 'next-intl'

export function QuoteBlock (): React.ReactNode {
  const t = useTranslations('transactions')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-center gap-8'>
        <blockquote className='text-center text-2xl leading-snug font-extrabold tracking-tight text-primary-dark dark:text-white sm:text-3xl lg:text-4xl'>
          {t('quote')}
        </blockquote>
        <button className='rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-blue shadow-soft transition-opacity hover:opacity-90 dark:bg-secondary-space-cadet dark:text-white'>
          {t('becomeButton')}
        </button>
      </div>
    </div>
  )
}
