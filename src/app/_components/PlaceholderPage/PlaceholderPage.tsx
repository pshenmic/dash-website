import { Heading, Text } from 'dash-ui-kit/react'

interface PlaceholderPageProps {
  title: string
}

export function PlaceholderPage ({ title }: PlaceholderPageProps): React.ReactNode {
  return (
    <main className='min-h-screen bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 py-32 lg:px-6 lg:py-40'>
        <div className='flex flex-col items-center gap-6 text-center'>
          <Heading as='h1' size='3xl' weight='bold' className='text-4xl text-primary-dark dark:text-white lg:text-6xl'>
            {title}
          </Heading>
          <Text size='lg' weight='medium' className='text-primary-dark/70 dark:text-white/70 lg:text-xl'>
            Coming Soon
          </Text>
        </div>
      </div>
    </main>
  )
}
