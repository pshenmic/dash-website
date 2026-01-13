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
    <div className='relative flex h-[400px] w-full flex-col overflow-hidden rounded-[24px] bg-white lg:h-[619px] lg:w-[400px] lg:rounded-[36px]'>
      {/* Dash Logo */}
      <div className='absolute top-[20px] left-[20px] z-10 lg:top-[35px] lg:left-[30px]'>
        <Image
          src='/images/home/developers/logo-dash-small.svg'
          alt='Dash'
          width={37}
          height={30}
          className='h-[20px] w-auto lg:h-[30px]'
        />
      </div>

      {/* 3D Image - fills upper portion */}
      <div className='relative h-[180px] w-full lg:h-[320px]'>
        <Image
          src={image}
          alt=''
          fill
          className='object-contain object-center'
        />
      </div>

      {/* Card Content - bottom section */}
      <div className='flex flex-1 flex-col justify-end p-[20px] lg:p-[30px]'>
        <div className='flex flex-col gap-[20px] lg:gap-[30px]'>
          <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
            <h3 className='text-[24px] leading-[1.1] font-extrabold tracking-[-0.03em] text-primary-dark lg:text-[38px] lg:leading-[40px]'>
              {title}
            </h3>
            <p className='text-[12px] font-medium text-primary-dark lg:text-[13px]'>
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
      <div className='mx-auto max-w-7xl px-4 pt-[120px] pb-[60px] lg:px-6 lg:pt-[208px] lg:pb-[100px]'>
        {/* First Steps Section */}
        <div className='mb-[40px] flex flex-col gap-[5px] lg:mb-[60px]'>
          <p className='text-[14px] font-extrabold text-primary-blue lg:text-[18px]'>
            {t('chip')}
          </p>
          <h2 className='text-[24px] leading-[1.1] font-extrabold text-white lg:text-[32px] lg:leading-[34px]'>
            {t('title')}
          </h2>
        </div>

        {/* Cards Grid */}
        <div className='flex flex-col gap-[15px] lg:flex-row lg:justify-between'>
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
        <div className='mt-[60px] lg:mt-[100px]'>
          <div className='mb-[40px] flex flex-col items-center gap-[5px] text-center lg:mb-[50px]'>
            <p className='text-[14px] font-extrabold text-primary-blue lg:text-[18px]'>
              {tWallet('chip')}
            </p>
            <h2 className='text-[24px] leading-[1.1] font-extrabold text-white lg:text-[32px] lg:leading-[34px]'>
              {tWallet('title')}
            </h2>
          </div>

          {/* Partners Logos */}
          <div className='flex flex-wrap items-center justify-center gap-x-[20px] gap-y-[15px] opacity-50 sm:gap-x-[30px] lg:gap-x-[50px]'>
            {partners.map((partner) => (
              <div
                key={partner.alt}
                className='relative h-[16px] sm:h-[20px] md:h-[30px] lg:h-[40px]'
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
