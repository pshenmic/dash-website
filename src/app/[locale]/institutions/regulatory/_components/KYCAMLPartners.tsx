import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

const partners = [
  { name: 'Coinfirm', website: 'www.coinfirm.com', logo: '/images/regulatory/logo-coinfirm.svg' },
  { name: 'AMLT', website: 'amlt.coinfirm.com', logo: '/images/regulatory/logo-amlt.svg' }
] as const

export function KYCAMLPartners (): React.ReactNode {
  const t = useTranslations('regulatoryPage.kycamlPartners')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
        {/* Left — text */}
        <div className='flex flex-col gap-3.75'>
          <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
          <Heading as='h2' weight='extrabold' className='text-[38px] leading-10 tracking-[-0.03em] dark:text-white'>
            {t('title')}
          </Heading>
        </div>

        {/* Right — partner cards */}
        <div className='flex flex-col gap-5 sm:flex-row'>
          {partners.map((partner, i) => (
            <div
              key={partner.name}
              className={`flex w-full flex-col rounded-[25px] border border-primary-dark/15 bg-white p-6.25 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] dark:border-white/15 dark:bg-secondary-space-cadet sm:w-[190px] ${i === 1 ? 'justify-between' : 'gap-5'}`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={47}
                height={47}
                className='h-12 w-auto object-contain'
              />
              <div className='flex flex-col gap-1.25'>
                <Heading as='h3' weight='extrabold' className='text-lg leading-normal text-primary-dark! dark:text-white!'>
                  {partner.name}
                </Heading>
                <Text weight='medium' className='text-xs leading-normal text-primary-dark/35! dark:text-white/35!'>
                  {partner.website}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
