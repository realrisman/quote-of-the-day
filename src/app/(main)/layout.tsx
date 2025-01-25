import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'

import '@/styles/global.css'

type LayoutProps = {
  children: ReactNode
}

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata = {
  title: 'Quote of the day',
  description: 'Find your purpose',
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}

export default Layout
