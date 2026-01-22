import Image from 'next/image'

interface ExchangeCardProps {
  name: string
  url: string
  logo: string
}

export function ExchangeCard ({ name, url, logo }: ExchangeCardProps): React.ReactNode {
  return (
    <a
      href={`https://${url}`}
      target='_blank'
      rel='noopener noreferrer'
      className='flex min-w-52 shrink-0 snap-start items-center gap-4 rounded-2xl border border-primary-dark/15 bg-white p-5 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] transition-shadow hover:shadow-[0px_0px_100px_0px_rgba(12,28,51,0.15)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none sm:min-w-0 sm:shrink sm:gap-6 sm:rounded-3xl sm:p-6'
    >
      {/* Logo Container */}
      <div className='flex size-12 items-center justify-center rounded-xl bg-primary-dark/5 dark:bg-white/10 sm:size-17 sm:rounded-2xl'>
        <div className='relative size-6 sm:size-8'>
          <Image
            src={logo}
            alt={name}
            fill
            className='object-contain'
          />
        </div>
      </div>

      {/* Text */}
      <div className='flex flex-col gap-0.5 sm:gap-1'>
        <p className='text-2xl font-extrabold tracking-tight text-primary-dark dark:text-white sm:text-3xl sm:leading-10'>
          {name}
        </p>
        <p className='text-xs font-medium text-primary-dark/50 dark:text-white/50 sm:text-sm'>
          {url}
        </p>
      </div>
    </a>
  )
}
