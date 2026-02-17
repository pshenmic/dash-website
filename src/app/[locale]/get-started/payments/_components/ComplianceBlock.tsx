import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'

export function ComplianceBlock (): React.ReactNode {
  const t = useTranslations('payments.compliance')
  const providers: string[] = t.raw('providers')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative flex flex-col overflow-hidden rounded-3xl bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:flex-row lg:rounded-4xl'>
        {/* 3D Coin Image */}
        <div className='relative h-64 w-full lg:h-auto lg:w-1/2'>
          <Image
            src='/images/payments/compliance-coin.png'
            alt='Compliance'
            fill
            className='object-contain object-center p-8 lg:object-left-bottom lg:p-12'
          />
        </div>

        {/* Content */}
        <div className='flex flex-col gap-6 p-6 lg:w-1/2 lg:gap-9 lg:p-12'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-3xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-relaxed text-white/70 lg:text-base'>
              {t('description')}
            </Text>
          </div>

          {/* Provider list */}
          <ul className='flex flex-col gap-2'>
            {providers.map((provider) => (
              <li key={provider} className='flex items-center gap-2 text-sm font-semibold text-white'>
                <span className='text-primary-turquoise'>•</span>
                {provider}
              </li>
            ))}
          </ul>

          <Button variant='solid' colorScheme='brand' className='w-fit'>
            {t('button')}
          </Button>
        </div>
      </div>
    </div>
  )
}
