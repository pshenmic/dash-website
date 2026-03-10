'use client'

import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { WalletCard } from '../WalletShowcase/WalletCard'
import { MasonryGrid } from '../WalletShowcase/MasonryGrid'

export function HardwareWallets (): React.ReactNode {
  const t = useTranslations('hardwareWallets')

  const hardwareWalletButtonClass = 'h-12 rounded-xl text-lg font-semibold'

  const wallets = [
    {
      logo: '/images/downloads/wallets/hardware/tangem.png',
      title: t('wallets.tangem.title'),
      description: t('wallets.tangem.description'),
      buttons: [
        {
          label: t('wallets.tangem.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://tangem.com/en/pricing/'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/ledger.png',
      title: t('wallets.ledger.title'),
      description: t('wallets.ledger.description'),
      buttons: [
        {
          label: t('wallets.ledger.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://www.ledger.com/'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/keepkey.png',
      title: t('wallets.keepkey.title'),
      description: t('wallets.keepkey.description'),
      buttons: [
        {
          label: t('wallets.keepkey.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://shapeshift.com/keepkey'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/safepal.svg',
      title: t('wallets.safepal.title'),
      description: t('wallets.safepal.description'),
      buttons: [
        {
          label: t('wallets.safepal.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://www.safepal.com/'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/dcent.png',
      title: t('wallets.dcent.title'),
      description: t('wallets.dcent.description'),
      buttons: [
        {
          label: t('wallets.dcent.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://dcentwallet.com/products/BiometricWallet'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/ellipal.png',
      title: t('wallets.ellipal.title'),
      description: t('wallets.ellipal.description'),
      buttons: [
        {
          label: t('wallets.ellipal.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://www.ellipal.com/'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/ngrave.png',
      title: t('wallets.ngrave.title'),
      description: t('wallets.ngrave.description'),
      buttons: [
        {
          label: t('wallets.ngrave.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://www.ngrave.io/'
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/hardware/secux.png',
      title: t('wallets.secux.title'),
      description: t('wallets.secux.description'),
      buttons: [
        {
          label: t('wallets.secux.buttons.purchase'),
          variant: 'primary' as const,
          customClassName: hardwareWalletButtonClass,
          href: 'https://secuxtech.com/'
        }
      ]
    }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Header: Title + Description */}
      <div className='mb-8 flex flex-col gap-2.5 lg:mb-12'>
        <Heading as='h2' size='2xl' weight='extrabold' className='animate-fade-in-up leading-9 tracking-tight dark:text-white'>
          {t('title')}
        </Heading>
        <Text size='sm' weight='medium' className='animate-fade-in-up-1 text-primary-dark/50 dark:text-white/50'>
          {t('description')}
        </Text>
      </div>

      {/* Wallets Grid */}
      <div className='animate-fade-in-up-2'>
        <MasonryGrid>
          {wallets.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </MasonryGrid>
      </div>
    </div>
  )
}
