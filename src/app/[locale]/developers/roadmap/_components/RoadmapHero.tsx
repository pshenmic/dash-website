import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function RoadmapHero (): React.ReactNode {
  const t = useTranslations('roadmapPage.hero')

  return (
    <section className='relative flex min-h-svh items-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/developers/build/hero-bg.png'
        alt='Roadmap hero background'
        width={1920}
        height={1920}
        className='pointer-events-none absolute top-[-50%] left-1/2 h-[200%] w-auto -translate-x-1/2 object-contain'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-9 px-6 py-24 lg:flex-row lg:items-start lg:justify-between lg:px-8'>
        {/* Left — Title + Description */}
        <div className='flex max-w-3xl flex-col gap-6'>
          <Heading as='h1' className='animate-fade-in-up text-5xl leading-tight font-extrabold tracking-tight text-primary-white sm:text-6xl lg:text-8xl lg:leading-[98px]'>
            {t('title')}
          </Heading>
          <Text className='animate-fade-in-up-1 max-w-2xl text-base leading-relaxed font-light text-primary-white sm:text-lg'>
            {t('description')}
          </Text>
        </div>

        {/* Right — Jump to Latest button */}
        <div className='animate-fade-in-up-2 shrink-0'>
          <button className='flex items-center gap-4 rounded-full bg-white/15 px-3 py-2.5 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
            <span className='pl-6'>{t('button')}</span>
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
              <ArrowDown className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
