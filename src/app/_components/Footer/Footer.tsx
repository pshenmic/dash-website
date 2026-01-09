import { SubFooter } from './SubFooter'

export function Footer (): React.ReactNode {
  return (
    <footer className='relative z-0 -mt-[50px] bg-primary-dark px-6 pb-8 pt-[calc(2rem+50px)] lg:px-16 lg:pb-12 lg:pt-[calc(3rem+50px)]'>
      <SubFooter />
    </footer>
  )
}
