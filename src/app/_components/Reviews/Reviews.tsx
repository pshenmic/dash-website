'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations } from 'next-intl'
import { ReviewCard, type ReviewData } from './ReviewCard'

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/www.dash.org'

export function Reviews (): React.ReactNode {
  const t = useTranslations('reviews')
  const reviews = t.raw('reviews') as ReviewData[]

  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      loop: true
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })]
  )

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='rounded-3xl bg-white py-12 dark:bg-transparent lg:rounded-4xl lg:py-20'>
        {/* Header */}
        <div className='mb-8 flex flex-col items-center gap-1 text-center lg:mb-12'>
          <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
            {t('chip')}
          </p>
          <h2 className='text-2xl leading-tight font-extrabold text-primary-dark dark:text-white lg:text-3xl lg:leading-9'>
            {t('title')}
          </h2>
          <p className='text-xs font-medium text-primary-dark dark:text-white/70 lg:text-sm'>
            {t('subtitle')}{' '}
            <a
              href={TRUSTPILOT_URL}
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary-blue hover:underline'
            >
              {t('trustpilotLink')}
            </a>
          </p>
        </div>

        {/* Slider */}
        <div className='relative px-4 lg:px-6'>
          <div
            ref={emblaRef}
            className='overflow-hidden'
            role='region'
            aria-label='Reviews carousel'
          >
            <div className='-ml-4 flex lg:-ml-9'>
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className='min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_340px] lg:pl-9'
                >
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
