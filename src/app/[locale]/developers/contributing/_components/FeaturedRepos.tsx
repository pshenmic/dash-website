import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

const ICON_MAP = {
  dashcore: { src: '/images/developers/contributing/icons/dash-core.svg', width: 36, height: 22, alt: 'Dash Core' },
  js: { src: '/images/developers/contributing/icons/js.svg', width: 34, height: 24, alt: 'JavaScript' },
  apple: { src: '/images/developers/contributing/icons/apple.svg', width: 28, height: 32, alt: 'Apple' },
  android: { src: '/images/developers/contributing/icons/android.svg', width: 30, height: 34, alt: 'Android' }
} as const

type IconType = keyof typeof ICON_MAP

export interface RepoItem {
  name: string
  icon: IconType
  url?: string
}

interface FeaturedReposProps {
  rows: RepoItem[][]
}

export function FeaturedRepos ({ rows }: FeaturedReposProps): React.ReactNode {
  const t = useTranslations('contributingPage.featuredRepos')

  return (
    <div data-testid='featured-repos' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Header */}
      <div className='mb-6 flex items-center justify-between'>
        <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight dark:text-white lg:text-[32px] lg:leading-[34px]'>
          {t('title')}
        </Heading>
        <button className='flex h-16 items-center justify-center rounded-2xl bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
          {t('seeAll')}
        </button>
      </div>

      {/* Repo cards rows */}
      <div className='flex flex-col gap-5'>
        {rows.map((row, i) => (
          <div key={i} className='flex flex-wrap gap-5'>
            {row.map((repo) => {
              const icon = ICON_MAP[repo.icon]
              return (
                <a
                  key={repo.name}
                  href={repo.url ?? '#'}
                  className='hover-lift flex flex-1 items-center gap-6 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet'
                >
                  <div className='flex size-17 shrink-0 items-center justify-center rounded-xl bg-primary-dark/5 dark:bg-white/10'>
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      width={icon.width}
                      height={icon.height}
                    />
                  </div>
                  <div className='flex flex-col gap-2.5'>
                    <Heading as='h4' weight='extrabold' className='whitespace-nowrap text-2xl leading-10 tracking-[-0.96px] text-primary-dark! dark:text-white! lg:text-[32px]'>
                      {repo.name}
                    </Heading>
                    <Text size='sm' weight='medium' className='text-primary-dark! dark:text-white!'>
                      {t('github')}
                    </Text>
                  </div>
                </a>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
