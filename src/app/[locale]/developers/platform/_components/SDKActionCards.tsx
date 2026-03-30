import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

interface SDKCardProps {
  icon: string
  iconWidth: number
  iconHeight: number
  title: string
  subtitle: string
  isLast?: boolean
}

function SDKCard ({ icon, iconWidth, iconHeight, title, subtitle, isLast }: SDKCardProps): React.ReactNode {
  return (
    <div className={`flex items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-hover dark:border-white/15 dark:bg-secondary-space-cadet ${isLast ? 'lg:flex-1' : 'lg:shrink-0'}`}>
      <div className='flex size-17 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/10'>
        <Image src={icon} alt={title} width={iconWidth} height={iconHeight} />
      </div>
      <div className='flex flex-col gap-2.5'>
        <Heading as='h4' weight='extrabold' className='whitespace-nowrap text-2xl leading-tight tracking-tight text-primary-dark dark:text-white lg:text-3xl lg:leading-10'>
          {title}
        </Heading>
        <Text size='xs' weight='medium' className='whitespace-nowrap text-primary-dark dark:text-white lg:text-sm'>
          {subtitle}
        </Text>
      </div>
    </div>
  )
}

export function SDKActionCards (): React.ReactNode {
  const t = useTranslations('platformPage.sdkActions')

  const cards = [
    { icon: '/images/developers/platform/icon-quickstart.svg', iconWidth: 32, iconHeight: 28, title: t('quickstart.title'), subtitle: t('quickstart.subtitle') },
    { icon: '/images/developers/platform/icon-javascript.svg', iconWidth: 34, iconHeight: 24, title: t('javascript.title'), subtitle: t('javascript.subtitle') },
    { icon: '/images/developers/platform/icon-objective-c.svg', iconWidth: 28, iconHeight: 32, title: t('objectiveC.title'), subtitle: t('objectiveC.subtitle') },
    { icon: '/images/developers/platform/icon-java.svg', iconWidth: 30, iconHeight: 34, title: t('java.title'), subtitle: t('java.subtitle') }
  ]

  return (
    <div data-testid='sdk-action-cards' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row'>
        {cards.map((card, index) => (
          <SDKCard key={index} {...card} isLast={index === cards.length - 1} />
        ))}
      </div>
    </div>
  )
}
