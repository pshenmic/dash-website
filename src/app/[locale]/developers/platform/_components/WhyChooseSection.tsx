import { useTranslations } from 'next-intl'
import { Copy } from 'lucide-react'
import { DashLogo, Heading, Text } from 'dash-ui-kit/react'

function CodeBlock ({ children }: { children: React.ReactNode }): React.ReactNode {
  return (
    <div data-testid='code-block' className='relative flex h-60 w-full flex-col overflow-hidden rounded-4xl bg-primary-dark shadow-card'>
      {/* Header bar */}
      <div className='flex items-center justify-between px-7 pt-3 pb-2'>
        <DashLogo className='h-4 w-auto text-white/50' />
        <button className='text-white/50 transition-colors hover:text-white'>
          <Copy className='size-5' />
        </button>
      </div>

      {/* Code content */}
      <div className='flex-1 bg-white/15 px-7 py-3'>
        <pre className='font-mono text-xs leading-snug text-white'>
          {children}
        </pre>
      </div>
    </div>
  )
}

function StorageCodeExample (): React.ReactNode {
  return (
    <CodeBlock>
      <code>
        {'{\n'}
        {'  '}<span className='text-syntax-keyword'>{'"note"'}</span>{': {\n'}
        {'    "properties": {\n'}
        {'      "message": {\n'}
        {'        "type": '}<span className='text-syntax-string'>{'"string"'}</span>{'\n'}
        {'      }\n'}
        {'    },\n'}
        {'    '}<span className='text-syntax-keyword'>{'"additionalProperties"'}</span>{': '}<span className='text-syntax-string'>{'false'}</span>{'\n'}
        {'  }\n'}
        {'}'}
      </code>
    </CodeBlock>
  )
}

function IdentitiesCodeExample (): React.ReactNode {
  return (
    <CodeBlock>
      <code>
        <span className='text-syntax-keyword'>const</span>{' Dash = require('}<span className='text-syntax-string'>{"'dash'"}</span>{');\n'}
        <span className='text-syntax-keyword'>const</span>{' client = '}<span className='text-syntax-keyword'>new</span>{' Dash.Client(clientOpts);\n'}
        {'\n'}
        <span className='text-syntax-keyword'>const</span>{' registerName = '}<span className='text-syntax-keyword'>{'async ()'}</span>{' => {\n'}
        {'  '}<span className='text-syntax-keyword'>const</span>{' platform = client'}<span className='text-syntax-string'>.platform</span>{';\n'}
        {'  '}<span className='text-syntax-keyword'>const</span>{' identity = '}<span className='text-syntax-keyword'>await</span>{'\n'}
        {'    platform.identities'}<span className='text-syntax-string'>.get</span>{'(id);\n'}
        {'  '}<span className='text-syntax-keyword'>const</span>{' name = '}<span className='text-syntax-keyword'>await</span>{'\n'}
        {'    platform.names'}<span className='text-syntax-string'>.register</span>{'(\n'}
        {"      'alice', { identity }\n"}
        {'  );\n'}
        {'};'}
      </code>
    </CodeBlock>
  )
}

export function WhyChooseSection (): React.ReactNode {
  const t = useTranslations('platformPage.whyChoose')

  return (
    <div data-testid='why-choose-section' className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Section Header */}
      <div className='mb-10 flex flex-col gap-1 lg:mb-16'>
        <Text size='sm' weight='extrabold' className='text-primary-blue lg:text-lg'>
          {t('chip')}
        </Text>
        <Heading as='h2' size='xl' weight='extrabold' className='leading-tight dark:text-white lg:text-3xl lg:leading-9'>
          {t('title')}
        </Heading>
      </div>

      {/* Cards */}
      <div className='flex flex-col gap-5 lg:flex-row'>
        {/* Application Data Storage */}
        <div data-testid='why-choose-card-storage' className='flex flex-1 flex-col gap-9 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl lg:p-9'>
          <div className='flex flex-1 flex-col gap-4'>
            <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark dark:text-white lg:text-4xl lg:leading-10'>
              {t('cards.storage.title')}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark dark:text-white lg:text-sm'>
              {t('cards.storage.description')}
            </Text>
          </div>
          <StorageCodeExample />
        </div>

        {/* Identities & Usernames */}
        <div data-testid='why-choose-card-identities' className='flex flex-1 flex-col gap-9 rounded-3xl border border-primary-dark/15 bg-white p-6 shadow-soft dark:border-white/15 dark:bg-secondary-space-cadet lg:rounded-4xl lg:p-9'>
          <div className='flex flex-1 flex-col gap-4'>
            <Heading as='h3' weight='extrabold' className='text-2xl leading-tight tracking-tight text-primary-dark dark:text-white lg:text-4xl lg:leading-10'>
              {t('cards.identities.title')}
            </Heading>
            <Text size='xs' weight='medium' className='text-primary-dark dark:text-white lg:text-sm'>
              {t('cards.identities.description')}
            </Text>
          </div>
          <IdentitiesCodeExample />
        </div>
      </div>
    </div>
  )
}
