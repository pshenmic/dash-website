import { SubFooter } from './SubFooter'

export function Footer (): React.ReactNode {
  return (
    <footer className='relative z-0 -mt-[50px] bg-primary-dark px-6 pt-[calc(2rem+50px)] pb-8 lg:px-16 lg:pt-[calc(3rem+50px)] lg:pb-12'>
      <SubFooter />
    </footer>
  )
}
