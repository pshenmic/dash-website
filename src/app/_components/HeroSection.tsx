import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

export function HeroSection () {
  const t = useTranslations('hero')

  return (
    <section className='relative flex min-h-screen items-center justify-center overflow-hidden rounded-b-[50px] bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/hero-decoration.webp'
        alt=''
        fill
        className='pointer-events-none object-cover object-left dark:hidden'
        priority
      />
      <Image
        src='/images/hero-bg-dark.jpg'
        alt=''
        fill
        className='hidden object-cover dark:block'
        priority
      />

      <div className='relative z-10 flex flex-col items-center gap-[35px] px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-[15px]'>
          <Chip>{t('chip')}</Chip>
          <h1 className='max-w-full whitespace-pre-line text-center text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-primary-white sm:text-[38px] sm:leading-[1.05] lg:text-[96px] lg:leading-[1.02]'>
            {t('title')}
          </h1>
          <p className='max-w-full text-center text-base font-medium leading-[1.37] text-primary-white sm:text-lg lg:max-w-[724px] lg:text-[28px] lg:tracking-[-0.03em]'>
            {t('subtitle')}
          </p>
        </div>

        <div className='flex flex-col items-center gap-2.5 lg:flex-row lg:gap-[15px]'>
          <Button variant='primary'>{t('downloadWallet')}</Button>
          <Button
            variant='secondary' icon={
              <div className='flex h-[35px] w-[35px] items-center justify-center rounded-full bg-primary-white/20'>
                <ArrowRight className='h-[15px] w-[15px]' />
              </div>
          }
          >
            {t('documentation')}
          </Button>
        </div>
      </div>
    </section>
  )
}
