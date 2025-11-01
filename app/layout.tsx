import type { Metadata, Viewport } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kenymartin-portfolio.vercel.app'),
  title: 'Keny Martin Robles | Full-Stack Engineer & Cloud Developer',
  description: 'Experienced Full-Stack Engineer specializing in modern JavaScript frameworks, .NET technologies, and cloud infrastructure. Building scalable, elegant solutions.',
  keywords: ['Full-Stack Developer', 'Cloud Engineer', 'React', 'Node.js', 'AWS', 'Azure', 'TypeScript', '.NET'],
  authors: [{ name: 'Keny Martin Robles' }],
  creator: 'Keny Martin Robles',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://kenymartin-portfolio.vercel.app',
    title: 'Keny Martin Robles | Full-Stack Engineer',
    description: 'Experienced Full-Stack Engineer specializing in modern JavaScript frameworks, .NET technologies, and cloud infrastructure.',
    siteName: 'Keny Martin Robles Portfolio',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Keny Martin Robles Portfolio',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keny Martin Robles | Full-Stack Engineer',
    description: 'Experienced Full-Stack Engineer specializing in modern JavaScript frameworks, .NET technologies, and cloud infrastructure.',
    creator: '@kenymartin',
    images: ['/og-image.jpg'],
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
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="font-body bg-gothic-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}

