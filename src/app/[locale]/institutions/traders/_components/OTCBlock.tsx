import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function OTCBlock (): React.ReactNode {
  const t = useTranslations('tradersPage.otcBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-[35px]'>
        <div className='relative z-10 flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-16'>
          {/* Left — text */}
          <div className='flex max-w-150 flex-col gap-3.75'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line text-white lg:text-[38px] lg:leading-10 lg:tracking-[-1.14px]'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          {/* Right — glassmorphic info card */}
          <div className='flex w-full max-w-sm shrink-0 items-center gap-8.75 rounded-[36px] border border-white/15 bg-white/5 px-7.5 py-8.75 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] backdrop-blur-sm'>
            <Image
              src='/images/traders/logo-lgo.svg'
              alt='LGO Group'
              width={68}
              height={68}
              className='size-17 shrink-0 object-contain'
            />
            <div className='flex flex-col gap-3.75'>
              <Heading as='h3' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-[38px] lg:leading-10 lg:tracking-[-1.14px]'>
                {t('lgoTitle')}
              </Heading>
              <Text size='xs' weight='medium' className='text-[13px] leading-normal text-white'>
                {t('lgoDescription')}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
