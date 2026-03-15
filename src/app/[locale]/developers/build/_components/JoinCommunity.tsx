import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Badge, Heading, Text } from 'dash-ui-kit/react'

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
        <p className='text-2xl tracking-tight text-white'>
          <span className='font-extrabold'>{name} </span>
          <span className='font-medium'>{suffix}</span>
        </p>
      </div>
      <button className='flex h-16 w-[155px] items-center justify-center rounded-[20px] bg-white text-lg font-semibold text-primary-blue'>
        {buttonText}
      </button>
    </a>
  )
}

function GithubIcon (): React.ReactNode {
  return (
    <svg width='25' height='24' viewBox='0 0 25 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M12.5 0C5.596 0 0 5.596 0 12.5c0 5.525 3.58 10.21 8.547 11.867.625.115.853-.271.853-.604 0-.298-.011-1.084-.017-2.129-3.477.756-4.212-1.676-4.212-1.676-.569-1.444-1.388-1.829-1.388-1.829-1.135-.775.086-.76.086-.76 1.255.088 1.916 1.289 1.916 1.289 1.115 1.912 2.926 1.359 3.64 1.039.113-.808.436-1.36.794-1.672-2.776-.316-5.694-1.388-5.694-6.178 0-1.365.487-2.48 1.287-3.353-.129-.316-.558-1.587.122-3.308 0 0 1.05-.336 3.437 1.281A11.99 11.99 0 0 1 12.5 5.968c1.063.005 2.133.144 3.13.422 2.387-1.617 3.434-1.281 3.434-1.281.682 1.721.253 2.992.124 3.308.802.873 1.285 1.988 1.285 3.353 0 4.802-2.923 5.858-5.706 6.167.449.387.849 1.15.849 2.317 0 1.672-.015 3.021-.015 3.432 0 .335.226.724.86.601C21.424 22.705 25 18.022 25 12.5 25 5.596 19.404 0 12.5 0z' fill='white' />
    </svg>
  )
}

function ForumIcon (): React.ReactNode {
  return (
    <svg width='54' height='25' viewBox='0 0 54 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M0 12.5C0 5.596 5.596 0 12.5 0h29C48.404 0 54 5.596 54 12.5S48.404 25 41.5 25h-29C5.596 25 0 19.404 0 12.5z' fill='white' fillOpacity='0.15' />
      <text x='27' y='16' textAnchor='middle' fill='white' fontSize='10' fontFamily='Manrope' fontWeight='800'>FORUM</text>
    </svg>
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
            icon={<GithubIcon />}
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
            icon={<GithubIcon />}
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
