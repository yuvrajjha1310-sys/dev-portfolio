import { useState } from 'react'

// TODO(Yuvraj): replace with the questions you actually want to answer.
const FAQS = [
  {
    q: 'What kind of projects do you take on?',
    a: 'Placeholder answer — describe the kind of work you want to be approached for.',
  },
  {
    q: 'Do you work solo or with a team?',
    a: 'Placeholder answer — describe how you like to collaborate.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Placeholder answer — set expectations on timelines.',
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
      <h2 className="font-display text-3xl sm:text-4xl mb-10">Questions</h2>
      <div>
        {FAQS.map((item) => (
          <FAQItem key={item.q} {...item} />
        ))}
      </div>
    </section>
  )
}
