import { motion } from 'framer-motion'

export default function Services() {
  const items = [
    {
      title: 'Brand Identity',
      desc: 'Logos, typography, color systems, and brand guidelines tailored to your vision.'
    },
    {
      title: 'Print & Collateral',
      desc: 'Business cards, stationery, packaging, posters, and event materials that impress.'
    },
    {
      title: 'Digital Design',
      desc: 'Social graphics, banners, pitch decks, and web visuals that stay on-brand.'
    }
  ]
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          Services
        </motion.h2>
        <motion.p className="mt-2 text-amber-100/80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
          A focused set of offerings for maximum impact.
        </motion.p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.08, duration: 0.45 }}
              whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-amber-100/80">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
