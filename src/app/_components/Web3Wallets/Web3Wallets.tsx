'use client'

import { useTranslations } from 'next-intl'
import { WalletCard } from '../WalletShowcase/WalletCard'
import { MasonryGrid } from '../WalletShowcase/MasonryGrid'

export function Web3Wallets (): React.ReactNode {
  const t = useTranslations('web3Wallets')

  const blueButtonClass = 'h-[50px] rounded-[12px] bg-primary-blue text-[18px] font-semibold text-white hover:bg-primary-blue/90'
  const lightButtonClass = 'h-[50px] rounded-[12px] bg-primary-blue/15 text-[18px] font-semibold text-primary-dark dark:text-white backdrop-blur-[5px] hover:bg-primary-blue/20'

  const wallets = [
    {
      logo: '/images/downloads/wallets/vultisig.png',
      title: t('wallets.vultisig.title'),
      description: t('wallets.vultisig.description'),
      buttons: [
        {
          label: t('wallets.vultisig.buttons.web3Wallet'),
          variant: 'primary' as const,
          customClassName: blueButtonClass
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/trust-wallet.png',
      title: t('wallets.trustWallet.title'),
      description: t('wallets.trustWallet.description'),
      buttons: [
        {
          label: t('wallets.trustWallet.buttons.web3Wallet'),
          variant: 'primary' as const,
          customClassName: blueButtonClass
        }
      ]
    },
    {
      logo: '/images/downloads/wallets/dash-paper-wallet.png',
      title: t('wallets.dashPaperWallet.title'),
      description: t('wallets.dashPaperWallet.description'),
      buttons: [
        {
          label: t('wallets.dashPaperWallet.buttons.instructions'),
          variant: 'outline' as const,
          customClassName: lightButtonClass
        },
        {
          label: t('wallets.dashPaperWallet.buttons.generator'),
          variant: 'primary' as const,
          customClassName: blueButtonClass
        }
      ]
    }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Header: Title + Description */}
      <div className='mb-8 flex flex-col gap-2.5 lg:mb-12'>
        <h2 className='text-[32px] font-extrabold leading-[34px] tracking-tight text-primary-dark dark:text-white'>
          {t('title')}
        </h2>
        <div className='flex flex-col gap-2'>
          <p className='text-[13px] font-medium text-primary-dark/50 dark:text-white/50'>
            {t('description1')}
          </p>
          <p className='text-[13px] font-medium text-primary-dark/50 dark:text-white/50'>
            {t('description2')}
          </p>
        </div>
      </div>

      {/* Wallets Grid */}
      <MasonryGrid>
        {wallets.map((wallet, index) => (
          <WalletCard key={index} {...wallet} />
        ))}
      </MasonryGrid>
    </div>
  )
}
