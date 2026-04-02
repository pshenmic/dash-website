import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'
import { BranchDiagram } from './BranchDiagram'

export function ProtocolDevelopment (): React.ReactNode {
  const t = useTranslations('contributingPage.protocolDevelopment')

  return (
    <div data-testid='protocol-development' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          {/* Left — Branch Diagram */}
          <div className='hidden h-[780px] flex-1 items-center justify-center overflow-hidden p-10 lg:flex'>
            <div className='h-full w-auto origin-center rotate-30 scale-75'>
              <BranchDiagram />
            </div>
          </div>

          {/* Right — Text Content */}
          <div className='flex flex-col gap-9 p-6 lg:max-w-[500px] lg:py-16 lg:pr-16'>
            <div className='flex flex-col gap-4'>
              <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! dark:text-white! lg:text-4xl lg:leading-10'>
                {t('title')}
              </Heading>
              <Text weight='medium' className='whitespace-pre-line text-base leading-normal text-primary-dark! dark:text-white! lg:text-lg'>
                {t('description')}
              </Text>

              {/* Feature links */}
              <ul className='flex flex-col gap-1'>
                <li className='list-inside list-disc text-lg font-extrabold text-primary-blue'>
                  {t('links.chainLocks')}
                </li>
                <li className='list-inside list-disc text-lg font-extrabold text-primary-blue'>
                  {t('links.llmq')}
                </li>
                <li className='list-inside list-disc text-lg font-extrabold text-primary-blue'>
                  {t('links.evolution')}
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className='flex flex-col gap-4'>
              <button className='flex h-16 items-center justify-center rounded-2xl bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
                {t('primaryButton')}
              </button>
              <button className='flex h-16 items-center justify-center rounded-2xl bg-primary-blue/15 px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
                {t('secondaryButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
