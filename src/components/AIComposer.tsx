'use client'
import { useState } from 'react'

export default function AIComposer() {
  const [prompt, setPrompt] = useState('')
  const [output, setOutput] = useState<string | null>(null)
  const [image, setImage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleGenerate(type: 'text' | 'image') {
    setLoading(true)
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, prompt }),
    })
    const data = await res.json()
    setLoading(false)
    if (type === 'image') {
      setImage(data.url)
    } else {
      setOutput(data.text)
    }
  }

  return (
    <div className="space-y-2">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full border p-2 rounded"
        placeholder="Describe your post idea"
      />
      <div className="flex gap-2">
        <button
          onClick={() => handleGenerate('text')}
          className="border px-3 py-1 rounded"
          disabled={loading}
        >
          AI Text
        </button>
        <button
          onClick={() => handleGenerate('image')}
          className="border px-3 py-1 rounded"
          disabled={loading}
        >
          AI Image
        </button>
      </div>
      {output && <p className="p-2 border rounded">{output}</p>}
      {image && <img src={image} alt="AI result" className="max-w-full border rounded" />}
    </div>
  )
}
