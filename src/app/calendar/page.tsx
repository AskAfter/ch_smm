'use client'
import dynamic from 'next/dynamic'
import 'react-calendar/dist/Calendar.css'
const Calendar = dynamic(() => import('react-calendar'), { ssr: false })
import { useState } from 'react'
import useSWR from 'swr'
import AIComposer from '@/components/AIComposer'

interface Post {
  id: string
  content: string
  scheduled_at: string
}

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function CalendarPage() {
  const [date, setDate] = useState(new Date())
  const { data: posts } = useSWR<Post[]>(`/api/posts`, fetcher)
  const postsForDay = posts?.filter(p => new Date(p.scheduled_at).toDateString() === date.toDateString())

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-semibold">Content Calendar</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Calendar onChange={(d) => setDate(d as Date)} value={date} className="w-full" />
        <div>
          <h2 className="font-medium mb-2">Posts on {date.toDateString()}</h2>
          <ul className="space-y-2">
            {postsForDay?.length ? postsForDay.map(post => (
              <li key={post.id} className="border p-2 rounded">{post.content}</li>
            )) : <p>No posts</p>}
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-2">Generate with AI</h2>
        <AIComposer />
      </div>
    </main>
  )
}
