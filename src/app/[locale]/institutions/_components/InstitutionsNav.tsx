import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const navCards = [
  { key: 'traders', href: '/institutions/traders' },
  { key: 'financialServices', href: '/institutions/financial-services' },
  { key: 'regulatory', href: '/institutions/regulatory' }
] as const

export function InstitutionsNav (): React.ReactNode {
  const t = useTranslations('institutionsPage.nav')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-6 lg:flex-row'>
        {navCards.map((card) => (
          <a
            key={card.key}
            href={card.href}
            className='flex flex-1 items-center justify-between gap-6 rounded-[36px] border border-primary-dark/15 bg-primary-white p-6 shadow-[0_0_100px_0_rgba(12,28,51,0.1)] transition-shadow hover:shadow-lg dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:p-8.75'
          >
            <div className='flex flex-col gap-3.75'>
              <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! dark:text-white! lg:text-4xl lg:leading-10'>
                {t(`${card.key}.title`)}
              </Heading>
              <Text weight='medium' className='text-[13px] text-primary-dark/60! dark:text-white/60!'>
                {t(`${card.key}.description`)}
              </Text>
            </div>
            <div className='flex size-16 shrink-0 items-center justify-center rounded-[20px] bg-primary-blue/15 transition-colors hover:bg-primary-blue/25 lg:size-16.25'>
              <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
                <ArrowRight className='size-4 text-primary-blue' />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
