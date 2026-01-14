interface NodeCardProps {
  title: string
  description: React.ReactNode
  number: string
  isActive?: boolean
}

export function NodeCard ({
  title,
  description,
  number,
  isActive = true
}: NodeCardProps): React.ReactNode {
  return (
    <div
      className={`relative z-10 overflow-hidden rounded-[25px] border border-white/55 bg-gradient-to-b from-[#112645] to-primary-dark p-[20px] lg:h-[305px] lg:rounded-[35px] lg:p-[35px] ${
        !isActive ? 'opacity-60' : ''
      }`}
    >
      {/* Title */}
      <h4 className='mb-[15px] text-[22px] leading-[1.1] font-extrabold text-primary-blue lg:mb-[20px] lg:text-[32px] lg:leading-[34px]'>
        {title}
      </h4>

      {/* Description */}
      <p className='max-w-[665px] text-[14px] leading-[1.5] font-medium text-white lg:text-[18px]'>
        {description}
      </p>

      {/* Number */}
      <p className='absolute right-[15px] bottom-[10px] text-[20px] font-extrabold text-primary-blue lg:right-[35px] lg:bottom-[25px] lg:text-[32px] lg:leading-[34px]'>
        {number}
      </p>
    </div>
  )
}
