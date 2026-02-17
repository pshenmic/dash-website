import Image from 'next/image'

interface MerchantCardProps {
  name: string
  category: string
  logo: string
}

export function MerchantCard ({
  name,
  category,
  logo
}: MerchantCardProps): React.ReactNode {
  return (
    <div className='overflow-hidden rounded-3xl border border-primary-dark/10 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
      <div className='relative size-12 shrink-0 overflow-hidden rounded-xl'>
        <Image src={logo} alt={name} fill className='object-contain' />
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
