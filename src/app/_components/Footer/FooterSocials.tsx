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
    <div className='flex flex-col gap-[15px]'>
      <div className='flex flex-col gap-[5px]'>
        <h3 className='text-[24px] font-extrabold leading-[34px] text-white lg:text-[32px]'>
          {t('title')}
        </h3>
        <p className='text-[13px] font-medium text-white'>
          {t('subtitle')}
        </p>
      </div>
      <div className='flex flex-wrap gap-[10px] lg:gap-[15px]'>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex size-[40px] items-center justify-center rounded-[11px] bg-white/10 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50'
            aria-label={social.name}
          >
            <Image
              src={social.icon}
              alt=''
              width={25}
              height={25}
              className='h-auto max-h-[23px] w-[25px]'
            />
          </a>
        ))}
      </div>
    </div>
  )
}
