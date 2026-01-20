import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

export function GetStartedHero (): React.ReactNode {
  const t = useTranslations('getStartedHero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-12 bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/get-started/bg-get-started.webp'
        alt=''
        fill
        className='pointer-events-none animate-breathe-normal object-cover object-center dark:brightness-50'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-9 px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-4'>
          <div className='animate-fade-in-up-1'>
            <Chip>{t('chip')}</Chip>
          </div>
          <h1 className='max-w-full animate-fade-in-up-2 text-center text-4xl leading-tight font-extrabold tracking-tight whitespace-pre-line text-primary-white sm:text-4xl sm:leading-tight lg:text-6xl lg:whitespace-pre xl:text-7xl 2xl:text-8xl'>
            {t('title')}
          </h1>
          <p className='max-w-full animate-fade-in-up-3 text-center text-base leading-snug font-medium text-primary-white sm:text-lg lg:max-w-212 lg:text-3xl lg:tracking-tight'>
            {t('subtitle')}
          </p>
        </div>

        <div className='flex animate-fade-in-up-4 flex-col items-center gap-2.5 lg:flex-row lg:gap-4'>
          <div className='transition-transform duration-200 hover:scale-105'>
            <Button variant='primary'>{t('whereToSpend')}</Button>
          </div>
          <div className='transition-transform duration-200 hover:scale-105'>
            <Button
              variant='secondary'
              icon={
                <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
                  <ArrowRight className='size-4 text-primary-blue' />
                </div>
              }
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
