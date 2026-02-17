'use client'

import { useCallback, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { cn } from '@/lib/cn'

type Currency = 'usd' | 'eur'
type Period = '1' | '7' | '30' | '90' | '365' | 'max'

interface PriceData {
  price: number
  change24h: number
  sparkline: number[]
}

const periods: Array<{ key: Period, label: string }> = [
  { key: '1', label: '1D' },
  { key: '7', label: '1W' },
  { key: '30', label: '1M' },
  { key: '90', label: '3M' },
  { key: '365', label: '1Y' },
  { key: 'max', label: 'All' }
]

function generateChartPath (
  prices: number[],
  width: number,
  height: number
): { linePath: string, areaPath: string } {
  if (prices.length < 2) return { linePath: '', areaPath: '' }

  const min = Math.min(...prices)
  const max = Math.max(...prices)
  const range = max - min !== 0 ? max - min : 1

  const points = prices.map((price, i) => {
    const x = (i / (prices.length - 1)) * width
    const y = height - ((price - min) / range) * height
    return { x, y }
  })

  const linePath = points
    .map(
      (p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`
    )
    .join(' ')

  const areaPath = `${linePath} L${width},${height} L0,${height} Z`

  return { linePath, areaPath }
}

export function DashPriceChart (): React.ReactNode {
  const t = useTranslations('buyOnline.chart')
  const [activePair, setActivePair] = useState<Currency>('usd')
  const [activePeriod, setActivePeriod] = useState<Period>('7')
  const [data, setData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)

  const fetchData = useCallback(async (currency: Currency, days: Period) => {
    setLoading(true)
    try {
      const [chartRes, priceRes] = await Promise.all([
        fetch(
          `https://api.coingecko.com/api/v3/coins/dash/market_chart?vs_currency=${currency}&days=${days}`
        ),
        fetch(
          `https://api.coingecko.com/api/v3/coins/dash?localization=false&tickers=false&community_data=false&developer_data=false`
        )
      ])

      if (!chartRes.ok || !priceRes.ok) {
        throw new Error('API error')
      }

      const chartJson = await chartRes.json()
      const priceJson = await priceRes.json()

      const prices: number[] = chartJson.prices.map((p: [number, number]) => p[1])
      const currentPrice = currency === 'usd'
        ? priceJson.market_data.current_price.usd
        : priceJson.market_data.current_price.eur
      const change24h = priceJson.market_data.price_change_percentage_24h

      setData({
        price: currentPrice,
        change24h,
        sparkline: prices
      })
    } catch (error) {
      console.error('Failed to fetch Dash price:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void fetchData(activePair, activePeriod)
  }, [activePair, activePeriod, fetchData])

  const isPositive = data != null ? data.change24h >= 0 : true
  const currencySymbol = activePair === 'usd' ? 'USD' : 'EUR'

  const CHART_WIDTH = 800
  const CHART_HEIGHT = 200
  const { linePath, areaPath } =
    data?.sparkline != null
      ? generateChartPath(data.sparkline, CHART_WIDTH, CHART_HEIGHT)
      : { linePath: '', areaPath: '' }

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl border border-primary-dark/10 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet dark:shadow-none lg:rounded-4xl'>
        {/* Top bar: pair tabs + period buttons */}
        <div className='flex flex-col gap-3 border-b border-primary-dark/10 px-5 py-4 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between lg:px-8 lg:py-5'>
          {/* Pair tabs */}
          <div className='flex gap-1.5 rounded-xl bg-primary-dark/5 p-1 dark:bg-white/5'>
            {(['usd', 'eur'] as const).map((pair) => (
              <button
                key={pair}
                onClick={() => setActivePair(pair)}
                className={cn(
                  'rounded-lg px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors lg:text-sm',
                  activePair === pair
                    ? 'bg-primary-blue text-white shadow-sm'
                    : 'text-primary-dark/50 hover:text-primary-dark dark:text-white/50 dark:hover:text-white'
                )}
              >
                {pair === 'usd' ? t('dashUsd') : t('dashEur')}
              </button>
            ))}
          </div>

          {/* Period buttons */}
          <div className='flex gap-1 rounded-xl bg-primary-dark/5 p-1 dark:bg-white/5'>
            {periods.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActivePeriod(key)}
                className={cn(
                  'rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors lg:text-sm',
                  activePeriod === key
                    ? 'bg-primary-blue text-white shadow-sm'
                    : 'text-primary-dark/50 hover:text-primary-dark dark:text-white/50 dark:hover:text-white'
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Price info */}
        <div className='px-5 pt-5 lg:px-8 lg:pt-7'>
          {/* Logo + pair name + status */}
          <div className='flex items-center gap-3'>
            <div className='flex size-10 items-center justify-center rounded-full bg-primary-blue lg:size-12'>
              <Image
                src='/images/buy-online/dash-icon.svg'
                alt='Dash'
                width={24}
                height={20}
                className='h-4 w-auto lg:h-5'
              />
            </div>
            <span className='text-sm font-medium text-primary-dark/70 dark:text-white/70 lg:text-base'>
              {activePair === 'usd' ? t('pairLabel') : t('pairLabelEur')}
            </span>
            <span className='size-2 rounded-full bg-state-success' />
          </div>

          {/* Price + change */}
          <div className='mt-3 flex items-baseline gap-3 lg:mt-4'>
            {loading
              ? (
                <span className='inline-block h-9 w-36 animate-pulse rounded-lg bg-primary-dark/10 dark:bg-white/10 lg:h-12 lg:w-48' />
                )
              : (
                <>
                  <span className='text-3xl font-extrabold tracking-tight text-primary-dark dark:text-white lg:text-5xl'>
                    {data?.price.toFixed(2)}
                  </span>
                  <span className='text-base font-medium text-primary-dark/50 dark:text-white/50 lg:text-lg'>
                    {currencySymbol}
                  </span>
                </>
                )}

            {loading
              ? (
                <span className='inline-block h-6 w-16 animate-pulse rounded-lg bg-primary-dark/10 dark:bg-white/10' />
                )
              : (
                <span
                  className={cn(
                    'rounded-lg px-2.5 py-1 text-xs font-semibold lg:text-sm',
                    isPositive
                      ? 'bg-state-success/15 text-state-success'
                      : 'bg-state-error/15 text-state-error'
                  )}
                >
                  {isPositive ? '+' : ''}{data?.change24h.toFixed(2)}%
                </span>
                )}
          </div>
        </div>

        {/* Chart */}
        <div className='mt-4 px-0 lg:mt-6'>
          {loading
            ? (
              <div className='h-32 animate-pulse bg-primary-dark/5 dark:bg-white/5 lg:h-48' />
              )
            : (
              <svg
                className='h-32 w-full lg:h-48'
                viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
                preserveAspectRatio='none'
              >
                <defs>
                  <linearGradient id='dashChartGradient' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='var(--color-primary-blue)' stopOpacity='0.3' />
                    <stop offset='100%' stopColor='var(--color-primary-blue)' stopOpacity='0' />
                  </linearGradient>
                </defs>
                {data?.sparkline != null && (
                  <>
                    <path d={areaPath} fill='url(#dashChartGradient)' />
                    <path d={linePath} stroke='var(--color-primary-blue)' fill='none' strokeWidth='2' />
                  </>
                )}
              </svg>
              )}
        </div>
      </div>
    </div>
  )
}
