'use client'

import { useTranslations } from 'next-intl'
import { WalletCard } from '../WalletShowcase/WalletCard'
import { MasonryGrid } from '../WalletShowcase/MasonryGrid'

export function Web3Wallets (): React.ReactNode {
  const t = useTranslations('web3Wallets')

  const blueButtonClass = 'h-12 rounded-xl bg-primary-turquoise text-lg font-semibold text-primary-dark transition-smooth hover-scale hover:bg-primary-turquoise/90 active-press'
  const lightButtonClass = 'h-12 rounded-xl bg-primary-turquoise/15 text-lg font-semibold text-primary-turquoise backdrop-blur-md transition-smooth hover-scale hover:bg-primary-turquoise/25 active-press dark:text-primary-turquoise'

  const wallets = [
    {
      logo: '/images/downloads/wallets/vultisig.png',
      title: t('wallets.vultisig.title'),
      description: t('wallets.vultisig.description'),
      buttons: [
        {
          label: t('wallets.vultisig.buttons.web3Wallet'),
          variant: 'primary' as const,
          customClassName: blueButtonClass,
          href: 'https://vultisig.com/download'
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
          customClassName: blueButtonClass,
          href: 'https://trustwallet.com/'
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
          customClassName: lightButtonClass,
          href: 'https://docs.dash.org/en/stable/user/wallets/paper.html'
        },
        {
          label: t('wallets.dashPaperWallet.buttons.generator'),
          variant: 'primary' as const,
          customClassName: blueButtonClass,
          href: 'https://paper.dash.org/'
        }
      ]
    }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Header: Title + Description */}
      <div className='mb-8 flex flex-col gap-2.5 lg:mb-12'>
        <h2 className='animate-fade-in-up text-3xl font-extrabold leading-9 tracking-tight text-primary-dark dark:text-white'>
          {t('title')}
        </h2>
        <div className='animate-fade-in-up-1 flex flex-col gap-2'>
          <p className='text-sm font-medium text-primary-dark/50 dark:text-white/50'>
            {t('description1')}
          </p>
          <p className='text-sm font-medium text-primary-dark/50 dark:text-white/50'>
            {t('description2')}
          </p>
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
