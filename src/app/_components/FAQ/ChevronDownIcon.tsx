interface ChevronDownIconProps {
  className?: string
}

export function ChevronDownIcon ({
  className
}: ChevronDownIconProps): React.ReactNode {
  return (
    <svg
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M2 5L7.5 10.5L13 5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
