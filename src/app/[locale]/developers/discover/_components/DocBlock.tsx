import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

interface DocBlockProps {
  translationKey: string
  imageSrc: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

export function DocBlock ({
  translationKey,
  imageSrc,
  imageAlt,
  imagePosition
}: DocBlockProps): React.ReactNode {
  const t = useTranslations(translationKey)

  const isImageLeft = imagePosition === 'left'

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-[35px] border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:h-88'>
        {/* 3D Image */}
        <div
          className={`pointer-events-none absolute hidden h-[130%] w-[55%] lg:block ${
            isImageLeft
              ? '-left-[5%] -top-[15%]'
              : '-right-[5%] -top-[15%]'
          }`}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={`object-cover ${isImageLeft ? '-scale-y-100' : ''}`}
          />
        </div>

        {/* Mobile Image */}
        <div className='relative h-48 w-full lg:hidden'>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className='object-cover'
          />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 flex flex-col gap-9 p-8 lg:max-w-[40%] lg:p-24 ${
            isImageLeft ? 'lg:ml-auto' : ''
          }`}
        >
          <div className='flex flex-col gap-4'>
            <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! lg:text-4xl lg:leading-10'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-primary-dark! lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <button className='flex h-16 w-fit items-center justify-center rounded-[20px] bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
            {t('button')}
          </button>
        </div>
      </div>
    </div>
  )
}
