import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { NewsCard } from './NewsCard'
import { RoadmapBlock } from './RoadmapBlock'

export function LatestNews (): React.ReactNode {
  const t = useTranslations('latestNews')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='flex flex-col gap-[30px] lg:gap-[50px]'>
        {/* Header */}
        <div className='flex flex-col items-start justify-between gap-[20px] lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-[5px]'>
            <p className='text-[14px] font-extrabold text-primary-blue lg:text-[18px]'>
              {t('chip')}
            </p>
            <h2 className='text-[24px] leading-[1.1] font-extrabold text-white lg:text-[32px] lg:leading-[34px]'>
              {t('title')}
            </h2>
          </div>
          <Button variant='primary' className='h-[55px] w-fit lg:h-[65px]'>
            {t('joinDiscord')}
          </Button>
        </div>

        {/* News Cards Row */}
        <div className='flex flex-col gap-[15px] lg:flex-row lg:justify-between'>
          {/* Video Card */}
          <NewsCard
            variant='video'
            image='/images/home/slider/video-light.jpg'
            title={t('cards.video.title')}
            description={t('cards.video.description')}
            tags={[{ label: t('cards.video.tag'), variant: 'outline' }]}
          />

          {/* X Post Card 1 */}
          <NewsCard
            variant='post'
            image='/images/home/news/post1-image.jpg'
            description={t('cards.post1.text')}
            tags={[
              { label: t('cards.post1.tagPost'), variant: 'outline' },
              { label: t('cards.post1.tagAuthor'), variant: 'filled' }
            ]}
          />

          {/* X Post Card 2 */}
          <NewsCard
            variant='post'
            image='/images/home/news/post2-image.jpg'
            description={t('cards.post2.text')}
            tags={[
              { label: t('cards.post2.tagPost'), variant: 'outline' },
              { label: t('cards.post2.tagAuthor'), variant: 'filled' }
            ]}
          />
        </div>

        {/* Roadmap Block */}
        <RoadmapBlock />
      </div>
    </div>
  )
}
