import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { Zap } from 'lucide-react'

function QuickStartIcon (): React.ReactNode {
  return (
    <svg width='32' height='28' viewBox='0 0 32 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M18.5 1L5 16H16L14.5 27L28 12H17L18.5 1Z' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}

function JSIcon (): React.ReactNode {
  return (
    <svg width='34' height='24' viewBox='0 0 34 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <text x='0' y='20' fontFamily='Manrope' fontWeight='800' fontSize='22' fill='currentColor'>JS</text>
    </svg>
  )
}

function AppleIcon (): React.ReactNode {
  return (
    <svg width='28' height='32' viewBox='0 0 28 32' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M23.1 16.9c0-3.5 2.9-5.2 3-5.2-1.6-2.4-4.2-2.7-5.1-2.7-2.1-.2-4.2 1.3-5.3 1.3-1.1 0-2.8-1.2-4.6-1.2C8.6 9.1 6.2 10.5 4.9 12.7c-2.7 4.7-.7 11.6 1.9 15.4 1.3 1.9 2.8 3.9 4.8 3.9 1.9-.1 2.7-1.2 5-1.2 2.3 0 3 1.2 5.1 1.2 2.1 0 3.4-1.9 4.6-3.7 1.5-2.1 2.1-4.2 2.1-4.3-.1-.1-4.3-1.7-4.3-6.1zM19.2 7c1.1-1.3 1.8-3.1 1.6-4.9-1.5.1-3.4 1-4.5 2.3-1 1.1-1.8 3-1.6 4.7 1.7.1 3.5-.9 4.5-2.1z' />
    </svg>
  )
}

function JavaIcon (): React.ReactNode {
  return (
    <svg width='30' height='34' viewBox='0 0 30 34' fill='currentColor' xmlns='http://www.w3.org/2000/svg'>
      <path d='M11.5 24.5s-1.5.9.9 1.2c3 .4 4.5.3 7.8-.3 0 0 .9.5 2.1 1-7.4 3.2-16.8-.2-10.8-1.9zm-.9-4.3s-1.6 1.2.8 1.5c3.1.3 5.7.3 10-.5 0 0 .6.6 1.5 1-9 2.6-19-.2-12.3-2zm5.2-7.3c1.8 2-4.7 3.9-4.7 3.9s4.3-2.2 5.8-3.3c1.1-.8-1.1-2.4-1.1-2.4v1.8zm11.4 16.8s1.1.9-1.2 1.6c-4.4 1.3-18.3 1.7-22.1.1-1.4-.6 1.2-1.4 2-1.6.8-.2 1.3-.1 1.3-.1-1.5-1-9.5 2-4.1 2.9 14.9 2.4 27.2-1.1 24.1-2.9zM12.3 17s-6.7-1.6-2.4-2.2c1.8-.3 5.5-.2 8.9.1 2.8.3 5.6.8 5.6.8s-1-.4-1.7-.9c-6.8-1.8-19.9-1-16.1 1.4 3.2 2 5.7.8 5.7.8z' />
    </svg>
  )
}

interface SDKCardProps {
  icon: React.ReactNode
  title: string
  subtitle: string
}

function SDKCard ({ icon, title, subtitle }: SDKCardProps): React.ReactNode {
  return (
    <div className='flex flex-1 items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-hover'>
      <div className='flex size-17 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 text-primary-dark'>
        {icon}
      </div>
      <div className='flex flex-col gap-2.5'>
        <Heading as='h4' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! lg:text-3xl lg:leading-10'>
          {title}
        </Heading>
        <Text size='xs' weight='medium' className='text-primary-dark! lg:text-sm'>
          {subtitle}
        </Text>
      </div>
    </div>
  )
}

export function SDKActionCards (): React.ReactNode {
  const t = useTranslations('platformPage.sdkActions')

  const cards = [
    { icon: <Zap className='size-7' />, title: t('quickstart.title'), subtitle: t('quickstart.subtitle') },
    { icon: <JSIcon />, title: t('javascript.title'), subtitle: t('javascript.subtitle') },
    { icon: <AppleIcon />, title: t('objectiveC.title'), subtitle: t('objectiveC.subtitle') },
    { icon: <JavaIcon />, title: t('java.title'), subtitle: t('java.subtitle') }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-5 sm:grid sm:grid-cols-2 lg:flex lg:flex-row'>
        {cards.map((card, index) => (
          <SDKCard key={index} {...card} />
        ))}
      </div>
    </div>
  )
}
