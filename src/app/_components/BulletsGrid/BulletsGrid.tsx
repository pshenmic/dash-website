import Image from 'next/image'
import { Chip } from '@/components/ui/Chip'

interface BulletsGridProps {
  translations: {
    stableOperation: { line1: string; line2: string; highlight: string }
    longestDao: { line1: string; highlight1: string; line2: string; highlight2: string }
    optionalPrivacy: { line1: string; highlight: string }
    mainCard: { chip: string }
    priceChart: { price: string; currency: string; change: string; period: string }
    passiveIncome: { highlight: string; text: string }
    selfFinancing: { highlight: string; line1: string; line2: string }
    activeCommunity: { highlight: string; text: string }
    instantSecure: { line1: string; line2: string; text: string }
    uniqueOpportunities: { highlight: string; text: string }
    restrictedIssue: { line1: string; line2: string; value: string }
  }
}

export function BulletsGrid({ translations: t }: BulletsGridProps) {
  return (
    <section className="bg-primary-white pb-10 dark:bg-primary-dark lg:pb-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Grid Container */}
        <div className="grid grid-cols-2 gap-[15px] lg:grid-cols-[304px_292px_292px_304px] lg:grid-rows-[180px_105px_180px_180px]">

          {/* 1. Stable Operation - Blue card with checkmark */}
          <div className="col-span-1 row-span-2 flex h-[150px] flex-col justify-end overflow-hidden rounded-[35px] bg-primary-blue p-[20px] lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:h-auto lg:p-[35px]">
            <Image
              src="/images/bullets/icon-checkmark.svg"
              alt=""
              width={81}
              height={81}
              className="mb-auto h-[50px] w-[50px] lg:h-[81px] lg:w-[81px]"
            />
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p>{t.stableOperation.line1}</p>
              <p>{t.stableOperation.line2}</p>
              <p className="font-extrabold">{t.stableOperation.highlight}</p>
            </div>
          </div>

          {/* 2. Longest DAO - Dark text only */}
          <div className="col-span-1 flex h-[80px] flex-col justify-end overflow-hidden rounded-[35px] bg-primary-dark p-[20px] lg:col-start-2 lg:row-start-1 lg:h-auto lg:p-[35px]">
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p>
                {t.longestDao.line1} <span className="font-extrabold">{t.longestDao.highlight1}</span> {t.longestDao.line2}
              </p>
              <p>
                <span className="font-extrabold">{t.longestDao.highlight2}</span>
              </p>
            </div>
          </div>

          {/* 3. Optional Privacy - Dark with lock icon */}
          <div className="col-span-1 flex h-[80px] flex-col justify-between overflow-hidden rounded-[35px] bg-primary-dark p-[20px] lg:col-start-3 lg:row-start-1 lg:h-auto lg:p-[35px]">
            <Image
              src="/images/bullets/icon-lock.svg"
              alt=""
              width={63}
              height={72}
              className="h-[35px] w-[30px] lg:h-[72px] lg:w-[63px]"
            />
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p>{t.optionalPrivacy.line1}</p>
              <p className="font-extrabold">{t.optionalPrivacy.highlight}</p>
            </div>
          </div>

          {/* 4. Dash Coin Small - Dark with 3D coin image */}
          <div className="col-span-1 flex h-[80px] items-center justify-center overflow-hidden rounded-[35px] bg-primary-dark lg:col-start-4 lg:row-start-1 lg:h-auto">
            <div className="relative h-full w-full">
              <Image
                src="/images/bullets/coin-3d-small.png"
                alt="Dash Coin"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 5. Main Card - Large dark card with chip, logo, 3D coin */}
          <div className="relative col-span-2 h-[180px] overflow-hidden rounded-[35px] bg-primary-dark lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 lg:h-auto">
            {/* Gradient background - CSS */}
            <div className="absolute -left-[100px] -top-[100px] h-[400px] w-[400px] rounded-full bg-primary-blue/30 blur-[100px]" />
            {/* 3D Coin image */}
            <div className="absolute -right-[50px] -top-[90px] h-[491px] w-[444px] lg:-right-[50px] lg:-top-[90px]">
              <Image
                src="/images/bullets/main-3d-coin.png"
                alt="Dash 3D Coin"
                fill
                className="object-contain object-right"
              />
            </div>
            {/* Logo */}
            <div className="absolute bottom-[20px] left-[20px] lg:bottom-[35px] lg:left-[35px]">
              <Image
                src="/images/bullets/logo-dash-white.svg"
                alt="Dash"
                width={191}
                height={51}
                className="h-[30px] w-auto lg:h-[51px]"
              />
            </div>
            {/* Chip */}
            <div className="absolute left-[20px] top-[50%] -translate-y-1/2 lg:left-[35px]">
              <Chip>{t.mainCard.chip}</Chip>
            </div>
          </div>

          {/* 6. Price Chart - Dark with chart */}
          <div className="relative col-span-1 h-[100px] overflow-hidden rounded-[35px] bg-primary-dark lg:col-start-1 lg:row-start-3 lg:h-auto">
            {/* Chart background */}
            <div className="absolute bottom-0 left-[35px] h-full w-[234px]">
              <Image
                src="/images/bullets/price-chart-bg.svg"
                alt=""
                fill
                className="object-contain object-bottom"
              />
            </div>
            {/* Chart area */}
            <div className="absolute bottom-0 left-0 h-[92px] w-full">
              <Image
                src="/images/bullets/price-chart-area.svg"
                alt=""
                fill
                className="object-contain object-bottom"
              />
            </div>
            {/* Logo icon */}
            <div className="absolute left-[25px] top-[20px] lg:left-[35px] lg:top-[30px]">
              <Image
                src="/images/bullets/logo-dash-icon.svg"
                alt=""
                width={34}
                height={28}
                className="h-[20px] w-auto lg:h-[28px]"
              />
            </div>
            {/* Price */}
            <p className="absolute left-[50px] top-[15px] tracking-[-0.84px] text-white lg:left-[84px] lg:top-[30px]">
              <span className="text-[18px] font-extrabold lg:text-[28px]">{t.priceChart.price}</span>
              <span className="text-[12px] font-medium lg:text-[18px]">{t.priceChart.currency}</span>
            </p>
            {/* Change */}
            <p className="absolute left-[20px] top-[40px] text-[10px] font-medium lg:left-[49px] lg:top-[72px] lg:text-[12px]">
              <span className="text-primary-blue">{t.priceChart.change}</span>
              <span className="text-white/50"> {t.priceChart.period}</span>
            </p>
          </div>

          {/* 7. Passive Income - Dark text only, small */}
          <div className="col-span-1 flex h-[80px] flex-col justify-center overflow-hidden rounded-[35px] bg-primary-dark p-[20px] lg:col-start-4 lg:row-start-2 lg:h-auto lg:p-[25px]">
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[22px]">
              <p className="font-extrabold">{t.passiveIncome.highlight}</p>
              <p>{t.passiveIncome.text}</p>
            </div>
          </div>

          {/* 8. Self-Financing - Blue with logo */}
          <div className="relative col-span-1 flex h-[100px] flex-col justify-end overflow-hidden rounded-[35px] bg-primary-blue p-[20px] lg:col-start-4 lg:row-start-3 lg:h-auto lg:p-[35px]">
            {/* Logo */}
            <div className="absolute right-[20px] top-[20px] lg:right-[35px] lg:top-[35px]">
              <Image
                src="/images/bullets/logo-dash-blue.svg"
                alt=""
                width={135}
                height={110}
                className="h-[60px] w-auto opacity-30 lg:h-[90px]"
              />
            </div>
            <div className="relative text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p className="font-extrabold">{t.selfFinancing.highlight}</p>
              <p>{t.selfFinancing.line1}</p>
              <p>{t.selfFinancing.line2}</p>
            </div>
          </div>

          {/* 9. Active Community - Dark with users icon */}
          <div className="col-span-1 flex h-[100px] flex-col justify-between overflow-hidden rounded-[35px] bg-primary-dark p-[20px] lg:col-start-1 lg:row-start-4 lg:h-auto lg:p-[35px]">
            <Image
              src="/images/bullets/icon-users.svg"
              alt=""
              width={58}
              height={52}
              className="h-[30px] w-auto lg:h-[52px]"
            />
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p>
                <span className="font-extrabold">{t.activeCommunity.highlight}</span> {t.activeCommunity.text}
              </p>
            </div>
          </div>

          {/* 10. Instant & Secure - Blue with coins */}
          <div className="relative col-span-1 flex h-[100px] flex-col justify-end overflow-hidden rounded-[35px] bg-primary-blue p-[20px] lg:col-start-2 lg:row-start-4 lg:h-auto lg:p-[35px]">
            {/* Coins image */}
            <div className="absolute right-[10px] top-[15px] h-[60px] w-[100px] lg:right-[20px] lg:top-[20px] lg:h-[100px] lg:w-[160px]">
              <Image
                src="/images/bullets/coins-stack.png"
                alt=""
                fill
                className="object-contain object-right"
              />
            </div>
            <div className="relative text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p className="font-extrabold">{t.instantSecure.line1}</p>
              <p className="font-extrabold">{t.instantSecure.line2}</p>
              <p>{t.instantSecure.text}</p>
            </div>
          </div>

          {/* 11. Unique Opportunities - Dark text only */}
          <div className="col-span-1 flex h-[80px] flex-col justify-end overflow-hidden rounded-[35px] bg-primary-dark p-[20px] lg:col-start-3 lg:row-start-4 lg:h-auto lg:p-[35px]">
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p className="font-extrabold">{t.uniqueOpportunities.highlight}</p>
              <p>{t.uniqueOpportunities.text}</p>
            </div>
          </div>

          {/* 12. Restricted Issue - Dark with number */}
          <div className="col-span-1 flex h-[80px] flex-col justify-end overflow-hidden rounded-[35px] bg-primary-dark p-[20px] lg:col-start-4 lg:row-start-4 lg:h-auto lg:p-[35px]">
            <div className="text-[14px] font-medium leading-tight tracking-[-0.84px] text-white lg:text-[28px]">
              <p className="font-extrabold">{t.restrictedIssue.line1}</p>
              <p className="font-extrabold">{t.restrictedIssue.line2}</p>
              <p>{t.restrictedIssue.value}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
