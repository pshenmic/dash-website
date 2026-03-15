import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

function BranchDiagram (): React.ReactNode {
  return (
    <svg viewBox='0 0 693 721' fill='none' className='h-full w-auto' xmlns='http://www.w3.org/2000/svg'>
      {/* Vertical connectors */}
      <line x1='135' y1='240' x2='135' y2='300' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      <line x1='135' y1='395' x2='135' y2='445' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      <line x1='135' y1='565' x2='135' y2='615' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      <line x1='508' y1='85' x2='508' y2='145' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      <line x1='508' y1='240' x2='508' y2='300' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      <line x1='508' y1='395' x2='508' y2='455' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      <line x1='508' y1='580' x2='508' y2='640' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />
      {/* Horizontal connector */}
      <line x1='280' y1='191' x2='335' y2='191' stroke='#4C7EFF' strokeWidth='3' strokeDasharray='8 4' />

      {/* Left column blocks */}
      <rect x='0' y='145' width='270' height='65' rx='22' fill='#4C7EFF' />
      <text x='135' y='185' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Fork DCG Repo</text>

      <rect x='0' y='300' width='310' height='65' rx='22' fill='#4C7EFF' />
      <text x='155' y='340' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Create GitHub Issue</text>

      <rect x='50' y='448' width='170' height='95' rx='22' fill='white' stroke='rgba(12,28,51,0.15)' strokeWidth='2' />
      <text x='135' y='488' textAnchor='middle' fill='#0C1C33' fontSize='16' fontFamily='Manrope' fontWeight='500'>Comment</text>
      <text x='135' y='510' textAnchor='middle' fill='#0C1C33' fontSize='16' fontFamily='Manrope' fontWeight='500'>on Issue</text>

      <rect x='50' y='617' width='170' height='95' rx='22' fill='#4C7EFF' />
      <text x='135' y='657' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Comment</text>
      <text x='135' y='679' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>on Issue</text>

      {/* Right column blocks */}
      <rect x='335' y='0' width='358' height='65' rx='22' fill='#4C7EFF' />
      <text x='514' y='40' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>New Branch ( personal repo )</text>

      <rect x='335' y='145' width='358' height='65' rx='22' fill='#4C7EFF' />
      <text x='514' y='185' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Create PR ( send-to-origin )</text>

      <rect x='335' y='300' width='358' height='65' rx='22' fill='#4C7EFF' />
      <text x='514' y='340' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Review - Approve - Reject PR</text>

      <rect x='335' y='455' width='358' height='95' rx='22' fill='#4C7EFF' />
      <text x='514' y='495' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>QA Testing - Release</text>
      <text x='514' y='517' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Planning - Merge Code</text>

      <rect x='335' y='647' width='358' height='65' rx='22' fill='#4C7EFF' />
      <text x='514' y='687' textAnchor='middle' fill='white' fontSize='16' fontFamily='Manrope' fontWeight='500'>Release Code</text>
    </svg>
  )
}

export function ProtocolDevelopment (): React.ReactNode {
  const t = useTranslations('contributingPage.protocolDevelopment')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          {/* Left — Branch Diagram */}
          <div className='hidden h-[780px] flex-1 items-center justify-center overflow-hidden p-10 lg:flex'>
            <div className='h-full w-auto origin-center rotate-[30deg] scale-75'>
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
              <button className='flex h-16 items-center justify-center rounded-[20px] bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
                {t('primaryButton')}
              </button>
              <button className='flex h-16 items-center justify-center rounded-[20px] bg-primary-blue/15 px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
                {t('secondaryButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
