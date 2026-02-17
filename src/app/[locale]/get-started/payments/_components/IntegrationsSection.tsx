import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'

const stats = ['volume', 'addresses', 'transactions'] as const

export function IntegrationsSection (): React.ReactNode {
  const t = useTranslations('payments.integrations')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
        {/* Left: Text + Button */}
        <div className='flex max-w-sm flex-col gap-6 lg:gap-9'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' size='2xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' opacity={60} className='dark:text-white lg:text-base'>
              {t('description')}
            </Text>
          </div>
          <Button
            variant='outline'
            colorScheme='brand'
            className='w-fit gap-4'
          >
            {t('documentation')}
            <div className='flex size-11 items-center justify-center rounded-full bg-primary-blue'>
              <ArrowRight className='size-4 text-white' />
            </div>
          </Button>
        </div>

        {/* Right: Stat cards */}
        <div className='grid grid-cols-3 gap-3 lg:gap-5'>
          {stats.map((key) => (
            <div
              key={key}
              className='flex flex-col justify-between rounded-3xl bg-primary-blue/5 p-6 dark:bg-primary-blue/15 lg:h-86 lg:w-60 lg:rounded-4xl lg:p-8'
            >
              <div className='relative size-8 lg:size-9'>
                <Image src='/images/payments/dash-d.svg' alt='Dash' fill className='object-contain opacity-30' />
              </div>
              <div className='mt-auto pt-8'>
                <Text size='sm' weight='medium' opacity={60} className='dark:text-white'>
                  {t(`stats.${key}.label`)}
                </Text>
                <Heading as='h3' size='xl' weight='extrabold' className='mt-1 tracking-tight dark:text-white lg:text-2xl'>
                  {t(`stats.${key}.value`)}
                </Heading>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
