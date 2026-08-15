import Reveal from './Reveal.jsx'

const PRINCIPLES = [
  {
    number: '01',
    title: 'Think',
    text: 'Understand the problem before reaching for the code.',
  },
  {
    number: '02',
    title: 'Build',
    text: 'Turn ideas into working software instead of leaving them as concepts.',
  },
  {
    number: '03',
    title: 'Iterate',
    text: 'Keep improving the details until the result feels right.',
  },
]

export default function Testimonial() {
  return (
    <section
      id="philosophy"
      className="section philosophy-section py-24 sm:py-32 lg:py-40"
    >
      <Reveal as="div">
        <div className="philosophy-shell">
          <div className="philosophy-orb" />

          <div className="philosophy-top">
            <span>04 / Working philosophy</span>

            <span>How I approach building</span>
          </div>

          <div className="philosophy-quote">
            <span className="philosophy-mark">“</span>

            <blockquote>
              Clarity before code.
              <br />
              <em>Build with intention.</em>
            </blockquote>
          </div>

          <div className="philosophy-description">
            <p>
              Structured thinking, staying consistent until a project is
              actually done, and picking up new tools quickly enough to keep
              moving forward.
            </p>

            <span>— Yuvraj, on how he works</span>
          </div>

          <div className="philosophy-principles">
            {PRINCIPLES.map((principle, index) => (
              <Reveal
                key={principle.number}
                as="div"
                delay={index * 100}
              >
                <article className="philosophy-principle">
                  <span className="philosophy-principle__number">
                    {principle.number}
                  </span>

                  <div>
                    <h3>{principle.title}</h3>

                    <p>{principle.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}