'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { ProviderCard, type ProviderButton } from './ProviderCard'

const CARDS_CONFIG = [
  {
    key: 'nodejs',
    image: '/images/developers/tools/nodejs.svg',
    darkImage: '/images/developers/tools/nodejs-dark.svg'
  },
  {
    key: 'java',
    image: '/images/developers/tools/java.svg'
  },
  {
    key: 'dotnet',
    image: '/images/developers/tools/dotnet.svg'
  },
  {
    key: 'python',
    image: '/images/developers/tools/python.svg'
  }
]

export function SDKsAndTools (): React.ReactNode {
  const t = useTranslations('toolsPage.sdks')
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

  const cards = CARDS_CONFIG.map((card) => {
    const buttons: ProviderButton[] = [
      {
        label: t(`cards.${card.key}.docsButton`),
        href: '#',
        variant: 'ghost'
      },
      {
        label: t(`cards.${card.key}.githubButton`),
        href: '#',
        variant: 'solid'
      }
    ]

    return {
      ...card,
      name: t(`cards.${card.key}.name`),
      description: t(`cards.${card.key}.description`),
      buttons
    }
  })

  return (
    <div>
      {/* Section Header */}
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-10 flex items-end justify-between lg:mb-16'>
          <div className='flex flex-col gap-1'>
            <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
              {t('chip')}
            </p>
            <Heading as='h2' size='xl' weight='extrabold' className='leading-tight dark:text-white lg:text-3xl lg:leading-9'>
              {t('title')}
            </Heading>
          </div>

          <div className='hidden shrink-0 items-center gap-2 lg:flex'>
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className='flex size-11 items-center justify-center rounded-full bg-primary-blue/15 transition-all hover:bg-primary-blue/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue disabled:opacity-40 dark:bg-primary-white/15 dark:hover:bg-primary-white/25 dark:focus-visible:ring-primary-white'
              aria-label='Previous slide'
            >
              <ArrowLeft className='size-5 text-primary-blue dark:text-primary-white' />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className='flex size-11 items-center justify-center rounded-full bg-primary-blue/15 transition-all hover:bg-primary-blue/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue disabled:opacity-40 dark:bg-primary-white/15 dark:hover:bg-primary-white/25 dark:focus-visible:ring-primary-white'
              aria-label='Next slide'
            >
              <ArrowRight className='size-5 text-primary-blue dark:text-primary-white' />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel — bleeds to right screen edge, py-[100px] gives shadow room inside overflow-hidden */}
      <div
        ref={emblaRef}
        className='-my-[100px] overflow-hidden py-[100px]'
        role='region'
        aria-label='SDKs and tools carousel'
      >
        <div className='flex gap-5 pl-4 sm:pl-6 lg:pl-[calc((100vw-80rem)/2+2rem)]'>
          {cards.map((card) => (
            <div key={card.key} className='min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_400px]'>
              <ProviderCard
                image={card.image}
                darkImage={card.darkImage}
                name={card.name}
                description={card.description}
                buttons={card.buttons}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
