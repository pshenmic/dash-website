import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function ActionCards (): React.ReactNode {
  const t = useTranslations('platformPage.actionCards')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-6 lg:flex-row lg:gap-9'>
        {/* Documentation Card */}
        <div className='flex flex-1 flex-col gap-4 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet sm:flex-row sm:items-center sm:justify-between lg:rounded-4xl lg:p-9'>
          <div className='flex flex-col gap-4 sm:max-w-80'>
            <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark dark:text-white lg:text-4xl lg:leading-10'>
              {t('documentation.title')}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark dark:text-white lg:text-sm'>
              {t('documentation.description')}
            </Text>
          </div>
          <button className='flex h-16 shrink-0 items-center justify-center rounded-[20px] bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
            {t('documentation.button')}
          </button>
        </div>

        {/* Testnet Card */}
        <div className='flex flex-1 flex-col gap-4 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet sm:flex-row sm:items-center sm:justify-between lg:rounded-4xl lg:p-9'>
          <div className='flex flex-col gap-4 sm:max-w-84'>
            <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark dark:text-white lg:text-4xl lg:leading-10'>
              {t('testnet.title')}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark dark:text-white lg:text-sm'>
              {t('testnet.description')}
            </Text>
          </div>
          <button className='flex h-16 shrink-0 items-center justify-center rounded-[20px] bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
            {t('testnet.button')}
          </button>
        </div>
      </div>
    </div>
  )
}
