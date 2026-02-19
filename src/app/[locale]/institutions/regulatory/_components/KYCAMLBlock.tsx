import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function KYCAMLBlock (): React.ReactNode {
  const t = useTranslations('regulatoryPage.kycamlBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <div className='relative z-10 flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-16'>
          {/* Left — info cards */}
          <div className='flex flex-col gap-5 sm:flex-row lg:max-w-lg'>
            {/* Blockchain Intel */}
            <div className='flex flex-1 flex-col gap-8 rounded-4xl border border-white/15 bg-white/5 p-7 shadow-soft backdrop-blur-sm'>
              <Image
                src='/images/regulatory/logo-blockchain-intel.svg'
                alt='Blockchain Intel'
                width={68}
                height={68}
                className='size-17 object-contain'
              />
              <div className='flex flex-col gap-4'>
                <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-white'>
                  {t('blockchainIntel.name')}
                </Heading>
                <Text size='xs' weight='medium' className='leading-relaxed text-white'>
                  {t('blockchainIntel.description')}
                </Text>
              </div>
            </div>

            {/* Chainalysis */}
            <div className='flex flex-1 flex-col justify-between rounded-4xl border border-white/15 bg-white/5 p-7 shadow-soft backdrop-blur-sm'>
              <Image
                src='/images/regulatory/logo-chainalysis.svg'
                alt='Chainalysis'
                width={68}
                height={68}
                className='size-17 object-contain'
              />
              <div className='flex flex-col gap-4'>
                <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-white'>
                  {t('chainalysis.name')}
                </Heading>
                <Text size='xs' weight='medium' className='leading-relaxed text-white'>
                  {t('chainalysis.description')}
                </Text>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className='flex max-w-md flex-col gap-4'>
            <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight text-white'>
              {t('title')}
            </Heading>
            <Text size='sm' weight='medium' className='leading-relaxed text-white lg:text-base'>
              {t('description')}
            </Text>
          </div>
        </div>
      </div>
    </div>
  )
}
