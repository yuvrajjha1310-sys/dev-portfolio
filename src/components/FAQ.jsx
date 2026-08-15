import { useState } from 'react'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    number: '01',
    q: 'What kind of opportunities are you looking for?',
    a: 'I’m open to both software development internships and job opportunities where I can apply my Java, C, Python, SQL/MySQL and web development skills to real problems while continuing to learn and grow with a professional team.',
  },
  {
    number: '02',
    q: 'Do you have professional experience?',
    a: 'Yes. I completed a 2-month internship at Digital Tatsat, gaining hands-on exposure to a professional working environment. Alongside that experience, I’ve continued building academic and self-directed projects.',
  },
  {
    number: '03',
    q: 'What have you actually built?',
    a: 'I’ve built Java and MySQL systems including Library Management, Attendance Management and Car Rental applications, along with web projects such as Nexus CRM, AttendX, a dental clinic website, an interior designer website and an electronics website.',
  },
  {
    number: '04',
    q: 'Can you build full-stack applications?',
    a: 'Yes. I’ve worked across frontend interfaces, backend logic and databases. My projects include React-based applications as well as PHP/MySQL and Flask-based work.',
  },
  {
    number: '05',
    q: 'What are you currently focused on?',
    a: 'I’m currently focused on becoming a stronger software developer by improving my full-stack development skills, building better interfaces, understanding backend architecture and creating projects that are closer to production quality.',
  },
  {
    number: '06',
    q: 'Where are you currently in your studies?',
    a: 'I’m currently in my 5th semester of BCA at MERI College, GGSIPU, with my degree expected in 2027.',
  },
  {
    number: '07',
    q: 'How can I get in touch with you?',
    a: 'The easiest way is through the contact section at the bottom of this portfolio. You can also find my GitHub and LinkedIn profiles there.',
  },
]

function FAQItem({ item, open, onToggle }) {
  return (
    <div
      className={`faq-item ${
        open ? 'faq-item--open' : ''
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="faq-question"
      >
        <span className="faq-question__number">
          {item.number}
        </span>

        <span className="faq-question__text">
          {item.q}
        </span>

        <span
          className="faq-question__icon"
          aria-hidden="true"
        >
          <span />
          <span />
        </span>
      </button>

      <div
        className={`faq-answer ${
          open ? 'faq-answer--open' : ''
        }`}
        aria-hidden={!open}
      >
        <div className="faq-answer__inner">
          <p>{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    )
  }

  return (
    <section
      id="faq"
      className="section faq-section py-24 sm:py-32 lg:py-40"
    >
      <Reveal as="div">
        <div className="faq-heading">
          <div>
            <span className="faq-eyebrow">
              06 / Frequently asked
            </span>

            <h2 className="faq-title">
              A few things
              <br />
              <em>worth knowing.</em>
            </h2>
          </div>

          <p className="faq-intro">
            A little context about what I build, where I am right now,
            and what I&apos;m looking for next.
          </p>
        </div>
      </Reveal>

      <Reveal as="div" delay={100}>
        <div className="faq-list">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.number}
              item={item}
              open={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </Reveal>

      <Reveal as="div" delay={220}>
        <div className="faq-footer">
          <span className="faq-footer__line" />

          <span>
            Still have a question?
          </span>

          <a
            href="#contact"
            data-cursor="link"
            className="faq-footer__link"
          >
            Let&apos;s talk
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Reveal>
    </section>
  )
}