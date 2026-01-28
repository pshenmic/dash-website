'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

const socialLinks = [
  { name: 'youtube', icon: '/images/footer/youtube.svg', href: 'https://youtube.com/@DashOrg' },
  { name: 'x', icon: '/images/footer/x.svg', href: 'https://x.com/Dashpay' },
  { name: 'reddit', icon: '/images/footer/reddit.svg', href: 'https://reddit.com/r/dashpay' },
  { name: 'github', icon: '/images/footer/github.svg', href: 'https://github.com/dashpay' },
  { name: 'discord', icon: '/images/footer/discord.svg', href: 'https://discord.gg/dash' },
  { name: 'telegram', icon: '/images/footer/telegram.svg', href: 'https://t.me/dash_chat' },
  { name: 'dash-forum', icon: '/images/footer/dash-forum.svg', href: 'https://forum.dash.org' },
  { name: 'dash-blog', icon: '/images/footer/dash-blog.svg', href: 'https://blog.dash.org' },
  { name: 'linkedin', icon: '/images/footer/linkedin.svg', href: 'https://linkedin.com/company/dash-core-group' },
  { name: 'facebook', icon: '/images/footer/facebook.svg', href: 'https://facebook.com/DashPay' },
  { name: 'instagram', icon: '/images/footer/instagram.svg', href: 'https://instagram.com/dashpay' }
]

export function FooterSocials (): React.ReactNode {
  const t = useTranslations('footer.socials')

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <h3 className='animate-fade-in-up text-2xl font-extrabold leading-9 text-white lg:text-3xl'>
          {t('title')}
        </h3>
        <p className='animate-fade-in-up-1 text-sm font-medium text-white'>
          {t('subtitle')}
        </p>
      </div>
      <div className='flex flex-wrap gap-2.5 lg:gap-4'>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex size-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-primary-turquoise/20 hover:shadow-md hover:shadow-primary-turquoise/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-turquoise/50'
            aria-label={social.name}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <Image
              src={social.icon}
              alt=''
              width={25}
              height={25}
              className='size-6'
              unoptimized
            />
          </a>
        ))}
      </div>
    </div>
  )
}
