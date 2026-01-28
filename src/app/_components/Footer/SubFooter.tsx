import { useTranslations } from 'next-intl'

export function SubFooter (): React.ReactNode {
  const t = useTranslations('footer')

  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left'>
      <span className='animate-fade-in-up text-sm font-medium text-primary-white/50 dark:text-primary-dark/50'>
        {t('copyright')}
      </span>
      <div className='animate-fade-in-up-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-medium text-primary-white/50 dark:text-primary-dark/50'>
        <a
          href='#'
          className='transition-all duration-300 hover:text-primary-turquoise focus:text-primary-turquoise focus:outline-none focus-visible:underline'
        >
          {t('termsOfUse')}
        </a>
        <span className='hidden sm:inline'>•</span>
        <a
          href='#'
          className='transition-all duration-300 hover:text-primary-turquoise focus:text-primary-turquoise focus:outline-none focus-visible:underline'
        >
          {t('privacyStatement')}
        </a>
        <span className='hidden sm:inline'>•</span>
        <a
          href='#'
          className='transition-all duration-300 hover:text-primary-turquoise focus:text-primary-turquoise focus:outline-none focus-visible:underline'
        >
          {t('privacyPolicy')}
        </a>
      </div>
    </div>
  )
}
