'use client'

import { ArrowDown } from 'lucide-react'

export function JumpToLatestButton ({ label }: { label: string }): React.ReactNode {
  const handleClick = (): void => {
    document.getElementById('roadmap-timeline')?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('roadmap-jump-to-latest'))
    }, 500)
  }

  return (
    <button
      onClick={handleClick}
      className='flex items-center gap-2 rounded-full bg-white/15 p-1.5 backdrop-blur-sm transition-opacity hover:opacity-90 sm:gap-4 sm:px-3 sm:py-2.5'
    >
      <span className='hidden pl-6 text-lg font-semibold text-white sm:block'>{label}</span>
      <div className='flex size-9 items-center justify-center rounded-full bg-primary-white sm:size-11'>
        <ArrowDown className='size-4 text-primary-blue' />
      </div>
    </button>
  )
}
