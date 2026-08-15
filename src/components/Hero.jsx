export default function Hero() {
  return (
    <section id="top" className="section pt-40 pb-24 sm:pt-48 sm:pb-32">
      <p className="eyebrow mb-6 animate-fade-up" style={{ animationDelay: '0ms' }}>
        Yuvraj Jha — Developer
      </p>

      <h1
        className="font-display font-medium text-[13vw] sm:text-[7vw] lg:text-[6.2rem] leading-[0.95] tracking-tightest max-w-4xl animate-fade-up"
        style={{ animationDelay: '80ms' }}
      >
        Build things{' '}
        <span className="italic text-signal">that ship.</span>
      </h1>

      <p
        className="mt-8 max-w-xl text-lg text-mute font-body animate-fade-up"
        style={{ animationDelay: '200ms' }}
      >
        Turning coursework and side projects into real, working
        systems — looking for an internship to do that for real.
      </p>

      <div
        className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up"
        style={{ animationDelay: '300ms' }}
      >
        <a href="#work" className="inline-flex items-center rounded-full bg-bone px-6 py-3 text-sm font-medium text-ink transition-all duration-300 hover:bg-signal hover:text-bone hover:-translate-y-0.5">
          View my work
        </a>
        <a href="#contact" className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium text-bone transition-all duration-300 hover:border-signal hover:-translate-y-0.5">
          Get in touch
        </a>
      </div>
    </section>
  )
}