import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Button } from 'dash-ui-kit/react'

export function TransactionsHero (): React.ReactNode {
  const t = useTranslations('transactions.hero')

  return (
    <section className='relative flex min-h-svh items-center justify-center overflow-hidden rounded-b-3xl bg-primary-blue dark:bg-primary-dark'>
      <Image
        src='/images/transactions/hero-bg.png'
        alt=''
        width={1024}
        height={1024}
        className='pointer-events-none absolute right-0 top-1/2 h-auto w-[60%] max-w-2xl -translate-y-1/2 object-contain opacity-80 lg:w-[50%]'
        priority
      />
      <div className='absolute inset-0 bg-linear-to-t from-primary-blue/30 to-transparent dark:from-primary-dark/50' />

      <div className='relative z-10 flex flex-col items-center gap-9 px-6 py-12 lg:max-w-7xl lg:px-16'>
        <div className='flex max-w-full flex-col items-center gap-4'>
          <div className='animate-fade-in-up-1'>
            <Badge variant='bordered' color='white' size='sm'>{t('chip')}</Badge>
          </div>
          <h1 className='max-w-full animate-fade-in-up-2 text-center text-4xl leading-tight font-extrabold tracking-tight whitespace-pre-line text-primary-white sm:text-4xl sm:leading-tight lg:text-6xl lg:whitespace-pre xl:text-7xl 2xl:text-8xl'>
            {t('title')}
          </h1>
          <p className='max-w-full animate-fade-in-up-3 text-center text-base leading-snug font-medium text-primary-white sm:text-lg lg:max-w-212 lg:text-xl lg:tracking-tight'>
            {t('subtitle')}
          </p>
        </div>

        <div className='animate-fade-in-up-4'>
          <Button variant='outline' colorScheme='brand' className='gap-4'>
            {t('learnMore')}
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}
