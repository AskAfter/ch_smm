import { NextResponse } from 'next/server'

export async function GET() {
  const { prisma } = await import('@/lib/prisma')
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  const { prisma } = await import('@/lib/prisma')
  const data = await req.json()
  const post = await prisma.post.create({ data })
  return NextResponse.json(post, { status: 201 })
}
