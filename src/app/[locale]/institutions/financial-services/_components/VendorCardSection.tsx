import Image from 'next/image'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

interface VendorCard {
  name: string
  website: string
  logo: string
}

interface VendorCardSectionProps {
  chip?: string
  title: string
  description?: string
  seeAllLabel?: string
  cards: VendorCard[]
  columns?: 2 | 3 | 4
}

export function VendorCardSection ({ chip, title, description, seeAllLabel, cards, columns = 4 }: VendorCardSectionProps): React.ReactNode {
  const gridCols = columns === 2
    ? 'sm:grid-cols-2'
    : columns === 3
      ? 'sm:grid-cols-2 lg:grid-cols-3'
      : 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-12'>
        {/* Header */}
        <div className='flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-4'>
            {chip != null && (
              <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{chip}</Badge>
            )}
            <Heading as='h2' size={description != null ? 'md' : 'lg'} weight='extrabold' className='leading-tight tracking-tight dark:text-white'>
              {title}
            </Heading>
            {description != null && (
              <Text size='xs' weight='medium' className='max-w-2xl leading-relaxed text-primary-dark/50! dark:text-white/50!'>
                {description}
              </Text>
            )}
          </div>
          {seeAllLabel != null && (
            <button className='shrink-0 rounded-2xl bg-primary-blue px-9 py-4 text-base font-semibold text-primary-dark transition-opacity hover:opacity-90'>
              {seeAllLabel}
            </button>
          )}
        </div>

        {/* Cards */}
        <div className={`grid gap-5 ${gridCols}`}>
          {cards.map((card) => (
            <div
              key={card.name}
              className='flex flex-col gap-5 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <Image
                src={card.logo}
                alt={card.name}
                width={47}
                height={47}
                className='size-12 object-contain'
              />
              <div className='flex flex-col gap-1'>
                <Heading as='h3' size='md' weight='extrabold' className='leading-tight text-primary-dark! dark:text-white!'>
                  {card.name}
                </Heading>
                <Text size='xs' weight='medium' className='text-primary-dark/35! dark:text-white/35!'>
                  {card.website}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
