import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function DeveloperSDKs (): React.ReactNode {
  const t = useTranslations('platformPage.developerSDKs')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft lg:rounded-4xl lg:p-9'>
        <div className='flex flex-col gap-4 lg:max-w-[45%]'>
          <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! lg:text-4xl lg:leading-10'>
            {t('title')}
          </Heading>
          <Text size='xs' weight='medium' className='text-primary-dark! lg:text-sm'>
            {t('description')}
          </Text>
        </div>

        {/* Laptop image — right side */}
        <div className='pointer-events-none absolute -right-[5%] -top-[30%] hidden h-[160%] w-[50%] lg:block'>
          <Image
            src='/images/developers/platform/developer-sdks.png'
            alt='Developer SDKs'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </div>
  )
}
