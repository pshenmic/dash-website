import Image from 'next/image'
import { ArrowRight, Monitor, Smartphone } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface ActionCardProps {
  title: string
  description: string
}

function ActionCard ({ title, description }: ActionCardProps): React.ReactNode {
  return (
    <div className='flex flex-1 items-center justify-between rounded-4xl border border-primary-dark/15 bg-primary-white p-6 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] lg:p-9'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl font-extrabold tracking-tight text-primary-dark lg:text-4xl lg:leading-10'>
          {title}
        </h3>
        <p className='max-w-60 text-sm font-medium text-primary-dark'>
          {description}
        </p>
      </div>
      <button className='flex size-16 shrink-0 items-center justify-center rounded-2xl bg-primary-blue/15 transition-colors hover:bg-primary-blue/25'>
        <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
          <ArrowRight className='size-4 text-primary-blue' />
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
    <div className='flex items-center gap-4 rounded-2xl border border-primary-dark/15 bg-primary-white p-4 shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] lg:gap-6 lg:rounded-3xl lg:p-6'>
      <div className='flex size-12 shrink-0 items-center justify-center rounded-full bg-primary-dark/5 shadow-[inset_0px_0px_12px_0px_rgba(12,28,51,0.12)] lg:size-17'>
        <Image src={icon} alt='' width={48} height={48} className='size-8 object-contain lg:size-12' />
      </div>
      <div className='flex flex-col gap-1'>
        <h4 className='text-xl font-extrabold tracking-tight text-primary-dark lg:text-3xl lg:leading-10'>
          {title}
        </h4>
        <p className='text-xs font-medium text-primary-dark/50 tracking-tight'>
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
    <div className='flex flex-col gap-3 rounded-3xl bg-white/15 p-3'>
      <div className='flex items-center gap-3'>
        {icon}
        <span className='text-base text-primary-white tracking-tight'>
          <span className='font-extrabold'>{name}</span>{' '}
          <span className='font-medium'>{type}</span>
        </span>
      </div>
      <button className='h-8 w-full rounded-full bg-white/15 text-sm font-medium text-primary-white backdrop-blur-sm transition-colors hover:bg-white/25'>
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
        <div className='relative flex-1 overflow-hidden rounded-3xl bg-primary-blue p-6 lg:rounded-4xl lg:p-12'>
          <div className='relative z-10 flex flex-col gap-6'>
            <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
              <div className='flex flex-col gap-3'>
                <h3 className='text-2xl font-extrabold leading-tight tracking-tight text-primary-white lg:text-4xl lg:leading-10'>
                  {t('platform.title')}
                </h3>
                <p className='max-w-96 text-sm font-medium text-primary-white'>
                  {t('platform.description')}
                </p>
              </div>
              <button className='h-12 w-full rounded-xl bg-primary-white px-6 text-lg font-semibold text-primary-blue transition-colors hover:bg-primary-white/90 lg:w-auto'>
                {t('platform.viewAll')}
              </button>
            </div>

            {/* Platform cards grid */}
            <div className='grid grid-cols-2 gap-3 lg:flex lg:max-w-80 lg:flex-wrap'>
              <PlatformCard
                icon={<Monitor className='size-4 text-primary-white' />}
                name='Desktop'
                type='App'
              />
              <PlatformCard
                icon={
                  <svg className='h-6 w-5 text-primary-white' viewBox='0 0 18 22' fill='currentColor'>
                    <path d='M14.94 11.654c-.03-2.846 2.32-4.213 2.426-4.28-1.32-1.934-3.38-2.2-4.114-2.23-1.75-.18-3.42 1.034-4.31 1.034-.89 0-2.27-1.008-3.73-.98-1.92.028-3.69 1.118-4.68 2.84-2 3.464-.51 8.6 1.44 11.414.95 1.378 2.09 2.924 3.58 2.868 1.44-.058 1.98-.932 3.72-.932 1.74 0 2.23.932 3.75.902 1.55-.026 2.54-1.404 3.48-2.788 1.1-1.6 1.55-3.15 1.58-3.232-.034-.016-3.03-1.164-3.06-4.616z' />
                    <path d='M12.14 3.42c.79-.958 1.32-2.29 1.18-3.62-1.14.046-2.52.76-3.34 1.718-.73.846-1.37 2.2-1.2 3.498 1.27.1 2.57-.648 3.36-1.596z' />
                  </svg>
                }
                name='iOS'
                type='App'
              />
              <PlatformCard
                icon={<Smartphone className='size-6 text-primary-white' />}
                name='Android'
                type='App'
              />
              <div className='relative flex h-24 items-end rounded-3xl border border-white/15 p-3'>
                <div className='text-base text-primary-white'>
                  <p className='font-extrabold'>Other</p>
                  <p className='font-medium'>Platforms</p>
                </div>
                <button className='absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm'>
                  <div className='flex size-6 items-center justify-center rounded-full bg-primary-white'>
                    <ArrowRight className='size-3 text-primary-blue' />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Phone mockup image - hidden on mobile */}
          <div className='absolute -bottom-12 -right-12 hidden h-112 w-124 lg:right-0 lg:top-40 lg:block'>
            <Image
              src='/images/get-started/phones-mockup.png'
              alt='Dash mobile app'
              fill
              className='object-contain object-right-bottom'
            />
          </div>
        </div>

        {/* Right column - Feature cards */}
        <div className='flex w-full flex-col gap-6 lg:w-96'>
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
