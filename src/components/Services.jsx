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

        <div className="space-y-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`rounded-2xl border p-6 transition-colors ${
                i === 0
                  ? 'bg-signal border-signal text-bone'
                  : 'bg-panel border-line hover:border-signal'
              }`}
            >
              <h3 className="font-display text-xl mb-2">{service.title}</h3>
              <p className={`text-sm mb-4 ${i === 0 ? 'text-bone/85' : 'text-mute'}`}>
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs uppercase tracking-wide rounded-full px-2.5 py-1 border ${
                      i === 0 ? 'border-bone/40' : 'border-line text-mute'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
