'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Button, Heading, Text } from 'dash-ui-kit/react'
import { LinkCard } from '@/components/ui/LinkCard'
import { SpendCard } from './SpendCard'
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'

const spendCards = [
  {
    id: 'friends',
    icon: '/images/get-started/get-going/spend/phone-check.png'
  },
  {
    id: 'bills',
    icon: '/images/get-started/get-going/spend/airplane.png'
  },
  {
    id: 'bills2',
    icon: '/images/get-started/get-going/spend/airplane.png'
  }
]

const retailers = [
  { name: 'Travala', url: 'travala.com', logo: '/images/get-started/get-going/retailers/travala.png' },
  { name: 'Bitrefill', url: 'bitrefill.com', logo: '/images/get-started/get-going/retailers/bitrefill.svg' },
  { name: 'Mobile Topup', url: 'mobiletopup.com', logo: '/images/get-started/get-going/retailers/mobiletopup.svg' }
]

export function GetGoing (): React.ReactNode {
  const t = useTranslations('getGoing')
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: false
  })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi != null) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi != null) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (emblaApi == null) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (emblaApi == null) return
    emblaApi.on('select', onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <section className='-mt-12 overflow-x-clip bg-primary-blue pb-12 pt-24 lg:-mt-16 lg:pb-16 lg:pt-32'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-10'>
          {/* Left - Hero */}
          <div className='flex flex-col gap-6 lg:w-122 lg:shrink-0 lg:gap-9'>
            {/* Chip */}
            <div className='w-fit rounded-full border border-white px-6 py-3 lg:px-9 lg:py-4'>
              <span className='text-base font-medium text-white lg:text-lg'>
                {t('chip')}
              </span>
            </div>

            {/* Title */}
            <Heading as='h2' size='2xl' weight='extrabold' className='tracking-tight text-white lg:text-5xl lg:leading-12'>
              {t('title')}
            </Heading>

            {/* Description */}
            <Text size='base' weight='medium' className='max-w-md tracking-tight text-white lg:text-lg'>
              {t('description')}
            </Text>

            {/* Buttons */}
            <div className='flex flex-col gap-3 sm:flex-row sm:gap-4'>
              <Button
                variant='solid'
                className='h-12 rounded-full px-8 text-base font-semibold bg-white! text-primary-blue! hover:bg-white/90! sm:h-16 sm:px-9 sm:text-lg'
              >
                {t('useYourDash')}
              </Button>
              <Button
                variant='outline'
                className='h-12 rounded-full bg-white/15! pl-6 pr-1.5 text-base font-semibold text-white! border-transparent! hover:bg-white/25! sm:h-16 sm:pl-7 sm:pr-2.5 sm:text-lg'
              >
                {t('learnMore')}
                <div className='flex size-9 items-center justify-center rounded-full bg-white sm:size-11'>
                  <ArrowUpRight className='size-4 text-primary-blue sm:size-5' strokeWidth={2.5} />
                </div>
              </Button>
            </div>
          </div>

          {/* Right - Slider (extends beyond screen edge) */}
          <div className='flex min-w-0 flex-1 flex-col gap-8 lg:-mr-[calc((100vw-1280px)/2+16px)] lg:gap-12'>
            {/* Carousel */}
            <div className='-mx-10 overflow-hidden px-10' ref={emblaRef}>
              <div className='flex gap-5 py-10 sm:gap-6'>
                {spendCards.map((card) => (
                  <div key={card.id} className='min-w-0 flex-[0_0_auto]'>
                    <SpendCard
                      label={t(`cards.${card.id}.label`)}
                      title={t(`cards.${card.id}.title`)}
                      icon={card.icon}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className='flex items-center justify-between pr-4 lg:w-152 lg:pr-0'>
              {/* Progress dots */}
              <div className='flex gap-2'>
                {spendCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`h-1 w-12 rounded-full transition-colors sm:w-16 ${
                      index === selectedIndex ? 'bg-white' : 'bg-white/15'
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className='hidden gap-5 sm:flex'>
                <button
                  onClick={scrollPrev}
                  className='flex size-11 items-center justify-center rounded-full bg-white/15 transition-smooth hover:bg-white/25 active-press'
                  aria-label='Previous slide'
                >
                  <ChevronLeft className='size-5 text-white' />
                </button>
                <button
                  onClick={scrollNext}
                  className='flex size-11 items-center justify-center rounded-full bg-white/15 transition-smooth hover:bg-white/25 active-press'
                  aria-label='Next slide'
                >
                  <ChevronRight className='size-5 text-white' />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Retailers */}
        <div className='mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8'>
          {/* Header */}
          <div className='flex items-center justify-between'>
            <Heading as='h3' size='xl' weight='extrabold' className='leading-tight text-white sm:text-3xl sm:leading-9'>
              {t('retailers.title')}
            </Heading>
            <Button
              variant='outline'
              colorScheme='brand'
              className='hidden h-14 rounded-2xl px-9 text-lg font-semibold sm:flex sm:h-16'
            >
              {t('retailers.seeAll')}
            </Button>
          </div>

          {/* Retailer Cards */}
          <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-5'>
            {retailers.map((retailer) => (
              <LinkCard
                key={retailer.name}
                name={retailer.name}
                url={retailer.url}
                logo={retailer.logo}
                variant='blue'
              />
            ))}
          </div>

          {/* Mobile See All Button */}
          <Button
            variant='outline'
            colorScheme='brand'
            className='h-12 w-full rounded-2xl text-base font-semibold sm:hidden'
          >
            {t('retailers.seeAll')}
          </Button>
        </div>

        {/* Platform CTA Block */}
        <div className='relative mt-12 overflow-hidden rounded-3xl bg-white/15 sm:rounded-4xl lg:mt-16'>
          {/* 3D Image */}
          <div className='absolute -right-20 top-0 h-full w-100 rotate-180 sm:w-125 lg:right-0 lg:-top-78 lg:h-320 lg:w-332'>
            <Image
              src='/images/shared/3d/platform.png'
              alt='Dash Platform'
              fill
              className='object-cover'
            />
          </div>

          {/* Content */}
          <div className='relative z-10 flex flex-col gap-6 px-6 py-8 sm:gap-8 sm:px-10 sm:py-12 lg:gap-9 lg:px-25 lg:py-12'>
            <div className='flex flex-col gap-3 sm:gap-4'>
              <Heading as='h3' size='xl' weight='extrabold' className='whitespace-nowrap leading-10 tracking-tight text-white sm:text-3xl lg:text-4xl'>
                {t('platform.title')}
              </Heading>
              <Text size='base' weight='medium' className='w-70 text-white sm:w-100 sm:text-lg'>
                {t('platform.description')}
              </Text>
            </div>
            <Button
              variant='outline'
              colorScheme='brand'
              className='h-12 w-fit rounded-2xl px-8 text-base font-semibold sm:h-16 sm:px-9 sm:text-lg'
            >
              {t('platform.learnMore')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
