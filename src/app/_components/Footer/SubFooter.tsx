interface SubFooterProps {
  copyright: string
  termsOfUse: string
  privacyStatement: string
  privacyPolicy: string
}

export function SubFooter({
  copyright,
  termsOfUse,
  privacyStatement,
  privacyPolicy,
}: SubFooterProps) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
      <span className="text-[13px] font-medium text-primary-white/50">
        {copyright}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-x-[15px] gap-y-1 text-[13px] font-medium text-primary-white/50">
        <a href="#">{termsOfUse}</a>
        <span className="hidden sm:inline">•</span>
        <a href="#">{privacyStatement}</a>
        <span className="hidden sm:inline">•</span>
        <a href="#">{privacyPolicy}</a>
      </div>
    </div>
  )
}
