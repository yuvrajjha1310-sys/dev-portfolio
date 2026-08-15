import Reveal from './Reveal.jsx'

import nexusProject from '../assets/nexus-project.jpg'
import attendxProject from '../assets/attendx-project.jpg'
import dentalProject from '../assets/dental-project.jpg'
import lumoraProject from '../assets/lumora-project.jpg'
import gadaProject from '../assets/gada-project.jpg'
import libraryProject from '../assets/library-management-project.png'
import carRentalProject from '../assets/car-rental-project.png'

const PROJECTS = [
  {
    number: '01',
    name: 'Nexus CRM',
    shortName: 'NEXUS',
    description:
      'A full-stack CRM and workforce management platform designed around authentication, role-based access, customers, leads, tasks, employees, attendance and business operations.',
    tags: ['React', 'Node.js', 'Prisma', 'PostgreSQL'],
    type: 'Full Stack',
    href: '#',
    featured: true,
    image: nexusProject,
  },

  {
    number: '02',
    name: 'AttendX',
    shortName: 'ATTENDX',
    description:
      'An attendance management system focused on attendance tracking, percentage calculation and student-focused academic monitoring.',
    tags: ['React', 'Flask', 'MySQL'],
    type: 'Full Stack',
    href: '#',
    featured: true,
    image: attendxProject,
  },

  {
    number: '03',
    name: 'Radiance Dental Clinic',
    shortName: 'RADIANCE',
    description:
      'A full-stack dental clinic website with a public-facing experience and appointment-focused functionality.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    type: 'Full Stack',
    href: 'https://dental-clinic-qyiy.onrender.com',
    image: dentalProject,
  },

  {
    number: '04',
    name: 'Lumora Interiors',
    shortName: 'LUMORA',
    description:
      'A premium interior designer website built around luxury visual presentation, services, portfolio work and a refined editorial aesthetic.',
    tags: ['HTML', 'CSS'],
    type: 'Frontend',
    href: 'https://lumora-interiors.netlify.app/',
    image: lumoraProject,
  },

  {
    number: '05',
    name: 'Gada Electronics',
    shortName: 'GADA',
    description:
      'An electronics and industrial technology website presenting products, engineering services, automation and business information.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    type: 'Frontend',
    href: 'https://gada-electronics-tau.vercel.app/',
    image: gadaProject,
  },

  {
    number: '06',
    name: 'Library Management System',
    shortName: 'LIBRARY',
    description:
      'A database-driven library management system for handling books, members, issue and return operations, transactions and library records.',
    tags: ['Java', 'MySQL'],
    type: 'Application',
    href: '#',
    image: libraryProject,
  },

  {
    number: '07',
    name: 'Car Rental Management System',
    shortName: 'RENTAL',
    description:
      'A rental management application focused on vehicle management, reservations, customers, payments and rental operations.',
    tags: ['Java', 'MySQL'],
    type: 'Application',
    href: '#',
    image: carRentalProject,
  },
]

function ProjectVisual({ project }) {
  return (
    <div
      aria-hidden="true"
      className="project-visual project-visual--image"
    >
      <img
        src={project.image}
        alt=""
        className="project-visual__image"
      />

      <div className="project-visual__image-overlay" />

      <div className="project-visual__noise" />

      <div className="project-visual__label">
        <span>{project.type}</span>
      </div>

      <div className="project-visual__view">
        <span>Open project</span>
        <span>↗</span>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  const isExternal = project.href !== '#'

  const content = (
    <>
      <div className="project-card__visual">
        <ProjectVisual project={project} />
      </div>

      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.number}</span>
          <span>{project.type}</span>
        </div>

        <div className="project-card__main">
          <h3>{project.name}</h3>

          <p>{project.description}</p>

          <div className="project-card__bottom">
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {isExternal && (
              <span
                className="project-card__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  )

  /*
   * Projects without live URLs are intentionally non-clickable.
   * This prevents href="#" from jumping the page to the top.
   */
  if (!isExternal) {
    return (
      <article
        className={`project-card ${
          project.featured ? 'project-card--featured' : ''
        }`}
        data-cursor="view"
      >
        {content}
      </article>
    )
  }

  /*
   * Live projects open in a new tab.
   */
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="link"
      className={`project-card ${
        project.featured ? 'project-card--featured' : ''
      }`}
      aria-label={`Open ${project.name}`}
    >
      {content}
    </a>
  )
}

export default function Projects() {
  return (
    <section
      id="work"
      className="section projects-section py-24 sm:py-32 lg:py-40"
    >
      <Reveal as="div">
        <div className="projects-heading">
          <div>
            <span className="projects-eyebrow">
              Selected work / 2023 — 2026
            </span>

            <h2 className="projects-title">
              Things I&apos;ve built
              <br />
              <em>along the way.</em>
            </h2>
          </div>

          <p className="projects-intro">
            From academic systems to deployed web experiences — a collection
            of projects where I&apos;ve been learning how to turn ideas into
            working products.
          </p>
        </div>
      </Reveal>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <Reveal
            key={project.name}
            as="div"
            delay={index * 70}
            className={
              project.featured
                ? 'project-reveal project-reveal--featured'
                : 'project-reveal'
            }
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal as="div" delay={PROJECTS.length * 70}>
        <div className="projects-footer">
          <span>More experiments coming soon</span>

          <div className="projects-footer__line" />

          <span>
            {String(PROJECTS.length).padStart(2, '0')} projects
          </span>
        </div>
      </Reveal>
    </section>
  )
}