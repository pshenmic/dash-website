import { ReactNode } from 'react'

interface MasonryGridProps {
  children: ReactNode[]
  columns?: number
}

export function MasonryGrid ({ children, columns = 4 }: MasonryGridProps): ReactNode {
  const columnArrays = Array.from({ length: columns }, () => [] as ReactNode[])

  children.forEach((child, index) => {
    const columnIndex = index % columns
    columnArrays[columnIndex].push(child)
  })

  return (
    <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
      {columnArrays.map((columnChildren, columnIndex) => (
        <div key={columnIndex} className='flex flex-col gap-5'>
          {columnChildren}
        </div>
      ))}
    </div>
  )
}
