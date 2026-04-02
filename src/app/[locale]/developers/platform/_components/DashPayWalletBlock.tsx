import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function DashPayWalletBlock (): React.ReactNode {
  const t = useTranslations('platformPage.dashPayWallet')

  return (
    <div data-testid='dashpay-wallet-block' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-4xl bg-primary-blue dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
        {/* Phone image — left side */}
        <div data-testid='dashpay-wallet-image' className='pointer-events-none absolute -left-[15%] -bottom-[30%] hidden h-[160%] w-[55%] rotate-[30deg] lg:block'>
          <Image
            src='/images/developers/platform/dashpay-wallet.png'
            alt='DashPay Wallet'
            fill
            className='object-contain'
          />
        </div>

        {/* Content — right side */}
        <div data-testid='dashpay-wallet-content' className='relative z-10 flex flex-col gap-9 p-8 lg:ml-auto lg:max-w-[50%] lg:p-24'>
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-white lg:max-w-100 lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <div className='flex flex-wrap gap-4'>
            <button className='flex h-16 items-center justify-center rounded-2xl bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('primaryButton')}
            </button>
            <button className='flex h-16 items-center justify-center rounded-2xl bg-white/15 px-9 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
              {t('secondaryButton')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
