import { NextResponse } from 'next/server'
import { publishToSocial } from '@/lib/publisher'

export async function POST(req: Request) {
  const { account, content } = await req.json()
  const result = await publishToSocial(account, content)
  return NextResponse.json(result)
}
