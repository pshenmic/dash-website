import Image from 'next/image'
import { useTranslations } from 'next-intl'

const features = [
  { key: 'spending', icon: '/images/transactions/icon-spending.svg' },
  { key: 'instant', icon: '/images/transactions/icon-instant.svg' },
  { key: 'oldest', icon: '/images/transactions/icon-oldest.svg' },
  { key: 'fees', icon: '/images/transactions/icon-dash-logo.svg' },
  { key: 'secure', icon: '/images/transactions/icon-secure.svg' }
] as const

export function DashFeatures (): React.ReactNode {
  const t = useTranslations('transactions.dashFeatures')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {features.map((feature) => (
          <div key={feature.key} className='flex flex-col items-center gap-4 rounded-3xl bg-primary-blue px-6 py-8 text-center'>
            <div className='relative size-12'>
              <Image src={feature.icon} alt='' fill className='object-contain' />
            </div>
            <div>
              <p className='text-sm font-bold text-white'>
                {t(`${feature.key}.title`)}
              </p>
              <p className='mt-1 text-xs text-white/60'>
                {t(`${feature.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
