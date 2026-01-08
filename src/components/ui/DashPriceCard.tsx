'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card } from './Card'

interface PriceData {
  price: number
  change24h: number
  sparkline: number[]
}

export function DashPriceCard ({ className: _className }: { className?: string }) {
  const [data, setData] = useState<PriceData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPriceAsync () {
      try {
        const res = await fetch(
          'https://api.coingecko.com/api/v3/coins/dash?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true'
        )
        const json = await res.json()

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

    fetchPriceAsync()
  }, [])

  const generateChartPath = (_prices: number[], _width: number, _height: number) => {
    if (_prices.length < 2) return { linePath: '', areaPath: '' }

    const min = Math.min(..._prices)
    const max = Math.max(..._prices)
    const range = max - min || 1

    const points = _prices.map((price, i) => {
      const x = (i / (_prices.length - 1)) * _width
      const y = _height - ((price - min) / range) * _height
      return { x, y }
    })

    const linePath = points
      .map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(' ')

    const areaPath = `${linePath} L${_width},${_height} L0,${_height} Z`

    return { linePath, areaPath }
  }

  const isPositive = (data != null) ? data.change24h >= 0 : true
  const { linePath, areaPath } = ((data?.sparkline) != null)
    ? generateChartPath(data.sparkline, 234, 92)
    : { linePath: '', areaPath: '' }

  return (
    <Card className={_className}>
      <svg
        className='absolute bottom-0 left-0 h-[60px] w-full lg:h-[92px]'
        viewBox='0 0 234 92'
        preserveAspectRatio='none'
      >
        <defs>
          <linearGradient id='chartGradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#4C7EFF' stopOpacity='0.3' />
            <stop offset='100%' stopColor='#4C7EFF' stopOpacity='0' />
          </linearGradient>
        </defs>
        {((data?.sparkline) != null) && (
          <>
            <path d={areaPath} fill='url(#chartGradient)' />
            <path d={linePath} stroke='#4C7EFF' fill='none' strokeWidth='2' />
          </>
        )}
      </svg>

      <div className='absolute left-[20px] top-[16px] lg:left-[35px] lg:top-[30px]'>
        <Image
          src='/images/bullets/logo-dash-icon.svg'
          alt=''
          width={34}
          height={28}
          className='h-[20px] w-auto lg:h-[28px]'
        />
      </div>

      <p className='absolute left-[50px] top-[12px] tracking-[-0.5px] text-white lg:left-[84px] lg:top-[30px] lg:tracking-[-0.84px]'>
        {loading
          ? (
            <span className='inline-block h-[28px] w-[80px] animate-pulse rounded bg-white/10 lg:h-[36px] lg:w-[100px]' />
            )
          : (
            <>
              <span className='text-[18px] font-extrabold lg:text-[28px]'>
                {data?.price.toFixed(2)}
              </span>
              <span className='text-[12px] font-medium lg:text-[18px]'>$</span>
            </>
            )}
      </p>

      <p className='absolute left-[20px] top-[36px] text-[10px] font-medium lg:left-[35px] lg:top-[72px] lg:text-[12px]'>
        {loading
          ? (
            <span className='inline-block h-[14px] w-[100px] animate-pulse rounded bg-white/10' />
            )
          : (
            <>
              <span className={isPositive ? 'text-state-success' : 'text-state-error'}>
                {isPositive ? '+' : ''}{data?.change24h.toFixed(2)}%
              </span>
              <span className='text-white/50'> 24h</span>
            </>
            )}
      </p>
    </Card>
  )
}
