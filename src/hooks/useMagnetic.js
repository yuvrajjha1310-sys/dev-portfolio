import { useEffect, useRef } from 'react'

/**
 * Attaches a subtle "magnetic" pull toward the cursor for the element this
 * ref is placed on. Desktop-only: does nothing on touch devices or when
 * prefers-reduced-motion is set.
 *
 * @param {number} strength - how strongly the element follows the cursor (0-1)
 * @param {number} maxPull - maximum pixel offset in any direction
 */
export default function useMagnetic(strength = 0.35, maxPull = 16) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canHover || prefersReduced) return

    const handleMove = (e) => {
      const rect = node.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const radius = Math.max(rect.width, rect.height) * 1.15

      if (Math.hypot(dx, dy) < radius) {
        const pullX = Math.max(-maxPull, Math.min(maxPull, dx * strength))
        const pullY = Math.max(-maxPull, Math.min(maxPull, dy * strength))
        node.style.transform = `translate(${pullX}px, ${pullY}px)`
      } else {
        node.style.transform = 'translate(0px, 0px)'
      }
    }

    const reset = () => {
      node.style.transform = 'translate(0px, 0px)'
    }

    window.addEventListener('mousemove', handleMove)
    node.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      node.removeEventListener('mouseleave', reset)
    }
  }, [strength, maxPull])

  return ref
}
