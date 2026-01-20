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
        <div className='grid grid-cols-2 gap-2.5 lg:grid-cols-[304px_292px_292px_304px] lg:grid-rows-[180px_105px_180px_180px] lg:gap-4'>
          {/* Center of grid on desktop (col 2-3, row 2-3) */}
          <Card className='relative order-1 col-span-2 h-40 lg:order-5 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:h-auto'>
            {/* Extends beyond bounds for glow effect */}
            <div className='pointer-events-none absolute -top-20 -left-25 h-75 w-75 rounded-full bg-primary-blue/30 blur-3xl lg:-top-30 lg:-left-42 lg:h-104 lg:w-104 lg:blur-3xl' />
            {/* Coin overflows card by design */}
            <div className='absolute -top-15 -right-8 h-75 w-70 lg:-top-23 lg:-right-12 lg:h-123 lg:w-111'>
              <Image
                src='/images/bullets/main-3d-coin.png'
                alt='Dash 3D Coin'
                fill
                className='object-contain object-right'
              />
            </div>
            <div className='absolute bottom-4 left-4 lg:bottom-9 lg:left-9'>
              <Image
                src='/images/bullets/logo-dash-white.svg'
                alt='Dash'
                width={191}
                height={51}
                className='h-7 w-auto lg:h-13'
              />
            </div>
            <div className='absolute top-1/2 left-4 -translate-y-1/2 lg:left-9'>
              <Chip>{t('mainCard.chip')}</Chip>
            </div>
          </Card>

          {/* Tall card on desktop (row-span-2) */}
          <Card
            variant='blue'
            className='order-2 col-span-1 flex h-35 flex-col justify-end p-4 lg:order-1 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-auto lg:p-9'
          >
            <CircleCheck
              className='mb-auto size-10 text-white lg:size-18'
              strokeWidth={1.5}
            />
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
              <p>{t('stableOperation.line1')}</p>
              <p>{t('stableOperation.line2')}</p>
              <p className='font-extrabold'>{t('stableOperation.highlight')}</p>
            </div>
          </Card>

          <Card className='order-3 col-span-1 flex h-35 items-center justify-center p-4 lg:order-2 lg:col-start-2 lg:row-start-1 lg:h-auto lg:p-6'>
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-2xl lg:tracking-tighter'>
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

          <Card className='order-4 col-span-1 flex h-25 items-center gap-3 p-4 lg:order-3 lg:col-start-3 lg:row-start-1 lg:h-auto lg:gap-5 lg:p-9'>
            <Lock
              className='size-7 shrink-0 text-white lg:size-12'
              strokeWidth={1.5}
            />
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
              <p>{t('optionalPrivacy.line1')}</p>
              <p className='font-extrabold'>{t('optionalPrivacy.highlight')}</p>
            </div>
          </Card>

          <Card className='order-5 col-span-1 flex h-25 items-center justify-center lg:order-4 lg:col-start-4 lg:row-start-1 lg:h-auto'>
            <div className='relative h-full w-full'>
              <Image
                src='/images/bullets/coin-3d-small.png'
                alt='Dash Coin'
                fill
                className='object-cover'
              />
            </div>
          </Card>

          <DashPriceCard className='relative order-6 col-span-2 h-25 lg:col-span-1 lg:col-start-1 lg:row-start-3 lg:h-auto' />

          <Card className='order-7 col-span-1 flex h-25 flex-col justify-center p-4 lg:col-start-4 lg:row-start-2 lg:h-auto lg:p-6'>
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-2xl lg:tracking-tighter'>
              <p className='font-extrabold'>{t('passiveIncome.highlight')}</p>
              <p>{t('passiveIncome.text')}</p>
            </div>
          </Card>

          <Card
            variant='blue'
            className='relative order-8 col-span-1 flex h-25 flex-col justify-end p-4 lg:col-start-4 lg:row-start-3 lg:h-auto lg:p-9'
          >
            <div className='absolute top-4 right-4 lg:top-9 lg:right-9'>
              <Image
                src='/images/bullets/logo-dash-blue.svg'
                alt=''
                width={135}
                height={110}
                className='h-12 w-auto lg:h-23'
              />
            </div>
            <div className='relative text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
              <p className='font-extrabold'>{t('selfFinancing.highlight')}</p>
              <p>{t('selfFinancing.line1')}</p>
              <p>{t('selfFinancing.line2')}</p>
            </div>
          </Card>

          <Card
            variant='blue'
            className='relative order-9 col-span-2 flex h-30 flex-col justify-end p-4 lg:col-span-1 lg:col-start-2 lg:row-start-4 lg:h-auto lg:p-9'
          >
            {/* Image rotated and scaled to create decorative overflow effect */}
            <div className='absolute top-1/2 -right-12 flex h-25 w-75 -translate-y-1/2 items-center justify-center lg:-right-20 lg:h-36 lg:w-125'>
              <Image
                src='/images/bullets/coins-stack.png'
                alt=''
                width={735}
                height={144}
                className='scale-150 -rotate-90 lg:scale-150'
              />
            </div>
            <div className='relative text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
              <p className='font-extrabold'>{t('instantSecure.line1')}</p>
              <p className='font-extrabold'>{t('instantSecure.line2')}</p>
              <p>{t('instantSecure.text')}</p>
            </div>
          </Card>

          <Card className='order-10 col-span-1 flex h-25 flex-col justify-between p-4 lg:col-start-1 lg:row-start-4 lg:h-auto lg:p-9'>
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
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
              <p>
                <span className='font-extrabold'>
                  {t('activeCommunity.highlight')}
                </span>{' '}
                {t('activeCommunity.text')}
              </p>
            </div>
          </Card>

          <Card className='order-11 col-span-1 flex h-25 flex-col justify-end p-4 lg:col-start-3 lg:row-start-4 lg:h-auto lg:p-9'>
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
              <p className='font-extrabold'>
                {t('uniqueOpportunities.highlight')}
              </p>
              <p>{t('uniqueOpportunities.text')}</p>
            </div>
          </Card>

          <Card className='order-12 col-span-2 flex h-25 flex-col justify-end p-4 lg:col-span-1 lg:col-start-4 lg:row-start-4 lg:h-auto lg:p-9'>
            <div className='text-xs leading-tight font-medium tracking-tight text-white lg:text-3xl lg:tracking-tighter'>
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
