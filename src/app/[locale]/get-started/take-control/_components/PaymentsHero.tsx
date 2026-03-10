import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge } from 'dash-ui-kit/react'

export function PaymentsHero (): React.ReactNode {
  const t = useTranslations('payments.hero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/payments/hero-bg.png'
        alt='Payments hero background'
        fill
        className='pointer-events-none animate-breathe object-cover object-center dark:brightness-50'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-9 px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-4'>
          <div className='animate-fade-in-up-1'>
            <Badge variant='bordered' color='white' size='sm'>{t('chip')}</Badge>
          </div>
          <h1 className='max-w-full animate-fade-in-up-2 text-center text-4xl leading-tight font-extrabold tracking-tight whitespace-pre-line text-primary-white sm:text-4xl sm:leading-tight lg:text-6xl lg:whitespace-pre xl:text-7xl 2xl:text-8xl'>
            {t('title')}
          </h1>
          <p className='max-w-full animate-fade-in-up-3 text-center text-base leading-snug font-medium text-primary-white sm:text-lg lg:max-w-181 lg:text-3xl lg:tracking-tight'>
            {t('subtitle')}
          </p>
        </div>

        <div className='flex animate-fade-in-up-4 flex-col items-center gap-2.5 lg:flex-row lg:gap-4'>
          <button className='h-16.25 rounded-full bg-white px-9 text-lg font-semibold text-primary-dark backdrop-blur-sm transition-smooth active-press'>
            {t('acceptDash')}
          </button>
          <button className='flex h-16.25 items-center gap-4 rounded-full bg-white/15 pl-9 pr-2.5 text-lg font-semibold text-white backdrop-blur-sm transition-smooth active-press'>
            {t('documentation')}
            <div className='flex size-11.25 shrink-0 items-center justify-center rounded-full bg-white'>
              <ArrowUpRight className='size-5 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
