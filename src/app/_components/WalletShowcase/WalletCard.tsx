import Image from 'next/image'
import { Button, Heading, Text } from 'dash-ui-kit/react'
import { cn } from '@/lib/cn'

interface WalletCardButton {
  label: string
  variant: 'primary' | 'secondary' | 'outline'
  inverted?: boolean
  href?: string
  customClassName?: string
  disabled?: boolean
}

// Simple mapping: all buttons use 'gray' colorScheme
function mapVariant(variant: 'primary' | 'secondary' | 'outline'): {
  variant: 'solid' | 'outline'
  colorScheme: 'gray'
} {
  return {
    variant: variant === 'outline' ? 'outline' : 'solid',
    colorScheme: 'gray'
  }
}

// Generate button-like classes for <a> tags
function getButtonLinkClasses(variant: 'solid' | 'outline', customClassName?: string) {
  return cn(
    // Base button styles
    'inline-flex items-center justify-center',
    'font-semibold transition-colors',
    // Variant styles
    variant === 'solid' && 'bg-primary-blue text-white hover:bg-primary-blue/90 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500',
    variant === 'outline' && 'border border-primary-blue text-primary-blue hover:bg-primary-blue/10 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-700/50',
    // Custom classes (includes size, rounded, etc.)
    customClassName || 'h-12 rounded-xl px-6 text-lg'
  )
}

interface WalletCardProps {
  logo: string
  title: string
  description: string
  buttons: WalletCardButton[]
}

export function WalletCard ({
  logo,
  title,
  description,
  buttons
}: WalletCardProps): React.ReactNode {
  return (
    <div className='group flex flex-col gap-9 rounded-4xl border border-primary-dark/15 bg-white px-8 py-9 shadow-soft hover-lift hover:border-primary-turquoise/30 dark:border-white/15 dark:bg-secondary-space-cadet dark:hover:border-primary-turquoise/40'>
      {/* Logo */}
      <div className='h-19 w-19 overflow-clip rounded-2xl'>
        <Image
          src={logo}
          alt={title}
          width={75}
          height={75}
          className='h-full w-full object-cover'
          unoptimized={logo.endsWith('.svg')}
        />
      </div>

      {/* Text Content and Buttons */}
      <div className='flex flex-col gap-6'>
        {/* Text Content */}
        <div className='flex flex-col gap-4'>
          <Heading as='h3' size='2xl' weight='extrabold' className='leading-9 tracking-tight dark:text-white'>
            {title.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </Heading>
          <Text size='sm' weight='medium' className='leading-normal dark:text-white'>
            {description}
          </Text>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-2.5'>
          {buttons.map((button, index) => {
            const { variant, colorScheme } = mapVariant(button.variant)

            // If button has href, render as styled link
            if (button.href && !button.disabled) {
              return (
                <a
                  key={index}
                  href={button.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={getButtonLinkClasses(variant, button.customClassName)}
                >
                  {button.label}
                </a>
              )
            }

            // Regular button
            const className = button.customClassName || 'h-12 rounded-xl px-6 text-lg'
            return (
              <Button
                key={index}
                variant={variant}
                colorScheme={colorScheme}
                disabled={button.disabled}
                className={className}
              >
                {button.label}
              </Button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
