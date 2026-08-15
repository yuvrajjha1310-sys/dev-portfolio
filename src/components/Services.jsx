import { useState } from 'react'

const SERVICES = [
  {
    title: 'Frontend Development',
    description: 'Building interfaces that are fast, accessible, and easy to use.',
    tags: ['JavaScript', 'HTML/CSS', 'Responsive'],
  },
  {
    title: 'Backend & Databases',
    description: 'Structured systems underneath — data modeling, queries, and application logic that holds up.',
    tags: ['Java', 'MySQL', 'SQL'],
  },
]

const TOOLS = ['Java', 'JavaScript', 'Python', 'SQL', 'MySQL', 'Git', 'GitHub', 'VS Code']

export default function Services() {
  // Card-stack interaction: the active card comes forward in the signal
  // color, the rest recede/dim. Defaults to the first card at rest, same
  // as the previous static design.
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="services" className="section py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight">
            What I help you{' '}
            <span className="italic text-signal">build.</span>
          </h2>

          <p className="mt-6 text-mute max-w-sm">Tools I use</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="text-xs font-medium text-bone border border-line rounded-lg px-3 py-2"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div
          className="space-y-4"
          onMouseLeave={() => setActiveIndex(0)}
        >
          {SERVICES.map((service, i) => {
            const isActive = i === activeIndex
            return (
              <div
                key={service.title}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                className={`relative rounded-2xl border p-6 cursor-pointer transition-all duration-300 ease-out will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-signal ${
                  isActive
                    ? 'bg-signal border-signal text-bone scale-[1.02] shadow-2xl shadow-signal/20 z-10'
                    : 'bg-panel border-line text-bone opacity-60 scale-[0.98] hover:opacity-80'
                }`}
              >
                <h3 className="font-display text-xl mb-2">{service.title}</h3>
                <p className={`text-sm mb-4 ${isActive ? 'text-bone/85' : 'text-mute'}`}>
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs uppercase tracking-wide rounded-full px-2.5 py-1 border ${
                        isActive ? 'border-bone/40' : 'border-line text-mute'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
