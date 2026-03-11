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
          <div className='flex flex-col gap-2.5 lg:max-w-[608px]'>
            <Heading as='h2' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
              {title}
            </Heading>
            <Text weight='medium' className='text-[13px] leading-normal text-primary-dark/50! dark:text-white/50!'>
              {description}
            </Text>
          </div>
          <button className='h-16.25 shrink-0 rounded-[20px] bg-primary-blue px-8.75 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
            {seeAllLabel}
          </button>
        </div>

        {/* Cards row */}
        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {cards.map((card) => (
            <div
              key={card.name}
              className='flex items-center gap-6.25 rounded-[25px] border border-primary-dark/15 bg-white p-6.25 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <div className='flex size-17 shrink-0 items-center justify-center rounded-[15px] bg-primary-dark/5 dark:bg-white/5'>
                <Image
                  src={card.logo}
                  alt={card.name}
                  width={32}
                  height={32}
                  className='size-8 object-contain'
                />
              </div>
              <div className='flex flex-col gap-1'>
                <Heading as='h3' weight='extrabold' className='text-[32px] leading-10 tracking-[-0.03em] text-primary-dark! dark:text-white!'>
                  {card.name}
                </Heading>
                <Text weight='medium' className='text-[13px] text-primary-dark/50! dark:text-white/50!'>
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
