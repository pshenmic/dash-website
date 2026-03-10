export default function Loading (): React.ReactNode {
  return (
    <main className='animate-fade-in-up min-h-screen bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 pt-32 lg:px-6 lg:pt-40'>
        {/* Hero skeleton */}
        <div className='flex flex-col items-center gap-6 text-center'>
          <div className='h-5 w-24 animate-pulse rounded-full bg-primary-dark/10 dark:bg-white/10' />
          <div className='h-10 w-80 animate-pulse rounded-xl bg-primary-dark/10 dark:bg-white/10 lg:h-14 lg:w-120' />
          <div className='h-5 w-64 animate-pulse rounded-lg bg-primary-dark/10 dark:bg-white/10 lg:w-96' />
          <div className='mt-4 flex gap-4'>
            <div className='h-12 w-36 animate-pulse rounded-xl bg-primary-dark/10 dark:bg-white/10' />
            <div className='h-12 w-36 animate-pulse rounded-xl bg-primary-dark/10 dark:bg-white/10' />
          </div>
        </div>

        {/* Content skeleton */}
        <div className='mt-16 grid gap-6 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-8'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='h-64 animate-pulse rounded-3xl bg-primary-dark/5 dark:bg-white/5' />
          ))}
        </div>
      </div>
    </main>
  )
}
