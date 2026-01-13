import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

export function GetStartedHero (): React.ReactNode {
  const t = useTranslations('getStartedHero')

  return (
    <section className='relative flex min-h-[100svh] min-h-screen items-center justify-center overflow-hidden rounded-b-[50px] bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/bg-get-started.webp'
        alt=''
        fill
        className='pointer-events-none animate-[breathe-normal_8s_ease-in-out_infinite] object-cover object-center dark:brightness-50'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-[35px] px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-[15px]'>
          <div className='animate-[fade-in-up_0.6s_ease-out_0.2s_both]'>
            <Chip>{t('chip')}</Chip>
          </div>
          <h1 className='max-w-full animate-[fade-in-up_0.6s_ease-out_0.4s_both] text-center text-[32px] leading-[1.1] font-extrabold tracking-[-0.03em] whitespace-pre-line text-primary-white sm:text-[38px] sm:leading-[1.05] lg:text-[64px] lg:whitespace-pre xl:text-[80px] 2xl:text-[96px]'>
            {t('title')}
          </h1>
          <p className='max-w-full animate-[fade-in-up_0.6s_ease-out_0.6s_both] text-center text-base leading-[1.37] font-medium text-primary-white sm:text-lg lg:max-w-[850px] lg:text-[28px] lg:tracking-[-0.03em]'>
            {t('subtitle')}
          </p>
        </div>

        <div className='flex animate-[fade-in-up_0.6s_ease-out_0.8s_both] flex-col items-center gap-2.5 lg:flex-row lg:gap-[15px]'>
          <div className='transition-transform duration-200 hover:scale-105'>
            <Button variant='primary'>{t('whereToSpend')}</Button>
          </div>
          <div className='transition-transform duration-200 hover:scale-105'>
            <Button
              variant='secondary'
              icon={
                <div className='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary-white'>
                  <ArrowRight className='h-[15px] w-[15px] text-primary-blue' />
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
