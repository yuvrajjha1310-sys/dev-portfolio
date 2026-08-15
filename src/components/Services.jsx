import { useState } from 'react'

const SERVICES = [
  {
    number: '01',
    title: 'Frontend Development',
    description:
      'Building interfaces that are fast, accessible, responsive, and designed to feel as good as they function.',
    tags: ['JavaScript', 'HTML/CSS', 'Responsive'],
  },
  {
    number: '02',
    title: 'Backend & Databases',
    description:
      'Structured systems underneath — application logic, data modelling, queries, authentication, and database integration.',
    tags: ['Java', 'MySQL', 'SQL'],
  },
]

const TOOLS = [
  'Java',
  'JavaScript',
  'Python',
  'SQL',
  'MySQL',
  'Git',
  'GitHub',
  'VS Code',
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handlePointerMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const percentX = (x / rect.width) * 100
    const percentY = (y / rect.height) * 100

    const rotateY = ((percentX - 50) / 50) * 2.2
    const rotateX = ((50 - percentY) / 50) * 2.2

    card.style.setProperty('--mouse-x', `${percentX}%`)
    card.style.setProperty('--mouse-y', `${percentY}%`)
    card.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-4px)
      translateZ(0)
    `
  }

  const handlePointerLeave = (event) => {
    const card = event.currentTarget

    card.style.setProperty('--mouse-x', '50%')
    card.style.setProperty('--mouse-y', '50%')
    card.style.transform = ''
  }

  const handleServiceClick = (index) => {
    setActiveIndex(index)

    const contact = document.getElementById('contact')

    if (contact) {
      contact.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section
      id="services"
      className="section services-section py-24 sm:py-32 lg:py-40"
    >
      <div className="services-heading">
        <div>
          <span className="services-eyebrow">
            Capabilities / What I build
          </span>

          <h2 className="services-title">
            What I help you
            <br />
            <em>build.</em>
          </h2>
        </div>

        <p className="services-intro">
          From polished interfaces to structured backend systems — I build
          practical software while continuing to grow toward production-level
          development.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map((service, index) => {
          const isActive = index === activeIndex

          return (
            <div
              key={service.title}
              className="service-card-reveal"
            >
              <article
                className={`service-card ${
                  isActive ? 'service-card--active' : ''
                }`}
                data-cursor="link"
                tabIndex={0}
                role="button"
                aria-pressed={isActive}
                aria-label={`Discuss ${service.title}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => handleServiceClick(index)}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    handleServiceClick(index)
                  }
                }}
              >
                <span className="service-card__number">
                  {service.number}
                </span>

                <div className="service-card__content">
                  <div className="service-card__top">
                    <span className="service-card__label">
                      {isActive ? 'Selected capability' : 'Capability'}
                    </span>

                    <span
                      className="service-card__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <div className="service-card__tags">
                    {service.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <span className="service-card__cta">
                    Discuss this
                    <span aria-hidden="true">↗</span>
                  </span>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      <div className="services-tools">
        <div className="services-tools__heading">
          <span>Tools I use</span>
          <span>{TOOLS.length} tools in the current stack</span>
        </div>

        <div className="services-tools__list">
          {TOOLS.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </section>
  )
}