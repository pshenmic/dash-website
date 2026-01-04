interface ChipProps {
  children: React.ReactNode
}

export function Chip({ children }: ChipProps) {
  return (
    <span className="rounded-[35px] border border-primary-white/50 px-[35px] py-2.5 text-xs font-medium text-primary-white lg:py-[15px] lg:text-lg">
      {children}
    </span>
  )
}
