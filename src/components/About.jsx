// TODO(Yuvraj): swap in your real photo (replace the placeholder div below with an <img>), bio, and work history.
const WORK_HISTORY = [
  { role: 'Role / Title', org: 'Company or Project', period: '20XX — Present' },
]

export default function About() {
  return (
    <section id="about" className="section py-24 sm:py-32">
      <div className="grid lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        <div>
          <div className="aspect-square w-full max-w-[280px] rounded-2xl bg-panel border border-line flex items-center justify-center text-mute text-sm">
            Photo
          </div>
          <h3 className="font-display text-xl mt-5">Yuvraj Jha</h3>
          <p className="text-mute text-sm mt-1">Developer</p>
        </div>

        <div>
          <p className="text-lg sm:text-xl leading-relaxed max-w-2xl">
            {/* TODO(Yuvraj): real bio goes here — a few sentences on how you work and what you care about */}
            I'm a developer who likes turning rough ideas into something people
            can actually use — combining solid engineering with attention to
            how it feels to use.
          </p>

          <h4 className="eyebrow mt-12 mb-4">Work history</h4>
          <div className="space-y-4">
            {WORK_HISTORY.map((job) => (
              <div
                key={job.org}
                className="flex items-center justify-between border-b border-line pb-4"
              >
                <div>
                  <p className="font-medium">{job.role}</p>
                  <p className="text-mute text-sm">{job.org}</p>
                </div>
                <p className="text-mute text-sm shrink-0 ml-4">{job.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
