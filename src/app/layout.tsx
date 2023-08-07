import "@/styles/globals.css"
import localFont from "next/font/local"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ThemeProvider } from "@/components/ThemeProvider"

// export const raisonne = localFont({
//   src: "../../public/fonts/raisonne-demibold.ttf"
// })

export const avantgarde = localFont({
  src: "../../public/fonts/AVGARDD_2.woff",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={avantgarde.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}