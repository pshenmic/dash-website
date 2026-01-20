'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { NodeCard } from './NodeCard'

export function HowNodesWork (): React.ReactNode {
  const t = useTranslations('howNodesWork')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-0'>
      <div className='flex flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between lg:gap-10'>
        {/* Left Side - Title and Globe (desktop only) */}
        <div className='relative flex flex-1 flex-col gap-5 lg:gap-8'>
          {/* Text */}
          <div className='relative z-10 flex flex-col gap-1'>
            <p className='text-base font-extrabold text-primary-blue lg:text-lg'>
              {t('chip')}
            </p>
            <h2 className='text-3xl leading-tight font-extrabold text-white lg:text-3xl lg:leading-9'>
              {t('title')}
            </h2>
          </div>

          {/* Globe Image - desktop version, absolutely positioned */}
          <div className='hidden lg:absolute lg:inset-0 lg:top-20 lg:flex lg:h-auto lg:items-center lg:justify-center'>
            <Image
              src='/images/home/nodes/globe-network.png'
              alt='Network Globe'
              width={1200}
              height={1200}
              className='h-auto w-full object-contain lg:w-[200%] lg:max-w-[200%]'
            />
          </div>
        </div>

        {/* Right Side - Cards */}
        <div className='relative flex flex-col gap-5 lg:w-3xl lg:gap-8'>
          {/* Globe Image - mobile version, background for the entire cards area */}
          <div className='pointer-events-none absolute -top-32 -bottom-32 left-0 right-0 z-0 flex items-center justify-center lg:hidden'>
            <Image
              src='/images/home/nodes/globe-network.png'
              alt='Network Globe'
              width={600}
              height={600}
              className='h-[140%] w-auto max-w-none object-contain opacity-40'
            />
          </div>
          {/* Card 1 - Masternodes in General */}
          <NodeCard
            title={t('cards.masternodes.title')}
            description={
              <>
                {t('cards.masternodes.description')}{' '}
                <span className='text-primary-blue'>
                  {t('cards.masternodes.highlight')}
                </span>
                {t('cards.masternodes.descriptionEnd')}
              </>
            }
            number={t('cards.masternodes.number')}
            isActive
          />

          {/* Card 2 - Hosted masternode */}
          <NodeCard
            title={t('cards.hosted.title')}
            description={
              <>
                {t('cards.hosted.description')}{' '}
                <span className='text-primary-blue'>
                  {t('cards.hosted.highlight')}
                </span>
                {t('cards.hosted.descriptionEnd')}
              </>
            }
            number={t('cards.hosted.number')}
            isActive={false}
          />
        </div>
      </div>
    </div>
  )
}
