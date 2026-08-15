import { useState } from 'react'
import Reveal from './Reveal.jsx'

// Sourced from knowledgeBase.json — reframed as questions a recruiter or
// visitor would actually ask a student portfolio, not a freelancer FAQ.
const FAQS = [
  {
    q: 'What kind of roles are you looking for?',
    a: 'A software development internship — somewhere I can apply Java, C, Python, and SQL/MySQL to real problems and keep learning fast.',
  },
  {
    q: 'Do you have professional experience?',
    a: "Not yet. I'm a BCA student at MERI College, GGSIPU (2nd year, semester 4), and the projects here come from coursework and self-directed practice — looking for my first internship to build on that.",
  },
  {
    q: 'What have you actually built?',
    a: 'A few Java/MySQL systems — library management, attendance tracking, and car rental — plus some web projects like a full-stack dental clinic site. All in the Selected Work section above.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-line py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-medium">{q}</span>
        <span
          className={`shrink-0 text-signal text-xl leading-none transition-transform duration-200 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr] mt-3' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-mute text-sm leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="section py-24 sm:py-32">
      <Reveal as="div">
        <h2 className="font-display text-3xl sm:text-4xl mb-10">Questions</h2>
      </Reveal>
      <Reveal as="div" delay={100}>
        {FAQS.map((item) => (
          <FAQItem key={item.q} {...item} />
        ))}
      </Reveal>
    </section>
  )
}
