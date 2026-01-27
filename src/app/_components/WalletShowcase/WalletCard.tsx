import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface WalletCardButton {
  label: string
  variant: 'primary' | 'secondary' | 'outline'
  inverted?: boolean
  href?: string
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
    <div className='flex flex-col gap-[35px] rounded-[36px] border border-primary-dark/15 bg-white px-[30px] py-[35px] shadow-[0px_0px_100px_0px_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet'>
      {/* Logo */}
      <div className='h-19 w-19 overflow-clip rounded-2xl'>
        <Image
          src={logo}
          alt={title}
          width={75}
          height={75}
          className='h-full w-full object-cover'
        />
      </div>

      {/* Text Content and Buttons */}
      <div className='flex flex-col gap-[25px]'>
        {/* Text Content */}
        <div className='flex flex-col gap-[15px]'>
          <h3 className='text-[32px] leading-[34px] font-extrabold tracking-tight text-primary-dark dark:text-white'>
            {title.split('\n').map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h3>
          <p className='text-[13px] leading-normal font-medium text-primary-dark dark:text-white'>
            {description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className='flex flex-col gap-[10px]'>
          {buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              inverted={button.inverted}
              className='h-[50px] rounded-xl px-6 text-lg'
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
