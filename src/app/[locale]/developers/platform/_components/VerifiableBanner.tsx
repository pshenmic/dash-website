import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function VerifiableBanner (): React.ReactNode {
  const t = useTranslations('platformPage.verifiable')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-6 rounded-[35px] bg-primary-blue px-8 py-9 dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:flex-row lg:items-center lg:gap-4 lg:px-25 lg:py-9'>
        <div className='flex flex-1 flex-col gap-4'>
          <Badge variant='bordered' color='white' size='sm' className='w-fit'>{t('chip')}</Badge>
          <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
            {t('title')}
          </Heading>
        </div>
        <Text weight='medium' className='text-base leading-normal text-white lg:max-w-115 lg:text-lg'>
          {t('description')}
        </Text>
      </div>
    </div>
  )
}
