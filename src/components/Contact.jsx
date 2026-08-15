export default function Contact() {
  return (
    <footer id="contact" className="section pt-16 pb-10">
      <div className="border-t border-line pt-16">
        <h2 className="font-display text-3xl sm:text-4xl max-w-xl leading-tight">
          Let's build{' '}
          <span className="italic text-signal">something good</span> together.
        </h2>

        <div className="mt-10 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="eyebrow mb-2">Email</p>
            {/* TODO(Yuvraj): replace with your real email */}
            <a href="mailto:hello@example.com" className="hover:text-signal transition-colors">
              hello@example.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Call</p>
            {/* TODO(Yuvraj): wire this to your real scheduling link if you use one (e.g. Cal.com) */}
            <a href="#" className="hover:text-signal transition-colors">
              Book a call
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Social</p>
            <div className="flex gap-3">
              {/* TODO(Yuvraj): replace with your real profile links */}
              <a href="#" className="hover:text-signal transition-colors">GitHub</a>
              <a href="#" className="hover:text-signal transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-end justify-between border-t border-line pt-8">
          <p className="text-xs text-mute">© {new Date().getFullYear()} Yuvraj Jha</p>
          <p className="font-display text-[13vw] sm:text-[8vw] leading-none tracking-tightest text-mute/20 select-none pointer-events-none">
            YUVRAJ
          </p>
        </div>
      </div>
    </footer>
  )
}
