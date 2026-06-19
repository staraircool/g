import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "GoFeatured — Get Featured. Get Found. Get More Orders.",
  description:
    "GoFeatured turns your factory into a beautiful, trusted online page. Buyers find you on Google, trust you in seconds, and send you orders. Based in the UK.",
  openGraph: {
    title: "GoFeatured — Get Featured. Get Found. Get More Orders.",
    description: "A beautiful, trusted page for your factory. Get found by buyers.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
