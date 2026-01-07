import { SubFooter } from './SubFooter'

interface FooterProps {
  copyright: string
  termsOfUse: string
  privacyStatement: string
  privacyPolicy: string
}

export function Footer ({
  copyright,
  termsOfUse,
  privacyStatement,
  privacyPolicy
}: FooterProps) {
  return (
    <footer className='-mt-[50px] bg-primary-dark px-6 pb-8 pt-[calc(2rem+50px)] lg:px-16 lg:pb-12 lg:pt-[calc(3rem+50px)]'>
      <SubFooter
        copyright={copyright}
        termsOfUse={termsOfUse}
        privacyStatement={privacyStatement}
        privacyPolicy={privacyPolicy}
      />
    </footer>
  )
}
