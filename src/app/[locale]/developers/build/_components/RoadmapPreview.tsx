import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, Heading, Text } from 'dash-ui-kit/react'

interface ReleaseItem {
  tag: string
  complete?: string
  title: string
  items: string[]
}

export function RoadmapPreview (): React.ReactNode {
  const t = useTranslations('buildPage.roadmap')

  const releases: ReleaseItem[] = [
    {
      tag: t('timeline.q1.tag'),
      title: t('timeline.q1.title'),
      items: [
        t('timeline.q1.items.backports'),
        t('timeline.q1.items.wallet'),
        t('timeline.q1.items.stress')
      ]
    },
    {
      tag: t('timeline.platform.tag'),
      complete: t('timeline.platform.completeTag'),
      title: t('timeline.platform.title'),
      items: [
        t('timeline.platform.items.credit'),
        t('timeline.platform.items.identity'),
        t('timeline.platform.items.stress')
      ]
    }
  ]

  const features = [
    t('items.chainlocks'),
    t('items.llmq'),
    t('items.evolution')
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative mt-8 pt-16 lg:mt-12 lg:pt-0'>
        <div className='relative overflow-visible rounded-3xl border border-primary-dark/15 bg-white shadow-soft lg:h-148 lg:rounded-4xl dark:border-white/15 dark:bg-secondary-space-cadet'>
          {/* Coming Soon chip */}
          <div className='absolute top-5 right-5 z-10 lg:top-6 lg:right-6'>
            <span className='rounded-full border border-primary-dark px-6 py-2.5 text-xs font-medium text-primary-dark lg:px-9 dark:border-white dark:text-white'>
              {t('chip')}
            </span>
          </div>

          {/* Desktop — Timeline panel (overflows top) */}
          <div className='absolute left-5 -top-16 z-20 hidden h-164 w-136 overflow-hidden rounded-t-4xl bg-primary-blue shadow-2xl lg:left-24 lg:block dark:border dark:border-white/15 dark:bg-secondary-space-cadet'>
            <div className='p-8'>
              {releases.map((release, index) => (
                <div
                  key={index}
                  className='mb-8 rounded-2xl bg-secondary-light-blue p-4 shadow-lg dark:border dark:border-white/15 dark:bg-secondary-yinmn-blue'
                >
                  <div className='mb-5 flex gap-2.5'>
                    <span className='rounded-full bg-white px-5 py-2.5 text-base font-medium text-primary-blue'>
                      {release.tag}
                    </span>
                    {release.complete != null && (
                      <span className='flex items-center gap-2.5 rounded-full bg-white/15 px-5 py-2.5 text-base font-bold text-white'>
                        <Image
                          src='/images/home/news/check-icon.svg'
                          alt='Complete'
                          width={16}
                          height={12}
                        />
                        {release.complete}
                      </span>
                    )}
                  </div>
                  <Heading as='h4' weight='extrabold' className='mb-4 text-3xl text-white'>
                    {release.title}
                  </Heading>
                  <ul className='space-y-3'>
                    {release.items.map((item, i) => (
                      <li key={i} className='ml-6 list-disc text-base font-medium text-white'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile — Timeline cards inline */}
          <div className='block rounded-t-3xl bg-primary-blue p-5 lg:hidden dark:bg-secondary-space-cadet'>
            {releases.map((release, index) => (
              <div
                key={index}
                className='mb-4 rounded-2xl bg-secondary-light-blue p-4 shadow-lg last:mb-0 dark:border dark:border-white/15 dark:bg-secondary-yinmn-blue'
              >
                <div className='mb-4 flex flex-wrap gap-2'>
                  <span className='rounded-full bg-white px-4 py-2 text-sm font-medium text-primary-blue'>
                    {release.tag}
                  </span>
                  {release.complete != null && (
                    <span className='flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white'>
                      <Image
                        src='/images/home/news/check-icon.svg'
                        alt='Complete'
                        width={14}
                        height={10}
                      />
                      {release.complete}
                    </span>
                  )}
                </div>
                <Heading as='h4' weight='extrabold' className='mb-2.5 text-2xl text-white'>
                  {release.title}
                </Heading>
                <ul className='space-y-1.5'>
                  {release.items.map((item, i) => (
                    <li key={i} className='ml-5 list-disc text-sm font-medium text-white'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right side — Content */}
          <div className='flex flex-col justify-center p-6 lg:absolute lg:right-0 lg:top-1/2 lg:w-lg lg:-translate-y-1/2 lg:p-0 lg:pr-12'>
            <div className='flex flex-col gap-6 lg:gap-9'>
              <div className='flex flex-col gap-2.5 lg:gap-4'>
                <Heading as='h3' weight='extrabold' className='whitespace-pre-line text-3xl leading-tight tracking-tight dark:text-white lg:text-4xl lg:leading-10'>
                  {t('title')}
                </Heading>
                <Text weight='medium' className='max-w-sm text-sm leading-normal dark:text-white lg:text-lg'>
                  {t('description')}
                </Text>

                <ul className='mt-1 space-y-1'>
                  {features.map((feature, index) => (
                    <li key={index} className='ml-5 list-disc text-sm font-extrabold text-primary-blue lg:ml-7 lg:text-lg'>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className='flex flex-col gap-2.5 lg:gap-4'>
                <Button variant='solid' colorScheme='brand' className='w-full lg:h-16'>
                  {t('primaryButton')}
                </Button>
                <Button variant='outline' colorScheme='brand' className='w-full lg:h-16'>
                  {t('secondaryButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
