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
        <div className='flex flex-col gap-8.75'>
          <div className='flex flex-col gap-3.75 lg:max-w-175'>
            <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
            <Heading as='h2' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] dark:text-white'>
              {t('title')}
            </Heading>
            <div className='flex flex-col gap-4.5'>
              <Text weight='medium' className='text-lg leading-normal text-primary-dark! dark:text-white!'>
                {t('description')}
              </Text>
              <Text weight='medium' className='text-lg leading-normal text-primary-dark! dark:text-white!'>
                {t('secondParagraph')}{' '}
                <a href={`mailto:${t('email')}`} className='underline'>{t('email')}</a>
              </Text>
            </div>
          </div>

          <button className='flex h-16.25 w-fit items-center gap-3.75 rounded-[20px] bg-primary-blue p-2.5 transition-opacity hover:opacity-90'>
            <span className='pl-6.25 text-lg font-semibold text-white'>{t('button')}</span>
            <div className='flex size-11.25 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>

        {/* Right — padlock */}
        <div className='relative size-64 shrink-0 lg:size-80'>
          <Image
            src='/images/regulatory/padlock-3d.png'
            alt='Security padlock'
            width={334}
            height={340}
            className='absolute inset-0 h-full w-full object-contain'
          />
        </div>
      </div>
    </div>
  )
}
