import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge } from 'dash-ui-kit/react'

export function FastPassHero (): React.ReactNode {
  const t = useTranslations('fastpassPage.hero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/fastpass/hero-bg.png'
        alt=''
        width={1920}
        height={1920}
        className='pointer-events-none absolute top-[-48.86%] left-0 h-[200.46%] w-full max-w-none object-contain'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-9 px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-4'>
          <div className='animate-fade-in-up-1'>
            <Badge variant='bordered' color='white' size='sm'>{t('chip')}</Badge>
          </div>
          <div className='animate-fade-in-up-2'>
            <Image
              src='/images/fastpass/fastpass-logo.svg'
              alt='FastPass'
              width={826}
              height={140}
              className='h-16 w-auto sm:h-20 lg:h-28 xl:h-35'
              priority
            />
          </div>
          <p className='max-w-full animate-fade-in-up-3 text-center text-base leading-snug font-medium text-primary-white sm:text-lg lg:max-w-212 lg:text-xl lg:tracking-tight'>
            {t('subtitle')}
          </p>
        </div>

        <div className='flex animate-fade-in-up-4 gap-4'>
          <button className='flex h-16 items-center justify-center rounded-full bg-white px-9 text-base font-semibold text-primary-dark backdrop-blur-sm transition-opacity hover:opacity-90'>
            {t('partnersButton')}
          </button>
          <button className='flex items-center gap-4 rounded-full bg-white/15 px-3 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
            {t('educationButton')}
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
