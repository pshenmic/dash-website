import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

const cards = [
  {
    nameKey: 'bankera.name',
    aprKey: 'bankera.apr',
    logo: '/images/financial-services/logo-bankera.svg'
  },
  {
    nameKey: 'youhodler.name',
    aprKey: 'youhodler.apr',
    logo: '/images/financial-services/logo-youhodler.svg'
  }
]

export function InterestSection (): React.ReactNode {
  const t = useTranslations('financialServicesPage.interest')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
        {/* Left - Text */}
        <div className='flex flex-col gap-4 lg:max-w-90'>
          <Badge variant='bordered' color='gray' size='sm' className='self-start border-primary-dark! text-primary-dark! dark:border-white! dark:text-white!'>{t('chip')}</Badge>
          <Heading as='h2' weight='extrabold' className='text-4xl leading-10 tracking-tight dark:text-white'>
            {t('title')}
          </Heading>
          <Text size='lg' weight='medium' className='dark:text-white'>
            {t('description')}
          </Text>
        </div>

        {/* Right - Cards */}
        <div className='flex flex-col gap-5 sm:flex-row lg:flex-1 lg:justify-end'>
          {cards.map((card) => (
            <div
              key={card.nameKey}
              className='flex flex-1 items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <div className='flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/5'>
                <Image
                  src={card.logo}
                  alt={t(card.nameKey)}
                  width={32}
                  height={32}
                  className='size-8 object-contain'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <Heading as='h3' weight='extrabold' className='text-3xl leading-10 tracking-tight text-primary-dark! dark:text-white!'>
                  {t(card.nameKey)}
                </Heading>
                <Text weight='medium' className='text-xs text-primary-dark/50! dark:text-white/50!'>
                  {t(card.aprKey)}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
