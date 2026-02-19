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
        <div className='flex max-w-xl flex-col gap-8'>
          <div className='flex flex-col gap-4'>
            <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
            <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line dark:text-white'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark/50! dark:text-white/50!'>
              {t('description')}
            </Text>
          </div>

          <div className='flex flex-wrap items-center gap-4'>
            <button className='flex items-center gap-4 rounded-2xl bg-primary-blue px-4 py-2.5 text-base font-semibold text-white transition-opacity hover:opacity-90'>
              {t('primaryButton')}
              <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
                <ArrowRight className='size-4 text-primary-blue' />
              </div>
            </button>
            <button className='rounded-2xl bg-primary-blue/15 px-6 py-4 text-base font-semibold text-primary-blue transition-opacity hover:opacity-90'>
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
