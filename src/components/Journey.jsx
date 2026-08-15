import Reveal from './Reveal.jsx'

// Grounded in src/data/knowledgeBase.json — real skills and real project history,
// framed as a progression rather than a flat skills list.
const LEVELS = [
  {
    n: '01',
    label: 'Learn',
    heading: 'Fundamentals',
    body: 'Java, C, Python, SQL, HTML/CSS/JS — plus the theory underneath: Data Structures & Algorithms and OOP.',
  },
  {
    n: '02',
    label: 'Structure',
    heading: 'Systems thinking',
    body: 'DBMS and Operating Systems coursework, paired with a Git/GitHub workflow for version control on every project.',
  },
  {
    n: '03',
    label: 'Build',
    heading: 'Working software',
    body: 'Turned that theory into three Java + MySQL desktop systems — library management, attendance tracking, car rental — each with real database integration.',
  },
  {
    n: '04',
    label: 'Ship',
    heading: 'Full-stack web',
    body: 'Moved into full-stack web: a PHP/MySQL clinic site with a public front end and an admin panel, plus ongoing web projects.',
  },
  {
    n: '05',
    label: 'Next',
    heading: 'Looking for the next step',
    body: 'Currently a BCA student at GGSIPU, seeking a software development internship to apply these skills on a real team.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="section py-24 sm:py-32">
      <Reveal as="div">
        <h2 className="font-display text-3xl sm:text-4xl max-w-lg leading-tight">
          How I got <span className="italic text-signal">here.</span>
        </h2>
      </Reveal>

      <div className="mt-14 border-t border-line">
        {LEVELS.map((level, i) => (
          <Reveal key={level.n} as="div" delay={i * 60} className="grid sm:grid-cols-[100px_140px_1fr] gap-3 sm:gap-8 border-b border-line py-8">
            <span className="font-display text-mute text-sm tabular-nums">LEVEL {level.n}</span>
            <span className="eyebrow">{level.label}</span>
            <div className="max-w-xl">
              <h3 className="font-display text-xl sm:text-2xl mb-2">{level.heading}</h3>
              <p className="text-mute leading-relaxed">{level.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}