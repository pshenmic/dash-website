import Image from 'next/image'
import { Heading, Text } from 'dash-ui-kit/react'

interface TradingCard {
  name: string
  subtitle: string
  logo: string
}

interface TradingCategorySectionProps {
  title: string
  description: string
  seeAllLabel: string
  cards: TradingCard[]
}

export function TradingCategorySection ({ title, description, seeAllLabel, cards }: TradingCategorySectionProps): React.ReactNode {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-12'>
        {/* Header row */}
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-2'>
            <Heading as='h2' size='md' weight='extrabold' className='leading-tight tracking-tight dark:text-white'>
              {title}
            </Heading>
            <Text size='xs' weight='medium' className='max-w-2xl leading-relaxed text-primary-dark/50! dark:text-white/50!'>
              {description}
            </Text>
          </div>
          <button className='shrink-0 rounded-2xl bg-primary-blue px-9 py-4 text-base font-semibold text-primary-dark transition-opacity hover:opacity-90'>
            {seeAllLabel}
          </button>
        </div>

        {/* Cards row */}
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {cards.map((card) => (
            <div
              key={card.name}
              className='flex items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <div className='flex size-17 shrink-0 items-center justify-center rounded-2xl bg-primary-dark/5 dark:bg-white/5'>
                <Image
                  src={card.logo}
                  alt={card.name}
                  width={32}
                  height={32}
                  className='size-8 object-contain'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <Heading as='h3' size='sm' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white!'>
                  {card.name}
                </Heading>
                <Text size='xs' weight='medium' className='text-primary-dark/50! dark:text-white/50!'>
                  {card.subtitle}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
