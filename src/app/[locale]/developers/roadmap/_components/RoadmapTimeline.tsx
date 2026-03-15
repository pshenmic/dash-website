'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { DashLogo, Heading, Text } from 'dash-ui-kit/react'

interface TimelineCard {
  title: string
  description: string
  tags: string[]
}

interface TimelineEra {
  year: string
  status: string
  cards: TimelineCard[]
}

function InfoCard ({ card }: { card: TimelineCard }): React.ReactNode {
  return (
    <div className='flex h-[480px] flex-col overflow-hidden rounded-4xl border border-white/15 bg-white/15 backdrop-blur-sm'>
      {/* Header — Logo + Tags */}
      <div className='flex items-start justify-between p-7'>
        <DashLogo color='white' className='h-5 w-auto shrink-0' />
        <div className='flex flex-wrap justify-end gap-2.5'>
          {card.tags.map((tag) => (
            <span
              key={tag}
              className='rounded-full border border-white px-6 py-2.5 text-sm font-medium text-white'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content — pushed to bottom */}
      <div className='mt-auto flex flex-col gap-7 p-7 pt-0'>
        <div className='flex flex-col gap-5'>
          <Heading as='h3' weight='extrabold' className='text-3xl leading-10 tracking-tight text-white lg:text-4xl'>
            {card.title}
          </Heading>
          <Text weight='medium' className='line-clamp-4 text-base leading-normal text-white lg:text-lg'>
            {card.description}
          </Text>
        </div>
        <button className='flex h-16 w-full items-center justify-center rounded-[20px] bg-white/15 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
          Read All
        </button>
      </div>
    </div>
  )
}

export function RoadmapTimeline (): React.ReactNode {
  const t = useTranslations('roadmapPage')
  const eras = t.raw('timeline.eras') as TimelineEra[]

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const onSelect = useCallback((): void => {
    if (emblaApi == null) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi == null) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const scrollToEnd = useCallback((): void => {
    if (emblaApi == null) return
    emblaApi.scrollTo(eras.length - 1)
  }, [emblaApi, eras.length])

  return (
    <div className='mx-auto max-w-[1728px] px-4 sm:px-6 lg:px-8'>
      {/* Navigation arrows */}
      <div className='mb-8 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className='flex size-11 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40'
            aria-label='Previous era'
          >
            <ArrowLeft className='size-5 text-white' />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className='flex size-11 items-center justify-center rounded-full bg-white/15 transition-all hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40'
            aria-label='Next era'
          >
            <ArrowRight className='size-5 text-white' />
          </button>
        </div>
        <button
          onClick={scrollToEnd}
          className='text-sm font-semibold text-white/60 transition-colors hover:text-white'
        >
          Jump to Latest →
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={emblaRef}
        className='overflow-hidden'
        role='region'
        aria-label='Roadmap timeline'
      >
        <div className='flex gap-10'>
          {eras.map((era) => (
            <div
              key={era.year}
              className='min-w-0 flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_672px]'
            >
              {/* Year + Status badge */}
              <div className='mb-4 flex items-center gap-6'>
                <span className='text-5xl font-semibold text-white'>
                  {era.year}
                </span>
                <span className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                  era.status === 'complete'
                    ? 'bg-primary-turquoise text-primary-dark'
                    : 'bg-white/15 text-white'
                }`}>
                  {era.status === 'complete' ? t('complete') : t('inProgress')}
                </span>
              </div>

              {/* Timeline dot + line */}
              <div className='relative mb-8 h-5'>
                <div className='absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 bg-white/25' />
                <div className='absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white' />
              </div>

              {/* Info cards */}
              <div className='flex flex-col gap-6'>
                {era.cards.map((card) => (
                  <InfoCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
