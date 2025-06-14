import type { Metadata } from 'next'
import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Social Media Manager',
  description: 'Plan and schedule posts',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  )
}
