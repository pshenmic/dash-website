import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function StakingBlock (): React.ReactNode {
  const t = useTranslations('financialServicesPage.stakingBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <div className='relative z-10 flex flex-col items-center gap-10 p-8 text-center lg:items-start lg:p-16 lg:text-left'>
          <div className='flex max-w-xl flex-col gap-4'>
            <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line text-white'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-relaxed text-white lg:text-base'>
              {t('description')}
            </Text>
          </div>

          <button className='flex items-center gap-4 rounded-full bg-white/15 px-3 py-2.5 text-base font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
            {t('button')}
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
              <ArrowRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
