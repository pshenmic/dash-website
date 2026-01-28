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
        <div className='relative mx-auto max-w-7xl overflow-hidden rounded-4xl bg-linear-to-br from-primary-blue to-secondary-light-blue px-6 py-16 shadow-2xl shadow-primary-blue/10 dark:from-secondary-space-cadet dark:to-secondary-yinmn-blue dark:shadow-primary-turquoise/5 lg:px-14 lg:py-24'>
          {/* Subtle decorative gradient overlay */}
          <div className='pointer-events-none absolute inset-0 bg-linear-to-t from-primary-turquoise/5 to-transparent' />

          {/* Content with relative positioning */}
          <div className='relative z-10'>
            {/* Top Section: Socials + Newsletter */}
            <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-16'>
              <FooterSocials />
              <FooterNewsletter />
            </div>

            {/* Spacer with decorative divider */}
            <div className='my-12 lg:my-20'>
              <div className='h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent' />
            </div>

            {/* Bottom Section: Brand + Links */}
            <div className='flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-24'>
              <FooterBrand />
              <FooterLinks />
            </div>
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
