import { createNavigation } from 'next-intl/navigation'
import { routing } from './routing'

const navigation = createNavigation(routing)

// Re-export next-intl navigation utilities
export const { redirect, usePathname, useRouter, Link } = navigation
