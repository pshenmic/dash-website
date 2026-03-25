import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Button } from 'dash-ui-kit/react'

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
    <div className='relative mt-8 pt-16 lg:mt-12 lg:pt-0'>
      {/* Main container with white/dark background */}
      <div className='relative overflow-visible rounded-3xl bg-white lg:h-148 lg:rounded-4xl dark:bg-secondary-space-cadet'>
        {/* Coming Soon chip */}
        <div className='absolute top-5 right-5 z-10 lg:top-6 lg:right-6'>
          <Badge variant='bordered' colorLight='gray' colorDark='white' size='sm'>
            {t('comingSoon')}
          </Badge>
        </div>

        {/* Phone mockup with releases - positioned to overflow top */}
        <div className='absolute left-5 -top-16 z-20 hidden h-164 w-136 overflow-hidden rounded-t-4xl bg-primary-blue shadow-2xl lg:left-24 lg:block dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
          <div className='p-8'>
            {releases.map((release, index) => (
              <div
                key={index}
                className='mb-8 rounded-2xl bg-secondary-light-blue p-4 shadow-lg dark:border dark:border-white/15 dark:bg-secondary-yinmn-blue'
              >
                {/* Tags */}
                <div className='mb-5 flex gap-2.5'>
                  <Badge variant='solid' color='white' size='sm'>
                    {release.tag}
                  </Badge>
                  {release.complete && (
                    <Badge variant='flat' color='white' size='sm' className='gap-2.5 font-bold'>
                      <Image
                        src='/images/home/news/check-icon.svg'
                        alt='Complete'
                        width={16}
                        height={12}
                      />
                      {release.complete}
                    </Badge>
                  )}
                </div>

                {/* Title */}
                <h4 className='mb-4 text-3xl font-extrabold text-white'>
                  {release.title}
                </h4>

                {/* Items list */}
                <ul className='space-y-3'>
                  {release.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className='ml-6 list-disc text-base font-medium text-white'
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
        <div className='block rounded-t-3xl bg-primary-blue p-5 lg:hidden dark:bg-secondary-space-cadet'>
          {releases.map((release, index) => (
            <div
              key={index}
              className='mb-4 rounded-2xl bg-secondary-light-blue p-4 shadow-lg last:mb-0 dark:border dark:border-white/15 dark:bg-secondary-yinmn-blue'
            >
              {/* Tags */}
              <div className='mb-4 flex flex-wrap gap-2'>
                <Badge variant='solid' color='white' size='xs'>
                  {release.tag}
                </Badge>
                {release.complete && (
                  <Badge variant='flat' color='white' size='xs' className='gap-1.5 font-bold'>
                    <Image
                      src='/images/home/news/check-icon.svg'
                      alt='Completed'
                      width={14}
                      height={10}
                    />
                    {release.complete}
                  </Badge>
                )}
              </div>

              {/* Title */}
              <h4 className='mb-2.5 text-2xl font-extrabold text-white'>
                {release.title}
              </h4>

              {/* Items list */}
              <ul className='space-y-1.5'>
                {release.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className='ml-5 list-disc text-sm font-medium text-white'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className='flex flex-col justify-center p-6 lg:absolute lg:right-0 lg:top-1/2 lg:w-lg lg:-translate-y-1/2 lg:p-0 lg:pr-12'>
          <div className='flex flex-col gap-6 lg:gap-9'>
            {/* Title and description */}
            <div className='flex flex-col gap-2.5 lg:gap-4'>
              <h3 className='whitespace-pre-line text-3xl leading-tight font-extrabold tracking-tight text-primary-dark lg:text-4xl lg:leading-10 dark:text-white'>
                {t('title')}
              </h3>
              <p className='max-w-sm text-sm leading-normal font-medium text-primary-dark lg:text-lg dark:text-white'>
                {t('description')}
              </p>

              {/* Features list */}
              <ul className='mt-1 space-y-1'>
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className='ml-5 list-disc text-sm font-extrabold text-primary-blue lg:ml-7 lg:text-lg'
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-2.5 lg:gap-4'>
              <Button variant='solid' colorScheme='brand' size='xl' className='w-full'>
                {t('seeFullRoadmap')}
              </Button>
              <Button variant='solid' colorScheme='halfBlue' size='xl' className='w-full'>
                {t('viewReleaseNotes')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
