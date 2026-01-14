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
      className='flex min-w-[200px] flex-shrink-0 snap-start items-center gap-[15px] rounded-[20px] border border-primary-dark/15 bg-white p-[20px] shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] transition-shadow hover:shadow-[0px_0px_100px_0px_rgba(12,28,51,0.15)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none sm:min-w-0 sm:flex-shrink sm:gap-[25px] sm:rounded-[25px] sm:p-[25px]'
    >
      {/* Logo Container */}
      <div className='flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-primary-dark/5 dark:bg-white/10 sm:h-[68px] sm:w-[68px] sm:rounded-[15px]'>
        <div className='relative h-[24px] w-[24px] sm:h-[32px] sm:w-[32px]'>
          <Image
            src={logo}
            alt={name}
            fill
            className='object-contain'
          />
        </div>
      </div>

      {/* Text */}
      <div className='flex flex-col gap-[2px] sm:gap-[4px]'>
        <p className='text-[22px] font-extrabold tracking-[-0.03em] text-primary-dark dark:text-white sm:text-[32px] sm:leading-[40px]'>
          {name}
        </p>
        <p className='text-[11px] font-medium text-primary-dark/50 dark:text-white/50 sm:text-[13px]'>
          {url}
        </p>
      </div>
    </a>
  )
}
