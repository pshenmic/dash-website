import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface ForDevelopersProps {
  translations: {
    label: string
    title: string
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

const codeSnippet = `import pl.ludex.smartdashwallet.Constants;
import pl.ludex.smartdashwallet.event.BalanceChangeEvent;

public class DashKitService extends Service {
  private static final String BIP39_WORDLIST_FILENAME = "bip39-wordlist.txt";

  private static final Logger log = LoggerFactory.getLogger(DashKitService.class);
}`

export function ForDevelopers({ translations: t }: ForDevelopersProps) {
  return (
    <section className="rounded-b-[50px] bg-primary-white py-8 dark:bg-primary-dark lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 lg:mb-[20px] lg:flex-row lg:items-center">
          <div className="flex flex-col gap-[5px]">
            <span className="text-[18px] font-extrabold text-primary-blue">{t.label}</span>
            <h2 className="relative text-[24px] font-extrabold leading-[1.06] tracking-[-0.03em] text-primary-dark dark:text-white lg:text-[32px]">
              {t.title}
              {/* Decorative line */}
              <Image
                src="/images/developers/decoration-line.svg"
                alt=""
                width={113}
                height={45}
                className="absolute -top-[10px] right-0 hidden h-auto w-[80px] lg:right-[-20px] lg:block lg:w-[113px]"
              />
            </h2>
          </div>
          <Button variant="primary">{t.joinDiscord}</Button>
        </div>

        {/* Cards Grid */}
        <div className="flex flex-col gap-[19px]">
          {/* First Row - 3 cards */}
          <div className="grid grid-cols-1 gap-[19px] md:grid-cols-2 lg:grid-cols-3">
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
          <div className="grid grid-cols-1 gap-[19px] lg:grid-cols-[400px_1fr]">
            {/* Testnet Card */}
            <DeveloperCard
              title={t.cards.testnet.title}
              chip={t.cards.testnet.chip}
              image="/images/developers/card-testnet.png"
            />
            {/* Code Example Card */}
            <CodeCard language={t.codeExample.language} code={codeSnippet} />
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
    <div className="relative h-[200px] overflow-hidden rounded-[35px] bg-primary-dark lg:h-[235px]">
      {/* Logo */}
      <div className="absolute left-[30px] top-[30px]">
        <Image
          src="/images/developers/logo-dash.svg"
          alt=""
          width={37}
          height={10}
          className="h-[10px] w-auto opacity-70"
        />
      </div>
      {/* 3D Image */}
      <div className="absolute right-0 top-1/2 h-[200px] w-[250px] -translate-y-1/2 lg:h-[283px] lg:w-[294px]">
        <Image
          src={image}
          alt=""
          fill
          className="object-contain object-right"
        />
      </div>
      {/* Chip */}
      <div className="absolute left-[30px] top-[119px]">
        <span className="inline-block rounded-[35px] border border-white/50 px-[35px] py-[10px] text-[12px] font-medium text-white">
          {chip}
        </span>
      </div>
      {/* Title */}
      <p className="absolute bottom-[30px] left-[30px] text-[28px] font-extrabold leading-[40px] tracking-[-0.03em] text-white lg:text-[38px]">
        {title}
      </p>
    </div>
  )
}

interface CodeCardProps {
  language: string
  code: string
}

function CodeCard({ language, code }: CodeCardProps) {
  return (
    <div className="relative h-[235px] overflow-hidden rounded-[35px] bg-primary-dark">
      {/* Header */}
      <div className="flex items-center gap-3 px-[30px] py-[15px]">
        <Image
          src="/images/developers/logo-dash-small.svg"
          alt=""
          width={26}
          height={21}
          className="h-[21px] w-auto"
        />
        <span className="text-[18px] font-extrabold text-white">{language}</span>
      </div>
      {/* Code area */}
      <div className="relative h-[184px] bg-white/10 px-[30px] py-[15px]">
        <pre className="font-mono text-[12px] leading-[1.6] text-white lg:text-[14px]">
          <code>{formatCode(code)}</code>
        </pre>
        {/* Copy button */}
        <button className="absolute right-[30px] top-[15px] flex h-[20px] w-[20px] items-center justify-center opacity-70 transition-opacity hover:opacity-100">
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

function formatCode(code: string) {
  // Simple syntax highlighting
  return code.split('\n').map((line, i) => (
    <span key={i} className="block">
      {line
        .replace(/(import|public|class|extends|private|static|final|String)/g, '<span class="text-[#b883c5]">$1</span>')
        .replace(/(".*?")/g, '<span class="text-[#72c1f5]">$1</span>')
        .replace(/(\{|\}|\(|\))/g, '<span class="text-[#bd9873]">$1</span>')
        .split(/(<span.*?<\/span>)/)
        .map((part, j) => {
          if (part.startsWith('<span')) {
            const match = part.match(/class="([^"]+)">(.*?)<\/span>/)
            if (match) {
              return <span key={j} className={match[1]}>{match[2]}</span>
            }
          }
          return part
        })}
    </span>
  ))
}
