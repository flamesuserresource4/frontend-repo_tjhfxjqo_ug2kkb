import { motion } from 'framer-motion'
import Logo from './Logo'

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(85%_60%_at_50%_-10%,rgba(250,204,21,0.25),transparent_60%)]"/>
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={container} initial="hidden" animate="show">
            <Logo className="mb-6" />
            <motion.h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
              Visual identities that stand out.
            </motion.h1>
            <motion.p className="mt-5 text-lg text-amber-100/90 max-w-prose" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              ZAAZH & CO crafts timeless logos, brand systems, and visuals for ambitious creatives and businesses.
            </motion.p>
            <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}>
              <a href="#contact" className="px-5 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">
                Start a project
              </a>
              <a href="#portfolio" className="px-5 py-3 rounded-lg border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 transition-colors">
                View portfolio
              </a>
            </motion.div>
            <motion.div className="mt-8 text-sm text-amber-200/80 space-y-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55, duration: 0.6 }}>
              <p>Email: <a className="underline decoration-amber-400/60 hover:text-amber-100" href="mailto:raphaelnick940@gmail.com">raphaelnick940@gmail.com</a></p>
              <p>Phone: <a className="underline decoration-amber-400/60 hover:text-amber-100" href="tel:+233536340524">+233 536 340 524</a></p>
              <p>Location: Ghana — Accra</p>
            </motion.div>
          </motion.div>
          <motion.div className="relative" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(250,204,21,0.15),transparent_60%)]"/>
              <div className="absolute inset-0 grid grid-cols-3 gap-4 p-6">
                {[...Array(6)].map((_, i) => (
                  <motion.div key={i} className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4 }} viewport={{ once: true }} />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-amber-400/30 blur-3xl rounded-full"/>
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-amber-200/20 blur-3xl rounded-full"/>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
