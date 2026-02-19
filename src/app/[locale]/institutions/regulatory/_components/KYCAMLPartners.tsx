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
      <div className='flex flex-col gap-12'>
        <div className='flex flex-col gap-4'>
          <Badge variant='bordered' color='gray' size='sm' className='w-fit'>{t('chip')}</Badge>
          <Heading as='h2' size='lg' weight='extrabold' className='leading-tight tracking-tight dark:text-white'>
            {t('title')}
          </Heading>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {partners.map((partner) => (
            <div
              key={partner.name}
              className='flex flex-col gap-5 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={47}
                height={47}
                className='size-12 object-contain'
              />
              <div className='flex flex-col gap-1'>
                <Heading as='h3' size='md' weight='extrabold' className='leading-tight text-primary-dark! dark:text-white!'>
                  {partner.name}
                </Heading>
                <Text size='xs' weight='medium' className='text-primary-dark/35! dark:text-white/35!'>
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
