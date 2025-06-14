'use client'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

interface Post {
  id: string
  content: string
}

export default function Dashboard() {
  const { data: posts } = useSWR<Post[]>("/api/posts", fetcher)
  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold mb-4">Scheduled Posts</h1>
      <ul className="space-y-2">
        {posts?.map((post) => (
          <li key={post.id} className="border p-2 rounded">
            {post.content}
          </li>
        ))}
      </ul>
    </main>
  )
}
