import Image from 'next/image'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

interface HeroSectionProps {
  chip: string
  title: string
  subtitle: string
  downloadWallet: string
  documentation: string
}

export function HeroSection({
  chip,
  title,
  subtitle,
  downloadWallet,
  documentation,
}: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      {/* Mobile background */}
      <Image
        src="/images/hero-bg-mobile.png"
        alt=""
        fill
        className="object-cover lg:hidden"
        priority
      />
      {/* Desktop background */}
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className="hidden object-cover lg:block"
        priority
      />

      <div className="relative z-10 flex flex-col items-center gap-[35px] px-6 py-12 lg:max-w-7xl lg:px-16">
        <div className="flex max-w-full flex-col items-center gap-[15px]">
          <Chip>{chip}</Chip>
          <h1 className="max-w-full whitespace-pre-line text-center text-[32px] font-extrabold leading-[1.1] tracking-[-0.03em] text-primary-white sm:text-[38px] sm:leading-[1.05] lg:text-[96px] lg:leading-[1.02]">
            {title}
          </h1>
          <p className="max-w-full text-center text-base font-medium leading-[1.37] text-primary-white sm:text-lg lg:max-w-[724px] lg:text-[28px] lg:tracking-[-0.03em]">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2.5 lg:flex-row lg:gap-[15px]">
          <Button variant="primary">{downloadWallet}</Button>
          <Button variant="secondary" icon={<ArrowIcon />}>
            {documentation}
          </Button>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <div className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-primary-white/20">
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M3 7.5h9m0 0L8.5 4m3.5 3.5L8.5 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
