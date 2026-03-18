import { DashLogo, Heading, Text } from 'dash-ui-kit/react'

export interface ProviderButton {
  label: string
  href: string
  variant: 'ghost' | 'solid'
}

interface ProviderCardProps {
  image: string
  darkImage?: string
  category?: string
  name: string
  description: string
  buttons: ProviderButton[]
}

export function ProviderCard ({
  image,
  darkImage,
  category,
  name,
  description,
  buttons
}: ProviderCardProps): React.ReactNode {
  return (
    <div className='relative flex h-155 w-full flex-col overflow-hidden rounded-3xl border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:rounded-4xl'>
      {/* Dash Logo */}
      <div className='absolute top-5 left-5 z-10 lg:top-9 lg:left-8'>
        <DashLogo className='h-5 w-auto lg:h-8' />
      </div>

      {/* Provider Logo */}
      <div className='flex h-56 w-full items-center justify-center lg:h-64'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={name}
          className={`max-h-16 max-w-48 object-contain lg:max-h-28 lg:max-w-60${darkImage != null ? ' dark:hidden' : ''}`}
        />
        {darkImage != null && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={darkImage}
            alt={name}
            className='hidden max-h-16 max-w-48 object-contain lg:max-h-28 lg:max-w-60 dark:block'
          />
        )}
      </div>

      {/* Card Content */}
      <div className='flex flex-1 flex-col justify-end p-5 lg:p-8'>
        <div className='flex flex-col gap-5 lg:gap-8'>
          <div className='flex flex-col gap-2 lg:gap-3'>
            {category != null && (
              <p className='text-sm font-medium tracking-tight text-primary-blue'>
                {category}
              </p>
            )}
            <Heading as='h3' size='xl' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white! lg:text-4xl lg:leading-10'>
              {name}
            </Heading>
            <Text size='xs' weight='medium' className='leading-normal text-primary-dark! dark:text-white! lg:text-sm'>
              {description}
            </Text>
          </div>

          <div className='flex flex-col gap-4'>
            {buttons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`flex h-16 items-center justify-center rounded-2xl text-lg font-semibold transition-opacity hover:opacity-90 ${
                  button.variant === 'solid'
                    ? 'bg-primary-blue text-white'
                    : 'bg-primary-blue/15 text-primary-blue'
                }`}
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
