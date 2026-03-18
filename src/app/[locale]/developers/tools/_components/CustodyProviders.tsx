import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { ProviderCard, type ProviderButton } from './ProviderCard'

const CARDS_CONFIG = [
  {
    key: 'bitgo',
    image: '/images/developers/tools/bitgo.svg',
    darkImage: '/images/developers/tools/bitgo-dark.svg',
    hasApi: true
  },
  {
    key: 'blockcypher',
    image: '/images/developers/tools/blockcypher.svg',
    hasApi: true
  },
  {
    key: 'lukka',
    image: '/images/developers/tools/lukka.svg',
    darkImage: '/images/developers/tools/lukka-dark.svg',
    hasApi: false
  },
  {
    key: 'cybavo',
    image: '/images/developers/tools/cybavo.svg',
    hasApi: false
  },
  {
    key: 'nownodes',
    image: '/images/developers/tools/nownodes.svg',
    hasApi: true
  },
  {
    key: 'getblock',
    image: '/images/developers/tools/getblock.svg',
    hasApi: false
  }
]

export function CustodyProviders (): React.ReactNode {
  const t = useTranslations('toolsPage.custodyProviders')

  const cards = CARDS_CONFIG.map((card) => {
    const buttons: ProviderButton[] = []
    if (card.hasApi) {
      buttons.push({
        label: t(`cards.${card.key}.apiButton`),
        href: '#',
        variant: 'ghost'
      })
    }
    buttons.push({
      label: t(`cards.${card.key}.websiteButton`),
      href: '#',
      variant: 'solid'
    })

    return {
      ...card,
      name: t(`cards.${card.key}.name`),
      description: t(`cards.${card.key}.description`),
      buttons
    }
  })

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-10 flex flex-col gap-1 lg:mb-16'>
        <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
          {t('chip')}
        </p>
        <Heading as='h2' size='xl' weight='extrabold' className='leading-tight dark:text-white lg:text-3xl lg:leading-9'>
          {t('title')}
        </Heading>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
        {cards.map((card) => (
          <ProviderCard
            key={card.key}
            image={card.image}
            darkImage={card.darkImage}
            name={card.name}
            description={card.description}
            buttons={card.buttons}
          />
        ))}
      </div>
    </div>
  )
}
