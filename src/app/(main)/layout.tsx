import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { Inter as FontSans } from 'next/font/google'
import Favicon from './favicon.ico'

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
  icons: [{ rel: 'icon', url: Favicon.src }],
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body
        className={cn('h-screen w-screen bg-background font-sans antialiased', fontSans.variable)}
      >
        {children}
      </body>
    </html>
  )
}

export default Layout
