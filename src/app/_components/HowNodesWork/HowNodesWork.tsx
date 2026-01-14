'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { NodeCard } from './NodeCard'

export function HowNodesWork (): React.ReactNode {
  const t = useTranslations('howNodesWork')

  return (
    <div className='mx-auto max-w-[1240px] px-4 lg:px-0'>
      <div className='flex flex-col gap-[30px] lg:flex-row lg:items-stretch lg:justify-between lg:gap-[40px]'>
        {/* Left Side - Title and Globe (desktop only) */}
        <div className='relative flex flex-1 flex-col gap-[20px] lg:gap-[30px]'>
          {/* Text */}
          <div className='relative z-10 flex flex-col gap-[5px]'>
            <p className='text-[16px] font-extrabold text-primary-blue lg:text-[18px]'>
              {t('chip')}
            </p>
            <h2 className='text-[28px] leading-[1.1] font-extrabold text-white lg:text-[32px] lg:leading-[34px]'>
              {t('title')}
            </h2>
          </div>

          {/* Globe Image - desktop version, absolutely positioned */}
          <div className='hidden lg:absolute lg:inset-0 lg:top-[80px] lg:flex lg:h-auto lg:items-center lg:justify-center'>
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
        <div className='relative flex flex-col gap-[20px] lg:w-[770px] lg:gap-[30px]'>
          {/* Globe Image - mobile version, background for the entire cards area */}
          <div className='pointer-events-none absolute -top-[120px] -bottom-[120px] left-0 right-0 z-0 flex items-center justify-center lg:hidden'>
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
