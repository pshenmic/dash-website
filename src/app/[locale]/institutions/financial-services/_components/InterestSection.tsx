import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

interface InterestCard {
  nameKey: string
  aprKey: string
  descriptionKey: string
  logo: string
}

const cards: InterestCard[] = [
  {
    nameKey: 'bankera.name',
    aprKey: 'bankera.apr',
    descriptionKey: 'bankera.description',
    logo: '/images/financial-services/logo-bankera.svg'
  },
  {
    nameKey: 'youhodler.name',
    aprKey: 'youhodler.apr',
    descriptionKey: 'youhodler.description',
    logo: '/images/financial-services/logo-youhodler.svg'
  }
]

export function InterestSection (): React.ReactNode {
  const t = useTranslations('financialServicesPage.interest')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-4'>
          <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
          <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight dark:text-white'>
            {t('title')}
          </Heading>
        </div>

        <div className='grid gap-5 sm:grid-cols-2'>
          {cards.map((card) => (
            <div
              key={card.nameKey}
              className='flex items-start gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <Image
                src={card.logo}
                alt={t(card.nameKey)}
                width={47}
                height={47}
                className='size-12 shrink-0 object-contain'
              />
              <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3'>
                  <Heading as='h3' size='md' weight='extrabold' className='leading-tight text-primary-dark! dark:text-white!'>
                    {t(card.nameKey)}
                  </Heading>
                  <span className='rounded-full bg-primary-blue/10 px-3 py-1 text-xs font-semibold text-primary-blue dark:bg-primary-blue/20'>
                    {t(card.aprKey)}
                  </span>
                </div>
                <Text size='xs' weight='medium' className='leading-relaxed text-primary-dark/50! dark:text-white/50!'>
                  {t(card.descriptionKey)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
