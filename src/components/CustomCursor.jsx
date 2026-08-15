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

      /* Main point remains perfectly responsive */

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(${target.x}px, ${target.y}px, 0)
          translate(-50%, -50%)
        `
      }
    }

    const animate = () => {
      /* Soft aura */

      glow.x += (target.x - glow.x) * 0.34
      glow.y += (target.y - glow.y) * 0.34

      /* Atmospheric trail */

      trail.x += (target.x - trail.x) * 0.16
      trail.y += (target.y - trail.y) * 0.16

      /* Small interaction halo */

      ring.x += (target.x - ring.x) * 0.48
      ring.y += (target.y - ring.y) * 0.48

      velocity *= 0.84

      /* ------------------------------------------------
         Glow
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
         Trail
      ------------------------------------------------ */

      if (trailRef.current) {
        const trailScaleX = 1 + velocity * 0.025
        const trailScaleY = 1 + velocity * 0.006

        trailRef.current.style.transform = `
          translate3d(${trail.x}px, ${trail.y}px, 0)
          translate(-50%, -50%)
          rotate(${angle}rad)
          scale(${trailScaleX}, ${trailScaleY})
        `
      }

      /* ------------------------------------------------
         Ring
      ------------------------------------------------ */

      if (ringRef.current) {
        const ringScale = 1 + velocity * 0.006

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
      window.removeEventListener('mousemove', handleMove)
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

      setVariant(target.getAttribute('data-cursor'))
    }

    const handleMouseOut = (event) => {
      const target = event.target.closest('[data-cursor]')

      if (!target) return

      setVariant('default')
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

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
      {/* Atmospheric trailing light */}

      <div
        ref={trailRef}
        aria-hidden="true"
        className={`custom-cursor-trail ${
          intro ? 'custom-cursor-intro' : ''
        }`}
      />

      {/* Soft cursor aura */}

      <div
        ref={glowRef}
        aria-hidden="true"
        className={`custom-cursor-glow ${
          intro ? 'custom-cursor-intro' : ''
        }`}
      />

      {/* Minimal interaction halo */}

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
            variant === 'project'
              ? 'custom-cursor-ring--project'
              : ''
          }
        `}
      />

      {/* Precise cursor point */}

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
            variant === 'project'
              ? 'custom-cursor-core--project'
              : ''
          }
        `}
      />
    </>
  )
}