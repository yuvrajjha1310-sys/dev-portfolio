import Reveal from './Reveal.jsx'

// Sourced from src/data/knowledgeBase.json. No employment history exists yet
// (Yuvraj is a BCA student), so this section reflects education instead of
// a fabricated job entry.
const EDUCATION = [
  { degree: 'Bachelor of Computer Applications (BCA)', org: 'MERI College, GGSIPU', period: '2nd Year, Sem 4 — expected 2027' },
]

export default function About() {
  return (
    <section id="about" className="section py-24 sm:py-32">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        <Reveal as="div">
          {/* TODO(Yuvraj): swap this for a real photo — replace the div below with an <img src="/your-photo.jpg" alt="Yuvraj Jha" /> */}
          <div className="aspect-square w-full max-w-[280px] rounded-2xl bg-panel border border-line flex items-center justify-center text-mute text-sm">
            Photo
          </div>
          <h3 className="font-display text-xl mt-5">Yuvraj Jha</h3>
          <p className="text-mute text-sm mt-1">BCA Student &amp; Java Developer</p>
        </Reveal>

        <Reveal as="div" delay={100}>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl">
            I'm a BCA student at GGSIPU with strong fundamentals in Java, C,
            Data Structures, and DBMS. I like turning coursework into real,
            working systems — and I'm looking for internship and software
            development opportunities to apply that in the real world.
          </p>

          <h4 className="eyebrow mt-12 mb-4">Education</h4>
          <div className="space-y-4">
            {EDUCATION.map((item) => (
              <div
                key={item.org}
                className="flex items-center justify-between border-b border-line pb-4"
              >
                <div>
                  <p className="font-medium">{item.degree}</p>
                  <p className="text-mute text-sm">{item.org}</p>
                </div>
                <p className="text-mute text-sm shrink-0 ml-4">{item.period}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
