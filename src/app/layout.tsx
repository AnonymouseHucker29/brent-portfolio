import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'

const raisonne = localFont({ src: '../../public/fonts/raisonne-demibold.ttf' })

export const metadata: Metadata = {
  title: 'Brent Baylon',
  description: 'Personal Portfolio',
  icons: '/icons/logo.svg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // console.log(
  //   `%cBrent Baylon`,
  //   `color: #fff; font-size: 2rem; font-weight: 700; text-shadow: 0 0 1px #fff, 0 0 2px #fff, 0 0 3px #fff, 0 0 4px #fff, 0 0 5px #fff, 0 0 6px #fff, 0 0 7px #fff, 0 0 8px #fff, 0 0 9px #fff, 0 0 10px #fff, 0 0 11px #fff, 0 0 12px #fff, 0 0 13px #fff, 0 0 14px #fff, 0 0 15px #fff, 0 0 22px #fff;`
  // )

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={raisonne.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}