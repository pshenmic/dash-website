'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { DashLogo, Heading, Text } from 'dash-ui-kit/react'

interface TimelineCard {
  date?: string
  title: string
  description: string
  tags: string[]
}

interface TimelineEra {
  year: string
  status: string
  cards: TimelineCard[]
}

function InfoCard ({ card, buttonLabel }: { card: TimelineCard, buttonLabel: string }): React.ReactNode {
  return (
    <div className='flex min-h-120 flex-col overflow-hidden rounded-4xl border border-white/15 bg-white/15 backdrop-blur-sm'>
      {/* Header — Logo + Tags */}
      <div className='flex items-center justify-between gap-3 p-5 lg:p-7'>
        <DashLogo color='white' className='h-5 w-auto shrink-0' />
        <div className='flex gap-2'>
          {card.tags.slice(0, 2).map((tag) => (
            <Text
              key={tag}
              size='xs'
              weight='medium'
              className='rounded-full border border-white/50 px-3 py-1.5 text-white'
            >
              {tag}
            </Text>
          ))}
        </div>
      </div>

      {/* Content — pushed to bottom */}
      <div className='mt-auto flex flex-col gap-5 p-5 pt-0 lg:gap-7 lg:p-7 lg:pt-0'>
        <div className='flex flex-col gap-3 lg:gap-5'>
          <Heading as='h3' weight='extrabold' className='text-2xl leading-8 tracking-tight text-white lg:text-4xl lg:leading-10'>
            {card.title}
          </Heading>
          <Text weight='medium' className='text-sm leading-normal text-white lg:text-base'>
            {card.description}
          </Text>
        </div>
        <button className='flex h-14 w-full items-center justify-center rounded-2xl bg-white/15 text-base font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90 lg:h-16 lg:text-lg'>
          {buttonLabel}
        </button>
      </div>
    </div>
  )
}

interface TimelineSlide extends TimelineCard {
  year: string
  status: string
  isFirst: boolean
  showDate: boolean
}

export function RoadmapTimeline (): React.ReactNode {
  const t = useTranslations('roadmapPage')
  const eras = t.raw('timeline.eras') as TimelineEra[]

  const flat = eras.flatMap((era) =>
    era.cards.map((card, i) => ({ ...card, year: era.year, status: era.status, isFirst: i === 0 }))
  )
  const slides: TimelineSlide[] = flat.map((slide, idx) => {
    const prev = idx > 0 ? flat[idx - 1] : null
    const showDate = !slide.isFirst && slide.date != null && (prev == null || prev.date !== slide.date || prev.year !== slide.year)
    return { ...slide, showDate }
  })

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: 'start', slidesToScroll: 1, containScroll: 'trimSnaps' },
  )

  const scrollToEnd = useCallback((): void => {
    if (emblaApi == null) return
    const lastYear = eras[eras.length - 1].year
    const lastYearIdx = slides.findIndex(s => s.isFirst && s.year === lastYear)
    emblaApi.scrollTo(lastYearIdx >= 0 ? lastYearIdx : slides.length - 1)
  }, [emblaApi, eras, slides])

  // Trackpad/wheel → scroll slides with debounce
  const wheelTimeout = useRef<ReturnType<typeof setTimeout>>(null)
  useEffect(() => {
    const root = emblaApi?.rootNode()
    if (root == null) return

    const onWheel = (e: WheelEvent): void => {
      if (emblaApi == null) return
      const dx = Math.abs(e.deltaX)
      const dy = Math.abs(e.deltaY)
      // Vertical-dominant scroll → let page scroll normally
      if (dy > dx) return
      // Any horizontal gesture → prevent browser back/forward navigation
      if (dx > 1) e.preventDefault()
      if (wheelTimeout.current != null) return // debounce active
      if (dx < 3) return // ignore micro-movements
      if (e.deltaX > 0) { emblaApi.scrollNext() } else { emblaApi.scrollPrev() }
      wheelTimeout.current = setTimeout(() => { wheelTimeout.current = null }, 300)
    }

    root.addEventListener('wheel', onWheel, { passive: false })
    return () => { root.removeEventListener('wheel', onWheel) }
  }, [emblaApi])

  useEffect(() => {
    const handler = (): void => { scrollToEnd() }
    window.addEventListener('roadmap-jump-to-latest', handler)
    return () => { window.removeEventListener('roadmap-jump-to-latest', handler) }
  }, [scrollToEnd])

  return (
    <div data-testid='roadmap-timeline' id='roadmap-timeline' className='scroll-mt-24'>
      {/* Carousel — edge-bleed: left aligned with content, right bleeds to viewport */}
      <div
        ref={emblaRef}
        className='overflow-hidden overscroll-x-contain'
        role='region'
        aria-label='Roadmap timeline'
      >
        <div className='flex gap-5 pl-4 sm:pl-6 lg:gap-10 lg:pl-[calc((100vw-80rem)/2+2rem)]'>
          {slides.map((slide) => (
            <div
              key={`${slide.year}-${slide.title}`}
              className='min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_400px]'
            >
              {/* Year or date label */}
              <div className='mb-4 flex h-12 items-center gap-6'>
                {slide.isFirst ? (
                  <>
                    <Text weight='semibold' className='text-5xl text-white'>
                      {slide.year}
                    </Text>
                    <Text size='sm' weight='medium' className={`rounded-full px-4 py-1.5 ${
                      slide.status === 'complete'
                        ? 'bg-primary-turquoise text-primary-dark'
                        : 'bg-white/15 text-white'
                    }`}>
                      {slide.status === 'complete' ? t('complete') : t('inProgress')}
                    </Text>
                  </>
                ) : slide.showDate ? (
                  <Text weight='semibold' className='text-5xl text-white'>
                    {slide.date}
                  </Text>
                ) : null}
              </div>

              {/* Timeline dot + line */}
              <div className='relative mb-8 h-5'>
                <div className={`absolute top-1/2 right-0 left-0 h-px -translate-y-1/2 ${
                  slide.status === 'complete'
                    ? 'bg-primary-turquoise/50'
                    : slide.status === 'in-progress'
                      ? 'bg-primary-white/25'
                      : 'bg-white/10'
                }`} />
                <div className={`absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  slide.status === 'complete'
                    ? 'bg-primary-turquoise'
                    : slide.status === 'in-progress'
                      ? 'bg-primary-white'
                      : 'bg-white/30'
                }`} />
              </div>

              {/* Single card */}
              <InfoCard card={slide} buttonLabel={t('readAll')} />
            </div>
          ))}
          {/* End card — Coming Soon + Last Updated */}
          <div className='flex min-w-0 flex-[0_0_85%] shrink-0 flex-col items-center justify-center sm:flex-[0_0_45%] lg:flex-[0_0_400px]'>
            <Text weight='extrabold' className='text-5xl tracking-tight text-white/20'>
              {t('comingSoon')}
            </Text>
            <Text size='sm' weight='medium' className='mt-4 text-white/40'>
              {t('lastUpdated')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
