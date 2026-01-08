import Image from 'next/image'
import { highlight } from 'sugar-high'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

const CODE_SNIPPET = `const { dashPlatform } = window
const { identity } = await dashPlatform.connect()
const doc = await dashPlatform.documents.create(
  'note', { message: 'Hello Dash!' }
)
await dashPlatform.signAndBroadcast(doc)`

export function ForDevelopers () {
  const t = useTranslations('forDevelopers')
  return (
    <div className='relative z-10 rounded-b-[50px] bg-primary-white dark:bg-primary-dark'>
      <div className='mx-auto max-w-7xl px-4 lg:px-6'>
        <div className='mb-8 flex flex-col items-start justify-between gap-4 lg:mb-[20px] lg:flex-row lg:items-center'>
          <div className='flex flex-col gap-[5px]'>
            <span className='text-[18px] font-extrabold text-primary-blue'>{t('label')}</span>
            <h2 className='max-w-[320px] text-[32px] font-extrabold leading-[34px] tracking-[-0.03em] text-primary-dark dark:text-white lg:max-w-none'>
              {t('title')}{' '}
              <span className='relative inline-block'>
                {t('titleHighlight')}
                {/* SVG positioned to wrap text like hand-drawn underline */}
                <Image
                  src='/images/developers/decoration-line.svg'
                  alt=''
                  width={113}
                  height={45}
                  className='pointer-events-none absolute -bottom-[5px] left-1/2 h-[35px] w-[90px] -translate-x-1/2 lg:-bottom-[8px] lg:h-[45px] lg:w-[113px]'
                />
              </span>
            </h2>
          </div>
          <Button variant='primary' className='hidden lg:inline-flex'>{t('joinDiscord')}</Button>
        </div>

        <div className='flex flex-col gap-[10px] lg:gap-[19px]'>
          <div className='grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[19px] lg:grid-cols-3'>
            <DeveloperCard
              title={t('cards.apiSdk.title')}
              chip={t('cards.apiSdk.chip')}
              image='/images/developers/card-api-sdk.png'
            />
            <DeveloperCard
              title={t('cards.nodes.title')}
              chip={t('cards.nodes.chip')}
              image='/images/developers/card-nodes.png'
            />
            <DeveloperCard
              title={t('cards.smartContracts.title')}
              chip={t('cards.smartContracts.chip')}
              image='/images/developers/card-smart-contracts.png'
            />
          </div>
          <div className='grid grid-cols-1 gap-[10px] md:gap-[19px] lg:grid-cols-2'>
            <DeveloperCard
              title={t('cards.testnet.title')}
              chip={t('cards.testnet.chip')}
              image='/images/developers/card-testnet.png'
            />
            <CodeCard code={CODE_SNIPPET} />
          </div>
        </div>
      </div>
    </div>
  )
}

interface DeveloperCardProps {
  title: string
  chip: string
  image: string
}

function DeveloperCard ({ title: _title, chip: _chip, image: _image }: DeveloperCardProps) {
  return (
    <Card className='relative h-[158px] lg:h-[235px]'>
      {/* Content limited to left side, image fills right */}
      <div className='relative z-10 flex h-full max-w-[55%] flex-col items-start px-5 pb-4 pt-4 lg:max-w-[60%] lg:p-[30px]'>
        <Image
          src='/images/developers/logo-dash-small.svg'
          alt=''
          width={30}
          height={24}
          className='h-[18px] w-auto lg:h-[24px]'
        />
        <div className='mt-auto flex flex-col gap-2 lg:gap-3'>
          <span className='w-fit rounded-full border border-white/50 px-3 py-1.5 text-[10px] font-medium text-white lg:px-[35px] lg:py-[10px] lg:text-[12px]'>
            {_chip}
          </span>
          <p className='text-[20px] font-extrabold leading-[22px] tracking-[-0.03em] text-white lg:text-[38px] lg:leading-[40px]'>
            {_title}
          </p>
        </div>
      </div>
      {/* Image overflows card bounds by design */}
      <div className='absolute right-[-40px] top-1/2 h-[217px] w-[225px] -translate-y-1/2 lg:left-1/2 lg:right-auto lg:h-[283px] lg:w-[294px]'>
        <Image src={_image} alt='' fill className='object-contain object-right' />
      </div>
    </Card>
  )
}

function CodeCard ({ code: _code }: { code: string }) {
  return (
    <Card className='flex h-[180px] flex-col lg:h-[235px]'>
      <div className='flex items-center justify-between px-5 py-3 lg:px-[30px] lg:py-4'>
        <Image
          src='/images/developers/logo-typescript.svg'
          alt='TypeScript'
          width={24}
          height={24}
          className='h-[18px] w-[18px] rounded lg:h-[24px] lg:w-[24px]'
        />
        <button className='opacity-70 transition-opacity hover:opacity-100'>
          <Image
            src='/images/developers/icon-copy.svg'
            alt='Copy'
            width={20}
            height={20}
            className='h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]'
          />
        </button>
      </div>
      <div className='flex-1 overflow-x-auto bg-white/10 px-5 py-3 lg:px-[30px] lg:py-4'>
        <pre className='font-mono text-[10px] leading-[1.6] text-white lg:text-[14px]'>
          <code dangerouslySetInnerHTML={{ __html: highlight(_code) }} />
        </pre>
      </div>
    </Card>
  )
}
