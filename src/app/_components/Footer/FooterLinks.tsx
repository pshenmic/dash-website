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
    <div className='grid grid-cols-2 gap-x-[40px] gap-y-[30px] lg:grid-cols-4 lg:gap-x-[60px]'>
      {linkColumns.map((column) => (
        <div key={column.titleKey} className='flex flex-col gap-[15px]'>
          <h4 className='text-[18px] font-extrabold text-white'>
            {t(`${column.titleKey}.title`)}
          </h4>
          <ul className='flex flex-col gap-[15px]'>
            {column.links.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className='text-[13px] font-medium text-white/50 transition-colors hover:text-white/70 focus:outline-none focus-visible:underline'
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
