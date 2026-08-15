import { useEffect, useRef } from 'react'
import Reveal from './Reveal.jsx'

const SKILLS = [
  {
    name: 'Java',
    category: 'Core',
    size: 'large',
    x: 18,
    y: 24,
    z: 40,
    duration: 8,
    delay: 0,
  },
  {
    name: 'React',
    category: 'Frontend',
    size: 'large',
    x: 72,
    y: 21,
    z: 80,
    duration: 10,
    delay: -2,
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    size: 'large',
    x: 79,
    y: 64,
    z: 30,
    duration: 11,
    delay: -5,
  },
  {
    name: 'Python',
    category: 'Core',
    size: 'medium',
    x: 27,
    y: 72,
    z: 90,
    duration: 9,
    delay: -3,
  },
  {
    name: 'C',
    category: 'Core',
    size: 'medium',
    x: 47,
    y: 17,
    z: 20,
    duration: 12,
    delay: -7,
  },
  {
    name: 'HTML',
    category: 'Frontend',
    size: 'medium',
    x: 13,
    y: 52,
    z: 60,
    duration: 10,
    delay: -1,
  },
  {
    name: 'CSS',
    category: 'Frontend',
    size: 'medium',
    x: 55,
    y: 77,
    z: 45,
    duration: 9,
    delay: -6,
  },
  {
    name: 'Flask',
    category: 'Backend',
    size: 'medium',
    x: 91,
    y: 39,
    z: 55,
    duration: 13,
    delay: -4,
  },
  {
    name: 'Node.js',
    category: 'Backend',
    size: 'medium',
    x: 42,
    y: 89,
    z: 15,
    duration: 11,
    delay: -8,
  },
  {
    name: 'MySQL',
    category: 'Database',
    size: 'medium',
    x: 7,
    y: 82,
    z: 35,
    duration: 12,
    delay: -2,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    size: 'small',
    x: 87,
    y: 83,
    z: 75,
    duration: 14,
    delay: -9,
  },
  {
    name: 'Git',
    category: 'Tools',
    size: 'small',
    x: 34,
    y: 10,
    z: 70,
    duration: 8,
    delay: -4,
  },
  {
    name: 'GitHub',
    category: 'Tools',
    size: 'small',
    x: 63,
    y: 10,
    z: 35,
    duration: 13,
    delay: -6,
  },
  {
    name: 'OOP',
    category: 'Foundations',
    size: 'small',
    x: 5,
    y: 34,
    z: 20,
    duration: 10,
    delay: -1,
  },
  {
    name: 'DBMS',
    category: 'Foundations',
    size: 'small',
    x: 95,
    y: 70,
    z: 25,
    duration: 12,
    delay: -5,
  },
  {
    name: 'Data Structures',
    category: 'Foundations',
    size: 'small',
    x: 60,
    y: 92,
    z: 65,
    duration: 14,
    delay: -10,
  },
  {
    name: 'Operating Systems',
    category: 'Foundations',
    size: 'small',
    x: 38,
    y: 42,
    z: 10,
    duration: 15,
    delay: -7,
  },
]

function SkillBubble({ skill, index }) {
  return (
    <div
      className={`skill-orb skill-orb--${skill.size}`}
      style={{
        '--skill-x': `${skill.x}%`,
        '--skill-y': `${skill.y}%`,
        '--skill-z': skill.z,
        '--skill-duration': `${skill.duration}s`,
        '--skill-delay': `${skill.delay}s`,
        '--skill-index': index,
      }}
      data-cursor="view"
    >
      <div className="skill-orb__inner">
        <span className="skill-orb__name">
          {skill.name}
        </span>

        <span className="skill-orb__category">
          {skill.category}
        </span>
      </div>
    </div>
  )
}

export default function Skills() {
  const spaceRef = useRef(null)

  useEffect(() => {
    const space = spaceRef.current

    if (!space) return

    const canHover = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches

    if (!canHover) return

    let rafId = null
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const handlePointerMove = (event) => {
      const rect = space.getBoundingClientRect()

      const relativeX =
        (event.clientX - rect.left) / rect.width

      const relativeY =
        (event.clientY - rect.top) / rect.height

      targetX = (relativeX - 0.5) * 2
      targetY = (relativeY - 0.5) * 2
    }

    const handlePointerLeave = () => {
      targetX = 0
      targetY = 0
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.055
      currentY += (targetY - currentY) * 0.055

      space.style.setProperty(
        '--space-x',
        `${currentX * 18}px`
      )

      space.style.setProperty(
        '--space-y',
        `${currentY * 14}px`
      )

      rafId = requestAnimationFrame(animate)
    }

    space.addEventListener(
      'pointermove',
      handlePointerMove
    )

    space.addEventListener(
      'pointerleave',
      handlePointerLeave
    )

    rafId = requestAnimationFrame(animate)

    return () => {
      space.removeEventListener(
        'pointermove',
        handlePointerMove
      )

      space.removeEventListener(
        'pointerleave',
        handlePointerLeave
      )

      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <section
      id="skills"
      className="section skills-section py-24 sm:py-32 lg:py-40"
    >
      <Reveal as="div">
        <div className="skills-heading">
          <div>
            <span className="skills-eyebrow">
              Skills / 01
            </span>

            <h2 className="skills-title">
              A toolkit
              <br />
              <em>in motion.</em>
            </h2>
          </div>

          <p className="skills-intro">
            The technologies and fundamentals I've picked up while
            turning coursework, experiments and ideas into working
            systems.
          </p>
        </div>
      </Reveal>

      <Reveal as="div" delay={120}>
        <div
          ref={spaceRef}
          className="skills-space"
          aria-label="Technologies and skills"
        >
          <div className="skills-space__stars" />

          <div className="skills-space__glow skills-space__glow--one" />
          <div className="skills-space__glow skills-space__glow--two" />

          <div className="skills-core">
            <div className="skills-core__halo" />

            <div className="skills-core__content">
              <span className="skills-core__eyebrow">
                YUVRAJ
              </span>

              <strong>
                SKILLS
              </strong>

              <span className="skills-core__hint">
                explore
              </span>
            </div>
          </div>

          <div
            className="skills-orbit skills-orbit--one"
            aria-hidden="true"
          />

          <div
            className="skills-orbit skills-orbit--two"
            aria-hidden="true"
          />

          <div className="skills-bubbles">
            {SKILLS.map((skill, index) => (
              <SkillBubble
                key={skill.name}
                skill={skill}
                index={index}
              />
            ))}
          </div>

          <div className="skills-space__caption">
            <span>01</span>
            <span>Core technologies</span>
            <span>17 skills</span>
          </div>
        </div>
      </Reveal>

      <Reveal as="div" delay={300}>
        <div className="skills-footer">
          <span>Always learning</span>

          <div className="skills-footer__line" />

          <span>17 technologies &amp; concepts</span>
        </div>
      </Reveal>
    </section>
  )
}