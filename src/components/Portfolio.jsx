import { motion } from 'framer-motion'

const prompts = [
  'neon blue futuristic geometric logo grid, sleek, glossy, studio lighting, 4k, minimal background',
  'abstract cocoa-themed brand packaging, neon cyan highlights on navy backdrop, high contrast, cinematic light',
  'accra night market poster, neon signs, deep navy sky, glow effects, editorial graphic style',
  'luxury perfume packaging, cyan glass bottle, chrome accents, soft blue rim light, product render',
  'monochrome typographic layout, swiss grid, cyan accent lines, paper texture, isometric shadows',
  'bold typography study, neon gradients, electric blue and sky blue, high-resolution print mockup'
]

function generateImageUrl(prompt) {
  const encoded = encodeURIComponent(prompt)
  return `https://image.pollinations.ai/prompt/${encoded}?n=1&width=1024&height=768&seed=${Math.floor(Math.random()*10000)}`
}

export default function Portfolio() {
  const works = [
    { title: 'ZR Monogram', tag: 'Logo', url: generateImageUrl(prompts[0]) },
    { title: 'Cocoa Craft', tag: 'Brand', url: generateImageUrl(prompts[1]) },
    { title: 'Accra Nights', tag: 'Poster', url: generateImageUrl(prompts[2]) },
    { title: 'Golden Lane', tag: 'Packaging', url: generateImageUrl(prompts[3]) },
    { title: 'Mono Grid', tag: 'Deck', url: generateImageUrl(prompts[4]) },
    { title: 'Type Study', tag: 'Typography', url: generateImageUrl(prompts[5]) },
  ]
  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <motion.h2 className="text-3xl md:text-4xl font-bold text-white" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              Selected Work
            </motion.h2>
            <motion.p className="mt-2 text-sky-100/80" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
              AI-generated covers tailored to the studio vibe. Replace anytime with your real projects.
            </motion.p>
          </div>
          <motion.a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-lg border border-white/10 text-sky-100 hover:bg-white/5" whileHover={{ y: -2 }}>
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
              <div className="aspect-[4/3] relative overflow-hidden">
                <motion.img src={w.url} alt={w.title} className="w-full h-full object-cover"
                  initial={{ scale: 1.02 }} whileHover={{ scale: 1.06 }} transition={{ type: 'spring', stiffness: 120 }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061021] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{w.title}</div>
                <div className="text-xs text-sky-200/80">{w.tag}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
