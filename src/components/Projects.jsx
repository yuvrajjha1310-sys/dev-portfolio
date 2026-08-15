import Reveal from './Reveal.jsx'

// Sourced from src/data/knowledgeBase.json — the single source of truth for
// project details. Entries with an empty stack fall back to a "coming soon"
// placeholder rather than invented details.
const PROJECTS = [
  {
    name: 'Library Management System',
    description:
      'A system for book issue/return management and record tracking, with database integration for efficient data storage and retrieval.',
    tags: ['Java', 'MySQL'],
  },
  {
    name: 'Attendance Management System',
    description:
      'Automates attendance percentage calculation and 75% criteria tracking, with generated attendance reports to reduce manual effort.',
    tags: ['Java', 'MySQL'],
  },
  {
    name: 'Car Rental Management System',
    description: 'A rental booking and customer management solution built with OOP principles for maintainable application design.',
    tags: ['Java', 'MySQL'],
  },
  {
    name: 'Radiance Dental Clinic Website',
    description: 'A full-stack dental clinic website with a public site and an admin panel, built as a college project.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    name: 'Lumora Interior Designer Website',
    description: 'Details coming soon.',
    tags: [],
  },
  {
    name: 'Nexus CRM',
    description: 'Details coming soon.',
    tags: [],
  },
  {
    name: 'Electronics & Gadgets Store Website',
    description: 'Details coming soon.',
    tags: [],
  },
]

export default function Projects() {
  return (
    <section id="work" className="section py-24 sm:py-32">
      <Reveal as="div">
        <h2 className="font-display text-3xl sm:text-4xl mb-12">Selected work</h2>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} as="div" delay={i * 60}>
            <a
              href="#"
              className="group relative overflow-hidden rounded-2xl bg-panel border border-line p-8 aspect-[4/3] flex flex-col justify-end hover:border-signal transition-colors"
            >
              <span className="absolute top-6 left-8 text-xs text-mute font-medium">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <h3 className="font-display text-2xl mb-2">{project.name}</h3>
                <p className="text-mute text-sm mb-4">{project.description}</p>
                {project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs uppercase tracking-wide text-mute border border-line rounded-full px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
