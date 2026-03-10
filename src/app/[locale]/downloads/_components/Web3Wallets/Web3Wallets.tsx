'use client'

import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { WalletCard } from '@/app/_components/WalletShowcase/WalletCard'
import { MasonryGrid } from '@/app/_components/WalletShowcase/MasonryGrid'

export function Web3Wallets (): React.ReactNode {
  const t = useTranslations('web3Wallets')

  const buttonClass = 'h-12 rounded-xl text-lg font-semibold active-press'

  const wallets = [
    {
      logo: '/images/downloads/wallets/vultisig.png',
      title: t('wallets.vultisig.title'),
      description: t('wallets.vultisig.description'),
      buttons: [
        {
          label: t('wallets.vultisig.buttons.web3Wallet'),
          variant: 'primary' as const,
          customClassName: buttonClass,
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
          customClassName: buttonClass,
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
          customClassName: buttonClass,
          href: 'https://docs.dash.org/en/stable/user/wallets/paper.html'
        },
        {
          label: t('wallets.dashPaperWallet.buttons.generator'),
          variant: 'primary' as const,
          customClassName: buttonClass,
          href: 'https://paper.dash.org/'
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
        <div className='animate-fade-in-up-1 flex flex-col gap-2'>
          <Text size='sm' weight='medium' className='text-primary-dark/50 dark:text-white/50'>
            {t('description1')}
          </Text>
          <Text size='sm' weight='medium' className='text-primary-dark/50 dark:text-white/50'>
            {t('description2')}
          </Text>
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
