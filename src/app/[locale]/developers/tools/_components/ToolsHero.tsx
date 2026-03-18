import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function ToolsHero (): React.ReactNode {
  const t = useTranslations('toolsPage.hero')

  return (
    <section className='relative flex min-h-[500px] items-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark lg:min-h-[635px]'>
      <Image
        src='/images/developers/tools/hero-bg.png'
        alt='Tools hero background'
        width={1920}
        height={1920}
        className='pointer-events-none absolute top-[-60%] left-[39%] h-[228%] w-[84%] object-contain'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='flex max-w-xl flex-col gap-4'>
          <Heading as='h1' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
            {t('title')}
          </Heading>
          <Text weight='medium' className='whitespace-pre-line text-base leading-normal text-white lg:text-lg'>
            {t('description')}
          </Text>
        </div>
      </div>
    </section>
  )
}
