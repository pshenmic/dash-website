import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function BugBounty (): React.ReactNode {
  const t = useTranslations('bugBounty')

  return (
    <div className='mx-auto max-w-7xl px-4 lg:px-0'>
      <div className='relative flex h-72 flex-col justify-center overflow-hidden rounded-3xl bg-primary-blue px-5 py-6 dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:h-76 lg:rounded-4xl lg:px-0 lg:py-0'>
        {/* 3D Dash Logo - right side */}
        <div className='pointer-events-none absolute -bottom-[30%] -right-[20%] top-auto h-[160%] w-[70%] lg:-bottom-[50%] lg:-right-[5%] lg:h-[200%] lg:w-[55%]'>
          <Image
            src='/images/home/bug-bounty/dash-3d-logo.png'
            alt=''
            fill
            className='object-contain'
          />
        </div>

        {/* Content - left side */}
        <div className='relative z-10 flex max-w-72 flex-col gap-6 lg:ml-24 lg:max-w-100 lg:gap-9'>
          <div className='flex flex-col gap-2.5 lg:gap-4'>
            <h3 className='text-2xl leading-tight font-extrabold tracking-tight text-white lg:text-4xl lg:leading-10'>
              {t('title')}
            </h3>
            <p className='text-sm leading-snug font-medium text-white lg:text-lg'>
              {t('description')}
            </p>
          </div>
          {/* Light theme: white button, Dark theme: blue button */}
          <Button variant='primary' className='w-fit dark:hidden'>
            {t('button')}
          </Button>
          <Button variant='primary' inverted className='hidden w-fit dark:flex'>
            {t('button')}
          </Button>
        </div>
      </div>
    </div>
  )
}
