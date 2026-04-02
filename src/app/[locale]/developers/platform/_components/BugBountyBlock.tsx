import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function BugBountyBlock (): React.ReactNode {
  const t = useTranslations('platformPage.bugBounty')

  return (
    <div data-testid='bug-bounty-block' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-4xl bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
        {/* 3D Image — right side */}
        <div className='pointer-events-none absolute -right-[10%] -bottom-[20%] hidden h-[140%] w-[55%] rotate-180 lg:block'>
          <Image
            src='/images/developers/platform/bug-bounty.png'
            alt='Bug Bounty'
            fill
            className='object-cover'
          />
        </div>

        {/* Content — left side */}
        <div className='relative z-10 flex flex-col gap-9 p-8 lg:max-w-[50%] lg:p-24'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-white lg:max-w-100 lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <div>
            <button className='flex h-16 items-center justify-center rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('button')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
