import { Analytics } from '@vercel/analytics/react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rafael Ornelas Tozato | Portfólio & Projetos',
  description: 'Portfólio de Rafael Ornelas Tozato: projetos de Engenharia de Software, Desenvolvimento Web, Inteligência Artificial, dados e cloud.',
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
