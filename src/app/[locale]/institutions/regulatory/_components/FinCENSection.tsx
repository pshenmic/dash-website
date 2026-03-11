import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function FinCENSection (): React.ReactNode {
  const t = useTranslations('regulatoryPage.fincen')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between'>
        {/* Left — text */}
        <div className='flex flex-col gap-8.75'>
          <div className='flex flex-col gap-3.75 lg:max-w-150'>
            <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
            <Heading as='h2' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] whitespace-pre-line dark:text-white'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-lg leading-normal text-primary-dark! dark:text-white!'>
              {t('description')}
            </Text>
          </div>

          <div className='flex items-center gap-3.75'>
            <button className='flex h-16.25 items-center gap-3.75 rounded-[20px] bg-primary-blue p-2.5 transition-opacity hover:opacity-90'>
              <span className='pl-6.25 text-lg font-semibold text-white'>{t('primaryButton')}</span>
              <div className='flex size-11.25 items-center justify-center rounded-full bg-primary-white'>
                <ArrowRight className='size-4 text-primary-blue' />
              </div>
            </button>
            <button className='h-16.25 rounded-[20px] bg-primary-blue/15 px-8.75 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('secondaryButton')}
            </button>
          </div>
        </div>

        {/* Right — FinCEN seal */}
        <Image
          src='/images/regulatory/fincen-seal.png'
          alt='FinCEN'
          width={320}
          height={320}
          className='size-64 shrink-0 rounded-3xl object-contain lg:size-80'
        />
      </div>
    </div>
  )
}
