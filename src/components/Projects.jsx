// TODO(Yuvraj): swap these for your real projects — name, description, tags, links, and a cover image/screenshot.
const PROJECTS = [
  {
    name: 'Project One',
    description: 'Short one-line description of what it does.',
    tags: ['React', 'Node'],
  },
  {
    name: 'Project Two',
    description: 'Short one-line description of what it does.',
    tags: ['Next.js', 'PostgreSQL'],
  },
  {
    name: 'Project Three',
    description: 'Short one-line description of what it does.',
    tags: ['TypeScript', 'API'],
  },
  {
    name: 'Project Four',
    description: 'Short one-line description of what it does.',
    tags: ['Full-stack'],
  },
]

export default function Projects() {
  return (
    <section id="work" className="section py-24 sm:py-32">
      <div className="flex items-end justify-between mb-12">
        <h2 className="font-display text-3xl sm:text-4xl">Selected work</h2>
        <a href="#" className="hidden sm:inline text-sm text-mute hover:text-bone transition-colors">
          View all projects &rarr;
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <a
            key={project.name}
            href="#"
            className="group relative overflow-hidden rounded-2xl bg-panel border border-line p-8 aspect-[4/3] flex flex-col justify-end hover:border-signal transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <h3 className="font-display text-2xl mb-2">{project.name}</h3>
              <p className="text-mute text-sm mb-4">{project.description}</p>
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
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
