import { Check } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Button, Heading, Text } from 'dash-ui-kit/react'

function TimelineCard ({
  tag,
  completeTag,
  title,
  items
}: {
  tag: string
  completeTag?: string
  title: string
  items: string[]
}): React.ReactNode {
  return (
    <div className='rounded-[20px] bg-secondary-light-blue p-5 shadow-[0_0_75px_0_rgba(0,0,0,0.1)]'>
      <div className='mb-4 flex flex-wrap gap-2'>
        <span className='rounded-full bg-white px-5 py-2.5 text-base font-medium text-primary-blue'>
          {tag}
        </span>
        {completeTag != null && (
          <span className='flex items-center gap-2.5 rounded-full bg-white/15 px-5 py-2.5 text-base font-bold text-white'>
            <Check className='size-4' />
            {completeTag}
          </span>
        )}
      </div>
      <h4 className='mb-3 text-2xl font-extrabold text-white lg:text-3xl'>
        {title}
      </h4>
      <ul className='list-disc space-y-2 pl-6 text-base font-medium text-white'>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export function RoadmapPreview (): React.ReactNode {
  const t = useTranslations('buildPage.roadmap')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-[35px] border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet'>
        {/* Coming Soon badge */}
        <div className='absolute top-6 right-6 z-10'>
          <Badge variant='bordered' color='gray' size='sm'>{t('chip')}</Badge>
        </div>

        <div className='flex flex-col gap-10 p-6 lg:flex-row lg:items-center lg:p-0'>
          {/* Left — Phone mockup with timeline */}
          <div className='relative w-full overflow-hidden rounded-[35px] bg-primary-blue p-6 shadow-[0_0_75px_0_rgba(0,0,0,0.25)] lg:w-[540px] lg:shrink-0 lg:rounded-tl-[35px] lg:rounded-tr-[35px] lg:rounded-bl-none lg:rounded-br-none lg:p-8'>
            <div className='flex flex-col gap-5'>
              <TimelineCard
                tag={t('timeline.q1.tag')}
                title={t('timeline.q1.title')}
                items={[
                  t('timeline.q1.items.backports'),
                  t('timeline.q1.items.wallet'),
                  t('timeline.q1.items.stress')
                ]}
              />
              <TimelineCard
                tag={t('timeline.platform.tag')}
                completeTag={t('timeline.platform.completeTag')}
                title={t('timeline.platform.title')}
                items={[
                  t('timeline.platform.items.credit'),
                  t('timeline.platform.items.identity'),
                  t('timeline.platform.items.stress')
                ]}
              />
            </div>
          </div>

          {/* Right — text content */}
          <div className='flex flex-col gap-9 lg:py-16 lg:pr-16'>
            <div className='flex flex-col gap-4'>
              <Heading as='h2' weight='extrabold' className='whitespace-pre-line text-2xl leading-tight tracking-tight text-primary-dark! dark:text-white! lg:text-4xl lg:leading-10'>
                {t('title')}
              </Heading>
              <Text weight='medium' className='text-base leading-normal text-primary-dark! dark:text-white! lg:text-lg'>
                {t('description')}
              </Text>

              {/* Roadmap bullet points */}
              <ul className='list-disc space-y-1 pl-7 text-lg font-extrabold text-primary-blue'>
                <li>{t('items.chainlocks')}</li>
                <li>{t('items.llmq')}</li>
                <li>{t('items.evolution')}</li>
              </ul>
            </div>

            <div className='flex flex-col gap-4'>
              <Button variant='solid' colorScheme='brand' className='w-full'>
                {t('primaryButton')}
              </Button>
              <Button variant='outline' colorScheme='brand' className='w-full'>
                {t('secondaryButton')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
