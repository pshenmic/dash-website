import type { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
  return {
    name: 'Dash - Digital Cash',
    short_name: 'Dash',
    description:
      'Money without borders: moving it instantly, transparently, conveniently, and almost for free',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#008CE3',
    icons: [
      {
        src: '/images/favicon/icon-192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/images/favicon/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
