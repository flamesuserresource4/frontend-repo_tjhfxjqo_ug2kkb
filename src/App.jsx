import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import Logo from './components/Logo'

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } }
}

function App() {
  return (
    <motion.div
      className="min-h-screen bg-[#071126] text-sky-50"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#071126]/60 bg-[#071126]/80 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center">
            <Logo showWordmark={false} />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-sky-100/80">
            <a href="#services" className="hover:text-sky-100 transition-colors">Services</a>
            <a href="#portfolio" className="hover:text-sky-100 transition-colors">Portfolio</a>
            <a href="#about" className="hover:text-sky-100 transition-colors">About</a>
            <a href="#contact" className="px-3 py-1.5 rounded-lg bg-cyan-400 text-[#061021] font-semibold hover:bg-cyan-300 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Logo showWordmark={true} />
          </div>
          <div className="text-sm text-sky-200/80">
            <div className="space-y-1">
              <p>Email: <a className="underline decoration-cyan-400/60 hover:text-sky-100" href="mailto:raphaelnick940@gmail.com">raphaelnick940@gmail.com</a></p>
              <p>Phone: <a className="underline decoration-cyan-400/60 hover:text-sky-100" href="tel:+233536340524">+233 536 340 524</a></p>
              <p>Location: Ghana — Accra</p>
            </div>
          </div>
          <div className="text-xs text-sky-200/60">
            © {new Date().getFullYear()} ZAAZH & CO. All rights reserved.
          </div>
        </div>
      </footer>
    </motion.div>
  )
}

export default App
