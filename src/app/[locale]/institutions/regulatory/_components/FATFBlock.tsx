import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function FATFBlock (): React.ReactNode {
  const t = useTranslations('regulatoryPage.fatf')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-[35px] bg-primary-blue'>
        <div className='relative z-10 flex flex-col items-center gap-10 p-8 lg:flex-row lg:p-16'>
          {/* Left — FATF shield */}
          <div className='flex shrink-0 items-center justify-center lg:w-1/3'>
            <Image
              src='/images/regulatory/logo-fatf.svg'
              alt='FATF'
              width={192}
              height={352}
              className='h-auto w-32 object-contain lg:w-48'
            />
          </div>

          {/* Right — text + button */}
          <div className='flex flex-col gap-8.75 lg:max-w-150'>
            <div className='flex flex-col gap-3.75'>
              <Heading as='h2' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] whitespace-pre-line text-white'>
                {t('title')}
              </Heading>
              <Text weight='medium' className='text-lg leading-normal text-white'>
                {t('description')}{' '}
                <a href={`mailto:${t('email')}`} className='underline'>{t('email')}</a>
              </Text>
            </div>
            <div>
              <button className='flex h-16.25 items-center gap-3.75 rounded-[20px] bg-white/15 p-2.5 backdrop-blur-[5px] transition-opacity hover:opacity-90'>
                <span className='pl-6.25 text-lg font-semibold text-white'>{t('button')}</span>
                <div className='flex size-11.25 items-center justify-center rounded-full bg-white'>
                  <ArrowRight className='size-4 text-primary-blue' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
