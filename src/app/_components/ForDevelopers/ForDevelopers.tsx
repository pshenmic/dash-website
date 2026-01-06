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
    <section className="rounded-b-[50px] bg-primary-white py-8 dark:bg-primary-dark lg:py-16">
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
    <div className="relative h-[158px] overflow-hidden rounded-[25px] bg-primary-dark lg:h-[235px] lg:rounded-[35px]">
      {/* Logo */}
      <div className="absolute left-[20px] top-[20px] lg:left-[30px] lg:top-[30px]">
        <Image
          src="/images/developers/logo-dash-small.svg"
          alt=""
          width={30}
          height={24}
          className="h-[18px] w-auto lg:h-[24px]"
        />
      </div>
      {/* 3D Image */}
      <div className="absolute right-[-40px] top-1/2 h-[217px] w-[225px] -translate-y-1/2 lg:right-0 lg:h-[283px] lg:w-[294px]">
        <Image
          src={image}
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>
      {/* Chip */}
      <div className="absolute left-[20px] top-[64px] lg:left-[30px] lg:top-[119px]">
        <span className="inline-block rounded-[35px] border border-white/50 px-[35px] py-[10px] text-[12px] font-medium text-white">
          {chip}
        </span>
      </div>
      {/* Title */}
      <p className="absolute bottom-[20px] left-[20px] max-w-[55%] text-[20px] font-extrabold leading-[22px] tracking-[-0.03em] text-white hyphens-auto lg:bottom-[30px] lg:left-[30px] lg:max-w-none lg:text-[38px] lg:leading-[40px]">
        {title}
      </p>
    </div>
  )
}

function CodeCard({ code }: { code: string }) {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-[35px] bg-primary-dark lg:h-[235px]">
      {/* Header */}
      <div className="flex items-center gap-2 px-[20px] py-[12px] lg:gap-3 lg:px-[30px] lg:py-[15px]">
        <Image
          src="/images/developers/logo-dash-small.svg"
          alt="Dash"
          width={30}
          height={24}
          className="h-[20px] w-auto lg:h-[24px]"
        />
        <Image
          src="/images/developers/logo-typescript.svg"
          alt="TypeScript"
          width={24}
          height={24}
          className="h-[20px] w-[20px] rounded-[4px] lg:h-[24px] lg:w-[24px]"
        />
      </div>
      {/* Code area */}
      <div className="relative h-[156px] bg-white/10 px-[20px] py-[12px] lg:h-[184px] lg:px-[30px] lg:py-[15px]">
        <pre className="font-mono text-[11px] leading-[1.6] text-white lg:text-[14px]">
          <code dangerouslySetInnerHTML={{ __html: highlight(code) }} />
        </pre>
        {/* Copy button */}
        <button className="absolute right-[20px] top-[12px] flex h-[20px] w-[20px] items-center justify-center opacity-70 transition-opacity hover:opacity-100 lg:right-[30px] lg:top-[15px]">
          <Image
            src="/images/developers/icon-copy.svg"
            alt="Copy"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}

