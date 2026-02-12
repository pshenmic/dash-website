/**
 * Reusable Tailwind class patterns
 * Use these constants to ensure consistency across components
 */

export const styles = {
  // Carousel flex basis (VideosSlider, Reviews)
  carouselItem: 'min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_340px]',

  // Link hover effect
  linkHover:
    'transition-colors hover:text-primary-blue/70 focus:outline-none focus-visible:underline',

  // Section spacing
  sectionPadding: 'py-16 lg:py-24',

  // Card base
  cardBase: 'rounded-2xl sm:rounded-3xl'
} as const
