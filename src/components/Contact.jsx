import Reveal from './Reveal.jsx'

export default function Contact() {
  return (
    <footer id="contact" className="section pt-16 pb-10">
      <div className="border-t border-line pt-16">
        <Reveal as="div">
          <h2 className="font-display text-3xl sm:text-4xl max-w-xl leading-tight">
            Have something <span className="italic text-signal">worth building?</span>
          </h2>
        </Reveal>

        <Reveal as="div" delay={100} className="mt-10 grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a href="mailto:yuvrajjha1310@gmail.com" className="hover:text-signal transition-colors break-words">
              yuvrajjha1310@gmail.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-2">Location</p>
            <p>New Delhi, India</p>
          </div>
          <div>
            <p className="eyebrow mb-2">Social</p>
            <div className="flex gap-3">
              <a href="https://github.com/yuvrajjha1310-sys" target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yuvrajhub" target="_blank" rel="noreferrer" className="hover:text-signal transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

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
