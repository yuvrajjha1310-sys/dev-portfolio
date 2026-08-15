import { useEffect, useState } from 'react'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-ink/80 backdrop-blur-md border-b border-line' : 'bg-transparent'}`}>
      <nav className="section flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 group">
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

        <a href="#contact" className="inline-flex items-center rounded-full bg-signal px-4 py-2 text-sm font-medium text-bone transition-all duration-300 hover:bg-signal2 hover:-translate-y-0.5">
          Contact
        </a>
      </nav>
    </header>
  )
}