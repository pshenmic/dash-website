import Image from 'next/image'

interface RetailerCardProps {
  name: string
  url: string
  logo: string
}

export function RetailerCard ({ name, url, logo }: RetailerCardProps): React.ReactNode {
  return (
    <a
      href={`https://${url}`}
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-1 items-center gap-5 rounded-2xl border border-white/15 bg-white/15 p-5 transition-colors hover:bg-white/20 sm:gap-6 sm:rounded-3xl sm:p-6'
    >
      {/* Logo Container */}
      <div className='flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white sm:size-17'>
        <div className='relative size-8 sm:size-10'>
          <Image
            src={logo}
            alt={name}
            fill
            className='object-contain'
          />
        </div>
      </div>

      {/* Text */}
      <div className='flex flex-col gap-1'>
        <p className='text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl sm:leading-10'>
          {name}
        </p>
        <p className='text-xs font-medium text-white/50 sm:text-sm'>
          {url}
        </p>
      </div>
    </a>
  )
}
