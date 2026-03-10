import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const stats = ['volume', 'addresses', 'transactions'] as const

export function IntegrationsSection (): React.ReactNode {
  const t = useTranslations('payments.integrations')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between'>
        {/* Left: Text + Button */}
        <div className='flex max-w-sm flex-col gap-6 lg:gap-9'>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex w-fit items-center justify-center rounded-full border border-primary-dark px-8 py-2.5 text-xs font-medium text-primary-dark dark:border-white dark:text-white'>
              {t('chip')}
            </div>
            <Heading as='h2' size='2xl' weight='extrabold' className='leading-tight tracking-tight dark:text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text size='base' weight='medium' className='text-primary-dark dark:text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>
          <button className='flex w-fit items-center gap-3.75 rounded-[20px] bg-primary-blue p-2.5 text-lg font-semibold text-white'>
            {t('documentation')}
            <div className='flex size-11.25 shrink-0 items-center justify-center rounded-full bg-white'>
              <ArrowUpRight className='size-4 text-primary-blue' />
            </div>
          </button>
        </div>

        {/* Right: Stat cards */}
        <div className='grid grid-cols-3 gap-3'>
          {stats.map((key) => (
            <div
              key={key}
              className='flex flex-col justify-between rounded-3xl border border-primary-blue p-6 lg:h-86.5 lg:rounded-4xl lg:p-8'
            >
              <div className='relative size-8 lg:size-9'>
                <Image src='/images/payments/dash-d.svg' alt='Dash' fill className='object-contain' />
              </div>
              <div className='mt-auto pt-8'>
                <Text size='sm' weight='medium' opacity={60} className='dark:text-white'>
                  {t(`stats.${key}.label`)}
                </Text>
                <Heading as='h3' size='xl' weight='extrabold' className='mt-1 tracking-tight text-primary-blue lg:text-2xl'>
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
