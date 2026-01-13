import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

interface ReleaseItem {
  tag: string
  complete?: string
  title: string
  items: string[]
}

export function RoadmapBlock (): React.ReactNode {
  const t = useTranslations('latestNews.roadmap')

  const releases: ReleaseItem[] = [
    {
      tag: t('releases.q1_2025.tag'),
      title: t('releases.q1_2025.title'),
      items: t.raw('releases.q1_2025.items') as string[]
    },
    {
      tag: t('releases.2024.tag'),
      complete: t('releases.2024.complete'),
      title: t('releases.2024.title'),
      items: t.raw('releases.2024.items') as string[]
    }
  ]

  const features = t.raw('features') as string[]

  return (
    <div className='relative mt-[30px] pt-[66px] lg:mt-[50px] lg:pt-0'>
      {/* Main container with white/dark background */}
      <div className='relative overflow-visible rounded-[25px] bg-white lg:h-[580px] lg:rounded-[35px] dark:bg-secondary-space-cadet'>
        {/* Coming Soon chip */}
        <div className='absolute top-[20px] right-[20px] z-10 lg:top-[25px] lg:right-[25px]'>
          <span className='rounded-[35px] border border-primary-dark px-[25px] py-[10px] text-[11px] font-medium text-primary-dark lg:px-[35px] lg:text-[12px] dark:border-white dark:text-white'>
            {t('comingSoon')}
          </span>
        </div>

        {/* Phone mockup with releases - positioned to overflow top */}
        <div className='absolute left-[20px] top-[-66px] z-20 hidden h-[646px] w-[540px] overflow-hidden rounded-t-[35px] bg-primary-blue shadow-[0px_0px_75px_0px_rgba(0,0,0,0.25)] lg:left-[100px] lg:block dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
          <div className='p-[30px]'>
            {releases.map((release, index) => (
              <div
                key={index}
                className='mb-[30px] rounded-[20px] bg-secondary-light-blue p-[15px] shadow-[0px_0px_75px_0px_rgba(0,0,0,0.1)] dark:border dark:border-white/15 dark:bg-secondary-yinmn-blue'
              >
                {/* Tags */}
                <div className='mb-[20px] flex gap-[10px]'>
                  <span className='rounded-[100px] bg-white px-[20px] py-[10px] text-[16px] font-medium text-primary-blue'>
                    {release.tag}
                  </span>
                  {release.complete && (
                    <span className='flex items-center gap-[10px] rounded-[100px] bg-white/15 px-[20px] py-[10px] text-[16px] font-bold text-white'>
                      <Image
                        src='/images/home/news/check-icon.svg'
                        alt=''
                        width={16}
                        height={12}
                      />
                      {release.complete}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h4 className='mb-[15px] text-[32px] font-extrabold text-white'>
                  {release.title}
                </h4>

                {/* Items list */}
                <ul className='space-y-[12px]'>
                  {release.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className='ml-[24px] list-disc text-[16px] font-medium text-white'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile version of releases - inside the card */}
        <div className='block rounded-t-[25px] bg-primary-blue p-[20px] lg:hidden dark:bg-secondary-space-cadet'>
          {releases.map((release, index) => (
            <div
              key={index}
              className='mb-[15px] rounded-[15px] bg-secondary-light-blue p-[15px] shadow-[0px_0px_75px_0px_rgba(0,0,0,0.1)] last:mb-0 dark:border dark:border-white/15 dark:bg-secondary-yinmn-blue'
            >
              {/* Tags */}
              <div className='mb-[15px] flex flex-wrap gap-[8px]'>
                <span className='rounded-[100px] bg-white px-[15px] py-[8px] text-[13px] font-medium text-primary-blue'>
                  {release.tag}
                </span>
                {release.complete && (
                  <span className='flex items-center gap-[6px] rounded-[100px] bg-white/15 px-[15px] py-[8px] text-[13px] font-bold text-white'>
                    <Image
                      src='/images/home/news/check-icon.svg'
                      alt=''
                      width={14}
                      height={10}
                    />
                    {release.complete}
                  </span>
                )}
              </div>

              {/* Title */}
              <h4 className='mb-[10px] text-[22px] font-extrabold text-white'>
                {release.title}
              </h4>

              {/* Items list */}
              <ul className='space-y-[6px]'>
                {release.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className='ml-[20px] list-disc text-[14px] font-medium text-white'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className='flex flex-col justify-center p-[25px] lg:absolute lg:right-0 lg:top-1/2 lg:w-[500px] lg:-translate-y-1/2 lg:p-0 lg:pr-[50px]'>
          <div className='flex flex-col gap-[25px] lg:gap-[35px]'>
            {/* Title and description */}
            <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
              <h3 className='whitespace-pre-line text-[28px] leading-[1.05] font-extrabold tracking-[-0.03em] text-primary-dark lg:text-[38px] lg:leading-[40px] dark:text-white'>
                {t('title')}
              </h3>
              <p className='max-w-[340px] text-[14px] leading-[1.5] font-medium text-primary-dark lg:text-[18px] dark:text-white'>
                {t('description')}
              </p>

              {/* Features list */}
              <ul className='mt-[5px] space-y-[5px]'>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className='ml-[20px] list-disc text-[14px] font-extrabold text-primary-blue lg:ml-[27px] lg:text-[18px]'
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
              <Button variant='primary' className='w-full lg:h-[65px]'>
                {t('seeFullRoadmap')}
              </Button>
              <Button variant='secondary' className='w-full lg:h-[65px]'>
                {t('viewReleaseNotes')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
