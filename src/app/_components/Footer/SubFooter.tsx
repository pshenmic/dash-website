import { useTranslations } from 'next-intl'

export function SubFooter (): React.ReactNode {
  const t = useTranslations('footer')

  return (
    <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left'>
      <span className='text-[13px] font-medium text-primary-dark/50 dark:text-primary-white/50'>
        {t('copyright')}
      </span>
      <div className='flex flex-wrap items-center justify-center gap-x-[15px] gap-y-1 text-[13px] font-medium text-primary-dark/50 dark:text-primary-white/50'>
        <a
          href='#'
          className='transition-colors hover:text-primary-dark/70 focus:outline-none focus-visible:underline dark:hover:text-primary-white/70'
        >
          {t('termsOfUse')}
        </a>
        <span className='hidden sm:inline'>•</span>
        <a
          href='#'
          className='transition-colors hover:text-primary-dark/70 focus:outline-none focus-visible:underline dark:hover:text-primary-white/70'
        >
          {t('privacyStatement')}
        </a>
        <span className='hidden sm:inline'>•</span>
        <a
          href='#'
          className='transition-colors hover:text-primary-dark/70 focus:outline-none focus-visible:underline dark:hover:text-primary-white/70'
        >
          {t('privacyPolicy')}
        </a>
      </div>
    </div>
  )
}
