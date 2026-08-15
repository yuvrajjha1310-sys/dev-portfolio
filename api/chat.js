import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

// Vercel serverless function — runs server-side only.
// The API key never reaches the browser: set it in your Vercel project's
// Environment Variables as GEMINI_API_KEY (placeholder name, swap for
// your real key when you deploy). Get a free key at aistudio.google.com —
// no credit card required for the Flash-tier models used here.

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const knowledgeBase = JSON.parse(
  readFileSync(path.join(__dirname, '../src/data/knowledgeBase.json'), 'utf-8')
)

const SYSTEM_PROMPT = `You are the AI assistant embedded in Yuvraj Jha's developer portfolio website. You answer visitor questions about Yuvraj — his background, skills, projects, and how to get in touch.

Ground every answer in the knowledge base below. If something isn't covered by it, say you don't have that detail and suggest the visitor reach out to Yuvraj directly via the contact section.

Keep answers short and conversational (2-4 sentences typically) — this is a chat widget, not a report. Speak about Yuvraj in the third person. Be warm and helpful, not salesy.

KNOWLEDGE BASE:
${JSON.stringify(knowledgeBase, null, 2)}`

const GEMINI_MODEL = 'gemini-2.5-flash'
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Server is missing GEMINI_API_KEY.' })
  }

  const { messages } = req.body || {}
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'Request body must include a non-empty "messages" array.' })
  }

  const trimmedMessages = messages
    .slice(-12)
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m.content ?? '').slice(0, 2000) }],
    }))

  try {
    const upstream = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey,
      },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: trimmedMessages,
        generationConfig: { maxOutputTokens: 500 },
      }),
    })

    if (!upstream.ok) {
      const errText = await upstream.text()
      console.error('Gemini API error:', upstream.status, errText)
      return res.status(502).json({ error: 'Upstream chat service error.' })
    }

    const data = await upstream.json()
    const reply = (data.candidates?.[0]?.content?.parts || [])
      .map((part) => part.text || '')
      .join('\n')
      .trim()

    return res.status(200).json({ reply: reply || "Sorry, I couldn't come up with a reply — try again." })
  } catch (err) {
    console.error('Chat function error:', err)
    return res.status(500).json({ error: 'Something went wrong reaching the chat service.' })
  }
}