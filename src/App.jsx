import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Journey from './components/Journey.jsx'
import Services from './components/Services.jsx'
import Testimonial from './components/Testimonial.jsx'
import About from './components/About.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Chatbot from './components/Chatbot.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Journey />
        <Services />
        <Testimonial />
        <About />
        <FAQ />
      </main>
      <Contact />
      <Chatbot />
    </div>
  )
}