import type { Metadata } from 'next'
import { Syne, IBM_Plex_Mono } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Pax Web Dev — Custom Web Development & Design',
  description:
    'Custom web development and design — with the thinking to back it up. One-time or monthly — no templates, no WordPress.',
  openGraph: {
    title: 'Pax Web Dev — Custom Web Development & Design',
    description:
      'Custom websites built in Next.js with Sanity CMS. Based in New York City.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${syne.variable} ${ibmPlexMono.variable}`}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}