import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'

export function BugBounty (): React.ReactNode {
  const t = useTranslations('bugBounty')

  return (
    <div className='mx-auto max-w-[1240px] px-4 lg:px-0'>
      <div className='relative flex h-[280px] flex-col justify-center overflow-hidden rounded-[25px] bg-primary-blue px-5 py-6 dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:h-[300px] lg:rounded-[35px] lg:px-0 lg:py-0'>
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
        <div className='relative z-10 flex max-w-[280px] flex-col gap-[25px] lg:ml-[100px] lg:max-w-[400px] lg:gap-[35px]'>
          <div className='flex flex-col gap-[10px] lg:gap-[15px]'>
            <h3 className='text-[24px] leading-[1.05] font-extrabold tracking-[-0.03em] text-white lg:text-[38px] lg:leading-[40px]'>
              {t('title')}
            </h3>
            <p className='text-[14px] leading-[1.4] font-medium text-white lg:text-[18px]'>
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
