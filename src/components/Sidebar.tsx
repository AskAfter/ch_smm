'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/calendar', label: 'Calendar' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-48 border-r p-4 min-h-screen">
      <nav className="flex flex-col space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              (pathname === link.href
                ? 'font-semibold'
                : 'text-gray-600 hover:text-gray-900') + ' block'
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
