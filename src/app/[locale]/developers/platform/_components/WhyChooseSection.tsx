import { useTranslations } from 'next-intl'
import { Copy } from 'lucide-react'
import { DashLogo, Heading, Text } from 'dash-ui-kit/react'

function CodeBlock ({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div className='relative w-full overflow-hidden rounded-[35px] bg-primary-dark shadow-card'>
      {/* Header bar */}
      <div className='flex items-center justify-between px-8 pt-4'>
        <DashLogo className='h-4 w-auto text-white/50' />
        <button className='text-white/50 transition-colors hover:text-white'>
          <Copy className='size-5' />
        </button>
      </div>

      {/* Code content */}
      <div className='relative px-8 pb-6 pt-4'>
        <div className='bg-white/15 -mx-8 px-8 py-4'>
          <pre className='overflow-x-auto font-mono text-sm leading-relaxed text-white'>
            {children}
          </pre>
        </div>
      </div>
    </div>
  )
}

function StorageCodeExample (): React.ReactNode {
  return (
    <CodeBlock>
      <code>
        <span>{' { \n'}</span>
        <span>{'        '}<span className='text-syntax-keyword'>{'"note"'}</span>{': { \n'}</span>
        <span>{'             "properties":  { \n'}</span>
        <span>{'                 "message": {\n'}</span>
        <span>{'                      "type": '}<span className='text-syntax-string'>{'"string" '}</span>{'\n'}</span>
        <span>{'                  } \n'}</span>
        <span>{'               }, \n'}</span>
        <span><span className='text-syntax-keyword'>{'"additionalProperties"'}</span>{': '}<span className='text-syntax-string'>{'false '}</span>{'\n'}</span>
        <span>{'         } \n'}</span>
        <span>{'     }'}</span>
      </code>
    </CodeBlock>
  )
}

function IdentitiesCodeExample (): React.ReactNode {
  return (
    <CodeBlock>
      <code>
        <span><span className='text-syntax-keyword'>const</span>{' Dash = require('}<span className='text-syntax-string'>{"'dash'"}</span>{'); \n'}</span>
        <span><span className='text-syntax-keyword'>const</span>{' client = '}<span className='text-syntax-keyword'>new</span>{' Dash.Client(clientOpts); \n\n'}</span>
        <span><span className='text-syntax-keyword'>const</span>{' registerName = '}<span className='text-syntax-keyword'>{'async ()'}</span>{' => { \n'}</span>
        <span>{'     '}<span className='text-syntax-keyword'>const</span>{' platform = client'}<span className='text-syntax-string'>.platform</span>{'; \n'}</span>
        <span>{'     '}<span className='text-syntax-keyword'>const</span>{' identity = '}<span className='text-syntax-keyword'>await</span>{' platform.identities'}<span className='text-syntax-string'>.get</span>{"('an identity ID'); \n"}</span>
        <span>{'     '}<span className='text-syntax-keyword'>const</span>{' nameRegistration = '}<span className='text-syntax-keyword'>await</span>{' \n'}</span>
        <span>{'platform.names'}<span className='text-syntax-string'>.register</span>{'( \n'}</span>
        <span>{'}; \n'}</span>
        <span>{"'a name goes here', \n"}</span>
        <span>{'return nameRegistration;'}</span>
      </code>
    </CodeBlock>
  )
}

export function WhyChooseSection (): React.ReactNode {
  const t = useTranslations('platformPage.whyChoose')

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-10 flex flex-col gap-1 lg:mb-16'>
        <p className='text-sm font-extrabold text-primary-blue lg:text-lg'>
          {t('chip')}
        </p>
        <Heading as='h2' size='xl' weight='extrabold' className='leading-tight dark:text-white lg:text-3xl lg:leading-9'>
          {t('title')}
        </Heading>
      </div>

      {/* Cards */}
      <div className='flex flex-col gap-5 lg:flex-row'>
        {/* Application Data Storage */}
        <div className='flex flex-1 flex-col gap-9 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft lg:rounded-4xl lg:p-9'>
          <div className='flex flex-col gap-4'>
            <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! lg:text-4xl lg:leading-10'>
              {t('cards.storage.title')}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark! lg:text-sm'>
              {t('cards.storage.description')}
            </Text>
          </div>
          <StorageCodeExample />
        </div>

        {/* Identities & Usernames */}
        <div className='flex flex-1 flex-col gap-9 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft lg:rounded-4xl lg:p-9'>
          <div className='flex flex-col gap-4'>
            <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark! lg:text-4xl lg:leading-10'>
              {t('cards.identities.title')}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark! lg:text-sm'>
              {t('cards.identities.description')}
            </Text>
          </div>
          <IdentitiesCodeExample />
        </div>
      </div>
    </div>
  )
}
