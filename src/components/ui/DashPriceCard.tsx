'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card } from './Card'

interface PriceData {
  price: number
  change24h: number
  sparkline: number[]
}

export function DashPriceCard ({
  className
}: {
  className?: string
}): React.ReactNode {
  const [data, setData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPriceAsync (): Promise<void> {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/dash?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true'
        )

        if (!res.ok) {
          throw new Error(`API error: ${res.status}`)
        }

        const json = await res.json()

        if (
          json?.market_data?.current_price?.usd == null ||
          json?.market_data?.price_change_percentage_24h == null ||
          json?.market_data?.sparkline_7d?.price == null
        ) {
          throw new Error('Invalid API response structure')
        }

        setData({
          price: json.market_data.current_price.usd,
          change24h: json.market_data.price_change_percentage_24h,
          sparkline: json.market_data.sparkline_7d.price.slice(-24)
        })
      } catch (error) {
        console.error('Failed to fetch Dash price:', error)
      } finally {
        setLoading(false)
      }
    }

    void fetchPriceAsync()
  }, [])

  const generateChartPath = (
    prices: number[],
    width: number,
    height: number
  ): { linePath: string, areaPath: string } => {
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

  const isPositive = data != null ? data.change24h >= 0 : true
  const { linePath, areaPath } =
    data?.sparkline != null
      ? generateChartPath(data.sparkline, 234, 92)
      : { linePath: '', areaPath: '' }

  return (
    <Card className={className}>
      <svg
        className='absolute bottom-0 left-0 h-15 w-full lg:h-23'
        viewBox='0 0 234 92'
        preserveAspectRatio='none'
      >
        <defs>
          <linearGradient id='chartGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='var(--color-primary-blue)' stopOpacity='0.3' />
            <stop offset='100%' stopColor='var(--color-primary-blue)' stopOpacity='0' />
          </linearGradient>
        </defs>
        {data?.sparkline != null && (
          <>
            <path d={areaPath} fill='url(#chartGradient)' />
            <path d={linePath} stroke='var(--color-primary-blue)' fill='none' strokeWidth='2' />
          </>
        )}
      </svg>

      <div className='absolute top-4 left-5 lg:top-8 lg:left-9'>
        <Image
          src='/images/bullets/logo-dash-icon.svg'
          alt=''
          width={34}
          height={28}
          className='h-5 w-auto lg:h-7'
        />
      </div>

      <p className='absolute top-3 left-12 tracking-tight text-white lg:top-8 lg:left-21 lg:tracking-tighter'>
        {loading
          ? (
            <span className='inline-block h-7 w-20 animate-pulse rounded bg-white/10 lg:h-9 lg:w-25' />
            )
          : (
            <>
              <span className='text-lg font-extrabold lg:text-3xl'>
                {data?.price.toFixed(2)}
              </span>
              <span className='text-xs font-medium lg:text-lg'>$</span>
            </>
            )}
      </p>

      <p className='absolute top-9 left-5 text-xs font-medium lg:top-18 lg:left-9 lg:text-xs'>
        {loading
          ? (
            <span className='inline-block h-3.5 w-25 animate-pulse rounded bg-white/10' />
            )
          : (
            <>
              <span
                className={isPositive ? 'text-state-success' : 'text-state-error'}
              >
                {isPositive ? '+' : ''}
                {data?.change24h.toFixed(2)}%
              </span>
              <span className='text-white/50'> 24h</span>
            </>
            )}
      </p>
    </Card>
  )
}
