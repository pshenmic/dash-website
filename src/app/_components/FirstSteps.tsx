import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

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
    <div className='relative flex h-100 w-full flex-col overflow-hidden rounded-3xl bg-white lg:h-155 lg:w-100 lg:rounded-4xl'>
      {/* Dash Logo */}
      <div className='absolute top-5 left-5 z-10 lg:top-9 lg:left-8'>
        <Image
          src='/images/home/developers/logo-dash-small.svg'
          alt='Dash'
          width={37}
          height={30}
          className='h-5 w-auto lg:h-8'
        />
      </div>

      {/* 3D Image - fills upper portion */}
      <div className='relative h-44 w-full lg:h-80'>
        <Image
          src={image}
          alt=''
          fill
          className='object-contain object-center'
        />
      </div>

      {/* Card Content - bottom section */}
      <div className='flex flex-1 flex-col justify-end p-5 lg:p-8'>
        <div className='flex flex-col gap-5 lg:gap-8'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <h3 className='text-2xl leading-tight font-extrabold tracking-tight text-primary-dark lg:text-4xl lg:leading-10'>
              {title}
            </h3>
            <p className='text-xs font-medium text-primary-dark lg:text-sm'>
              {description}
            </p>
          </div>
          <Button variant='primary' className='w-full'>
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export function FirstSteps (): React.ReactNode {
  const t = useTranslations('firstSteps')
  const tWallet = useTranslations('walletIntegrations')

  const cards = [
    {
      image: '/images/home/first-steps/card-identities.png',
      title: t('cards.identities.title'),
      description: t('cards.identities.description'),
      buttonText: t('cards.identities.button')
    },
    {
      image: '/images/home/first-steps/card-storage.png',
      title: t('cards.storage.title'),
      description: t('cards.storage.description'),
      buttonText: t('cards.storage.button')
    },
    {
      image: '/images/home/first-steps/card-developer.png',
      title: t('cards.developer.title'),
      description: t('cards.developer.description'),
      buttonText: t('cards.developer.button')
    }
  ]

  const partners = [
    { src: '/images/home/partners/uphold.svg', alt: 'Uphold', width: 156, height: 50 },
    { src: '/images/home/partners/coinbase.svg', alt: 'Coinbase', width: 143, height: 25 },
    { src: '/images/home/partners/crowdnode.png', alt: 'CrowdNode', width: 245, height: 51 },
    { src: '/images/home/partners/topper.svg', alt: 'Topper', width: 199, height: 47 },
    { src: '/images/home/partners/coinatmradar.svg', alt: 'Coin ATM Radar', width: 259, height: 47 }
  ]

  return (
    <div className='bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 pt-32 pb-16 lg:px-6 lg:pt-52 lg:pb-24'>
        {/* First Steps Section */}
        <div className='mb-10 flex flex-col gap-1 lg:mb-16'>
          <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
            {t('chip')}
          </p>
          <h2 className='text-2xl leading-tight font-extrabold text-white lg:text-3xl lg:leading-9'>
            {t('title')}
          </h2>
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

        {/* Wallet Integrations Section */}
        <div className='mt-16 lg:mt-24'>
          <div className='mb-10 flex flex-col items-center gap-1 text-center lg:mb-12'>
            <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
              {tWallet('chip')}
            </p>
            <h2 className='text-2xl leading-tight font-extrabold text-white lg:text-3xl lg:leading-9'>
              {tWallet('title')}
            </h2>
          </div>

          {/* Partners Logos */}
          <div className='flex flex-wrap items-center justify-center gap-x-5 gap-y-4 opacity-50 sm:gap-x-8 lg:gap-x-12'>
            {partners.map((partner) => (
              <div
                key={partner.alt}
                className='relative h-4 sm:h-5 md:h-8 lg:h-10'
                style={{ aspectRatio: partner.width / partner.height }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className='object-contain'
                  unoptimized={partner.src.endsWith('.svg')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
