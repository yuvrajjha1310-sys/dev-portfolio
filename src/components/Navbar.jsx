import { useEffect, useState } from 'react'
import useMagnetic from '../hooks/useMagnetic.js'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const contactRef = useMagnetic(0.3, 10)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKey)

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-500
        ${
          scrolled || menuOpen
            ? 'bg-[#0C0C0C]/78 backdrop-blur-2xl'
            : 'bg-transparent'
        }
      `}
    >
      <nav className="section flex h-20 items-center justify-between">
        {/* Logo */}
        <a
          href="#top"
          data-cursor="link"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className="
              relative flex h-8 w-8 items-center justify-center
              rounded-full
              border border-[#B8B0A8]/25
              bg-[#191919]/80
              backdrop-blur-xl
              transition-all duration-500
              group-hover:border-[#B89C98]/55
              group-hover:bg-[#681B24]/20
            "
          >
            <span
              className="
                h-2 w-2 rounded-full
                bg-[#EEE8DF]
                shadow-[0_0_12px_rgba(238,232,223,0.55)]
                transition-all duration-500
                group-hover:bg-[#B89C98]
                group-hover:shadow-[0_0_16px_rgba(184,156,152,0.75)]
              "
            />
          </span>

          <span
            className="
              font-display text-lg tracking-tight
              text-[#EEE8DF]
              transition-colors duration-300
            "
          >
            Yuvraj J.
          </span>
        </a>

        {/* Desktop navigation */}
        <ul
          className="
            hidden items-center gap-9
            text-sm sm:flex
          "
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="link"
                className="
                  group relative py-2
                  text-[#B8B0A8]
                  transition-colors duration-300
                  hover:text-[#EEE8DF]
                "
              >
                {link.label}

                <span
                  className="
                    absolute bottom-0 left-0
                    h-px w-0
                    bg-[#B89C98]
                    shadow-[0_0_8px_rgba(184,156,152,0.45)]
                    transition-all duration-300
                    group-hover:w-full
                  "
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <a
            ref={contactRef}
            href="#contact"
            data-cursor="link"
            className="
              hidden sm:inline-flex
              items-center
              rounded-full
              border border-[#B8B0A8]/20
              bg-[#191919]/75
              px-5 py-2.5
              text-sm font-medium
              text-[#EEE8DF]
              shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
              backdrop-blur-xl
              transition-all duration-500
              hover:border-[#B89C98]/45
              hover:bg-[#681B24]/18
              hover:shadow-[0_0_28px_rgba(104,27,36,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]
              will-change-transform
            "
            onClick={() => setMenuOpen(false)}
          >
            Let's talk
          </a>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            data-cursor="link"
            className="
              flex h-10 w-10 items-center justify-center
              rounded-full
              border border-[#B8B0A8]/20
              bg-[#191919]/75
              text-[#EEE8DF]
              backdrop-blur-xl
              transition-all duration-300
              hover:border-[#B89C98]/45
              sm:hidden
            "
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          overflow-hidden
          border-t
          transition-all duration-500
          sm:hidden
          ${
            menuOpen
              ? 'max-h-96 border-[#B8B0A8]/10 opacity-100'
              : 'max-h-0 border-transparent opacity-0'
          }
        `}
      >
        <div
          className="
            bg-[#0C0C0C]/92
            px-6 py-5
            backdrop-blur-2xl
          "
        >
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor="link"
                  onClick={() => setMenuOpen(false)}
                  className="
                    block rounded-xl
                    px-4 py-3
                    text-[#B8B0A8]
                    transition-all duration-300
                    hover:bg-[#191919]
                    hover:text-[#EEE8DF]
                  "
                >
                  {link.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                data-cursor="link"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-2 block rounded-xl
                  border border-[#B89C98]/20
                  bg-[#681B24]/12
                  px-4 py-3
                  text-[#EEE8DF]
                  transition-all duration-300
                  hover:bg-[#681B24]/22
                "
              >
                Let's talk
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}