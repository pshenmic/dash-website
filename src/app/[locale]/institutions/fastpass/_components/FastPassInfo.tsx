import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

export function FastPassInfo (): React.ReactNode {
  const t = useTranslations('fastpassPage.info')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between'>
        {/* Left — ambassador image */}
        <div className='relative aspect-video w-full shrink-0 overflow-hidden rounded-4xl lg:w-[42%]'>
          <Image
            src='/images/fastpass/ambassador.png'
            alt='Dash FastPass Ambassador'
            fill
            className='object-cover'
          />
        </div>

        {/* Right — text */}
        <div className='flex max-w-xl flex-col gap-4'>
          <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
          <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line dark:text-white'>
            {t('title')}
          </Heading>
          <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark! dark:text-white!'>
            {t('description1')}
          </Text>
          <Text size='sm' weight='medium' className='leading-relaxed text-primary-dark! dark:text-white!'>
            {t('description2')}
          </Text>
        </div>
      </div>
    </div>
  )
}
