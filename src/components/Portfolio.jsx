import { motion } from 'framer-motion'

export default function Portfolio() {
  const works = [
    { title: 'ZR Monogram', tag: 'Logo', color: 'bg-amber-300/30' },
    { title: 'Cocoa Craft', tag: 'Brand', color: 'bg-emerald-300/30' },
    { title: 'Accra Nights', tag: 'Poster', color: 'bg-indigo-300/30' },
    { title: 'Golden Lane', tag: 'Packaging', color: 'bg-rose-300/30' },
    { title: 'Mono Grid', tag: 'Deck', color: 'bg-cyan-300/30' },
    { title: 'Type Study', tag: 'Typography', color: 'bg-fuchsia-300/30' },
  ]
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              Selected Work
            </motion.h2>
            <motion.p className="mt-2 text-amber-100/80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
              A snapshot of recent pieces. Replace with your projects anytime.
            </motion.p>
          </div>
          <motion.a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-lg border border-white/10 text-amber-100 hover:bg-white/5" whileHover={{ y: -2 }}>
            Work with us
          </motion.a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <motion.div
              key={i}
              className="group rounded-xl overflow-hidden border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.35)' }}
            >
              <div className={`aspect-[4/3] ${w.color} relative overflow-hidden`}>
                <motion.div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(255,255,255,0.2),transparent_60%)] opacity-40" initial={{ scale: 1 }} whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 120 }} />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{w.title}</div>
                <div className="text-xs text-amber-200/80">{w.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
