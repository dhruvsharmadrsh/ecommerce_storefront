import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"
import { Playfair_Display, Lato } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
})

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans text-ui-fg-base bg-white dark:bg-wine-950 selection:bg-gold-200 selection:text-wine-900">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
