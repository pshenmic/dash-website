interface NavDropdownDisabledItemProps {
  children: React.ReactNode
}

export function NavDropdownDisabledItem ({
  children
}: NavDropdownDisabledItemProps): React.ReactNode {
  return (
    <span className='block rounded-xl px-4 py-2.5 text-sm lg:text-base font-medium text-primary-dark/40 dark:text-white/40 cursor-default'>
      {children}
    </span>
  )
}
