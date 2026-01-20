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
      className={`relative z-10 overflow-hidden rounded-3xl border border-white/55 bg-linear-to-b from-[#112645] to-primary-dark p-5 lg:h-76 lg:rounded-4xl lg:p-9 ${
        !isActive ? 'opacity-60' : ''
      }`}
    >
      {/* Title */}
      <h4 className='mb-4 text-2xl leading-tight font-extrabold text-primary-blue lg:mb-5 lg:text-3xl lg:leading-9'>
        {title}
      </h4>

      {/* Description */}
      <p className='max-w-2xl text-sm leading-normal font-medium text-white lg:text-lg'>
        {description}
      </p>

      {/* Number */}
      <p className='absolute right-4 bottom-2.5 text-xl font-extrabold text-primary-blue lg:right-9 lg:bottom-6 lg:text-3xl lg:leading-9'>
        {number}
      </p>
    </div>
  )
}
