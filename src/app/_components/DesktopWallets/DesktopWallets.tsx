'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { WalletCard } from '../WalletShowcase/WalletCard'

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

  const wallets = [
    {
      logo: '/images/downloads/wallets/dash-core.png',
      title: t('wallets.dashCore.title'),
      description: t('wallets.dashCore.description'),
      buttons: [
        { label: t('wallets.dashCore.buttons.bugBounty'), variant: 'outline' as const },
        { label: t('wallets.dashCore.buttons.download'), variant: 'primary' as const, inverted: true }
      ]
    },
    {
      logo: '/images/downloads/wallets/exodus.png',
      title: t('wallets.exodus.title'),
      description: t('wallets.exodus.description'),
      buttons: [
        { label: t('wallets.exodus.buttons.website'), variant: 'outline' as const },
        { label: t('wallets.exodus.buttons.download'), variant: 'primary' as const, inverted: true }
      ]
    },
    {
      logo: '/images/downloads/wallets/dash-electrum.png',
      title: t('wallets.dashElectrum.title'),
      description: t('wallets.dashElectrum.description'),
      buttons: [
        { label: t('wallets.dashElectrum.buttons.download'), variant: 'primary' as const, inverted: true }
      ]
    },
    {
      logo: '/images/downloads/wallets/guarda-wallet.png',
      title: t('wallets.guardaWallet.title'),
      description: t('wallets.guardaWallet.description'),
      buttons: [
        { label: t('wallets.guardaWallet.buttons.download'), variant: 'primary' as const, inverted: true }
      ]
    },
    {
      logo: '/images/downloads/wallets/vultisig.png',
      title: t('wallets.vultisig.title'),
      description: t('wallets.vultisig.description'),
      buttons: [
        { label: t('wallets.vultisig.buttons.download'), variant: 'primary' as const, inverted: true }
      ]
    },
    {
      logo: '/images/downloads/wallets/stack-wallet.png',
      title: t('wallets.stackWallet.title'),
      description: t('wallets.stackWallet.description'),
      buttons: [
        { label: t('wallets.stackWallet.buttons.download'), variant: 'primary' as const, inverted: true }
      ]
    }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Header: Title+Description (left) + Filters (right) */}
      <div className='mb-8 flex flex-col gap-6 lg:mb-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8'>
        {/* Left: Title and Description */}
        <div className='flex flex-col gap-2.5'>
          <h2 className='text-[32px] font-extrabold leading-[34px] tracking-tight text-primary-dark dark:text-white'>
            {t('title')}
          </h2>
          <p className='text-[13px] font-medium text-primary-dark/50 dark:text-white/50'>
            {t('description')}
          </p>
        </div>

        {/* Right: Platform Filters */}
        <div className='flex gap-3'>
          {platforms.map((platform) => (
            <button
              key={platform.id}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex h-8 shrink-0 items-center justify-center whitespace-nowrap rounded-xl px-[25px] py-2.5 text-[13px] font-medium leading-normal backdrop-blur-[5px] transition-colors ${
                selectedPlatform === platform.id
                  ? 'bg-primary-blue/25 text-primary-blue hover:bg-primary-blue/30 dark:text-white'
                  : 'bg-primary-blue/15 text-primary-blue hover:bg-primary-blue/20 dark:text-white'
              }`}
            >
              {t(`platforms.${platform.label}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Wallets Grid */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
        {wallets.map((wallet, index) => (
          <WalletCard key={index} {...wallet} />
        ))}
      </div>
    </div>
  )
}
