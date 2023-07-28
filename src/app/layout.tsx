import "@/styles/globals.css"
import localFont from "next/font/local"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/ThemeProvider"
import { FbChatPlugin } from "@/components/misc/fbChatPlugin"

const raisonne = localFont({ src: "../../public/fonts/raisonne-demibold.ttf" })

export const metadata: Metadata = {
  title: "Brent Baylon",
  description: "Personal Portfolio",
  icons: "/icons/logo.svg",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raisonne.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <FbChatPlugin />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}