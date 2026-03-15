import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function BuildHero (): React.ReactNode {
  const t = useTranslations('buildPage.hero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/developers/build/hero-bg.png'
        alt='Build hero background'
        width={1920}
        height={1920}
        className='pointer-events-none absolute top-[-50%] left-1/2 h-[200%] w-auto -translate-x-1/2 object-contain'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-9 px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-4'>
          <div className='animate-fade-in-up-1'>
            <Badge variant='bordered' color='white' size='sm'>{t('chip')}</Badge>
          </div>
          <Heading as='h1' className='max-w-full animate-fade-in-up-2 text-center text-4xl leading-tight font-extrabold tracking-tight text-primary-white sm:text-5xl sm:leading-tight lg:text-7xl xl:text-8xl xl:leading-[98px]'>
            {t('title')}
          </Heading>
          <Text className='max-w-full animate-fade-in-up-3 text-center text-base leading-snug font-medium text-primary-white sm:text-lg lg:max-w-212 lg:text-xl xl:text-[28px] lg:tracking-tight'>
            {t('subtitle')}
          </Text>
        </div>

        <div className='animate-fade-in-up-4 flex flex-col gap-4 sm:flex-row'>
          <button className='flex h-16 items-center justify-center rounded-full bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
            {t('primaryButton')}
          </button>
          <button className='flex items-center gap-4 rounded-full bg-white/15 px-3 py-2.5 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
            <span className='pl-6'>{t('secondaryButton')}</span>
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
