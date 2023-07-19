import '@/styles/globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import localFont from 'next/font/local'
import Layout from '@/components/Layout'

const raisonne = localFont({ src: '../../public/fonts/raisonne-demibold.ttf' })

export const metadata: Metadata = {
  title: 'Brent Baylon',
  description: 'Personal Portfolio',
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
          <Layout>
            {children}
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  )
}
