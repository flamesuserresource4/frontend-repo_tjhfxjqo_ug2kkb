import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 text-sky-100/90">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          About
        </motion.h2>
        <motion.p className="mt-4 leading-7" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
          Based in Accra, Ghana, ZAAZH & CO blends craft and strategy to deliver design that feels inevitable. We partner closely with founders and marketers to shape visual languages that scale.
        </motion.p>
        <motion.p className="mt-4 leading-7" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15, duration: 0.5 }}>
          Our process is simple: listen deeply, sketch boldly, refine obsessively. From the first mark to the final export, every detail is intentional.
        </motion.p>
      </div>
    </section>
  )
}
