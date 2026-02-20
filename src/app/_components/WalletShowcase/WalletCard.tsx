import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface WalletCardButton {
  label: string
  variant: 'primary' | 'secondary' | 'outline'
  inverted?: boolean
  href?: string
  customClassName?: string
  disabled?: boolean
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
          <h3 className='text-3xl leading-9 font-extrabold tracking-tight text-primary-dark dark:text-white'>
            {title.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h3>
          <p className='text-sm leading-normal font-medium text-primary-dark dark:text-white'>
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-2.5'>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              inverted={button.inverted}
              href={button.href}
              disabled={button.disabled}
              className={button.customClassName || 'h-12 rounded-xl px-6 text-lg hover-scale'}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
