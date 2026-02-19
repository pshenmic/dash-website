import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const navCards = [
  { key: 'whyCrypto', href: '#why-crypto', icon: '/images/transactions/icon-why-crypto.svg' },
  { key: 'whyDash', href: '#why-dash', icon: '/images/transactions/icon-why-dash.svg' },
  { key: 'wallet', href: '#wallet-setup', icon: '/images/transactions/icon-wallet.svg' },
  { key: 'exchange', href: '#how-to-buy', icon: '/images/transactions/icon-exchange.svg' },
  { key: 'gift', href: '#free-gift', icon: '/images/transactions/icon-gift.svg' },
  { key: 'pos', href: '#pos-guide', icon: '/images/transactions/icon-pos.svg' }
] as const

export function StarterKitNav (): React.ReactNode {
  const t = useTranslations('transactions.starterKit')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl bg-primary-blue p-8 lg:rounded-4xl lg:p-16'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16'>
          {/* Left side */}
          <div className='flex flex-col gap-6 lg:max-w-sm'>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight tracking-tight text-white sm:text-3xl sm:leading-9'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='text-white/80 lg:text-base'>
              {t('description')}
            </Text>
            <div>
              <a href='#merchant-downloads' className='inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-primary-blue transition-opacity hover:opacity-90'>
                {t('skipToDownloads')}
              </a>
            </div>
          </div>

          {/* Right side - 2×3 grid */}
          <div className='grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3'>
            {navCards.map((card) => (
              <a
                key={card.key}
                href={card.href}
                className='flex flex-col items-center gap-3 rounded-2xl bg-white/10 px-4 py-6 text-center transition-colors hover:bg-white/20'
              >
                <div className='relative size-10'>
                  <Image src={card.icon} alt='' fill className='object-contain' />
                </div>
                <span className='text-sm font-semibold text-white'>
                  {t(`cards.${card.key}`)}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
