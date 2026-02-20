'use client'

import { useTranslations } from 'next-intl'

interface LinkItem {
  key: string
  href: string
}

interface LinkColumn {
  titleKey: string
  links: LinkItem[]
}

const linkColumns: LinkColumn[] = [
  {
    titleKey: 'home',
    links: [
      { key: 'individuals', href: '/individuals' },
      { key: 'businesses', href: '/businesses' },
      { key: 'downloads', href: '/downloads' },
      { key: 'buyOnline', href: '/buy' },
      { key: 'whereToSpend', href: '/spend' },
      { key: 'newMerchantKit', href: '/merchant-kit' }
    ]
  },
  {
    titleKey: 'institutions',
    links: [
      { key: 'traders', href: '/institutions/traders' },
      { key: 'financialServices', href: '/institutions/financial-services' },
      { key: 'regulatory', href: '/institutions/regulatory' },
      { key: 'fastPass', href: '/institutions/fastpass' }
    ]
  },
  {
    titleKey: 'developers',
    links: [
      { key: 'platform', href: '/developers/platform' },
      { key: 'documentation', href: '/developers/docs' },
      { key: 'contributing', href: '/developers/contributing' },
      { key: 'providersAndTools', href: '/developers/tools' },
      { key: 'roadmap', href: '/developers/roadmap' }
    ]
  },
  {
    titleKey: 'community',
    links: [
      { key: 'bugBountyProgram', href: '/community/bug-bounty' },
      { key: 'learningResources', href: '/community/learn' },
      { key: 'connectWithUs', href: '/community/connect' },
      { key: 'forum', href: 'https://forum.dash.org' },
      { key: 'masternodes', href: '/community/masternodes' },
      { key: 'mining', href: '/community/mining' },
      { key: 'blog', href: 'https://blog.dash.org' }
    ]
  }
]

export function FooterLinks (): React.ReactNode {
  const t = useTranslations('footer.links')

  return (
    <div className='grid grid-cols-2 gap-x-10 gap-y-8 lg:grid-cols-4 lg:gap-x-16'>
      {linkColumns.map((column, columnIndex) => (
        <div
          key={column.titleKey}
          className='flex flex-col gap-4'
          style={{ animationDelay: `${columnIndex * 0.1}s` }}
        >
          <h4 className='animate-fade-in-up text-lg font-extrabold text-white'>
            {t(`${column.titleKey}.title`)}
          </h4>
          <ul className='flex flex-col gap-4'>
            {column.links.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className='inline-block text-sm font-medium text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-primary-turquoise focus:outline-none focus-visible:text-primary-turquoise focus-visible:underline'
                >
                  {t(`${column.titleKey}.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
