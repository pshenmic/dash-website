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
    <div className='flex gap-[10px]'>
      {[...Array(5)].map((_, i) => (
        <Image
          key={i}
          src='/images/home/reviews/star.svg'
          alt=''
          width={25}
          height={23}
          className='h-[18px] w-[20px] lg:h-[23px] lg:w-[25px]'
        />
      ))}
    </div>
  )
}

export function ReviewCard ({ review }: ReviewCardProps): React.ReactNode {
  return (
    <div className='flex h-[240px] flex-col gap-[25px] overflow-hidden rounded-[24px] bg-primary-turquoise/10 px-[20px] py-[30px] dark:bg-white/5 lg:h-[285px] lg:gap-[35px] lg:rounded-[36px] lg:px-[30px] lg:py-[50px]'>
      <StarRating />

      <div className='flex flex-1 flex-col gap-[10px] lg:gap-[15px]'>
        <h4 className='text-[14px] font-extrabold text-primary-dark dark:text-white lg:text-[18px]'>
          {review.title}
        </h4>
        <p className='line-clamp-3 text-[12px] font-medium leading-[1.4] text-primary-dark dark:text-white/80 lg:text-[13px]'>
          {review.text}
        </p>
        <div className='mt-auto flex items-center gap-[15px]'>
          <div className='h-px w-[35px] bg-primary-dark/50 dark:bg-white/30' />
          <span className='text-[12px] font-medium text-primary-dark/50 dark:text-white/50 lg:text-[13px]'>
            {review.author}, {review.date}
          </span>
        </div>
      </div>
    </div>
  )
}
