import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const glowRef = useRef(null)
  const trailRef = useRef(null)
  const ringRef = useRef(null)

  const [enabled, setEnabled] = useState(false)
  const [variant, setVariant] = useState('default')
  const [intro, setIntro] = useState(true)

  /* ----------------------------------------------------
     Detect desktop pointer
  ---------------------------------------------------- */

  useEffect(() => {
    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    setEnabled(canHover && !prefersReducedMotion)

    if (canHover && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setIntro(false)
      }, 700)

      return () => clearTimeout(timer)
    }
  }, [])

  /* ----------------------------------------------------
     Hide native cursor
  ---------------------------------------------------- */

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add(
      'custom-cursor-active'
    )

    return () => {
      document.documentElement.classList.remove(
        'custom-cursor-active'
      )
    }
  }, [enabled])

  /* ----------------------------------------------------
     Cursor movement
  ---------------------------------------------------- */

  useEffect(() => {
    if (!enabled) return

    const target = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }

    const glow = {
      x: target.x,
      y: target.y,
    }

    const trail = {
      x: target.x,
      y: target.y,
    }

    const ring = {
      x: target.x,
      y: target.y,
    }

    let previousX = target.x
    let previousY = target.y
    let velocity = 0
    let angle = 0
    let rafId

    const handleMove = (event) => {
      target.x = event.clientX
      target.y = event.clientY

      const deltaX = event.clientX - previousX
      const deltaY = event.clientY - previousY

      const distance = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY
      )

      velocity = Math.min(distance, 40)

      if (distance > 1) {
        angle = Math.atan2(deltaY, deltaX)
      }

      previousX = event.clientX
      previousY = event.clientY

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${target.x}px, ${target.y}px, 0)
          translate(-50%, -50%)
          rotate(${angle * 0.08}rad)
        `
      }
    }

    const animate = () => {
      /* ------------------------------------------------
         Follow smoothing
      ------------------------------------------------ */

      glow.x += (target.x - glow.x) * 0.34
      glow.y += (target.y - glow.y) * 0.34

      trail.x += (target.x - trail.x) * 0.14
      trail.y += (target.y - trail.y) * 0.14

      ring.x += (target.x - ring.x) * 0.45
      ring.y += (target.y - ring.y) * 0.45

      velocity *= 0.84

      /* ------------------------------------------------
         Soft glow
      ------------------------------------------------ */

      if (glowRef.current) {
        const glowScale = 1 + velocity * 0.012

        glowRef.current.style.transform = `
          translate3d(${glow.x}px, ${glow.y}px, 0)
          translate(-50%, -50%)
          scale(${glowScale})
        `
      }

      /* ------------------------------------------------
         Atmospheric trail
      ------------------------------------------------ */

      if (trailRef.current) {
        const trailScaleX = 1 + velocity * 0.018
        const trailScaleY = 1 + velocity * 0.004

        trailRef.current.style.transform = `
          translate3d(${trail.x}px, ${trail.y}px, 0)
          translate(-50%, -50%)
          rotate(${angle}rad)
          scale(${trailScaleX}, ${trailScaleY})
        `
      }

      /* ------------------------------------------------
         Morphing ring
      ------------------------------------------------ */

      if (ringRef.current) {
        const ringScale = 1 + velocity * 0.004

        ringRef.current.style.transform = `
          translate3d(${ring.x}px, ${ring.y}px, 0)
          translate(-50%, -50%)
          scale(${ringScale})
        `
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMove, {
      passive: true,
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMove
      )

      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  /* ----------------------------------------------------
     Interactive states
  ---------------------------------------------------- */

  useEffect(() => {
    if (!enabled) return

    const handleMouseOver = (event) => {
      const target = event.target.closest('[data-cursor]')

      if (!target) return

      const cursorType =
        target.getAttribute('data-cursor')

      if (cursorType === 'link') {
        setVariant('link')
        return
      }

      if (
        cursorType === 'project' ||
        cursorType === 'view'
      ) {
        setVariant('view')
        return
      }

      setVariant('default')
    }

    const handleMouseOut = (event) => {
      const target = event.target.closest('[data-cursor]')

      if (!target) return

      const related = event.relatedTarget

      if (
        related &&
        related.closest?.('[data-cursor]')
      ) {
        return
      }

      setVariant('default')
    }

    document.addEventListener(
      'mouseover',
      handleMouseOver
    )

    document.addEventListener(
      'mouseout',
      handleMouseOut
    )

    return () => {
      document.removeEventListener(
        'mouseover',
        handleMouseOver
      )

      document.removeEventListener(
        'mouseout',
        handleMouseOut
      )
    }
  }, [enabled])

  if (!enabled) {
    return null
  }

  return (
    <>
      {/* =================================================
          ATMOSPHERIC TRAIL
      ================================================== */}

      <div
        ref={trailRef}
        aria-hidden="true"
        className={`custom-cursor-trail ${
          intro ? 'custom-cursor-intro' : ''
        }`}
      />

      {/* =================================================
          SOFT GLOW
      ================================================== */}

      <div
        ref={glowRef}
        aria-hidden="true"
        className={`custom-cursor-glow ${
          intro ? 'custom-cursor-intro' : ''
        }`}
      />

      {/* =================================================
          MORPHING RING
      ================================================== */}

      <div
        ref={ringRef}
        aria-hidden="true"
        className={`
          custom-cursor-ring
          ${
            variant === 'link'
              ? 'custom-cursor-ring--link'
              : ''
          }
          ${
            variant === 'view'
              ? 'custom-cursor-ring--view'
              : ''
          }
        `}
      >
        {variant === 'view' && (
          <span className="custom-cursor-view-label">
            VIEW
          </span>
        )}
      </div>

      {/* =================================================
          MORPHING CORE
      ================================================== */}

      <div
        ref={cursorRef}
        aria-hidden="true"
        className={`
          custom-cursor-core
          ${
            variant === 'link'
              ? 'custom-cursor-core--link'
              : ''
          }
          ${
            variant === 'view'
              ? 'custom-cursor-core--view'
              : ''
          }
        `}
      >
        {variant === 'link' && (
          <span className="custom-cursor-arrow">
            ↗
          </span>
        )}
      </div>
    </>
  )
}