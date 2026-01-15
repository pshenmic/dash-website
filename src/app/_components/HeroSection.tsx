import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

export function HeroSection (): React.ReactNode {
  const t = useTranslations('hero')

  return (
    <section className='relative flex min-h-[100svh] min-h-screen items-center justify-center overflow-hidden rounded-b-[50px] bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/bg-hero.png'
        alt=''
        fill
        className='pointer-events-none animate-[breathe_8s_ease-in-out_infinite] object-cover object-center lg:object-right dark:brightness-50'
        priority
      />
      <div className='absolute inset-0 bg-gradient-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-[35px] px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-[15px]'>
          <div className='animate-[fade-in-up_0.6s_ease-out_0.2s_both]'>
            <Chip>{t('chip')}</Chip>
          </div>
          <h1 className='max-w-full animate-[fade-in-up_0.6s_ease-out_0.4s_both] text-center text-4xl leading-[1.1] font-extrabold tracking-[-0.03em] whitespace-pre-line text-primary-white sm:text-4xl sm:leading-[1.05] lg:text-6xl lg:whitespace-pre xl:text-7xl 2xl:text-8xl'>
            {t('title')}
          </h1>
          <p className='max-w-full animate-[fade-in-up_0.6s_ease-out_0.6s_both] text-center text-base leading-[1.37] font-medium text-primary-white sm:text-lg lg:max-w-[724px] lg:text-3xl lg:tracking-[-0.03em]'>
            {t('subtitle')}
          </p>
        </div>

        <div className='flex animate-[fade-in-up_0.6s_ease-out_0.8s_both] flex-col items-center gap-2.5 lg:flex-row lg:gap-[15px]'>
          <div className='transition-transform duration-200 hover:scale-105'>
            <Button variant='primary'>{t('downloadWallet')}</Button>
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
              {t('documentation')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
