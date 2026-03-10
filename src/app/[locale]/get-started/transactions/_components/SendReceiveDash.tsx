import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading } from 'dash-ui-kit/react'

export function SendReceiveDash (): React.ReactNode {
  const t = useTranslations('transactions.sendReceive')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-[35px] bg-primary-blue'>
        <div className='flex flex-col lg:flex-row'>
          {/* Left — phone mockups, rotated 30deg */}
          <div className='relative hidden min-h-100 w-full shrink-0 lg:block lg:w-[45%]'>
            <Image
              src='/images/get-started/phones-mockup.webp'
              alt='DashPay app mockup'
              width={747}
              height={718}
              className='pointer-events-none absolute -bottom-16 -left-30 rotate-30'
            />
          </div>

          {/* Right — text content, vertically centered */}
          <div className='flex flex-1 items-center p-8 lg:p-16'>
            <div className='flex flex-col gap-8.75'>
              {/* Text group: title + body (gap-3.75) */}
              <div className='flex flex-col gap-3.75'>
                <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-white md:text-[38px] md:leading-10'>
                  {t('title')}
                </Heading>
                <div className='max-w-150 text-lg font-medium leading-normal text-white'>
                  <p>{t('paragraph1')}</p>
                  <p className='mt-5'>{t('paragraph2')}</p>
                </div>
              </div>
              {/* Button */}
              <div>
                <button className='h-16.25 rounded-[20px] bg-white px-8.75 text-lg font-semibold text-primary-dark backdrop-blur-sm transition-smooth hover:opacity-90'>
                  {t('button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
