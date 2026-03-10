import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'

export function BrandGuidelines (): React.ReactNode {
  const t = useTranslations('payments.brandGuidelines')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative flex flex-col overflow-hidden rounded-3xl bg-white/15 lg:h-85 lg:rounded-[35px]'>
        {/* Content */}
        <div className='flex flex-col gap-6 p-6 lg:absolute lg:left-25 lg:top-1/2 lg:-translate-y-1/2 lg:w-100 lg:gap-8.75 lg:p-0'>
          <div className='flex flex-col gap-4 lg:gap-3.75'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight text-white lg:text-[38px] lg:leading-10 lg:tracking-[-1.14px]'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-relaxed text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>
          <Button variant='solid' colorScheme='brand' className='w-fit bg-white! text-primary-dark! hover:bg-white/85!'>
            {t('button')}
          </Button>
        </div>

        {/* 3D Palette Image */}
        <div className='relative h-64 w-full lg:absolute lg:right-0 lg:-top-28.5 lg:h-167 lg:w-[54%]'>
          <Image
            src='/images/payments/brand-sphere.png'
            alt='Brand guidelines'
            fill
            className='object-contain object-top'
          />
        </div>
      </div>
    </div>
  )
}
