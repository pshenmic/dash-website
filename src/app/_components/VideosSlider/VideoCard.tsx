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

export function VideoCard ({ video }: VideoCardProps): React.ReactNode {
  const { variant, label, title, subtitle, session, image } = video

  const baseClasses =
    'relative h-56 w-full overflow-hidden rounded-3xl shadow-sm dark:border dark:border-white/15'

  if (variant === 'light') {
    return (
      <div className={`${baseClasses} bg-primary-white`}>
        <div className='absolute inset-0 opacity-20'>
          <DashPattern />
        </div>

        <div className='absolute top-13 left-6'>
          <span className='rounded-full border border-primary-dark/30 px-3 py-1 text-xs text-primary-dark'>
            {label}
          </span>
        </div>

        <div className='absolute top-23 left-6'>
          <h3 className='text-3xl leading-9 font-extrabold tracking-tight text-primary-dark'>
            {title.split('\n').map((line, i) => (
              <span key={i} className='block'>
                {line}
              </span>
            ))}
          </h3>
        </div>

        <div className='absolute bottom-4 left-6'>
          <Image src='/images/logo.svg' alt='Dash' width={60} height={16} />
        </div>

        {session != null && session !== '' && (
          <p className='absolute right-6 bottom-4 text-xs text-primary-dark/75'>
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
        {image != null && image !== '' && (
          <div className='absolute inset-0'>
            <Image src={image} alt='' fill className='object-cover' />
            <div className='absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-transparent' />
          </div>
        )}

        <div className='absolute top-6 left-6'>
          <Image
            src='/images/logo.svg'
            alt='Dash'
            width={40}
            height={11}
            className='brightness-0 invert'
          />
        </div>

        <div className='absolute top-26 left-6'>
          <span className='rounded-full border border-primary-turquoise/50 px-3 py-1 text-xs text-primary-turquoise'>
            {label}
          </span>
        </div>

        <div className='absolute bottom-6 left-6'>
          <h3 className='text-3xl leading-7 font-extrabold tracking-tight text-primary-white'>
            {title.split('\n').map((line, i) => (
              <span key={i} className='block'>
                {line}
              </span>
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
        {image != null && image !== '' && (
          <div className='absolute top-0 right-0 h-full w-40'>
            <div className='absolute inset-0 rounded-xl bg-primary-white/10 backdrop-blur-sm' />
            <Image
              src={image}
              alt=''
              fill
              className='object-cover object-top'
            />
          </div>
        )}

        <div className='absolute top-6 left-6'>
          <span className='rounded-full border border-primary-white/50 px-3 py-1 text-xs text-primary-white'>
            {label}
          </span>
        </div>

        <div className='absolute top-1/2 left-6 w-36 -translate-y-1/2'>
          <h3 className='text-3xl leading-7 font-extrabold tracking-tight text-primary-white'>
            {title}
          </h3>
          {subtitle != null && subtitle !== '' && (
            <p className='mt-1 text-xs leading-4 text-primary-white/75'>
              {subtitle}
            </p>
          )}
        </div>

        <div className='absolute bottom-4 left-6'>
          <Image
            src='/images/logo.svg'
            alt='Dash'
            width={60}
            height={16}
            className='brightness-0 invert'
          />
        </div>

        <PlayButton />
      </div>
    )
  }

  // variant === 'coin'
  return (
    <div className={`${baseClasses} bg-primary-white`}>
      <div className='absolute top-6 left-6'>
        <Image src='/images/logo.svg' alt='Dash' width={60} height={16} />
      </div>

      {/* Coin overflows card bounds by design */}
      {image != null && image !== '' && (
        <div className='absolute -top-10 -right-12 size-75'>
          <Image src={image} alt='' fill className='object-contain' />
        </div>
      )}

      <div className='absolute top-26 left-6'>
        <span className='rounded-full border border-primary-dark/30 px-3 py-1 text-xs text-primary-dark'>
          {label}
        </span>
      </div>

      <div className='absolute bottom-6 left-6'>
        <h3 className='text-3xl leading-7 font-extrabold tracking-tight text-primary-dark'>
          {title.split('\n').map((line, i) => (
            <span key={i} className='block'>
              {line}
            </span>
          ))}
        </h3>
      </div>

      <PlayButton />
    </div>
  )
}

function PlayButton (): React.ReactNode {
  return (
    <button
      className='absolute top-3.5 right-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-white shadow-lg transition-all hover:bg-primary-blue/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue'
      aria-label='Play video'
    >
      <Play className='h-4 w-4 fill-primary-blue text-primary-blue' />
    </button>
  )
}

function DashPattern (): React.ReactNode {
  return (
    <svg className='h-full w-full' viewBox='0 0 400 250' fill='none'>
      {[...Array(8)].map((_, row) =>
        [...Array(12)].map((_, col) => (
          <text
            key={`${row}-${col}`}
            x={col * 80 - 20 + (row % 2) * 40}
            y={row * 35 + 20}
            fill='currentColor'
            className='text-primary-dark/10'
            fontSize='24'
            fontWeight='800'
            transform={`rotate(-30 ${col * 80 + 20} ${row * 35 + 20})`}
          >
            Dash
          </text>
        ))
      )}
    </svg>
  )
}
