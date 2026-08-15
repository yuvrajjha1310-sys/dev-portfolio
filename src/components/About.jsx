import Reveal from './Reveal.jsx'
import yuvrajAvatar from '../assets/yuvraj-3d-avatar-transparent.png'

const EDUCATION = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    org: 'MERI College, GGSIPU',
    period: '5th Semester — expected 2027',
  },
]

export default function About() {
  return (
    <section id="about" className="section py-24 sm:py-32">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        <Reveal as="div">
          {/* =====================================================
              YUVRAJ AVATAR
          ====================================================== */}
          <div
            className="
              group
              relative
              aspect-square
              w-full
              max-w-[280px]
              overflow-hidden
              rounded-2xl
              border
              border-line
              bg-panel
            "
          >
            {/* Atmospheric glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                z-0
                opacity-0
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
              style={{
                background:
                  'radial-gradient(circle at 50% 38%, rgba(238,232,223,0.10) 0%, rgba(184,156,152,0.06) 35%, transparent 72%)',
              }}
            />

            <img
              src={yuvrajAvatar}
              alt="Yuvraj Jha"
              draggable="false"
              className="
                relative
                z-10
                h-full
                w-full
                object-contain
                select-none
                opacity-[0.98]
                brightness-[1.02]
                contrast-[1.03]
                saturate-[0.92]
                transition-transform
                duration-700
                ease-out
                group-hover:scale-[1.035]
              "
            />

            {/* Soft bottom depth */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-x-0
                bottom-0
                z-20
                h-1/3
                bg-gradient-to-t
                from-[#0B0B0B]/25
                to-transparent
                opacity-70
              "
            />
          </div>

          <h3 className="font-display text-xl mt-5">
            Yuvraj Jha
          </h3>

          <p className="text-mute text-sm mt-1">
            BCA Student &amp; Java Developer
          </p>
        </Reveal>

        <Reveal as="div" delay={100}>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl">
            I'm a BCA student at GGSIPU with strong fundamentals in Java, C,
            Data Structures, and DBMS. I like turning coursework into real,
            working systems — and I'm looking for internship and software
            development opportunities to apply that in the real world.
          </p>

          <h4 className="eyebrow mt-12 mb-4">
            Education
          </h4>

          <div className="space-y-4">
            {EDUCATION.map((item) => (
              <div
                key={item.org}
                className="
                  flex
                  flex-col
                  gap-2
                  border-b
                  border-line
                  pb-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  sm:gap-4
                "
              >
                <div>
                  <p className="font-medium">
                    {item.degree}
                  </p>

                  <p className="text-mute text-sm">
                    {item.org}
                  </p>
                </div>

                <p className="text-mute text-sm shrink-0">
                  {item.period}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}