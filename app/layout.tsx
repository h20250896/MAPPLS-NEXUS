import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', weight: ['400','500','600','700'] })

export const metadata: Metadata = {
  title: 'MAPPLS NEXUS | Business Case Dashboard',
  description: "Interactive pitch dashboard for Mappls Nexus: hyperlocal revenue intelligence, GovTech, subscriptions, and merchant flywheel.",
  metadataBase: new URL('https://mappls-nexus.vercel.app')
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-mappls-dark text-white`}>{children}</body>
    </html>
  )
}
