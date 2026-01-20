import Image from 'next/image'

interface StatCardProps {
  label: string
  value: string
}

export function StatCard ({ label, value }: StatCardProps): React.ReactNode {
  return (
    <div className='flex h-full flex-col items-start justify-between overflow-hidden rounded-2xl border border-primary-blue px-3 py-4 sm:rounded-3xl sm:px-5 sm:py-6 lg:rounded-4xl lg:px-8 lg:py-10'>
      {/* Dash Logo */}
      <div className='relative h-5 w-6 sm:h-6 sm:w-8 lg:h-8 lg:w-9'>
        <Image
          src='/images/get-started/dash-logo.svg'
          alt='Dash'
          fill
          className='object-contain'
        />
      </div>

      {/* Text */}
      <div className='mt-auto flex flex-col gap-1 sm:gap-1.5'>
        <p className='text-xs font-medium text-primary-dark/50 dark:text-white/50 sm:text-xs lg:text-sm'>
          {label}
        </p>
        <p className='text-lg leading-tight font-extrabold tracking-tight text-primary-blue sm:text-3xl lg:text-4xl lg:leading-10'>
          {value}
        </p>
      </div>
    </div>
  )
}
