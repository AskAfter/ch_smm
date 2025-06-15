'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import ThemeToggle from './ThemeToggle'

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
    <header className="p-4 border-b flex items-center justify-between">
      <div className="flex items-center gap-2">
        <select
          value={agent}
          onChange={handleChange}
          className="border rounded px-2 py-1"
        >
          {agents.map((a) => (
            <option key={a} value={a}>
              {a}
            </option>
          ))}
        </select>
        <ThemeToggle />
      </div>
      <button onClick={logout} className="border px-3 py-1 rounded">
        Logout
      </button>
    </header>
  )
}
