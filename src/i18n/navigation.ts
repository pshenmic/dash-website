import { createNavigation } from 'next-intl/navigation'
import { Link as ViewTransitionLink } from 'next-view-transitions'
import { routing } from './routing'

const navigation = createNavigation(routing)

// Re-export next-intl navigation utilities
export const { redirect, usePathname, useRouter } = navigation

// Export Link from next-view-transitions for smooth page transitions
// It works with next-intl because ViewTransitions wraps the entire app
export const Link = ViewTransitionLink

// Also export the original next-intl Link for cases where transitions aren't needed
export const IntlLink = navigation.Link
