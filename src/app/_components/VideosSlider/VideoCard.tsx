import Image from 'next/image'
import { Play } from 'lucide-react'

export interface VideoCardData {
  id: string
  variant: 'light' | 'dark' | 'blue' | 'coin'
  label: string
  title: string
  subtitle?: string
  session?: string
  image?: string
}

interface VideoCardProps {
  video: VideoCardData
}

export function VideoCard ({ video: _video }: VideoCardProps) {
  const { variant, label, title, subtitle, session, image } = _video

  const baseClasses = 'relative h-[216px] w-full overflow-hidden rounded-[25px] shadow-sm dark:border dark:border-white/15'

  if (variant === 'light') {
    return (
      <div className={`${baseClasses} bg-primary-white`}>
        <div className='absolute inset-0 opacity-20'>
          <DashPattern />
        </div>

        <div className='absolute left-[22px] top-[52px]'>
          <span className='rounded-full border border-primary-dark/30 px-3 py-1 text-[11px] text-primary-dark'>
            {label}
          </span>
        </div>

        <div className='absolute left-[22px] top-[90px]'>
          <h3 className='text-[28px] font-extrabold leading-[34px] tracking-[-0.03em] text-primary-dark'>
            {title.split('\n').map((_line, _i) => (
              <span key={_i} className='block'>{_line}</span>
            ))}
          </h3>
        </div>

        <div className='absolute bottom-[16px] left-[22px]'>
          <Image src='/images/logo.svg' alt='Dash' width={60} height={16} />
        </div>

        {session && (
          <p className='absolute bottom-[16px] right-[22px] text-xs text-primary-dark/75'>
            {session}
          </p>
        )}

        <PlayButton />
      </div>
    )
  }

  if (variant === 'dark') {
    return (
      <div className={`${baseClasses} bg-primary-dark`}>
        {image && (
          <div className='absolute inset-0'>
            <Image
              src={image}
              alt=''
              fill
              className='object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent' />
          </div>
        )}

        <div className='absolute left-[22px] top-[22px]'>
          <Image src='/images/logo.svg' alt='Dash' width={40} height={11} className='brightness-0 invert' />
        </div>

        <div className='absolute left-[22px] top-[102px]'>
          <span className='rounded-full border border-primary-turquoise/50 px-3 py-1 text-[10px] text-primary-turquoise'>
            {label}
          </span>
        </div>

        <div className='absolute bottom-[22px] left-[22px]'>
          <h3 className='text-[29px] font-extrabold leading-[29px] tracking-[-0.03em] text-primary-white'>
            {title.split('\n').map((_line, _i) => (
              <span key={_i} className='block'>{_line}</span>
            ))}
          </h3>
        </div>

        <PlayButton />
      </div>
    )
  }

  if (variant === 'blue') {
    return (
      <div className={`${baseClasses} bg-primary-blue`}>
        {image && (
          <div className='absolute right-0 top-0 h-full w-[160px]'>
            <div className='absolute inset-0 rounded-[10px] bg-primary-white/10 backdrop-blur-sm' />
            <Image
              src={image}
              alt=''
              fill
              className='object-cover object-top'
            />
          </div>
        )}

        <div className='absolute left-[22px] top-[22px]'>
          <span className='rounded-full border border-primary-white/50 px-3 py-1 text-[10px] text-primary-white'>
            {label}
          </span>
        </div>

        <div className='absolute left-[22px] top-1/2 w-[140px] -translate-y-1/2'>
          <h3 className='text-[29px] font-extrabold leading-[29px] tracking-[-0.03em] text-primary-white'>
            {title}
          </h3>
          {subtitle && (
            <p className='mt-1 text-[11px] leading-[15px] text-primary-white/75'>
              {subtitle}
            </p>
          )}
        </div>

        <div className='absolute bottom-[16px] left-[22px]'>
          <Image src='/images/logo.svg' alt='Dash' width={60} height={16} className='brightness-0 invert' />
        </div>

        <PlayButton />
      </div>
    )
  }

  // variant === 'coin'
  return (
    <div className={`${baseClasses} bg-primary-white`}>
      <div className='absolute left-[22px] top-[22px]'>
        <Image src='/images/logo.svg' alt='Dash' width={60} height={16} />
      </div>

      {/* Coin overflows card bounds by design */}
      {image && (
        <div className='absolute -right-[50px] -top-[40px] h-[300px] w-[300px]'>
          <Image
            src={image}
            alt=''
            fill
            className='object-contain'
          />
        </div>
      )}

      <div className='absolute left-[22px] top-[102px]'>
        <span className='rounded-full border border-primary-dark/30 px-3 py-1 text-[10px] text-primary-dark'>
          {label}
        </span>
      </div>

      <div className='absolute bottom-[22px] left-[22px]'>
        <h3 className='text-[29px] font-extrabold leading-[29px] tracking-[-0.03em] text-primary-dark'>
          {title.split('\n').map((_line, _i) => (
            <span key={_i} className='block'>{_line}</span>
          ))}
        </h3>
      </div>

      <PlayButton />
    </div>
  )
}

function PlayButton () {
  return (
    <button
      className='absolute right-[14px] top-[14px] flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-primary-white shadow-lg'
      aria-label='Play video'
    >
      <Play className='h-4 w-4 fill-primary-blue text-primary-blue' />
    </button>
  )
}

function DashPattern () {
  return (
    <svg className='h-full w-full' viewBox='0 0 400 250' fill='none'>
      {[...Array(8)].map((_, _row) =>
        [...Array(12)].map((_, _col) => (
          <text
            key={`${_row}-${_col}`}
            x={_col * 80 - 20 + (_row % 2) * 40}
            y={_row * 35 + 20}
            fill='currentColor'
            className='text-primary-dark/10'
            fontSize='24'
            fontWeight='800'
            transform={`rotate(-30 ${_col * 80 + 20} ${_row * 35 + 20})`}
          >
            Dash
          </text>
        ))
      )}
    </svg>
  )
}
