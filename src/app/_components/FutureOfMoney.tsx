import Image from 'next/image'
import { Chip } from '@/components/ui/Chip'
import { Button } from '@/components/ui/Button'

interface FutureOfMoneyProps {
  chip: string
  title: string
  description: string
  transactionSpeed: string
  transactionSpeedValue: string
  costPerTransaction: string
  costPerTransactionValue: string
  connectTestnet: string
  learnMore: string
}

export function FutureOfMoney({
  chip,
  title,
  description,
  transactionSpeed,
  transactionSpeedValue,
  costPerTransaction,
  costPerTransactionValue,
  connectTestnet,
  learnMore,
}: FutureOfMoneyProps) {
  return (
    <section className="relative bg-primary-white py-16 dark:bg-primary-dark lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-between">
          {/* Left content */}
          <div className="flex max-w-[469px] flex-col gap-[35px]">
            {/* Text block */}
            <div className="flex flex-col gap-[15px]">
              <Chip variant="outline">{chip}</Chip>
              <h2 className="text-[32px] font-extrabold leading-[40px] tracking-[-0.03em] text-primary-dark dark:text-primary-white lg:text-[38px]">
                {title}
              </h2>
              <p className="max-w-[395px] text-lg font-medium text-primary-dark dark:text-primary-white/80">
                {description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-[15px]">
              <div className="flex h-[111px] flex-1 flex-col justify-center rounded-[36px] border border-primary-blue px-[29px] dark:border-0 dark:bg-primary-blue/15 lg:h-[143px]">
                <span className="text-[13px] font-medium text-primary-blue">
                  {transactionSpeed}
                </span>
                <span className="text-[38px] font-extrabold leading-[40px] tracking-[-0.03em] text-primary-blue">
                  {transactionSpeedValue}
                </span>
              </div>
              <div className="flex h-[111px] flex-1 flex-col justify-center rounded-[36px] border border-primary-blue px-[29px] dark:border-0 dark:bg-primary-blue/15 lg:h-[143px]">
                <span className="text-[13px] font-medium text-primary-blue">
                  {costPerTransaction}
                </span>
                <span className="text-[38px] font-extrabold leading-[40px] tracking-[-0.03em] text-primary-blue">
                  {costPerTransactionValue}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex w-full flex-col gap-[10px] lg:w-auto lg:flex-row lg:gap-[15px]">
              <Button variant="primary" className="h-[50px] w-full lg:h-[65px] lg:w-auto">{connectTestnet}</Button>
              <Button variant="outline" className="h-[50px] w-full lg:h-[65px] lg:w-auto">{learnMore}</Button>
            </div>
          </div>

          {/* Right content - 3D Coin (hidden on mobile) */}
          <div className="relative hidden w-full max-w-[596px] lg:block lg:h-[551px]">
            <Image
              src="/images/coin-3d-large.png"
              alt="Dash 3D Coin"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
