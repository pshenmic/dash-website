import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'
import { GithubIcon } from '@/components/icons/GithubIcon'
import { ForumIcon } from '@/components/icons/ForumIcon'

interface CommunityCardProps {
  icon: React.ReactNode
  name: string
  suffix: string
  href: string
  buttonText: string
}

function CommunityCard ({
  icon,
  name,
  suffix,
  href,
  buttonText
}: CommunityCardProps): React.ReactNode {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center justify-between rounded-[32px] bg-white/15 py-3 pr-3 pl-9 transition-colors hover:bg-white/20'
    >
      <div className='flex items-center gap-6'>
        {icon}
        <Text className='text-2xl tracking-tight text-white'>
          <span className='font-extrabold'>{name} </span>
          <span className='font-medium'>{suffix}</span>
        </Text>
      </div>
      <button className='flex h-16 w-40 items-center justify-center rounded-2xl bg-white text-lg font-semibold text-primary-blue'>
        {buttonText}
      </button>
    </a>
  )
}

export function JoinCommunity (): React.ReactNode {
  const t = useTranslations('buildPage.joinCommunity')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between'>
        {/* Left — text content */}
        <div className='flex flex-col gap-9 lg:max-w-[570px]'>
          <div className='flex flex-col gap-4'>
            <Badge variant='bordered' color='white' size='sm' className='w-fit'>{t('chip')}</Badge>
            <Heading as='h2' weight='extrabold' className='text-3xl leading-tight tracking-tight text-white lg:text-5xl lg:leading-[50px]'>
              {t('title')}
            </Heading>
            <Text weight='medium' className='text-base leading-normal text-white lg:text-lg'>
              {t('description')}
            </Text>
          </div>

          <div className='flex flex-col gap-4 sm:flex-row'>
            <button className='flex h-16 items-center justify-center rounded-full bg-white px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
              {t('primaryButton')}
            </button>
            <button className='flex items-center gap-4 rounded-full bg-white/15 px-3 py-2.5 text-lg font-semibold text-white backdrop-blur-sm transition-opacity hover:opacity-90'>
              <span className='pl-6'>{t('secondaryButton')}</span>
              <div className='flex size-11 items-center justify-center rounded-full bg-primary-white'>
                <ArrowRight className='size-4 text-primary-blue' />
              </div>
            </button>
          </div>
        </div>

        {/* Right — community link cards */}
        <div className='flex w-full flex-col gap-5 lg:w-[460px]'>
          <CommunityCard
            icon={<GithubIcon className='text-white' />}
            name={t('links.dashpayGithub')}
            suffix={t('links.dashpayGithubSuffix')}
            href='https://github.com/dashpay'
            buttonText={t('continueButton')}
          />
          <CommunityCard
            icon={<ForumIcon />}
            name={t('links.dashForum')}
            suffix={t('links.dashForumSuffix')}
            href='https://www.dash.org/forum'
            buttonText={t('continueButton')}
          />
          <CommunityCard
            icon={<GithubIcon className='text-white' />}
            name={t('links.dashevoGithub')}
            suffix={t('links.dashevoGithubSuffix')}
            href='https://github.com/dashevo'
            buttonText={t('continueButton')}
          />
        </div>
      </div>
    </div>
  )
}
