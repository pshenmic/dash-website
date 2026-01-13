import Image from 'next/image'

interface Tag {
  label: string
  variant: 'outline' | 'filled'
}

interface NewsCardProps {
  variant: 'video' | 'post'
  image: string
  title?: string
  description: string
  tags: Tag[]
}

export function NewsCard ({
  variant,
  image,
  title,
  description,
  tags
}: NewsCardProps): React.ReactNode {
  const isVideo = variant === 'video'

  return (
    <div
      className={`relative h-[400px] w-full overflow-hidden rounded-[30px] lg:h-[505px] lg:w-[400px] lg:rounded-[45px] ${
        isVideo ? 'bg-primary-blue' : 'bg-white'
      }`}
    >
      {/* Dash Logo */}
      <div className='absolute top-[25px] left-[25px] z-10 lg:top-[35px] lg:left-[30px]'>
        <Image
          src='/images/home/developers/logo-dash-small.svg'
          alt='Dash'
          width={37}
          height={30}
          className='h-[25px] w-auto lg:h-[30px]'
        />
      </div>

      {/* Tags */}
      <div className='absolute top-[25px] right-[25px] z-10 flex gap-[10px] lg:top-[32px] lg:right-[30px]'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-[35px] px-[25px] py-[10px] text-[11px] font-medium lg:px-[35px] lg:text-[12px] ${
              tag.variant === 'filled'
                ? 'bg-primary-blue text-white'
                : isVideo
                  ? 'border border-white text-white'
                  : 'border border-primary-blue text-primary-blue'
            }`}
          >
            {tag.label}
          </span>
        ))}
      </div>

      {/* Image Preview */}
      <div className='absolute top-[80px] left-[20px] right-[20px] h-[130px] overflow-hidden rounded-[15px] lg:top-[104px] lg:left-[30px] lg:right-[30px] lg:h-[165px]'>
        <Image
          src={image}
          alt=''
          fill
          className='object-cover'
        />
        {isVideo && (
          <div className='absolute inset-0 flex items-center justify-center bg-white/75'>
            <Image
              src='/images/home/news/play-button.svg'
              alt='Play'
              width={38}
              height={41}
              className='h-[32px] w-auto lg:h-[41px]'
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 p-[20px] lg:p-[30px]'>
        {title && (
          <h3
            className={`mb-[10px] text-[28px] leading-[1.05] font-extrabold tracking-[-0.03em] lg:mb-[15px] lg:text-[38px] lg:leading-[40px] ${
              isVideo ? 'text-white' : 'text-primary-dark'
            }`}
          >
            {title}
          </h3>
        )}
        <p
          className={`text-[14px] leading-[1.5] font-medium lg:text-[18px] ${
            isVideo ? 'text-white' : 'text-primary-dark'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
