import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { cn } from '@/lib/cn'

export function WhyCryptoBlocks (): React.ReactNode {
  const t = useTranslations('transactions.whyCrypto')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
        {/* Left — heading */}
        <div className='flex flex-col gap-1 lg:pt-8.75'>
          <span className='text-lg font-extrabold text-primary-blue'>{t('subtitle')}</span>
          <Heading as='h2' weight='extrabold' className='text-[32px] leading-8.5 dark:text-white'>
            {t('title')}
          </Heading>
        </div>

        {/* Right — cards */}
        <div className='flex flex-1 flex-col gap-8.75'>
          {(['block1', 'block2'] as const).map((block, i) => (
            <div
              key={block}
              className={cn(
                'flex flex-col rounded-[35px] border border-primary-dark/15 bg-white p-8.75 shadow-soft',
                i === 1 && 'opacity-60'
              )}
            >
              <Heading as='h3' weight='extrabold' className='text-[32px] leading-8.5 text-primary-blue!'>
                {t(`${block}.title`)}
              </Heading>
              <Text weight='medium' className='mt-9 pl-8.75 text-lg leading-normal text-primary-dark!'>
                {t.rich(`${block}.description`, {
                  highlight: (chunks) => <span className='text-primary-blue'>{chunks}</span>
                })}
              </Text>
              <span className='mt-3.75 self-end text-[32px] font-extrabold leading-8.5 text-primary-blue'>
                {t(`${block}.number`)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
