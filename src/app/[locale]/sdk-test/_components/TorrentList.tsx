'use client'

import { useEffect, useState } from 'react'
import { useSdk } from '@/lib/dash-platform/use-sdk'
import { DATA_CONTRACT_IDENTIFIER, DOCUMENT_TYPE } from '@/lib/dash-platform/config'

interface Torrent {
  id: string
  name: string
  description: string
  magnet: string
  owner: string
  updatedAt: Date
}

export function TorrentList (): React.ReactNode {
  const [torrents, setTorrents] = useState<Torrent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTorrents = async (): Promise<void> => {
      try {
        const sdk = useSdk()

        const documents = await sdk.documents.query(
          DATA_CONTRACT_IDENTIFIER,
          DOCUMENT_TYPE,
          undefined,
          undefined,
          100
        )

        const mapped = documents.map((doc) => {
          const properties = doc.properties as {
            name: string
            description: string
            magnet: string
          }

          return {
            id: doc.id.base58(),
            name: properties.name,
            description: properties.description,
            magnet: properties.magnet,
            owner: doc.ownerId.base58(),
            updatedAt: new Date(parseInt(doc.updatedAt?.toString() ?? '0'))
          }
        })

        setTorrents(mapped)
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err))
      } finally {
        setLoading(false)
      }
    }

    void fetchTorrents()
  }, [])

  if (loading) {
    return (
      <div className='space-y-4'>
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className='animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700 h-24' />
        ))}
      </div>
    )
  }

  if (error !== null) {
    return (
      <div className='rounded-lg bg-red-50 dark:bg-red-900/20 p-4'>
        <p className='text-sm text-red-600 dark:text-red-400'>Error: {error}</p>
      </div>
    )
  }

  if (torrents.length === 0) {
    return <p className='text-gray-500 dark:text-gray-400'>No torrents found.</p>
  }

  return (
    <div className='space-y-4'>
      <p className='text-sm text-gray-500 dark:text-gray-400'>
        Found {torrents.length} torrents from contract {DATA_CONTRACT_IDENTIFIER.slice(0, 8)}...
      </p>

      {torrents.map((torrent) => (
        <div
          key={torrent.id}
          className='rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-2'
        >
          <div className='flex items-start justify-between gap-4'>
            <h3 className='font-semibold text-gray-900 dark:text-white'>
              {torrent.name}
            </h3>
            <span className='shrink-0 text-xs text-gray-400'>
              {torrent.updatedAt.toLocaleDateString()}
            </span>
          </div>

          <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>
            {torrent.description}
          </p>

          <div className='flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400'>
            <span>Owner: {torrent.owner.slice(0, 8)}...</span>
            <span>ID: {torrent.id.slice(0, 8)}...</span>
          </div>
        </div>
      ))}
    </div>
  )
}
