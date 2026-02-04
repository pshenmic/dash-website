'use client'

import { ThemeProvider as DashThemeProvider } from 'dash-ui-kit/react'

export function ThemeProvider ({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return <DashThemeProvider>{children}</DashThemeProvider>
}
