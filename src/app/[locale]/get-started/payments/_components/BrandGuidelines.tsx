import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'

export function BrandGuidelines (): React.ReactNode {
  const t = useTranslations('payments.brandGuidelines')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative flex flex-col overflow-hidden rounded-3xl bg-primary-blue/10 dark:bg-white/5 lg:flex-row lg:items-center lg:rounded-4xl'>
        {/* Content */}
        <div className='flex flex-col gap-6 p-6 lg:w-1/2 lg:gap-9 lg:p-16'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white lg:text-3xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' opacity={60} className='leading-relaxed dark:text-white lg:text-base'>
              {t('description')}
            </Text>
          </div>
          <Button variant='outline' colorScheme='brand' className='w-fit'>
            {t('button')}
          </Button>
        </div>

        {/* 3D Sphere Image */}
        <div className='relative h-64 w-full lg:h-110 lg:w-1/2'>
          <Image
            src='/images/payments/brand-sphere.png'
            alt='Brand guidelines'
            fill
            className='object-contain object-center lg:object-right'
          />
        </div>
      </div>
    </div>
  )
}
