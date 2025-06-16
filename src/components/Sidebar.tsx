'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, LayoutDashboard, Calendar as CalendarIcon } from 'lucide-react'

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/calendar', label: 'Calendar', icon: CalendarIcon },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-56 border-r bg-background p-4 min-h-screen">
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const active = pathname === link.href
          const Icon = link.icon
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center rounded-md px-3 py-2 text-sm font-medium ${active ? 'bg-accent text-accent-foreground' : 'text-gray-600 hover:bg-accent hover:text-accent-foreground'}`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
