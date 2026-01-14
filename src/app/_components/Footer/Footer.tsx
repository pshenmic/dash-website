import { FooterSocials } from './FooterSocials'
import { FooterNewsletter } from './FooterNewsletter'
import { FooterBrand } from './FooterBrand'
import { FooterLinks } from './FooterLinks'
import { SubFooter } from './SubFooter'

export function Footer (): React.ReactNode {
  return (
    <footer className='relative z-10 -mt-[30px] lg:-mt-[50px]'>
      {/* Main Footer Card Section */}
      <div className='rounded-t-[25px] bg-primary-white pt-[60px] dark:bg-primary-dark lg:rounded-t-[35px] lg:pt-[100px]'>
        {/* Footer Card - Blue in light mode, Dark in dark mode */}
        <div className='mx-auto max-w-[1240px] rounded-[35px] bg-primary-blue px-6 py-[60px] dark:bg-secondary-space-cadet lg:px-[54px] lg:py-[100px]'>
          {/* Top Section: Socials + Newsletter */}
          <div className='flex flex-col gap-[40px] lg:flex-row lg:justify-between lg:gap-[60px]'>
            <FooterSocials />
            <FooterNewsletter />
          </div>

          {/* Spacer */}
          <div className='my-[50px] lg:my-[80px]' />

          {/* Bottom Section: Brand + Links */}
          <div className='flex flex-col gap-[40px] lg:flex-row lg:justify-between lg:gap-[100px]'>
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
