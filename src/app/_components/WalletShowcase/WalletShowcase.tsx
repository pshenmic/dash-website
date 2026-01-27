import { useTranslations } from 'next-intl'
import { WalletCard } from './WalletCard'

export function WalletShowcase (): React.ReactNode {
  const t = useTranslations('walletShowcase')

  const wallets = {
    column1: [
      {
        logo: '/images/downloads/wallets/dashpay-android.png',
        title: t('wallets.dashpayAndroid.title'),
        description: t('wallets.dashpayAndroid.description'),
        buttons: [
          { label: t('wallets.dashpayAndroid.buttons.learnMore'), variant: 'outline' as const },
          { label: t('wallets.dashpayAndroid.buttons.download'), variant: 'primary' as const, inverted: true }
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
        logo: '/images/downloads/wallets/exodus.png',
        title: t('wallets.exodus.title'),
        description: t('wallets.exodus.description'),
        buttons: [
          { label: t('wallets.exodus.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      }
    ],
    column2: [
      {
        logo: '/images/downloads/wallets/edge-wallet.png',
        title: t('wallets.edgeWallet.title'),
        description: t('wallets.edgeWallet.description'),
        buttons: [
          { label: t('wallets.edgeWallet.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      },
      {
        logo: '/images/downloads/wallets/stack-wallet.png',
        title: t('wallets.stackWallet.title'),
        description: t('wallets.stackWallet.description'),
        buttons: [
          { label: t('wallets.stackWallet.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      },
      {
        logo: '/images/downloads/wallets/dash-electrum.png',
        title: t('wallets.dashElectrum.title'),
        description: t('wallets.dashElectrum.description'),
        buttons: [
          { label: t('wallets.dashElectrum.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      }
    ],
    column3: [
      {
        logo: '/images/downloads/wallets/zypto-wallet.png',
        title: t('wallets.zyptoWallet.title'),
        description: t('wallets.zyptoWallet.description'),
        buttons: [
          { label: t('wallets.zyptoWallet.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      },
      {
        logo: '/images/downloads/wallets/trust-wallet.png',
        title: t('wallets.trustWallet.title'),
        description: t('wallets.trustWallet.description'),
        buttons: [
          { label: t('wallets.trustWallet.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      }
    ],
    column4: [
      {
        logo: '/images/downloads/wallets/unstoppable-wallet.png',
        title: t('wallets.unstoppableWallet.title'),
        description: t('wallets.unstoppableWallet.description'),
        buttons: [
          { label: t('wallets.unstoppableWallet.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      },
      {
        logo: '/images/downloads/wallets/guarda-wallet.png',
        title: t('wallets.guardaWallet.title'),
        description: t('wallets.guardaWallet.description'),
        buttons: [
          { label: t('wallets.guardaWallet.buttons.download'), variant: 'primary' as const, inverted: true }
        ]
      }
    ]
  }

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Section Title */}
      <h2 className='mb-8 text-3xl leading-tight font-extrabold tracking-tight text-primary-dark dark:text-white lg:mb-12 lg:text-4xl lg:leading-10'>
        {t('title')}
      </h2>

      {/* 4-Column Grid */}
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
        {/* Column 1 */}
        <div className='flex flex-col gap-5'>
          {wallets.column1.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </div>

        {/* Column 2 */}
        <div className='flex flex-col gap-5'>
          {wallets.column2.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </div>

        {/* Column 3 */}
        <div className='flex flex-col gap-5'>
          {wallets.column3.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </div>

        {/* Column 4 */}
        <div className='flex flex-col gap-5'>
          {wallets.column4.map((wallet, index) => (
            <WalletCard key={index} {...wallet} />
          ))}
        </div>
      </div>
    </div>
  )
}
