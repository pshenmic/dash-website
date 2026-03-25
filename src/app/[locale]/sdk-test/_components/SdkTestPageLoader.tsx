'use client'

import dynamic from 'next/dynamic'

const SdkTestPage = dynamic(
  async () => await import('./SdkTestPage').then((m) => m.SdkTestPage),
  { ssr: false }
)

export function SdkTestPageLoader (): React.ReactNode {
  return <SdkTestPage />
}
