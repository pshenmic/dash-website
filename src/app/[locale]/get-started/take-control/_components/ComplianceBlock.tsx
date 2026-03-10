import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'

export function ComplianceBlock (): React.ReactNode {
  const t = useTranslations('payments.compliance')
  const providers: string[] = t.raw('providers')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative flex flex-col overflow-hidden rounded-3xl bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl'>
        {/* Mobile image */}
        <div className='relative h-64 w-full shrink-0 lg:hidden'>
          <Image
            src='/images/payments/compliance-coin.png'
            alt='Compliance'
            fill
            className='object-contain object-center'
          />
        </div>

        {/* Desktop: absolute overflowing image (left side) */}
        <div className='pointer-events-none absolute hidden lg:block -left-[23%] top-1/2 -translate-y-1/2 h-[300%] w-[104%]'>
          <Image
            src='/images/payments/compliance-coin.png'
            alt='Compliance'
            fill
            className='object-contain'
          />
        </div>

        {/* Content */}
        <div className='relative z-10 flex flex-col gap-6 p-6 lg:ml-auto lg:mr-24 lg:max-w-md lg:gap-9 lg:py-12'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white lg:text-3xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-relaxed text-white/70 lg:text-base'>
              {t('description')}
            </Text>
          </div>

          {/* Provider list */}
          <ul className='flex list-disc flex-col gap-2 pl-5'>
            {providers.map((provider) => (
              <li key={provider} className='text-base font-extrabold text-white lg:text-lg'>
                {provider}
              </li>
            ))}
          </ul>

          <Button variant='solid' colorScheme='brand' className='w-fit bg-white! text-primary-dark! hover:bg-white/90!'>
            {t('button')}
          </Button>
        </div>
      </div>
    </div>
  )
}
