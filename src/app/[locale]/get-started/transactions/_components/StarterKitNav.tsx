import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
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
            <Text size='sm' weight='medium' className='text-white lg:text-base'>
              {t('description')}
            </Text>
            <div>
              <a href='#merchant-downloads' className='inline-flex items-center gap-4 rounded-xl bg-white/15 p-2.5 text-lg font-semibold text-white backdrop-blur-sm transition-smooth hover:bg-white/20'>
                {t('skipToDownloads')}
                <div className='flex size-8.75 shrink-0 items-center justify-center rounded-full bg-white'>
                  <ArrowUpRight className='size-4 text-primary-blue' />
                </div>
              </a>
            </div>
          </div>

          {/* Right side - 2×3 grid */}
          <div className='grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3'>
            {navCards.map((card) => (
              <a
                key={card.key}
                href={card.href}
                className='flex flex-col items-start gap-6 rounded-3xl bg-white/15 p-6 transition-colors hover:bg-white/20'
              >
                <div className='relative h-8 w-10'>
                  <Image src={card.icon} alt='' fill className='object-contain' />
                </div>
                <span className='text-2xl font-extrabold leading-6.5 text-white'>
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
