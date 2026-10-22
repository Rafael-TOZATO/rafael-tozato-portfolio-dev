import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafael Ornelas Tozato – H-Folio',
  description: 'Hub de projetos de Rafael Ornelas Tozato: Engenharia de Software, Desenvolvimento Web e Inteligência Artificial.',
  generator: 'v0.app',
  manifest: '/manifest.json',
  icons: {
    icon: '/banner-portfolio-retrospectiva.png',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
