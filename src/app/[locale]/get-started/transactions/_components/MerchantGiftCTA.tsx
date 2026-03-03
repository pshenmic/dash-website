import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading } from 'dash-ui-kit/react'

export function MerchantGiftCTA (): React.ReactNode {
  const t = useTranslations('transactions.merchantGift')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-[35px] border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
        <div className='flex flex-col lg:flex-row'>
          {/* Left — image block */}
          <div className='relative hidden min-h-100 w-full shrink-0 lg:block lg:w-[45%]'>
            <Image
              src='/images/transactions/merchant-gift.png'
              alt='Dash merchant gift'
              fill
              className='pointer-events-none scale-125 object-contain object-left'
            />
          </div>

          {/* Right — text content, vertically centered */}
          <div className='flex flex-1 items-center p-8 lg:p-16'>
            <div className='flex flex-col gap-8.75'>
              <div className='flex flex-col gap-3.75'>
                <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight md:text-[38px] md:leading-10 dark:text-white'>
                  {t('title')}
                </Heading>
                <p className='max-w-125 text-lg font-medium leading-normal text-primary-dark dark:text-white'>
                  {t('description')}
                </p>
              </div>
              <Button variant='solid' colorScheme='brand' className='h-16.25 w-full rounded-[20px] text-lg'>
                {t('button')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
