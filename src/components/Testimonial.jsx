import Reveal from './Reveal.jsx'

// No real testimonial exists yet, and a fabricated quote/attribution isn't
// something to invent. This keeps the same visual "pull quote" break in the
// page rhythm, but as an honest first-person statement sourced from
// knowledgeBase.json's strengths/careerObjective instead.
export default function Testimonial() {
  return (
    <section className="section py-16 sm:py-20">
      <Reveal as="div" className="border-t border-b border-line py-12 sm:py-16">
        <blockquote className="font-display text-2xl sm:text-3xl leading-snug max-w-3xl">
          "Clarity before code — structured thinking, staying consistent
          until a project is actually done, and picking up new tools fast
          enough to keep using them."
        </blockquote>
        <p className="mt-6 text-mute text-sm">— Yuvraj, on how he works</p>
      </Reveal>
    </section>
  )
}
