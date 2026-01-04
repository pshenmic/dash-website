import { SubFooter } from './SubFooter'

interface FooterProps {
  copyright: string
  termsOfUse: string
  privacyStatement: string
  privacyPolicy: string
}

export function Footer({
  copyright,
  termsOfUse,
  privacyStatement,
  privacyPolicy,
}: FooterProps) {
  return (
    <footer className="bg-primary-dark px-6 py-8 lg:px-16 lg:py-12">
      <SubFooter
        copyright={copyright}
        termsOfUse={termsOfUse}
        privacyStatement={privacyStatement}
        privacyPolicy={privacyPolicy}
      />
    </footer>
  )
}
