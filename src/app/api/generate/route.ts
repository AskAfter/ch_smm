import { NextResponse } from 'next/server'
import { generateText, generateImage } from '@/lib/openai'

export async function POST(req: Request) {
  const { type, prompt } = await req.json()
  if (type === 'image') {
    const url = await generateImage(prompt)
    return NextResponse.json({ url })
  }
  const text = await generateText(prompt)
  return NextResponse.json({ text })
}
