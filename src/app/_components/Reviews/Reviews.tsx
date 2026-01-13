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
      <div className='rounded-[25px] bg-white py-[50px] dark:bg-transparent lg:rounded-[35px] lg:py-[75px]'>
        {/* Header */}
        <div className='mb-[30px] flex flex-col items-center gap-[5px] text-center lg:mb-[50px]'>
          <p className='text-[14px] font-extrabold text-primary-blue lg:text-[18px]'>
            {t('chip')}
          </p>
          <h2 className='text-[24px] leading-[1.1] font-extrabold text-primary-dark dark:text-white lg:text-[32px] lg:leading-[34px]'>
            {t('title')}
          </h2>
          <p className='text-[12px] font-medium text-primary-dark dark:text-white/70 lg:text-[13px]'>
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
            <div className='-ml-4 flex lg:-ml-[35px]'>
              {reviews.map((_review, index) => (
                <div
                  key={index}
                  className='min-w-0 flex-[0_0_85%] pl-4 sm:flex-[0_0_45%] lg:flex-[0_0_340px] lg:pl-[35px]'
                >
                  <ReviewCard review={_review} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
