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
      className={`relative h-100 w-full overflow-hidden rounded-4xl lg:h-128 lg:w-100 lg:rounded-5xl ${
        isVideo ? 'bg-primary-blue' : 'bg-white'
      }`}
    >
      {/* Dash Logo */}
      <div className='absolute top-6 left-6 z-10 lg:top-9 lg:left-8'>
        <Image
          src='/images/home/developers/logo-dash-small.svg'
          alt='Dash'
          width={37}
          height={30}
          className='h-6 w-auto lg:h-8'
        />
      </div>

      {/* Tags */}
      <div className='absolute top-6 right-6 z-10 flex gap-2.5 lg:top-8 lg:right-8'>
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`rounded-full px-6 py-2.5 text-xs font-medium lg:px-9 lg:text-xs ${
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
      <div className='absolute top-20 left-5 right-5 h-32 overflow-hidden rounded-2xl lg:top-26 lg:left-8 lg:right-8 lg:h-40'>
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
              className='h-8 w-auto lg:h-10'
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className='absolute bottom-0 left-0 right-0 p-5 lg:p-8'>
        {title && (
          <h3
            className={`mb-2.5 text-3xl leading-tight font-extrabold tracking-tight lg:mb-4 lg:text-4xl lg:leading-10 ${
              isVideo ? 'text-white' : 'text-primary-dark'
            }`}
          >
            {title}
          </h3>
        )}
        <p
          className={`text-sm leading-normal font-medium lg:text-lg ${
            isVideo ? 'text-white' : 'text-primary-dark'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  )
}
