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
      <div className='grid gap-6 lg:grid-cols-3'>
        {navCards.map((card) => (
          <a
            key={card.key}
            href={card.href}
            className='flex items-center justify-between gap-6 rounded-3xl border border-primary-dark/15 bg-white p-8 shadow-soft transition-shadow hover:shadow-lg dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none'
          >
            <div className='flex flex-col gap-4'>
              <Heading as='h3' size='md' weight='extrabold' className='leading-tight tracking-tight text-primary-dark! dark:text-white!'>
                {t(`${card.key}.title`)}
              </Heading>
              <Text size='sm' weight='medium' className='text-primary-dark/60! dark:text-white/60!'>
                {t(`${card.key}.description`)}
              </Text>
            </div>
            <div className='flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-blue/15'>
              <div className='flex size-11 items-center justify-center rounded-full bg-white'>
                <ArrowRight className='size-4 text-primary-blue' />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
