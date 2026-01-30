import { cn } from '@/lib/cn'

type ContainerElement = 'div' | 'section' | 'main' | 'article' | 'header' | 'footer' | 'nav'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: ContainerElement
}

export function Container ({
  children,
  className,
  as: Tag = 'div'
}: ContainerProps): React.ReactNode {
  return (
    <Tag className={cn('mx-auto max-w-7xl px-4 lg:px-6', className)}>
      {children}
    </Tag>
  )
}
