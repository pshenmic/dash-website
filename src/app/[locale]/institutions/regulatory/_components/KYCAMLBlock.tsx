import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function KYCAMLBlock (): React.ReactNode {
  const t = useTranslations('regulatoryPage.kycamlBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-[35px] bg-primary-blue'>
        <div className='relative z-10 flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-16'>
          {/* Left — info cards */}
          <div className='flex flex-col gap-5 sm:flex-row'>
            {/* Blockchain Intel */}
            <div className='flex w-full flex-col gap-8.75 rounded-[36px] border border-white/15 bg-white/5 px-7.5 py-8.75 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] sm:w-[265px]'>
              <Image
                src='/images/regulatory/logo-blockchain-intel.svg'
                alt='Blockchain Intel'
                width={68}
                height={68}
                className='size-17 object-contain'
              />
              <div className='flex flex-col gap-3.75'>
                <Heading as='h3' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] whitespace-pre-line text-white'>
                  {t('blockchainIntel.name')}
                </Heading>
                <Text weight='medium' className='text-[13px] leading-normal text-white'>
                  {t('blockchainIntel.description')}
                </Text>
              </div>
            </div>

            {/* Chainalysis */}
            <div className='flex w-full flex-col justify-between rounded-[36px] border border-white/15 bg-white/5 px-7.5 py-8.75 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] sm:w-70'>
              <Image
                src='/images/regulatory/logo-chainalysis.svg'
                alt='Chainalysis'
                width={68}
                height={68}
                className='size-17 object-contain'
              />
              <div className='flex flex-col gap-3.75'>
                <Heading as='h3' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] whitespace-pre-line text-white'>
                  {t('chainalysis.name')}
                </Heading>
                <Text weight='medium' className='text-[13px] leading-normal text-white'>
                  {t('chainalysis.description')}
                </Text>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className='flex max-w-100 flex-col gap-3.75'>
            <Heading as='h2' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] text-white'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-lg leading-normal text-white'>
              {t('description')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
