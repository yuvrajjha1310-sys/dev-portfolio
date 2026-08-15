export default function Testimonial() {
  return (
    <section className="section py-16 sm:py-20">
      <div className="border-t border-b border-line py-12 sm:py-16">
        {/* TODO(Yuvraj): swap for a real quote from a collaborator, teammate, or client */}
        <blockquote className="font-display text-2xl sm:text-3xl leading-snug max-w-3xl">
          "Yuvraj's approach is structured. He focuses on clarity before code,
          and that shows in the details. Nothing feels rushed."
        </blockquote>
        <p className="mt-6 text-mute text-sm">— Name, Role</p>
      </div>
    </section>
  )
}
