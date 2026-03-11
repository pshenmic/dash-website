import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function InstitutionsHero (): React.ReactNode {
  const t = useTranslations('institutionsPage.hero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/institutions/hero-bg.png'
        alt='Institutions hero background'
        width={2048}
        height={2048}
        className='pointer-events-none absolute top-[-117.53%] left-[-42.35%] h-[338.86%] w-[182.18%] max-w-none object-contain'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-9 px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-4'>
          <div className='animate-fade-in-up-1'>
            <Badge variant='bordered' color='white' size='sm'>{t('chip')}</Badge>
          </div>
          <Heading as='h1' className='max-w-full animate-fade-in-up-2 text-center text-4xl leading-tight font-extrabold tracking-tight whitespace-pre-line text-primary-white sm:text-4xl sm:leading-tight lg:text-6xl lg:whitespace-pre xl:text-7xl 2xl:text-8xl'>
            {t('title')}
          </Heading>
          <Text className='max-w-full animate-fade-in-up-3 text-center text-base leading-snug font-medium text-primary-white sm:text-lg lg:max-w-212 lg:text-xl lg:tracking-tight'>
            {t('subtitle')}
          </Text>
        </div>

        <div className='animate-fade-in-up-4'>
          <button className='flex items-center gap-3.75 rounded-full bg-white/15 p-2.5 backdrop-blur-[5px] transition-opacity hover:opacity-90'>
            <span className='pl-6.25 text-lg font-semibold text-white'>{t('learnMore')}</span>
            <div className='flex size-11.25 items-center justify-center rounded-full bg-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
