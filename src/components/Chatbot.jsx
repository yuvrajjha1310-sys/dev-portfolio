import { useEffect, useRef, useState } from 'react'

const GREETING = {
  role: 'assistant',
  content:
    "Hey! I'm Yuvraj's portfolio assistant. Ask me about his skills, projects, education, internship experience, or the opportunities he's looking for.",
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const scrollRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (!scrollRef.current) return

    scrollRef.current.scrollTop =
      scrollRef.current.scrollHeight
  }, [messages, loading, open])

  useEffect(() => {
    if (!open) return

    const timer = setTimeout(() => {
      inputRef.current?.focus()
    }, 150)

    return () => clearTimeout(timer)
  }, [open])

  async function sendMessage(event) {
    event.preventDefault()

    const text = input.trim()

    if (!text || loading) return

    const nextMessages = [
      ...messages,
      {
        role: 'user',
        content: text,
      },
    ]

    setMessages(nextMessages)
    setInput('')
    setError(null)
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: nextMessages,
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      const data = await response.json()

      const reply =
        typeof data.reply === 'string' && data.reply.trim()
          ? data.reply
          : "I couldn't find a clear answer to that."

      setMessages((previous) => [
        ...previous,
        {
          role: 'assistant',
          content: reply,
        },
      ])
    } catch {
      setError(
        "Couldn't reach the chat service — try again in a moment."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* =====================================================
          CHAT BUTTON
      ====================================================== */}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open chat'}
        data-cursor="link"
        className="
          fixed
          bottom-6
          right-6
          z-[60]
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-signal
          text-bone
          shadow-lg
          shadow-signal/30
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-signal2
        "
      >
        {open ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6 6 18" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1-4.7-7.6 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* =====================================================
          CHAT PANEL
      ====================================================== */}

      {open && (
        <div
          className="
            fixed
            bottom-24
            right-6
            z-[60]
            flex
            h-[28rem]
            w-[22rem]
            max-w-[calc(100vw-3rem)]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-line
            bg-panel
            shadow-2xl
          "
          role="dialog"
          aria-label="Yuvraj portfolio assistant"
        >
          {/* Header */}

          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-signal
                shadow-[0_0_10px_rgba(184,156,152,0.65)]
              "
            />

            <div className="min-w-0">
              <span className="block font-display text-sm tracking-tight">
                Ask about Yuvraj
              </span>

              <span className="block text-[10px] text-mute">
                Portfolio assistant
              </span>
            </div>
          </div>

          {/* Messages */}

          <div
            ref={scrollRef}
            className="
              flex-1
              space-y-3
              overflow-y-auto
              px-4
              py-3
            "
          >
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`flex ${
                  message.role === 'user'
                    ? 'justify-end'
                    : 'justify-start'
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    rounded-xl
                    px-3
                    py-2
                    text-sm
                    leading-relaxed
                    whitespace-pre-wrap
                    break-words
                    ${
                      message.role === 'user'
                        ? 'bg-signal text-bone'
                        : 'bg-panel2 text-bone'
                    }
                  `}
                >
                  {message.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="rounded-xl bg-panel2 px-3 py-2 text-sm text-mute">
                  Thinking…
                </div>
              </div>
            )}

            {error && (
              <p className="text-xs text-signal2">
                {error}
              </p>
            )}
          </div>

          {/* Input */}

          <form
            onSubmit={sendMessage}
            className="
              flex
              items-center
              gap-2
              border-t
              border-line
              p-3
            "
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(event) =>
                setInput(event.target.value)
              }
              placeholder="Ask about Yuvraj…"
              autoComplete="off"
              className="
                flex-1
                rounded-full
                border
                border-line
                bg-ink
                px-3
                py-2
                text-sm
                text-bone
                placeholder:text-mute
                focus:border-signal
                focus:outline-none
              "
            />

            <button
              type="submit"
              disabled={loading || !input.trim()}
              data-cursor="link"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-signal
                text-bone
                transition-all
                duration-300
                hover:bg-signal2
                disabled:cursor-not-allowed
                disabled:opacity-40
              "
              aria-label="Send message"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2 11 13" />
                <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  )
}