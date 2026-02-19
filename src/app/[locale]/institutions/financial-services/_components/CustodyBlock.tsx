import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function CustodyBlock (): React.ReactNode {
  const t = useTranslations('financialServicesPage.custodyBlock')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='relative overflow-hidden rounded-3xl bg-primary-blue lg:rounded-4xl'>
        <div className='relative z-10 flex flex-col gap-10 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-16'>
          {/* Left — info cards */}
          <div className='flex flex-col gap-5 lg:max-w-md'>
            {/* BitGo */}
            <div className='flex items-start gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm'>
              <Image
                src='/images/financial-services/logo-bitgo.svg'
                alt='BitGo'
                width={47}
                height={47}
                className='size-12 shrink-0 object-contain'
              />
              <div className='flex flex-col gap-2'>
                <Heading as='h3' size='md' weight='extrabold' className='leading-tight text-white'>
                  {t('bitgo.name')}
                </Heading>
                <Text size='xs' weight='medium' className='leading-relaxed text-white'>
                  {t('bitgo.description')}
                </Text>
              </div>
            </div>

            {/* CYBAVO */}
            <div className='flex items-start gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm'>
              <Image
                src='/images/financial-services/logo-cybavo.svg'
                alt='CYBAVO'
                width={47}
                height={47}
                className='size-12 shrink-0 object-contain'
              />
              <div className='flex flex-col gap-2'>
                <Heading as='h3' size='md' weight='extrabold' className='leading-tight text-white'>
                  {t('cybavo.name')}
                </Heading>
                <Text size='xs' weight='medium' className='leading-relaxed text-white'>
                  {t('cybavo.description')}
                </Text>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className='flex max-w-md flex-col gap-4'>
            <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight whitespace-pre-line text-white'>
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
