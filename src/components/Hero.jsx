import { useEffect, useState, useRef } from 'react'
import useMagnetic from '../hooks/useMagnetic.js'
import yuvrajAvatar from '../assets/yuvraj-3d-avatar-transparent.png'

const CYCLE_WORDS = ['ship.', 'scale.', 'learn.']
const CYCLE_MS = 2200

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [cycling, setCycling] = useState(true)

  const avatarRef = useRef(null)
  const avatarLightRef = useRef(null)

  const avatarTarget = useRef({ x: 0, y: 0 })
  const avatarCurrent = useRef({ x: 0, y: 0 })
  const animationFrame = useRef(null)

  const workRef = useMagnetic(0.3, 12)
  const touchRef = useMagnetic(0.3, 12)

  /* ==========================================================
     WORD CYCLING
  ========================================================== */

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    setCycling(!prefersReduced)

    if (prefersReduced) return

    const id = setInterval(() => {
      setWordIndex((index) => (index + 1) % CYCLE_WORDS.length)
    }, CYCLE_MS)

    return () => clearInterval(id)
  }, [])

  /* ==========================================================
     AVATAR 3D PARALLAX + LIGHTING
  ========================================================== */

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const isTouchDevice =
      window.matchMedia('(hover: none)').matches ||
      window.matchMedia('(pointer: coarse)').matches

    if (prefersReduced || isTouchDevice) return

    const handleMouseMove = (event) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight

      const normalizedX = (x - 0.5) * 2
      const normalizedY = (y - 0.5) * 2

      avatarTarget.current = {
        x: normalizedX,
        y: normalizedY,
      }
    }

    const handleMouseLeave = () => {
      avatarTarget.current = {
        x: 0,
        y: 0,
      }
    }

    const animate = () => {
      const current = avatarCurrent.current
      const target = avatarTarget.current

      current.x += (target.x - current.x) * 0.055
      current.y += (target.y - current.y) * 0.055

      if (avatarRef.current) {
        const rotateY = current.x * 5
        const rotateX = current.y * -4
        const translateX = current.x * 8
        const translateY = current.y * 5

        avatarRef.current.style.transform = `
          translate3d(${translateX}px, ${translateY}px, 0)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `
      }

      if (avatarLightRef.current) {
        const lightX = 50 + current.x * 18
        const lightY = 35 + current.y * 16

        avatarLightRef.current.style.background = `
          radial-gradient(
            circle at ${lightX}% ${lightY}%,
            rgba(255, 244, 232, 0.16) 0%,
            rgba(238, 232, 223, 0.07) 18%,
            rgba(184, 156, 152, 0.035) 38%,
            transparent 68%
          )
        `
      }

      animationFrame.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, {
      passive: true,
    })

    window.addEventListener('mouseleave', handleMouseLeave)

    animationFrame.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current)
      }

      if (avatarRef.current) {
        avatarRef.current.style.transform = ''
      }
    }
  }, [])

  return (
    <section
      id="top"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        px-5
        pt-32
        pb-16
        sm:px-6
        sm:pt-40
        sm:pb-20
        lg:px-0
        lg:pt-44
        lg:pb-24
      "
    >
      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-35%]
          top-[4%]
          -z-20
          h-[480px]
          w-[480px]
          rounded-full
          blur-[120px]
          sm:right-[-20%]
          sm:h-[600px]
          sm:w-[600px]
          sm:blur-[145px]
          lg:right-[-8%]
          lg:top-[8%]
          lg:h-[700px]
          lg:w-[700px]
          lg:blur-[160px]
        "
        style={{
          background:
            'radial-gradient(circle, rgba(190,181,172,0.075) 0%, rgba(184,156,152,0.025) 40%, transparent 72%)',
        }}
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-20%]
          bottom-[-8%]
          -z-20
          h-[400px]
          w-[400px]
          rounded-full
          blur-[125px]
          sm:right-[-8%]
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-[150px]
          lg:right-[5%]
          lg:bottom-[-15%]
          lg:h-[550px]
          lg:w-[550px]
          lg:blur-[170px]
        "
        style={{
          background:
            'radial-gradient(circle, rgba(104,27,36,0.055) 0%, transparent 70%)',
        }}
      />

      {/* =====================================================
          MAIN HERO
      ====================================================== */}

      <div className="section relative">
        <div
          className="
            grid
            min-h-0
            items-center
            gap-10
            lg:min-h-[calc(100vh-180px)]
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-4
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20">
            <div
              className="mb-6 animate-fade-up sm:mb-8"
              style={{ animationDelay: '0ms' }}
            >
              <p className="eyebrow">
                Yuvraj Jha — Developer
              </p>
            </div>

            <h1
              className="
                max-w-4xl
                font-display
                font-medium
                text-[clamp(3.25rem,13vw,5.25rem)]
                leading-[0.9]
                tracking-tightest
                text-[#EEE8DF]
                sm:text-[clamp(4rem,8vw,5.75rem)]
                lg:text-[5.9rem]
                xl:text-[6.2rem]
                animate-fade-up
              "
              style={{ animationDelay: '80ms' }}
            >
              Build things{' '}

              <span
                key={cycling ? wordIndex : 'static'}
                className={`
                  inline-block
                  italic
                  text-[#B89C98]
                  ${cycling ? 'animate-word-cycle' : ''}
                `}
              >
                that {CYCLE_WORDS[wordIndex]}
              </span>
            </h1>

            <p
              className="
                mt-6
                max-w-[590px]
                font-body
                text-sm
                leading-[1.7]
                text-[#B8B0A8]
                sm:mt-8
                sm:text-base
                lg:text-lg
                animate-fade-up
              "
              style={{ animationDelay: '190ms' }}
            >
              Turning coursework and side projects into real,
              working systems — looking for an internship to do
              that for real.
            </p>

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-3
                sm:mt-9
                sm:gap-4
                animate-fade-up
              "
              style={{ animationDelay: '280ms' }}
            >
              <a
                ref={workRef}
                href="#work"
                data-cursor="link"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-[#EEE8DF]
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-[#0C0C0C]
                  shadow-[0_14px_45px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:bg-[#B89C98]
                  sm:px-6
                  sm:text-sm
                  will-change-transform
                "
              >
                View my work
                <span>→</span>
              </a>

              <a
                ref={touchRef}
                href="#contact"
                data-cursor="link"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-[#B8B0A8]/25
                  bg-[#151515]/50
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-[#EEE8DF]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:border-[#B89C98]/45
                  hover:bg-[#681B24]/10
                  sm:px-6
                  sm:text-sm
                  will-change-transform
                "
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* =================================================
              RIGHT — BLENDED YUVRAJ
          ================================================= */}

          <div
            className="
              relative
              mt-0
              flex
              min-h-[390px]
              items-center
              justify-center
              sm:min-h-[480px]
              lg:mt-0
              lg:min-h-[650px]
            "
          >
            {/* Large ambient light */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[380px]
                w-[380px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                blur-[100px]
                sm:h-[480px]
                sm:w-[480px]
                sm:blur-[120px]
                lg:h-[520px]
                lg:w-[520px]
                lg:blur-[130px]
              "
              style={{
                background:
                  'radial-gradient(circle, rgba(205,197,188,0.10) 0%, rgba(184,156,152,0.045) 38%, transparent 72%)',
              }}
            />

            {/* Burgundy atmospheric light */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                bottom-[3%]
                left-1/2
                h-[240px]
                w-[280px]
                -translate-x-1/2
                rounded-full
                blur-[90px]
                sm:h-[300px]
                sm:w-[340px]
                sm:blur-[105px]
                lg:bottom-[8%]
                lg:h-[320px]
                lg:w-[360px]
                lg:blur-[110px]
              "
              style={{
                background:
                  'radial-gradient(circle, rgba(104,27,36,0.10) 0%, transparent 72%)',
              }}
            />

            {/* =================================================
                AVATAR 3D STAGE
            ================================================= */}

            <div
              ref={avatarRef}
              className="
                relative
                z-10
                w-[min(88vw,390px)]
                sm:w-[min(78vw,440px)]
                lg:w-[500px]
                xl:w-[540px]
                will-change-transform
              "
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Floating layer */}

              <div
                className="
                  animate-[avatarFloat_7s_ease-in-out_infinite]
                "
              >
                <img
                  src={yuvrajAvatar}
                  alt="Yuvraj Jha 3D avatar"
                  draggable="false"
                  className="
                    relative
                    block
                    w-full
                    select-none
                    object-contain
                    opacity-[0.98]
                    brightness-[1.03]
                    contrast-[1.04]
                    saturate-[0.90]
                    drop-shadow-[0_30px_70px_rgba(0,0,0,0.55)]
                    sm:drop-shadow-[0_35px_80px_rgba(0,0,0,0.55)]
                  "
                />

                {/* Cursor-reactive light */}

                <div
                  ref={avatarLightRef}
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    transition-opacity
                    duration-500
                  "
                  style={{
                    background:
                      'radial-gradient(circle at 50% 35%, rgba(255,244,232,0.10) 0%, rgba(238,232,223,0.045) 18%, rgba(184,156,152,0.025) 38%, transparent 68%)',
                    mixBlendMode: 'screen',
                  }}
                />

                {/* Static atmospheric lighting */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(ellipse_at_50%_38%,rgba(238,232,223,0.035),transparent_45%),radial-gradient(ellipse_at_55%_72%,rgba(104,27,36,0.05),transparent_62%)]
                    mix-blend-screen
                  "
                />
              </div>
            </div>

            {/* =================================================
                FLOATING DETAILS
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                right-[3%]
                top-[14%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#B89C98]/60
                shadow-[0_0_18px_rgba(184,156,152,0.6)]
                sm:right-[8%]
                sm:top-[17%]
                sm:h-2
                sm:w-2
                sm:shadow-[0_0_24px_rgba(184,156,152,0.7)]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[14%]
                left-[4%]
                h-1
                w-1
                rounded-full
                bg-[#B8B0A8]/40
                sm:bottom-[21%]
                sm:left-[11%]
                sm:h-1.5
                sm:w-1.5
                sm:bg-[#B8B0A8]/45
              "
            />
          </div>
        </div>

        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <div
          className="
            mt-4
            border-t
            border-[#B8B0A8]/12
            pt-5
            sm:mt-8
            animate-fade-up
          "
          style={{ animationDelay: '380ms' }}
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.20em]
                text-[#7F7974]
                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              Frontend · Backend · Full Stack
            </p>

            <a
              href="#work"
              data-cursor="link"
              className="
                group
                flex
                items-center
                gap-2
                text-[9px]
                uppercase
                tracking-[0.20em]
                text-[#7F7974]
                transition-colors
                duration-300
                hover:text-[#B89C98]
                sm:text-[10px]
                sm:tracking-[0.22em]
              "
            >
              Scroll to explore

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-y-1
                "
              >
                ↓
              </span>
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="
            mx-auto
            mt-10
            h-px
            w-12
            bg-gradient-to-r
            from-transparent
            via-[#B89C98]/30
            to-transparent
            sm:mt-12
            sm:w-16
          "
        />
      </div>

      {/* =====================================================
          AVATAR FLOAT
      ====================================================== */}

      <style>{`
        @keyframes avatarFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-9px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .avatarFloat {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}