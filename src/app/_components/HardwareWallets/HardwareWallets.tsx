'use client'

import { useTranslations } from 'next-intl'
import { WalletCard } from '../WalletShowcase/WalletCard'
import { MasonryGrid } from '../WalletShowcase/MasonryGrid'

export function HardwareWallets (): React.ReactNode {
  const t = useTranslations('hardwareWallets')

  const hardwareWalletButtonClass = 'h-[50px] rounded-[12px] bg-primary-blue text-[18px] font-semibold text-white hover:bg-primary-blue/90'

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
        <h2 className='animate-fade-in-up text-[32px] font-extrabold leading-[34px] tracking-tight text-primary-dark dark:text-white'>
          {t('title')}
        </h2>
        <p className='animate-fade-in-up-1 text-[13px] font-medium text-primary-dark/50 dark:text-white/50'>
          {t('description')}
        </p>
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
