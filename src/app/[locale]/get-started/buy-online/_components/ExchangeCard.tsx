import Image from 'next/image'

interface ExchangeCardProps {
  name: string
  type: string
  logo: string
  features: string
  time: string
  pairs: string
  labels: {
    features: string
    time: string
    pairs: string
  }
}

export function ExchangeCard ({
  name,
  type,
  logo,
  features,
  time,
  pairs,
  labels
}: ExchangeCardProps): React.ReactNode {
  return (
    <div className='overflow-hidden rounded-3xl border border-primary-dark/10 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'>
      {/* Header: Logo + Name */}
      <div className='flex items-center gap-5'>
        <div className='relative size-12 shrink-0 overflow-hidden rounded-xl'>
          <Image src={logo} alt={name} fill className='object-contain' />
        </div>
        <div>
          <p className='text-xl font-extrabold tracking-tight text-primary-dark dark:text-white lg:text-2xl'>
            {name}
          </p>
          <p className='text-xs font-medium text-primary-dark/35 dark:text-white/35'>
            {type}
          </p>
        </div>
      </div>

      {/* Info Badges */}
      <div className='mt-5 flex flex-col gap-2.5'>
        {/* Features + Time row */}
        <div className='flex gap-2.5'>
          <InfoBadge label={labels.features} value={features} />
          <InfoBadge label={labels.time} value={time} />
        </div>
        {/* Pairs row */}
        <InfoBadge label={labels.pairs} value={pairs} />
      </div>
    </div>
  )
}

function InfoBadge ({ label, value }: { label: string, value: string }): React.ReactNode {
  return (
    <div className='flex flex-col gap-1.5 rounded-2xl bg-white p-2.5 shadow-[0_0_25px_rgba(12,28,51,0.1)] dark:bg-white/5 dark:shadow-none'>
      <span className='text-xs font-medium text-primary-dark/50 dark:text-white/50'>
        {label}
      </span>
      <span className='inline-flex w-fit rounded-lg bg-primary-blue/15 px-3.5 py-1 text-xs font-medium text-primary-blue dark:bg-primary-blue/25'>
        {value}
      </span>
    </div>
  )
}
