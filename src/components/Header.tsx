'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ThemeToggle from './ThemeToggle'
import { Button } from '@/components/ui/button'

const agents = ['gpt-3.5-turbo', 'gpt-4']

export default function Header() {
  const [agent, setAgent] = useState('gpt-3.5-turbo')

  useEffect(() => {
    const stored = localStorage.getItem('agent')
    if (stored) setAgent(stored)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value
    setAgent(value)
    localStorage.setItem('agent', value)
  }

  async function logout() {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/80 p-4 backdrop-blur">
      <div className="flex items-center gap-2">
        <select
          value={agent}
          onChange={handleChange}
          className="border rounded-md bg-background px-2 py-1 text-sm"
        >
          {agents.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <ThemeToggle />
      </div>
      <Button variant="outline" onClick={logout}>
        Logout
      </Button>
    </header>
  )
}
