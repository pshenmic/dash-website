import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { JumpToLatestButton } from './JumpToLatestButton'

export function RoadmapHero (): React.ReactNode {
  const t = useTranslations('roadmapPage.hero')

  return (
    <section className='relative overflow-hidden bg-primary-blue pt-24 pb-4 dark:bg-primary-dark sm:pt-32 lg:pt-40 lg:pb-6'>
      <Image
        src='/images/developers/build/hero-bg.png'
        alt='Roadmap hero background'
        width={1920}
        height={1920}
        className='pointer-events-none absolute top-[-140%] left-[-15%] h-[300%] w-auto object-contain opacity-40 sm:opacity-100'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-5 sm:gap-7 sm:px-6 sm:py-8 lg:px-8 lg:py-10'>
        {/* Title + Jump button in one row */}
        <div className='flex items-start justify-between gap-3 sm:gap-4'>
          <Heading as='h1' className='animate-fade-in-up text-4xl leading-tight font-extrabold tracking-tight text-primary-white sm:text-6xl lg:text-8xl lg:leading-[98px]'>
            {t('title')}
          </Heading>
          <div className='animate-fade-in-up-2 shrink-0'>
            <JumpToLatestButton label={t('button')} />
          </div>
        </div>

        {/* Description */}
        <Text className='animate-fade-in-up-1 max-w-[776px] text-sm leading-normal font-light text-primary-white sm:text-lg'>
          {t('description')}
        </Text>
      </div>
    </section>
  )
}
