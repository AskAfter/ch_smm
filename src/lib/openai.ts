import OpenAI from 'openai'

let client: OpenAI | null = null

function getClient() {
  if (!client) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) throw new Error('OPENAI_API_KEY is missing')
    client = new OpenAI({ apiKey })
  }
  return client
}

export async function generateText(prompt: string) {
  const completion = await getClient().chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  })
  return completion.choices[0]?.message?.content
}

export async function generateImage(prompt: string) {
  const result = await getClient().images.generate({ prompt, n: 1, size: '512x512' })
  return result.data?.[0]?.url ?? null
}
