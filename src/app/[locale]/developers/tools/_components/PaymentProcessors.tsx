'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'
import { ProviderCard, type ProviderButton } from './ProviderCard'

const CARDS_CONFIG = [
  {
    key: 'anypay',
    image: '/images/developers/tools/anypay.svg',
    hasApi: true
  },
  {
    key: 'btcpay',
    image: '/images/developers/tools/btcpay.svg',
    hasApi: false
  },
  {
    key: 'coinpayments',
    image: '/images/developers/tools/coinpayments.svg',
    hasApi: true
  },
  {
    key: 'coinspaid',
    image: '/images/developers/tools/coinspaid.svg',
    hasApi: true
  },
  {
    key: 'ankerpay',
    image: '/images/developers/tools/ankerpay.png',
    hasApi: true
  },
  {
    key: 'nowpayments',
    image: '/images/developers/tools/nowpayments.svg',
    hasApi: true
  }
]

export function PaymentProcessors (): React.ReactNode {
  const t = useTranslations('toolsPage.paymentProcessors')
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
    const buttons: ProviderButton[] = []
    if (card.hasApi) {
      buttons.push({
        label: t(`cards.${card.key}.apiButton`),
        href: '#',
        variant: 'ghost'
      })
    }
    buttons.push({
      label: t(`cards.${card.key}.websiteButton`),
      href: '#',
      variant: 'solid'
    })

    return {
      ...card,
      category: t(`cards.${card.key}.category`),
      name: t(`cards.${card.key}.name`),
      description: t(`cards.${card.key}.description`),
      buttons
    }
  })

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
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

      {/* Carousel */}
      <div
        ref={emblaRef}
        className='overflow-hidden'
        role='region'
        aria-label='Payment processors carousel'
      >
        <div className='flex gap-5'>
          {cards.map((card) => (
            <div key={card.key} className='min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_400px]'>
              <ProviderCard
                image={card.image}
                category={card.category}
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
