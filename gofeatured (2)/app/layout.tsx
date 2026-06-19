import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" })

export const metadata: Metadata = {
  title: "GoFeatured — Get Featured. Get Found. Get More Orders.",
  description:
    "GoFeatured gives B2B suppliers a stunning, SEO-ready showcase page so buyers find you, trust you, and send more orders. No website skills needed.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cls = `${inter.variable} ${display.variable}`
  return (
    <html lang="en" className={cls}>
      <body>{children}</body>
    </html>
  )
}
