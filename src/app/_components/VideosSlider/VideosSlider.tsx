'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { VideoCard, type VideoCardData } from './VideoCard'

export function VideosSlider () {
  const t = useTranslations('videosSlider')
  const videos = t.raw('videos') as VideoCardData[]
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback(() => {
    if (emblaApi == null) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi == null) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className='relative mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='flex gap-4'>
        <div className='mb-6 hidden shrink-0 items-center gap-2 self-end lg:flex'>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary-blue/15 transition-opacity disabled:opacity-40 dark:bg-primary-white/15'
            aria-label='Previous slide'
          >
            <ArrowLeft className='h-5 w-5 text-primary-blue dark:text-primary-white' />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary-blue/15 transition-opacity disabled:opacity-40 dark:bg-primary-white/15'
            aria-label='Next slide'
          >
            <ArrowRight className='h-5 w-5 text-primary-blue dark:text-primary-white' />
          </button>
        </div>

        <div
          ref={emblaRef}
          className='min-w-0 flex-1 overflow-hidden'
          role='region'
          aria-label='Video carousel'
        >
          <div className='flex gap-4 pb-2 lg:gap-[39px]'>
            {videos.map((_video) => (
              <div
                key={_video.id}
                className='min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_384px]'
              >
                <VideoCard video={_video} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
