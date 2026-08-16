import { useEffect, useState } from 'react'
import useMagnetic from '../hooks/useMagnetic.js'
import yuvrajAvatar from '../assets/yuvraj-3d-avatar.jpg'

const CYCLE_WORDS = ['ship.', 'scale.', 'learn.']
const CYCLE_MS = 2200

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [cycling, setCycling] = useState(true)

  const workRef = useMagnetic(0.3, 12)
  const touchRef = useMagnetic(0.3, 12)

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

  return (
    <section
      id="top"
      className="
        relative
        isolate
        min-h-screen
        overflow-hidden
        pt-36
        pb-20
        sm:pt-44
        sm:pb-24
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
          right-[-8%]
          top-[8%]
          -z-20
          h-[700px]
          w-[700px]
          rounded-full
          blur-[160px]
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
          right-[5%]
          bottom-[-15%]
          -z-20
          h-[550px]
          w-[550px]
          rounded-full
          blur-[170px]
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
            min-h-[calc(100vh-180px)]
            items-center
            lg:grid-cols-[1.02fr_0.98fr]
            lg:gap-4
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="relative z-20">

            <div
              className="mb-8 animate-fade-up"
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
                text-[12vw]
                leading-[0.9]
                tracking-tightest
                text-[#EEE8DF]
                sm:text-[7vw]
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
                mt-8
                max-w-[590px]
                font-body
                text-base
                leading-[1.7]
                text-[#B8B0A8]
                sm:text-lg
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
                mt-9
                flex
                flex-wrap
                items-center
                gap-4
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
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[#0C0C0C]
                  shadow-[0_14px_45px_rgba(0,0,0,0.22)]
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:bg-[#B89C98]
                  will-change-transform
                "
              >
                View my work
                <span aria-hidden="true">→</span>
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
                  px-6
                  py-3
                  text-sm
                  font-medium
                  text-[#EEE8DF]
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-0.5
                  hover:border-[#B89C98]/45
                  hover:bg-[#681B24]/10
                  will-change-transform
                "
              >
                Get in touch
              </a>

            </div>
          </div>


          {/* =================================================
              RIGHT — YUVRAJ
          ================================================= */}

          <div
            className="
              relative
              mt-8
              flex
              min-h-[500px]
              items-center
              justify-center
              lg:mt-0
              lg:min-h-[650px]
            "
          >

            {/* =================================================
                SOFT ANIMATED BACKLIGHT

                No circle.
                No ring.
                No visible shape.

                Just a broad diffused light source behind
                the portrait.
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                hero-avatar-glow
              "
            />


            {/* =================================================
                AVATAR
            ================================================= */}

            <div
              className="
                relative
                z-10
                w-[390px]
                sm:w-[440px]
                lg:w-[500px]
                xl:w-[540px]
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
                  mix-blend-screen
                  opacity-[0.96]
                  brightness-[1.08]
                  contrast-[1.08]
                  saturate-[0.88]
                  drop-shadow-[0_35px_80px_rgba(0,0,0,0.55)]
                "
              />

              {/* Very subtle light integration over the portrait */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-[radial-gradient(ellipse_at_50%_38%,rgba(238,232,223,0.035),transparent_45%),radial-gradient(ellipse_at_55%_72%,rgba(104,27,36,0.035),transparent_62%)]
                  mix-blend-screen
                "
              />

            </div>


            {/* =================================================
                FLOATING DETAILS
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                absolute
                right-[8%]
                top-[17%]
                h-2
                w-2
                rounded-full
                bg-[#B89C98]/70
                shadow-[0_0_24px_rgba(184,156,152,0.7)]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[21%]
                left-[11%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#B8B0A8]/45
              "
            />

          </div>

        </div>


        {/* =====================================================
            BOTTOM META
        ====================================================== */}

        <div
          className="
            border-t
            border-[#B8B0A8]/12
            pt-5
            animate-fade-up
          "
          style={{ animationDelay: '380ms' }}
        >

          <div
            className="
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-[#7F7974]
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
                text-[10px]
                uppercase
                tracking-[0.22em]
                text-[#7F7974]
                transition-colors
                duration-300
                hover:text-[#B89C98]
              "
            >
              Scroll to explore

              <span
                aria-hidden="true"
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
            mt-12
            h-px
            w-16
            bg-gradient-to-r
            from-transparent
            via-[#B89C98]/30
            to-transparent
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