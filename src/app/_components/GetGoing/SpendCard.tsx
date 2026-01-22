import Image from 'next/image'

interface SpendCardProps {
  label: string
  title: string
  icon: string
}

export function SpendCard ({ label, title, icon }: SpendCardProps): React.ReactNode {
  return (
    <div className='relative h-50 w-75 shrink-0 overflow-hidden rounded-3xl border border-white/15 bg-white/15 shadow-[0px_0px_35px_0px_rgba(12,28,51,0.1)] sm:h-66 sm:w-100 sm:rounded-4xl'>
      {/* Dash Logo - top left */}
      <div className='absolute left-5 top-5 h-5.5 w-7 sm:left-7 sm:top-9 sm:h-7.5 sm:w-9'>
        <Image
          src='/images/get-started/get-going/spend/dash-logo-white.svg'
          alt='Dash'
          fill
          className='object-contain'
        />
      </div>

      {/* 3D Icon - top right */}
      <div className='absolute -top-6 right-0 h-36 w-45 sm:-top-10 sm:h-52 sm:w-60'>
        <Image
          src={icon}
          alt=''
          fill
          className='object-contain'
        />
      </div>

      {/* Text - bottom */}
      <div className='absolute bottom-5 left-5 sm:bottom-8 sm:left-7'>
        <p className='text-xs font-medium tracking-tight text-white sm:text-sm'>
          {label}
        </p>
        <h3 className='mt-1 whitespace-pre-line text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl sm:leading-10'>
          {title}
        </h3>
      </div>
    </div>
  )
}
