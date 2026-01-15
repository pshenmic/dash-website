import Image from 'next/image'
import { CircleCheck, Lock, Users, MessageSquare } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Chip } from '@/components/ui/Chip'
import { Card } from '@/components/ui/Card'
import { DashPriceCard } from '@/components/ui/DashPriceCard'

export function BulletsGrid (): React.ReactNode {
  const t = useTranslations('bullets')

  return (
    <div className='bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        {/* Grid 2x6 mobile → 4x4 desktop. order-* overrides for mobile-first layout */}
        <div className='grid grid-cols-2 gap-[10px] lg:grid-cols-[304px_292px_292px_304px] lg:grid-rows-[180px_105px_180px_180px] lg:gap-[15px]'>
          {/* Center of grid on desktop (col 2-3, row 2-3) */}
          <Card className='relative order-1 col-span-2 h-[160px] lg:order-5 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:h-auto'>
            {/* Extends beyond bounds for glow effect */}
            <div className='pointer-events-none absolute -top-[80px] -left-[100px] h-[300px] w-[300px] rounded-full bg-primary-blue/30 blur-[100px] lg:-top-[118px] lg:-left-[167px] lg:h-[417px] lg:w-[417px] lg:blur-[120px]' />
            {/* Coin overflows card by design */}
            <div className='absolute -top-[60px] -right-[30px] h-[300px] w-[280px] lg:-top-[90px] lg:-right-[50px] lg:h-[491px] lg:w-[444px]'>
              <Image
                src='/images/home/bullets/main-3d-coin.png'
                alt='Dash 3D Coin'
                fill
                className='object-contain object-right'
              />
            </div>
            <div className='absolute bottom-[16px] left-[16px] lg:bottom-[35px] lg:left-[35px]'>
              <Image
                src='/images/home/bullets/logo-dash-white.svg'
                alt='Dash'
                width={191}
                height={51}
                className='h-[28px] w-auto lg:h-[51px]'
              />
            </div>
            <div className='absolute top-[50%] left-[16px] -translate-y-1/2 lg:left-[35px]'>
              <Chip>{t('mainCard.chip')}</Chip>
            </div>
          </Card>

          {/* Tall card on desktop (row-span-2) */}
          <Card
            variant='blue'
            className='order-2 col-span-1 flex h-[140px] flex-col justify-end p-[16px] lg:order-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-auto lg:p-[35px]'
          >
            <CircleCheck
              className='mb-auto h-[40px] w-[40px] text-white lg:h-[70px] lg:w-[70px]'
              strokeWidth={1.5}
            />
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p>{t('stableOperation.line1')}</p>
              <p>{t('stableOperation.line2')}</p>
              <p className='font-extrabold'>{t('stableOperation.highlight')}</p>
            </div>
          </Card>

          <Card className='order-3 col-span-1 flex h-[140px] items-center justify-center p-[16px] lg:order-2 lg:col-start-2 lg:row-start-1 lg:h-auto lg:p-[25px]'>
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-2xl lg:tracking-[-0.84px]'>
              <p>
                {t('longestDao.line1')}{' '}
                <span className='font-extrabold'>
                  {t('longestDao.highlight1')}
                </span>{' '}
                {t('longestDao.line1End')}
              </p>
              <p>
                {t('longestDao.line2')}{' '}
                <span className='font-extrabold'>
                  {t('longestDao.highlight2')}
                </span>
              </p>
            </div>
          </Card>

          <Card className='order-4 col-span-1 flex h-[100px] items-center gap-3 p-[16px] lg:order-3 lg:col-start-3 lg:row-start-1 lg:h-auto lg:gap-5 lg:p-[35px]'>
            <Lock
              className='h-[28px] w-[28px] shrink-0 text-white lg:h-[50px] lg:w-[50px]'
              strokeWidth={1.5}
            />
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p>{t('optionalPrivacy.line1')}</p>
              <p className='font-extrabold'>{t('optionalPrivacy.highlight')}</p>
            </div>
          </Card>

          <Card className='order-5 col-span-1 flex h-[100px] items-center justify-center lg:order-4 lg:col-start-4 lg:row-start-1 lg:h-auto'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/home/bullets/coin-3d-small.png'
                alt='Dash Coin'
                fill
                className='object-cover'
              />
            </div>
          </Card>

          <DashPriceCard className='relative order-6 col-span-2 h-[100px] lg:col-span-1 lg:col-start-1 lg:row-start-3 lg:h-auto' />

          <Card className='order-7 col-span-1 flex h-[100px] flex-col justify-center p-[16px] lg:col-start-4 lg:row-start-2 lg:h-auto lg:p-[25px]'>
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-2xl lg:tracking-[-0.84px]'>
              <p className='font-extrabold'>{t('passiveIncome.highlight')}</p>
              <p>{t('passiveIncome.text')}</p>
            </div>
          </Card>

          <Card
            variant='blue'
            className='relative order-8 col-span-1 flex h-[100px] flex-col justify-end p-[16px] lg:col-start-4 lg:row-start-3 lg:h-auto lg:p-[35px]'
          >
            <div className='absolute top-[16px] right-[16px] lg:top-[35px] lg:right-[35px]'>
              <Image
                src='/images/home/bullets/logo-dash-blue.svg'
                alt=''
                width={135}
                height={110}
                className='h-[50px] w-auto lg:h-[90px]'
              />
            </div>
            <div className='relative text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p className='font-extrabold'>{t('selfFinancing.highlight')}</p>
              <p>{t('selfFinancing.line1')}</p>
              <p>{t('selfFinancing.line2')}</p>
            </div>
          </Card>

          <Card
            variant='blue'
            className='relative order-9 col-span-2 flex h-[120px] flex-col justify-end p-[16px] lg:col-span-1 lg:col-start-2 lg:row-start-4 lg:h-auto lg:p-[35px]'
          >
            {/* Image rotated and scaled to create decorative overflow effect */}
            <div className='absolute top-1/2 right-[-50px] flex h-[100px] w-[300px] -translate-y-1/2 items-center justify-center lg:right-[-80px] lg:h-[144px] lg:w-[500px]'>
              <Image
                src='/images/home/bullets/coins-stack.png'
                alt=''
                width={735}
                height={144}
                className='scale-[3] -rotate-90 lg:scale-[5]'
              />
            </div>
            <div className='relative text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p className='font-extrabold'>{t('instantSecure.line1')}</p>
              <p className='font-extrabold'>{t('instantSecure.line2')}</p>
              <p>{t('instantSecure.text')}</p>
            </div>
          </Card>

          <Card className='order-10 col-span-1 flex h-[100px] flex-col justify-between p-[16px] lg:col-start-1 lg:row-start-4 lg:h-auto lg:p-[35px]'>
            <div className='flex flex-col gap-1 lg:gap-2'>
              <div className='flex items-center gap-2'>
                <Users
                  className='h-5 w-5 text-white lg:h-6 lg:w-6'
                  strokeWidth={1.5}
                />
                <MessageSquare
                  className='h-4 w-4 text-white lg:h-5 lg:w-5'
                  strokeWidth={1.5}
                />
              </div>
              <div className='flex items-center gap-2'>
                <Users
                  className='h-5 w-5 text-white lg:h-6 lg:w-6'
                  strokeWidth={1.5}
                />
                <MessageSquare
                  className='h-4 w-4 text-white lg:h-5 lg:w-5'
                  strokeWidth={1.5}
                />
              </div>
            </div>
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p>
                <span className='font-extrabold'>
                  {t('activeCommunity.highlight')}
                </span>{' '}
                {t('activeCommunity.text')}
              </p>
            </div>
          </Card>

          <Card className='order-11 col-span-1 flex h-[100px] flex-col justify-end p-[16px] lg:col-start-3 lg:row-start-4 lg:h-auto lg:p-[35px]'>
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p className='font-extrabold'>
                {t('uniqueOpportunities.highlight')}
              </p>
              <p>{t('uniqueOpportunities.text')}</p>
            </div>
          </Card>

          <Card className='order-12 col-span-2 flex h-[100px] flex-col justify-end p-[16px] lg:col-span-1 lg:col-start-4 lg:row-start-4 lg:h-auto lg:p-[35px]'>
            <div className='text-xs leading-tight font-medium tracking-[-0.5px] text-white lg:text-3xl lg:tracking-[-0.84px]'>
              <p className='font-extrabold'>{t('restrictedIssue.line1')}</p>
              <p className='font-extrabold'>{t('restrictedIssue.line2')}</p>
              <p>{t('restrictedIssue.value')}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
