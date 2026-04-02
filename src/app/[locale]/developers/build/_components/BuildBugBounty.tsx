import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function BuildBugBounty (): React.ReactNode {
  const t = useTranslations('buildPage.bugBounty')

  return (
    <div data-testid='build-bug-bounty' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative flex h-72 flex-col justify-center overflow-hidden rounded-3xl bg-primary-blue px-5 py-6 dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:h-88 lg:rounded-4xl lg:px-0 lg:py-0'>
        {/* 3D Dash Logo — right side */}
        <div className='pointer-events-none absolute -bottom-[30%] -right-[20%] top-auto h-[160%] w-[70%] lg:-bottom-[50%] lg:-right-[5%] lg:h-[200%] lg:w-[55%]'>
          <Image
            src='/images/shared/3d/dash-logo.png'
            alt='Dash logo'
            fill
            className='object-contain'
          />
        </div>

        {/* Content — left side */}
        <div className='relative z-10 flex max-w-72 flex-col gap-6 lg:ml-24 lg:max-w-100 lg:gap-9'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <Heading as='h3' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-snug text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>
          <button className='flex h-16 w-fit items-center justify-center rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}
