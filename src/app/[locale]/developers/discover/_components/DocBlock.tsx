import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

interface DocBlockProps {
  translationKey: string
  imageSrc: string
  imageAlt: string
  variant: 'core' | 'platform' | 'users'
}

function CoreImage ({ src, alt }: { src: string, alt: string }): React.ReactNode {
  return (
    <div className='pointer-events-none absolute left-[37.9%] top-[-77%] hidden h-[252%] w-[75%] overflow-hidden lg:block'>
      <img src={src} alt={alt} className='absolute left-[-8.68%] top-[18.07%] h-[68.65%] w-[117.35%] max-w-none' />
    </div>
  )
}

function PlatformImage ({ src, alt }: { src: string, alt: string }): React.ReactNode {
  return (
    <div className='pointer-events-none absolute left-0 top-[-64%] hidden h-[228%] w-[68%] lg:block'>
      <div className='size-full rotate-180 -scale-y-100'>
        <Image src={src} alt={alt} fill className='object-cover' />
      </div>
    </div>
  )
}

function UsersImage ({ src, alt }: { src: string, alt: string }): React.ReactNode {
  return (
    <div className='pointer-events-none absolute top-[-2%] left-0 hidden size-full lg:block'>
      {[
        { left: '80%', opacity: 'opacity-25' },
        { left: '65%', opacity: 'opacity-50' },
        { left: '50%', opacity: 'opacity-75' },
        { left: '35%', opacity: 'opacity-100' }
      ].map((layer, i) => (
        <div
          key={i}
          className={`absolute top-[-2%] h-[138%] w-[41%] ${layer.opacity}`}
          style={{ left: layer.left }}
        >
          <Image src={src} alt={alt} fill className='object-cover' />
        </div>
      ))}
    </div>
  )
}

export function DocBlock ({
  translationKey,
  imageSrc,
  imageAlt,
  variant
}: DocBlockProps): React.ReactNode {
  const t = useTranslations(translationKey)

  const isTextRight = variant === 'platform'

  return (
    <div data-testid={`doc-block-${variant}`} className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-4xl border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:h-88'>
        {/* 3D Image — desktop */}
        {variant === 'core' && <CoreImage src={imageSrc} alt={imageAlt} />}
        {variant === 'platform' && <PlatformImage src={imageSrc} alt={imageAlt} />}
        {variant === 'users' && <UsersImage src={imageSrc} alt={imageAlt} />}

        {/* Mobile Image */}
        <div className='relative h-48 w-full lg:hidden'>
          <Image src={imageSrc} alt={imageAlt} fill className='object-cover' />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col gap-9 p-8 lg:absolute lg:top-1/2 lg:max-w-[300px] lg:-translate-y-1/2 lg:p-0 ${
            isTextRight ? 'lg:right-24' : 'lg:left-24'
          }`}
        >
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! dark:text-white! lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-primary-dark! dark:text-white! lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <button className='flex h-16 w-fit items-center justify-center rounded-2xl bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}
