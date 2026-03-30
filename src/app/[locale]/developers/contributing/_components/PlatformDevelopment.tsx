import Image from 'next/image'
import { highlight } from 'sugar-high'
import { useTranslations } from 'next-intl'
import { Heading, Text, DashLogo } from 'dash-ui-kit/react'

const CODE_SNIPPET = `const DapiClient = require('dapi-client');

const dapi = new DapiClient();
const dapId = '9ae7bb6e437218be36b04843f63a135491c8';

// fetch user and DashPay user profile
const bob = dapi.getUserByName('bob');
const bobProfile = dapi.fetchDapObjects(dapId, 'user', {
  where: { data: { userId: bob.id } }
});

console.log(bobProfile.status);

// >> "Super excited to be using DashPay!!"`

function CodeSnippet (): React.ReactNode {
  return (
    <div className='flex h-full flex-col overflow-hidden rounded-3xl bg-primary-dark shadow-[0px_0px_75px_0px_rgba(0,0,0,0.1)]'>
      {/* Header: Dash D logo + copy icon */}
      <div className='flex items-center justify-between px-7 py-4'>
        <DashLogo color='white' size={22} />
        <Image
          src='/images/home/developers/icon-copy.svg'
          alt=''
          width={20}
          height={20}
        />
      </div>

      {/* Code content */}
      <div className='flex-1 overflow-auto bg-white/15 px-7 py-4'>
        <pre className='font-["Space_Grotesk"] text-sm leading-relaxed text-white'>
          <code dangerouslySetInnerHTML={{ __html: highlight(CODE_SNIPPET) }} />
        </pre>
      </div>
    </div>
  )
}

export function PlatformDevelopment (): React.ReactNode {
  const t = useTranslations('contributingPage.platformDevelopment')

  return (
    <div data-testid='platform-development' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='overflow-hidden rounded-3xl border border-primary-dark/15 bg-white shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl'>
        <div className='flex flex-col lg:flex-row lg:items-center'>
          {/* Left — Text Content */}
          <div className='flex flex-col gap-9 p-6 lg:max-w-[530px] lg:py-16 lg:pl-24'>
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
              <button className='flex h-16 items-center justify-center whitespace-nowrap rounded-2xl bg-primary-blue px-9 text-lg font-semibold text-white transition-opacity hover:opacity-90'>
                {t('primaryButton')}
              </button>
              <button className='flex h-16 items-center justify-center whitespace-nowrap rounded-2xl bg-primary-blue/15 px-9 text-lg font-semibold text-primary-blue transition-opacity hover:opacity-90'>
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
