import { FooterSocials } from './FooterSocials'
import { FooterNewsletter } from './FooterNewsletter'
import { FooterBrand } from './FooterBrand'
import { FooterLinks } from './FooterLinks'
import { SubFooter } from './SubFooter'

export function Footer (): React.ReactNode {
  return (
    <footer className='relative z-10 -mt-8 lg:-mt-12'>
      {/* Main Footer Card Section */}
      <div className='rounded-t-3xl bg-primary-white pt-16 dark:bg-primary-dark lg:rounded-t-4xl lg:pt-24'>
        {/* Footer Card - Blue in light mode, Dark in dark mode */}
        <div className='mx-auto max-w-7xl rounded-4xl bg-primary-blue px-6 py-16 dark:bg-secondary-space-cadet lg:px-14 lg:py-24'>
          {/* Top Section: Socials + Newsletter */}
          <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16'>
            <FooterSocials />
            <FooterNewsletter />
          </div>

          {/* Spacer */}
          <div className='my-12 lg:my-20' />

          {/* Bottom Section: Brand + Links */}
          <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-24'>
            <FooterBrand />
            <FooterLinks />
          </div>
        </div>
      </div>

      {/* SubFooter - Light in light mode, Dark in dark mode */}
      <div className='bg-primary-white px-6 py-8 dark:bg-primary-dark lg:px-16 lg:py-12'>
        <SubFooter />
      </div>
    </footer>
  )
}
