import Image from 'next/image'
import { highlight } from 'sugar-high'
import { Button } from '@/components/ui/Button'

interface ForDevelopersProps {
  translations: {
    label: string
    title: string
    titleHighlight: string
    joinDiscord: string
    cards: {
      apiSdk: { chip: string; title: string }
      nodes: { chip: string; title: string }
      smartContracts: { chip: string; title: string }
      testnet: { chip: string; title: string }
    }
    codeExample: {
      language: string
    }
  }
}

const codeSnippet = `const { dashPlatform } = window
const { identity } = await dashPlatform.connect()
const doc = await dashPlatform.documents.create(
  'note', { message: 'Hello Dash!' }
)
await dashPlatform.signAndBroadcast(doc)`

export function ForDevelopers({ translations: t }: ForDevelopersProps) {
  return (
    <section className="relative z-10 rounded-b-[50px] bg-primary-white py-8 dark:bg-primary-dark lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:mb-[20px] lg:flex-row lg:items-center">
          <div className="flex flex-col gap-[5px]">
            <span className="text-[18px] font-extrabold text-primary-blue">{t.label}</span>
            <h2 className="max-w-[320px] text-[32px] font-extrabold leading-[34px] tracking-[-0.03em] text-primary-dark dark:text-white lg:max-w-none">
              {t.title}{' '}
              <span className="relative inline-block">
                {t.titleHighlight}
                {/* Decorative line wrapping the word */}
                <Image
                  src="/images/developers/decoration-line.svg"
                  alt=""
                  width={113}
                  height={45}
                  className="pointer-events-none absolute -bottom-[5px] left-1/2 h-[35px] w-[90px] -translate-x-1/2 lg:-bottom-[8px] lg:h-[45px] lg:w-[113px]"
                />
              </span>
            </h2>
          </div>
          <Button variant="primary" className="hidden lg:inline-flex">{t.joinDiscord}</Button>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-[10px] lg:gap-[19px]">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-[19px] lg:grid-cols-3">
            {/* API & SDK Card */}
            <DeveloperCard
              title={t.cards.apiSdk.title}
              chip={t.cards.apiSdk.chip}
              image="/images/developers/card-api-sdk.png"
            />
            {/* Nodes Card */}
            <DeveloperCard
              title={t.cards.nodes.title}
              chip={t.cards.nodes.chip}
              image="/images/developers/card-nodes.png"
            />
            {/* Smart-Contracts Card */}
            <DeveloperCard
              title={t.cards.smartContracts.title}
              chip={t.cards.smartContracts.chip}
              image="/images/developers/card-smart-contracts.png"
            />
          </div>

          {/* Second Row - Testnet + Code Example */}
          <div className="grid grid-cols-1 gap-[10px] md:gap-[19px] lg:grid-cols-2">
            {/* Testnet Card */}
            <DeveloperCard
              title={t.cards.testnet.title}
              chip={t.cards.testnet.chip}
              image="/images/developers/card-testnet.png"
            />
            {/* Code Example Card */}
            <CodeCard code={codeSnippet} />
          </div>
        </div>
      </div>
    </section>
  )
}

interface DeveloperCardProps {
  title: string
  chip: string
  image: string
}

function DeveloperCard({ title, chip, image }: DeveloperCardProps) {
  return (
    <div className="relative h-[158px] overflow-hidden rounded-[25px] bg-primary-dark dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:h-[235px] lg:rounded-[35px]">
      {/* Левая часть - flex колонка */}
      <div className="relative z-10 flex h-full max-w-[55%] flex-col items-start px-5 pb-4 pt-4 lg:max-w-[60%] lg:p-[30px]">
        <Image
          src="/images/developers/logo-dash-small.svg"
          alt=""
          width={30}
          height={24}
          className="h-[18px] w-auto lg:h-[24px]"
        />
        <div className="mt-auto flex flex-col gap-2 lg:gap-3">
          <span className="w-fit rounded-full border border-white/50 px-3 py-1.5 text-[10px] font-medium text-white lg:px-[35px] lg:py-[10px] lg:text-[12px]">
            {chip}
          </span>
          <p className="text-[20px] font-extrabold leading-[22px] tracking-[-0.03em] text-white lg:text-[38px] lg:leading-[40px]">
            {title}
          </p>
        </div>
      </div>
      {/* 3D Image */}
      <div className="absolute right-[-40px] top-1/2 h-[217px] w-[225px] -translate-y-1/2 lg:left-1/2 lg:right-auto lg:h-[283px] lg:w-[294px]">
        <Image src={image} alt="" fill className="object-contain object-right" />
      </div>
    </div>
  )
}

function CodeCard({ code }: { code: string }) {
  return (
    <div className="flex h-[180px] flex-col overflow-hidden rounded-[25px] bg-primary-dark dark:border dark:border-white/15 dark:bg-secondary-space-cadet lg:h-[235px] lg:rounded-[35px]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 lg:px-[30px] lg:py-4">
        <Image
          src="/images/developers/logo-typescript.svg"
          alt="TypeScript"
          width={24}
          height={24}
          className="h-[18px] w-[18px] rounded lg:h-[24px] lg:w-[24px]"
        />
        <button className="opacity-70 transition-opacity hover:opacity-100">
          <Image
            src="/images/developers/icon-copy.svg"
            alt="Copy"
            width={20}
            height={20}
            className="h-[16px] w-[16px] lg:h-[20px] lg:w-[20px]"
          />
        </button>
      </div>
      {/* Code area */}
      <div className="flex-1 overflow-x-auto bg-white/10 px-5 py-3 lg:px-[30px] lg:py-4">
        <pre className="font-mono text-[10px] leading-[1.6] text-white lg:text-[14px]">
          <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
      </div>
    </div>
  )
}

