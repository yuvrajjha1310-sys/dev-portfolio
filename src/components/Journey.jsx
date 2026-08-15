import Reveal from './Reveal.jsx'

const LEVELS = [
  {
    n: '01',
    label: 'LEARN',
    heading: 'The foundation.',
    body:
      'Started with Java, C, Python, SQL and the fundamentals of web development — building the problem-solving foundation behind everything that came after.',
    skills: ['Java', 'C', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    n: '02',
    label: 'STRUCTURE',
    heading: 'Understanding systems.',
    body:
      'Moved beyond syntax into the systems underneath software — DBMS, Operating Systems, Data Structures and OOP — while developing a Git and GitHub workflow.',
    skills: ['DBMS', 'Operating Systems', 'DSA', 'OOP', 'Git', 'GitHub'],
  },
  {
    n: '03',
    label: 'BUILD',
    heading: 'Turning theory into software.',
    body:
      'Built Java + MySQL applications for real workflows: library management, attendance tracking and car rental management.',
    skills: ['Java', 'MySQL', 'Applications', 'Database'],
  },
  {
    n: '04',
    label: 'SHIP',
    heading: 'Building for the web.',
    body:
      'Moved into full-stack and frontend development, creating deployed websites and applications for real-world use cases.',
    skills: [
      'React',
      'Flask',
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
  },
  {
    n: '05',
    label: 'EXPERIENCE',
    heading: 'Stepping into the real world.',
    body:
      'Completed a 2-month internship at Digital Tatsat, gaining professional exposure and experience working in a real development environment.',
    skills: [
      'Digital Tatsat',
      '2-Month Internship',
      'Professional Experience',
    ],
  },
  {
    n: '06',
    label: 'NEXT',
    heading: 'Ready for what comes next.',
    body:
      'Currently in my 5th semester of BCA at GGSIPU, continuing to build, learn and actively looking for internship and job opportunities in software development.',
    skills: [
      '5th Semester',
      'BCA',
      'Internships',
      'Job Opportunities',
    ],
  },
]

function JourneyLevel({ level, index }) {
  return (
    <Reveal
      as="article"
      delay={index * 80}
      className="journey-level"
    >
      <div className="journey-level__number">
        <span>{level.n}</span>
      </div>

      <div className="journey-level__line">
        <span className="journey-level__dot" />
      </div>

      <div className="journey-level__content">
        <div className="journey-level__top">
          <span className="journey-level__label">
            {level.label}
          </span>

          <span className="journey-level__index">
            LEVEL {level.n}
          </span>
        </div>

        <h3>{level.heading}</h3>

        <p>{level.body}</p>

        <div className="journey-level__skills">
          {level.skills.map((skill) => (
            <span
              key={skill}
              data-cursor="view"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="section journey-section py-24 sm:py-32 lg:py-40"
    >
      <Reveal as="div">
        <div className="journey-heading">
          <div>
            <span className="journey-eyebrow">
              Journey / 02
            </span>

            <h2 className="journey-title">
              How I got
              <br />
              <em>here.</em>
            </h2>
          </div>

          <p className="journey-intro">
            Every level came from building something, learning something
            new, and pushing the boundary of what I could do next.
          </p>
        </div>
      </Reveal>

      <div className="journey-track">
        {LEVELS.map((level, index) => (
          <JourneyLevel
            key={level.n}
            level={level}
            index={index}
          />
        ))}
      </div>

      <Reveal
        as="div"
        delay={LEVELS.length * 80}
      >
        <div className="journey-footer">
          <span>Current level</span>

          <div className="journey-footer__line" />

          <span>06 / NEXT</span>
        </div>
      </Reveal>
    </section>
  )
}