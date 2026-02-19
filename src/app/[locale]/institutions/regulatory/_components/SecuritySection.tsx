import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function SecuritySection (): React.ReactNode {
  const t = useTranslations('regulatoryPage.security')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between'>
        {/* Left — text */}
        <div className='flex max-w-xl flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
            <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight dark:text-white'>
              {t('title')}
            </Heading>
            <div className='flex flex-col gap-3'>
              <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark/50! dark:text-white/50!'>
                {t('description')}
              </Text>
              <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark/50! dark:text-white/50!'>
                {t('secondParagraph')}{' '}
                <a href={`mailto:${t('email')}`} className='text-primary-blue underline'>{t('email')}</a>
              </Text>
            </div>
          </div>

          <button className='flex w-fit items-center gap-4 rounded-2xl bg-primary-blue px-4 py-2.5 text-base font-semibold text-white transition-opacity hover:opacity-90'>
            {t('button')}
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>

        {/* Right — padlock */}
        <div className='relative size-64 shrink-0 lg:size-80'>
          <Image
            src='/images/regulatory/padlock-3d.png'
            alt=''
            width={334}
            height={340}
            className='absolute inset-0 h-full w-full object-contain'
          />
        </div>
      </div>
    </div>
  )
}
