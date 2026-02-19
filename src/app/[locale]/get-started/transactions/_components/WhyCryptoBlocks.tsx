import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

export function WhyCryptoBlocks (): React.ReactNode {
  const t = useTranslations('transactions.whyCrypto')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='grid gap-6 lg:grid-cols-2'>
        {(['block1', 'block2'] as const).map((block) => (
          <div key={block} className='relative overflow-hidden rounded-3xl bg-white p-8 shadow-soft lg:p-10'>
            <Heading as='h3' size='lg' weight='extrabold' className='leading-tight tracking-tight text-primary-blue!'>
              {t(`${block}.title`)}
            </Heading>
            <Text size='sm' weight='medium' className='mt-3 leading-relaxed text-primary-dark/60! lg:text-base'>
              {t(`${block}.description`)}
            </Text>
            <span className='absolute bottom-4 right-6 text-6xl font-extrabold tracking-tight text-primary-blue/10 lg:text-7xl'>
              {t(`${block}.number`)}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
