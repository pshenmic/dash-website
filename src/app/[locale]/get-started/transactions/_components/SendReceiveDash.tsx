import Image from 'next/image'
import { useTranslations } from 'next-intl'

export function SendReceiveDash (): React.ReactNode {
  const t = useTranslations('transactions.sendReceive')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-[35px] bg-primary-blue'>
        <div className='flex flex-col lg:flex-row'>
          {/* Left — phone mockups, rotated 30deg */}
          <div className='relative hidden min-h-100 w-full shrink-0 lg:block lg:w-[45%]'>
            <Image
              src='/images/transactions/phones-mockup.png'
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
                <h2 className='text-[38px] font-extrabold leading-10 text-white' style={{ letterSpacing: '-0.03em' }}>
                  {t('title')}
                </h2>
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
