import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/cn'

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
      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
        {features.map((feature) => (
          <div key={feature.key} className='flex flex-col items-start gap-6.25 rounded-[25px] border border-white/15 bg-white/15 p-6.25'>
            <div className={cn(
              'size-12',
              feature.key === 'fees'
                ? 'flex items-center justify-center rounded-full bg-primary-dark/5 shadow-[inset_0_0_12px_rgba(12,28,51,0.12)]'
                : 'relative'
            )}>
              {feature.key === 'fees'
                ? <Image src={feature.icon} alt='' width={32} height={26} />
                : <Image src={feature.icon} alt='' fill className='object-contain' />
              }
            </div>
            <p className='text-2xl leading-6.5 font-medium text-white'>
              {t.rich(`${feature.key}.label`, {
                bold: (chunks) => <strong className='font-extrabold'>{chunks}</strong>
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
