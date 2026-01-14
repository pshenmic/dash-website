import Image from 'next/image'

interface StatCardProps {
  label: string
  value: string
}

export function StatCard ({ label, value }: StatCardProps): React.ReactNode {
  return (
    <div className='flex h-full flex-col items-start justify-between overflow-hidden rounded-[18px] border border-primary-blue px-[12px] py-[16px] sm:rounded-[25px] sm:px-[20px] sm:py-[25px] lg:rounded-[36px] lg:px-[32px] lg:py-[40px]'>
      {/* Dash Logo */}
      <div className='relative h-[18px] w-[22px] sm:h-[24px] sm:w-[30px] lg:h-[30px] lg:w-[36px]'>
        <Image
          src='/images/get-started/dash-logo.svg'
          alt='Dash'
          fill
          className='object-contain'
        />
      </div>

      {/* Text */}
      <div className='mt-auto flex flex-col gap-[4px] sm:gap-[6px]'>
        <p className='text-[9px] font-medium text-primary-dark/50 dark:text-white/50 sm:text-[12px] lg:text-[13px]'>
          {label}
        </p>
        <p className='text-[18px] leading-[1.05] font-extrabold tracking-[-0.03em] text-primary-blue sm:text-[28px] lg:text-[38px] lg:leading-[40px]'>
          {value}
        </p>
      </div>
    </div>
  )
}
