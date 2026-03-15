import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button, DashLogo, Heading, Text } from 'dash-ui-kit/react'

interface CardProps {
  image: string
  title: string
  description: string
  buttonText: string
}

function FirstStepCard ({
  image,
  title,
  description,
  buttonText
}: CardProps): React.ReactNode {
  return (
    <div className='relative flex h-100 w-full flex-col overflow-hidden rounded-3xl border border-primary-dark/15 bg-white shadow-soft lg:h-155 lg:w-100 lg:rounded-4xl'>
      {/* Dash Logo */}
      <div className='absolute top-5 left-5 z-10 lg:top-9 lg:left-8'>
        <DashLogo
          className='h-5 w-auto text-primary-dark lg:h-8'
        />
      </div>

      {/* 3D Image */}
      <div className='relative h-44 w-full lg:h-80'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-contain object-center'
        />
      </div>

      {/* Card Content */}
      <div className='flex flex-1 flex-col justify-end p-5 lg:p-8'>
        <div className='flex flex-col gap-5 lg:gap-8'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <Heading as='h3' size='xl' weight='extrabold' className='whitespace-pre-line leading-tight tracking-tight text-primary-dark! lg:text-4xl lg:leading-10'>
              {title}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark! lg:text-sm'>
              {description}
            </Text>
          </div>
          <Button variant='solid' colorScheme='brand' className='w-full'>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function FirstStepsCards (): React.ReactNode {
  const t = useTranslations('buildPage.firstSteps')

  const cards = [
    {
      image: '/images/shared/3d/coins-stack.png',
      title: t('cards.identities.title'),
      description: t('cards.identities.description'),
      buttonText: t('cards.identities.button')
    },
    {
      image: '/images/shared/3d/smart-contracts.png',
      title: t('cards.storage.title'),
      description: t('cards.storage.description'),
      buttonText: t('cards.storage.button')
    },
    {
      image: '/images/shared/3d/coin.png',
      title: t('cards.developer.title'),
      description: t('cards.developer.description'),
      buttonText: t('cards.developer.button')
    }
  ]

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-10 flex flex-col gap-1 lg:mb-16'>
        <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
          {t('chip')}
        </p>
        <Heading as='h2' size='xl' weight='extrabold' className='leading-tight dark:text-white lg:text-3xl lg:leading-9'>
          {t('title')}
        </Heading>
      </div>

      {/* Cards Grid */}
      <div className='flex flex-col gap-4 lg:flex-row lg:justify-between'>
        {cards.map((card, index) => (
          <FirstStepCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </div>
  )
}
