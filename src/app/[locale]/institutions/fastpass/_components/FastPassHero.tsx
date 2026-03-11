import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Text } from 'dash-ui-kit/react'

export function FastPassHero (): React.ReactNode {
  const t = useTranslations('fastpassPage.hero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/fastpass/hero-bg.png'
        alt='FastPass hero background'
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
          <Text className='max-w-full animate-fade-in-up-3 text-center text-lg leading-normal font-medium text-primary-white sm:text-xl lg:max-w-[900px] lg:text-[28px] lg:tracking-[-0.84px]'>
            {t('subtitle')}
          </Text>
        </div>

        <div className='flex animate-fade-in-up-4 gap-3.75'>
          <button className='flex h-16.25 items-center justify-center rounded-full bg-white px-8.75 text-lg font-semibold text-primary-blue backdrop-blur-sm transition-opacity hover:opacity-90'>
            {t('partnersButton')}
          </button>
          <button className='flex h-16.25 items-center gap-3.75 rounded-full bg-white/15 p-2.5 text-lg font-semibold text-white backdrop-blur-[5px] transition-opacity hover:opacity-90'>
            <span className='pl-6.25'>{t('educationButton')}</span>
            <div className='flex size-11.25 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
