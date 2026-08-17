import { useState } from 'react'
import Reveal from './Reveal.jsx'

const EMAIL = 'yuvrajjha1310@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <footer
      id="contact"
      className="section contact-section pt-24 pb-8 sm:pt-32 lg:pt-40"
    >
      <div className="contact-shell">
        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div
          className="contact-orb contact-orb--one"
          aria-hidden="true"
        />

        <div
          className="contact-orb contact-orb--two"
          aria-hidden="true"
        />

        <div
          className="contact-grid"
          aria-hidden="true"
        />

        {/* =====================================================
            HEADER
        ====================================================== */}

        <Reveal as="div">
          <div className="contact-heading">
            <span className="contact-eyebrow">
              07 / Let&apos;s connect
            </span>

            <h2 className="contact-title">
              Have something
              <br />
              <em>worth building?</em>
            </h2>

            <p className="contact-intro">
              Open to software development internships, job opportunities,
              interesting projects, and conversations with people building
              things worth working on.
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            CONTACT ACTION
        ====================================================== */}

        <Reveal as="div" delay={100}>
          <div className="contact-primary">
            <div>
              <span className="contact-primary__label">
                Start a conversation
              </span>

              <a
                href={`mailto:${EMAIL}`}
                className="contact-email"
                data-cursor="link"
              >
                {EMAIL}
              </a>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="contact-copy"
              data-cursor="link"
              aria-label="Copy email address"
            >
              <span>
                {copied ? 'Copied' : 'Copy email'}
              </span>

              <span aria-hidden="true">
                {copied ? '✓' : '↗'}
              </span>
            </button>
          </div>
        </Reveal>

        {/* =====================================================
            INFORMATION
        ====================================================== */}

        <Reveal as="div" delay={180}>
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <span className="contact-info-card__number">
                01
              </span>

              <div>
                <span className="contact-info-card__label">
                  Location
                </span>

                <p>New Delhi, India</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-card__number">
                02
              </span>

              <div>
                <span className="contact-info-card__label">
                  Currently
                </span>

                <p>BCA · 5th Semester</p>
              </div>
            </div>

            <div className="contact-info-card">
              <span className="contact-info-card__number">
                03
              </span>

              <div>
                <span className="contact-info-card__label">
                  Open to
                </span>

                <p>Internships · Job Opportunities</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            SOCIAL LINKS
        ====================================================== */}

        <Reveal as="div" delay={240}>
          <div className="contact-socials">
            <span className="contact-socials__label">
              Find me elsewhere
            </span>

            <div className="contact-socials__links">
              <a
                href="https://github.com/yuvrajjha1310-sys"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label="Open Yuvraj's GitHub profile"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://linkedin.com/in/yuvrajhub"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label="Open Yuvraj's LinkedIn profile"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </a>

              <a
                href="https://www.instagram.com/yuvwtf?igsh=ZnZsbmd2MmFsYmp2"
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                aria-label="Open Yuvraj's Instagram profile"
              >
                <span>Instagram</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>

        {/* =====================================================
            FOOTER
        ====================================================== */}

        <Reveal as="div" delay={320}>
          <div className="contact-footer">
            <div className="contact-footer__meta">
              <span>
                © {new Date().getFullYear()} Yuvraj Jha
              </span>

              <span>
                Built with curiosity &amp; code
              </span>
            </div>

            <div className="contact-wordmark">
              YUVRAJ
            </div>

            <div className="contact-footer__bottom">
              <span>
                Portfolio / 2026
              </span>

              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault()

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }}
                data-cursor="link"
              >
                Back to top ↑
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}