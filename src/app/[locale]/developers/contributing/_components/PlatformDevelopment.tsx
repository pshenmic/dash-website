import { useTranslations } from 'next-intl'
import { Heading, Text } from 'dash-ui-kit/react'

function CodeSnippet (): React.ReactNode {
  return (
    <div className='relative overflow-hidden rounded-3xl bg-primary-dark shadow-[0px_0px_75px_0px_rgba(0,0,0,0.1)]'>
      {/* Window dots */}
      <div className='flex gap-2 px-7 pt-4'>
        <div className='size-3 rounded-full bg-[#FF5F57]' />
        <div className='size-3 rounded-full bg-[#FFBD2E]' />
        <div className='size-3 rounded-full bg-[#28C840]' />
      </div>

      {/* Code line highlight */}
      <div className='mt-4 h-[calc(100%-40px)] bg-white/15' />

      {/* Code content */}
      <pre className='absolute inset-x-0 top-14 overflow-hidden px-7 pb-7 font-["Space_Grotesk"] text-sm leading-relaxed text-white'>
        <code>
          <span className='text-syntax-keyword'>const</span>{' DapiClient = '}
          <span className='text-syntax-keyword'>require</span>
          <span className='text-syntax-punctuation'>{'(\'dapi-client\')'}</span>
          {';\n\n'}
          <span className='text-syntax-keyword'>const</span>{' dapi = new '}
          <span className='text-syntax-string'>DapiClient()</span>
          {';\n'}
          <span className='text-syntax-keyword'>const</span>{' dapId = \'9ae7bb6e437218be36b04843f63a135491c8\';\n\n'}
          <span className='text-white/35'>{'//fetch user and DashPay user profile'}</span>
          {'\n'}
          <span className='text-syntax-keyword'>const</span>{' bob = dapi.'}
          <span className='text-syntax-string'>getUserByName</span>
          {'(\'bob\');\n'}
          <span className='text-syntax-keyword'>const</span>{' bobProfile = dapi.'}
          <span className='text-syntax-string'>fetchDapObjects</span>
          {'(dapId, \'user\', {\n'}
          <span className='text-syntax-keyword'>where</span>
          {': {data.'}
          <span className='text-syntax-string'>userId</span>
          {': bob.id}});\n\n'}
          <span className='text-syntax-keyword'>console</span>
          {'.'}
          <span className='text-syntax-string'>log</span>
          {'(bobProfile.status);\n\n'}
          <span className='text-[#d1ce72]'>{'>> "Super excited to be using DashPay!!"'}</span>
        </code>
      </pre>
    </div>
  )
}

export function PlatformDevelopment (): React.ReactNode {
  const t = useTranslations('contributingPage.platformDevelopment')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          {/* Left — Text Content */}
          <div className='flex flex-col gap-9 p-6 lg:max-w-[430px] lg:py-16 lg:pl-24'>
            <div className='flex flex-col gap-4'>
              <Heading as='h2' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! dark:text-white! lg:text-4xl lg:leading-10'>
                {t('title')}
              </Heading>
              <Text weight='medium' className='text-base leading-normal text-primary-dark! dark:text-white! lg:text-lg'>
                {t('description')}
              </Text>
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

          {/* Right — Code Snippet */}
          <div className='flex flex-1 items-center justify-center p-6 lg:p-20'>
            <div className='h-[375px] w-full max-w-[539px]'>
              <CodeSnippet />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
