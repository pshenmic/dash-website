import Image from 'next/image'
import { ArrowRight, Monitor, Smartphone } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ActionCardProps {
  title: string
  description: string
}

function ActionCard ({ title, description }: ActionCardProps): React.ReactNode {
  return (
    <div className='flex flex-1 items-center justify-between rounded-[36px] border border-primary-dark/15 bg-primary-white p-6 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] lg:p-[35px]'>
      <div className='flex flex-col gap-[15px]'>
        <h3 className='text-2xl font-extrabold tracking-[-0.03em] text-primary-dark lg:text-[38px] lg:leading-[40px]'>
          {title}
        </h3>
        <p className='max-w-[240px] text-[13px] font-medium text-primary-dark'>
          {description}
        </p>
      </div>
      <button className='flex h-[65px] w-[65px] shrink-0 items-center justify-center rounded-[20px] bg-primary-blue/15 transition-colors hover:bg-primary-blue/25'>
        <div className='flex h-[45px] w-[45px] items-center justify-center rounded-full bg-primary-white'>
          <ArrowRight className='h-[15px] w-[15px] text-primary-blue' />
        </div>
      </button>
    </div>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard ({ icon, title, description }: FeatureCardProps): React.ReactNode {
  return (
    <div className='flex items-center gap-4 rounded-[20px] border border-primary-dark/15 bg-primary-white p-4 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] lg:gap-[25px] lg:rounded-[25px] lg:p-[25px]'>
      <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-dark/5 shadow-[inset_0px_0px_12px_0px_rgba(12,28,51,0.12)] lg:h-[68px] lg:w-[68px]'>
        <Image src={icon} alt='' width={48} height={48} className='h-8 w-8 object-contain lg:h-12 lg:w-12' />
      </div>
      <div className='flex flex-col gap-1'>
        <h4 className='text-xl font-extrabold tracking-[-0.03em] text-primary-dark lg:text-[32px] lg:leading-[40px]'>
          {title}
        </h4>
        <p className='text-xs font-medium text-primary-dark/50 tracking-[-0.03em]'>
          {description}
        </p>
      </div>
    </div>
  )
}

interface PlatformCardProps {
  icon: React.ReactNode
  name: string
  type: string
}

function PlatformCard ({ icon, name, type }: PlatformCardProps): React.ReactNode {
  return (
    <div className='flex flex-col gap-3 rounded-[24px] bg-white/15 p-3'>
      <div className='flex items-center gap-3'>
        {icon}
        <span className='text-base text-primary-white tracking-[-0.03em]'>
          <span className='font-extrabold'>{name}</span>{' '}
          <span className='font-medium'>{type}</span>
        </span>
      </div>
      <button className='h-8 w-full rounded-full bg-white/15 text-[13px] font-medium text-primary-white backdrop-blur-[5px] transition-colors hover:bg-white/25'>
        Download
      </button>
    </div>
  )
}

export function GetStartedActions (): React.ReactNode {
  const t = useTranslations('getStartedActions')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-6'>
      {/* Top row - 3 action cards */}
      <div className='flex flex-col gap-6 lg:flex-row'>
        <ActionCard
          title={t('getTheApp.title')}
          description={t('getTheApp.description')}
        />
        <ActionCard
          title={t('getDash.title')}
          description={t('getDash.description')}
        />
        <ActionCard
          title={t('getGoing.title')}
          description={t('getGoing.description')}
        />
      </div>

      {/* Bottom section - Blue block + Feature cards */}
      <div className='mt-6 flex flex-col gap-6 lg:flex-row'>
        {/* Blue block - Get the app */}
        <div className='relative flex-1 overflow-hidden rounded-[25px] bg-primary-blue p-6 lg:rounded-[35px] lg:p-[50px]'>
          <div className='relative z-10 flex flex-col gap-6'>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-extrabold leading-[1.1] tracking-[-0.03em] text-primary-white lg:text-[38px] lg:leading-[40px]'>
                  {t('platform.title')}
                </h3>
                <p className='max-w-[380px] text-[13px] font-medium text-primary-white'>
                  {t('platform.description')}
                </p>
              </div>
              <button className='h-[50px] w-full rounded-[12px] bg-primary-white px-[25px] text-lg font-semibold text-primary-blue transition-colors hover:bg-primary-white/90 lg:w-auto'>
                {t('platform.viewAll')}
              </button>
            </div>

            {/* Platform cards grid */}
            <div className='grid grid-cols-2 gap-3 lg:flex lg:max-w-[330px] lg:flex-wrap'>
              <PlatformCard
                icon={<Monitor className='h-[17px] w-[17px] text-primary-white' />}
                name='Desktop'
                type='App'
              />
              <PlatformCard
                icon={
                  <svg className='h-[22px] w-[18px] text-primary-white' viewBox='0 0 18 22' fill='currentColor'>
                    <path d='M14.94 11.654c-.03-2.846 2.32-4.213 2.426-4.28-1.32-1.934-3.38-2.2-4.114-2.23-1.75-.18-3.42 1.034-4.31 1.034-.89 0-2.27-1.008-3.73-.98-1.92.028-3.69 1.118-4.68 2.84-2 3.464-.51 8.6 1.44 11.414.95 1.378 2.09 2.924 3.58 2.868 1.44-.058 1.98-.932 3.72-.932 1.74 0 2.23.932 3.75.902 1.55-.026 2.54-1.404 3.48-2.788 1.1-1.6 1.55-3.15 1.58-3.232-.034-.016-3.03-1.164-3.06-4.616z' />
                    <path d='M12.14 3.42c.79-.958 1.32-2.29 1.18-3.62-1.14.046-2.52.76-3.34 1.718-.73.846-1.37 2.2-1.2 3.498 1.27.1 2.57-.648 3.36-1.596z' />
                  </svg>
                }
                name='iOS'
                type='App'
              />
              <PlatformCard
                icon={<Smartphone className='h-[23px] w-[22px] text-primary-white' />}
                name='Android'
                type='App'
              />
              <div className='relative flex h-[94px] items-end rounded-[24px] border border-white/15 p-3'>
                <div className='text-base text-primary-white'>
                  <p className='font-extrabold'>Other</p>
                  <p className='font-medium'>Platforms</p>
                </div>
                <button className='absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-[5px]'>
                  <div className='flex h-6 w-6 items-center justify-center rounded-full bg-primary-white'>
                    <ArrowRight className='h-3 w-3 text-primary-blue' />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Phone mockup image - hidden on mobile */}
          <div className='absolute -bottom-[50px] -right-[50px] hidden h-[450px] w-[496px] lg:right-0 lg:top-[157px] lg:block'>
            <Image
              src='/images/get-started/phones-mockup.png'
              alt='Dash mobile app'
              fill
              className='object-contain object-right-bottom'
            />
          </div>
        </div>

        {/* Right column - Feature cards */}
        <div className='flex w-full flex-col gap-6 lg:w-[380px]'>
          <FeatureCard
            icon='/images/get-started/icon-instant.png'
            title={t('features.instant.title')}
            description={t('features.instant.description')}
          />
          <FeatureCard
            icon='/images/get-started/icon-secure.png'
            title={t('features.secure.title')}
            description={t('features.secure.description')}
          />
          <FeatureCard
            icon='/images/get-started/icon-micro-fees.png'
            title={t('features.microFees.title')}
            description={t('features.microFees.description')}
          />
        </div>
      </div>
    </div>
  )
}
