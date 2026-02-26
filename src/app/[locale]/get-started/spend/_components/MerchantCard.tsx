import Image from 'next/image'
import { cn } from '@/lib/cn'

interface MerchantCardProps {
  name: string
  category: string
  logo: string
  logoClassName?: string
  imageClassName?: string
}

export function MerchantCard ({
  name,
  category,
  logo,
  logoClassName,
  imageClassName
}: MerchantCardProps): React.ReactNode {
  return (
    <div className='overflow-hidden rounded-3xl border border-primary-dark/10 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
      <div className={cn('relative size-12 shrink-0 overflow-hidden rounded-xl', logoClassName)}>
        <Image src={logo} alt={name} fill className={cn('object-contain', imageClassName)} />
      </div>
      <div className='mt-5'>
        <p className='text-lg font-extrabold tracking-tight text-primary-dark dark:text-white'>
          {name}
        </p>
        <p className='mt-0.5 text-xs font-medium text-primary-dark/35 dark:text-white/35'>
          {category}
        </p>
      </div>
    </div>
  )
}
