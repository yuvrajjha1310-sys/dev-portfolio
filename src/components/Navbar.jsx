import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on Escape and lock body scroll while it's open.
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [menuOpen])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled || menuOpen ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
      <nav className="section flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
          <span className="h-2 w-2 rounded-full bg-signal group-hover:bg-signal2 transition-colors" />
          <span className="font-display text-lg tracking-tight">Yuvraj J.</span>
        </a>

        <ul className="hidden sm:flex items-center gap-8 text-sm text-mute">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="relative py-1 hover:text-bone transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-signal after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-signal px-4 py-2 text-sm font-medium text-bone transition-all duration-300 hover:bg-signal2 hover:-translate-y-0.5" onClick={() => setMenuOpen(false)}>
            Contact
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="sm:hidden flex h-9 w-9 items-center justify-center rounded-full border border-line text-bone"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t ${
          menuOpen ? 'max-h-64 opacity-100 border-line' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <ul className="section flex flex-col py-4 gap-1 text-sm">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-mute hover:text-bone transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-mute hover:text-bone transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}