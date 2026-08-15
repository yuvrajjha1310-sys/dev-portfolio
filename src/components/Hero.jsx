import { useEffect, useState } from 'react'
import HeroAvatar from './HeroAvatar.jsx'

const CYCLE_WORDS = ['ship.', 'scale.', 'learn.']
const CYCLE_MS = 2200

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [cycling, setCycling] = useState(true)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setCycling(!prefersReduced)
    if (prefersReduced) return

    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % CYCLE_WORDS.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="top" className="section pt-40 pb-24 sm:pt-48 sm:pb-32">
      <div
        className="mb-6 flex items-center gap-4 animate-fade-up"
        style={{ animationDelay: '0ms' }}
      >
        <p className="eyebrow">Yuvraj Jha — Developer</p>
        <HeroAvatar />
      </div>

      <h1
        className="font-display font-medium text-[13vw] sm:text-[7vw] lg:text-[6.2rem] leading-[0.95] tracking-tightest max-w-4xl animate-fade-up"
        style={{ animationDelay: '80ms' }}
      >
        Build things{' '}
        <span
          key={cycling ? wordIndex : 'static'}
          className={`italic text-signal inline-block ${cycling ? 'animate-word-cycle' : ''}`}
        >
          that {CYCLE_WORDS[wordIndex]}
        </span>
      </h1>

      <p
        className="mt-8 max-w-xl text-lg text-mute font-body animate-fade-up"
        style={{ animationDelay: '200ms' }}
      >
        Turning coursework and side projects into real, working
        systems — looking for an internship to do that for real.
      </p>

      <div
        className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
        style={{ animationDelay: '300ms' }}
      >
        <a href="#work" className="inline-flex items-center rounded-full bg-bone px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-signal hover:text-bone hover:-translate-y-0.5">
          View my work
        </a>
        <a href="#contact" className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium text-bone transition-all duration-300 hover:border-signal hover:-translate-y-0.5">
          Get in touch
        </a>
      </div>
    </section>
  )
}
