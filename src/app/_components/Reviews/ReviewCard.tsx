import Image from 'next/image'

export interface ReviewData {
  title: string
  text: string
  author: string
  date: string
}

interface ReviewCardProps {
  review: ReviewData
}

function StarRating (): React.ReactNode {
  return (
    <div className='flex gap-2.5'>
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src='/images/home/reviews/star.svg'
          alt=''
          width={25}
          height={23}
          className='h-5 w-5 lg:h-6 lg:w-6'
        />
      ))}
    </div>
  )
}

export function ReviewCard ({ review }: ReviewCardProps): React.ReactNode {
  return (
    <div className='flex h-60 flex-col gap-6 overflow-hidden rounded-3xl bg-primary-turquoise/10 px-5 py-8 dark:bg-white/5 lg:h-72 lg:gap-9 lg:rounded-4xl lg:px-8 lg:py-12'>
      <StarRating />

      <div className='flex flex-1 flex-col gap-2.5 lg:gap-4'>
        <h4 className='text-sm font-extrabold text-primary-dark dark:text-white lg:text-lg'>
          {review.title}
        </h4>
        <p className='line-clamp-3 text-xs font-medium leading-snug text-primary-dark dark:text-white/80 lg:text-sm'>
          {review.text}
        </p>
        <div className='mt-auto flex items-center gap-4'>
          <div className='h-px w-9 bg-primary-dark/50 dark:bg-white/30' />
          <span className='text-xs font-medium text-primary-dark/50 dark:text-white/50 lg:text-sm'>
            {review.author}, {review.date}
          </span>
        </div>
      </div>
    </div>
  )
}
