import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EQ - Portfolio',
  description: 'Ezekiel Quintanilla - Software Developer Portfolio',
  keywords: ['software developer', 'portfolio', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Ezekiel Quintanilla' }],
  creator: 'Ezekiel Quintanilla',
  openGraph: {
    title: 'EQ - Portfolio',
    description: 'Software Developer Portfolio',
    url: 'https://equintanilla.dev',
    siteName: 'EQ Portfolio',
    images: [
      {
        url: '/banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Ezekiel Quintanilla Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EQ - Portfolio',
    description: 'Software Developer Portfolio',
    images: ['/banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f6ad55" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 