'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { WalletCard } from '../WalletShowcase/WalletCard'
import { MasonryGrid } from '../WalletShowcase/MasonryGrid'

export function DesktopWallets (): React.ReactNode {
  const t = useTranslations('desktopWallets')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('windows64')

  const platforms = [
    { id: 'windows64', label: 'windows64' },
    { id: 'windows32', label: 'windows32' },
    { id: 'macIntel', label: 'macIntel' },
    { id: 'macSilicon', label: 'macSilicon' },
    { id: 'linux', label: 'linux' }
  ]

  // Platform-specific download URLs
  const downloadUrls: Record<string, Record<string, string>> = {
    'dash-core': {
      windows64: 'https://github.com/dashpay/dash/releases/download/v22.0.0/dashcore-22.0.0-x86_64-w64-mingw32.zip',
      windows32: 'https://github.com/dashpay/dash/releases/download/v22.0.0/dashcore-22.0.0-i686-w64-mingw32.zip',
      macIntel: 'https://github.com/dashpay/dash/releases/download/v22.0.0/dashcore-22.0.0-x86_64-apple-darwin.dmg',
      macSilicon: 'https://github.com/dashpay/dash/releases/download/v22.0.0/dashcore-22.0.0-arm64-apple-darwin.dmg',
      linux: 'https://github.com/dashpay/dash/releases/download/v22.0.0/dashcore-22.0.0-x86_64-linux-gnu.tar.gz'
    }
  }

  const wallets = [
    {
      logo: '/images/downloads/wallets/dash-core.png',
      title: t('wallets.dashCore.title'),
      description: t('wallets.dashCore.description'),
      buttons: [
        { label: t('wallets.dashCore.buttons.bugBounty'), variant: 'outline' as const, href: 'https://bugcrowd.com/dashdigitalcash' },
        { label: t('wallets.dashCore.buttons.download'), variant: 'primary' as const, inverted: true, href: downloadUrls['dash-core'][selectedPlatform] }
      ]
    },
    {
      logo: '/images/downloads/wallets/exodus.png',
      title: t('wallets.exodus.title'),
      description: t('wallets.exodus.description'),
      buttons: [
        { label: t('wallets.exodus.buttons.website'), variant: 'outline' as const, href: 'https://www.exodus.com/' },
        { label: t('wallets.exodus.buttons.download'), variant: 'primary' as const, inverted: true, href: 'https://www.exodus.com/download' }
      ]
    },
    {
      logo: '/images/downloads/wallets/dash-electrum.png',
      title: t('wallets.dashElectrum.title'),
      description: t('wallets.dashElectrum.description'),
      buttons: [
        { label: t('wallets.dashElectrum.buttons.download'), variant: 'primary' as const, inverted: true, href: 'https://electrum.dash.org/' }
      ]
    },
    {
      logo: '/images/downloads/wallets/guarda-wallet.png',
      title: t('wallets.guardaWallet.title'),
      description: t('wallets.guardaWallet.description'),
      buttons: [
        { label: t('wallets.guardaWallet.buttons.download'), variant: 'primary' as const, inverted: true, href: 'https://guarda.com/downloads' }
      ]
    },
    {
      logo: '/images/downloads/wallets/vultisig.png',
      title: t('wallets.vultisig.title'),
      description: t('wallets.vultisig.description'),
      buttons: [
        { label: t('wallets.vultisig.buttons.download'), variant: 'primary' as const, inverted: true, href: 'https://vultisig.com/download' }
      ]
    },
    {
      logo: '/images/downloads/wallets/stack-wallet.png',
      title: t('wallets.stackWallet.title'),
      description: t('wallets.stackWallet.description'),
      buttons: [
        { label: t('wallets.stackWallet.buttons.download'), variant: 'primary' as const, inverted: true, href: 'https://stackwallet.com/' }
      ]
    }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Header: Title+Description (left) + Filters (right) */}
      <div className='mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8'>
        {/* Left: Title and Description */}
        <div className='flex flex-col gap-2.5'>
          <h2 className='animate-fade-in-up text-[32px] font-extrabold leading-[34px] tracking-tight text-primary-dark dark:text-white'>
            {t('title')}
          </h2>
          <p className='animate-fade-in-up-1 text-[13px] font-medium text-primary-dark/50 dark:text-white/50'>
            {t('description')}
          </p>
        </div>

        {/* Right: Platform Filters */}
        <div className='flex gap-3 overflow-x-auto scrollbar-hide'>
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-xl px-[25px] py-2.5 text-[13px] font-medium leading-normal backdrop-blur-md transition-all duration-300 ${
                selectedPlatform === platform.id
                  ? 'scale-105 bg-primary-turquoise/25 text-primary-turquoise shadow-md shadow-primary-turquoise/20 hover:bg-primary-turquoise/30 dark:text-primary-turquoise'
                  : 'bg-primary-blue/15 text-primary-blue hover:scale-105 hover:bg-primary-blue/20 hover:shadow-md hover:shadow-primary-blue/20 dark:text-white dark:hover:bg-white/10'
              }`}
            >
              {t(`platforms.${platform.label}`)}
            </button>
          ))}
        </div>
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
