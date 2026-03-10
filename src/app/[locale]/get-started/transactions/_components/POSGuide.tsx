import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'

export function POSGuide (): React.ReactNode {
  const t = useTranslations('transactions.posGuide')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-8 lg:flex-row'>
        {/* Left — blue card with keyboard image */}
        <div className='relative flex-1 overflow-hidden rounded-[35px] bg-primary-blue'>
          {/* Image overflowing from top-right */}
          <div className='absolute -top-40 left-63 hidden lg:block'>
            <Image
              src='/images/transactions/pos-keyboard.png'
              alt='POS terminal keyboard'
              width={825}
              height={794}
              className='pointer-events-none max-w-none'
            />
          </div>

          {/* Text content */}
          <div className='flex flex-col gap-16 p-12.5'>
            {/* Top text group */}
            <div className='flex max-w-66.75 flex-col gap-3.75'>
              <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white md:text-[38px] md:leading-10'>
                {t('posTitle')}
              </Heading>
              <p className='text-lg font-medium leading-normal text-white'>
                {t('posDescription')}
              </p>
            </div>

            {/* Bottom text group */}
            <div className='flex flex-col gap-3.75'>
              <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white md:text-[38px] md:leading-10'>
                {t('posQuestion')}
              </Heading>
              <p className='max-w-166.75 text-lg font-medium leading-normal text-white'>
                {t('posAnswer')}
              </p>
            </div>
          </div>
        </div>

        {/* Right — plain text (no card) */}
        <div className='flex shrink-0 flex-col justify-center gap-3.75 lg:max-w-98.75'>
          <span className='self-start rounded-[35px] border border-primary-dark px-8.75 py-2.5 text-xs font-medium text-primary-dark dark:border-white dark:text-white'>
            {t('chip')}
          </span>
          <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight md:text-[38px] md:leading-10 dark:text-white'>
            {t('title')}
          </Heading>
          <div className='max-w-98.75 text-lg font-medium leading-normal text-primary-dark dark:text-white'>
            <p>{t('description1')}</p>
            <p className='mt-5'>{t('description2')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
