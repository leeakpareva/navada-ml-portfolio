import React from "react"
import type { Metadata, Viewport } from 'next'
import { Newsreader, IBM_Plex_Mono } from 'next/font/google'

import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Navada-Lab | AI Research & Development Platform',
  description: 'Leslie Akpareva - AI Engineer & Technology Director. Cloud GPU Computing with NVIDIA RTX A4000 on Paperspace. navada-lab.space',
}

export const viewport: Viewport = {
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${ibmPlexMono.variable}`}>
      <body className="font-serif antialiased">{children}</body>
    </html>
  )
}
