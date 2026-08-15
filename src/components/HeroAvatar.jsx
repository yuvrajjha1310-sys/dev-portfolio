import { useEffect, useRef, useState } from 'react'

/**
 * Original, abstract geometric avatar (not a photo, not a Memoji).
 * Gently tilts toward the cursor on desktop pointers only.
 * Static and centered on touch devices / reduced-motion.
 */
export default function HeroAvatar() {
  const wrapRef = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [interactive, setInteractive] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setInteractive(canHover && !prefersReduced)
  }, [])

  useEffect(() => {
    if (!interactive) return

    const handleMove = (e) => {
      const node = wrapRef.current
      if (!node) return
      const rect = node.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2

      // Distance from avatar center, clamped so the tilt stays subtle
      // even when the cursor is far away.
      const dx = Math.max(-1, Math.min(1, (e.clientX - cx) / 260))
      const dy = Math.max(-1, Math.min(1, (e.clientY - cy) / 260))

      setTilt({ x: dx, y: dy })
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [interactive])

  const rotateY = tilt.x * 10 // left/right tilt
  const rotateX = tilt.y * -10 // up/down tilt
  const eyeShiftX = tilt.x * 3
  const eyeShiftY = tilt.y * 3

  return (
    <div
      ref={wrapRef}
      className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0"
      style={{ perspective: '600px' }}
      aria-hidden="true"
    >
      <div
        className="h-full w-full rounded-full border border-line bg-panel2 transition-transform duration-200 ease-out"
        style={{
          transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full">
          <circle cx="50" cy="50" r="49" fill="none" stroke="#2A2A2E" strokeWidth="1" />
          {/* eyes */}
          <circle
            cx={38 + eyeShiftX}
            cy={44 + eyeShiftY}
            r="4.5"
            fill="#F5F3EF"
            style={{ transition: 'cx 200ms ease-out, cy 200ms ease-out' }}
          />
          <circle
            cx={62 + eyeShiftX}
            cy={44 + eyeShiftY}
            r="4.5"
            fill="#F5F3EF"
            style={{ transition: 'cx 200ms ease-out, cy 200ms ease-out' }}
          />
          {/* accent mark */}
          <circle cx="50" cy="50" r="2" fill="#E4372B" opacity="0.9" />
          {/* smile */}
          <path
            d="M 36 62 Q 50 72 64 62"
            fill="none"
            stroke="#F5F3EF"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  )
}
