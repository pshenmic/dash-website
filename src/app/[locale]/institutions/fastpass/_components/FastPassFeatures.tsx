import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const features = [
  { key: 'speed', icon: '/images/fastpass/icon-speed.png' },
  { key: 'security', icon: '/images/fastpass/icon-security.png' },
  { key: 'agility', icon: '/images/fastpass/icon-agility.png' },
  { key: 'diversity', icon: '/images/fastpass/icon-diversity.png' }
] as const

export function FastPassFeatures (): React.ReactNode {
  const t = useTranslations('fastpassPage.features')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
        {features.map((feature) => (
          <div
            key={feature.key}
            className='flex flex-col gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
          >
            <div className='relative flex size-17 shrink-0 items-center justify-center rounded-full bg-primary-dark/5 dark:bg-white/5'>
              <Image
                src={feature.icon}
                alt={t(`${feature.key}.title`)}
                width={48}
                height={48}
                className='size-12 object-contain'
              />
              <div className='pointer-events-none absolute inset-0 rounded-full shadow-[inset_0px_0px_12px_0px_rgba(12,28,51,0.12)]' />
            </div>
            <div className='flex flex-col gap-4'>
              <Heading as='h3' size='md' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white!'>
                {t(`${feature.key}.title`)}
              </Heading>
              <Text size='xs' weight='medium' className='leading-snug text-primary-dark/50! dark:text-white/50!'>
                {t(`${feature.key}.description`)}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
