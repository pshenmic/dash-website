import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function QuoteBlock (): React.ReactNode {
  const t = useTranslations('transactions')

  return (
    <div className='relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Left — text + button */}
      <div className='relative z-10 flex flex-col items-start gap-8.75 lg:max-w-171.5'>
        <blockquote className='text-[38px] font-medium leading-10 text-white' style={{ letterSpacing: '-0.03em' }}>
          {t.rich('quote', {
            bold: (chunks) => <strong className='font-extrabold'>{chunks}</strong>
          })}
        </blockquote>
        <button className='h-16.25 rounded-[55px] bg-white px-8.75 text-lg font-semibold text-primary-blue backdrop-blur-sm transition-smooth hover:opacity-90'>
          {t('becomeButton')}
        </button>
      </div>

      {/* Right — image, rotated -90deg, large overflow */}
      <Image
        src='/images/transactions/hero-bg.png'
        alt=''
        role='presentation'
        width={1024}
        height={1024}
        className='pointer-events-none absolute right-0 top-1/2 hidden h-[300%] w-auto max-w-none -translate-y-1/2 -rotate-90 object-contain lg:block'
      />
    </div>
  )
}
