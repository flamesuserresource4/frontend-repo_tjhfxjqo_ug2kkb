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
            <h2 className="text-3xl md:text-4xl font-bold text-white">Selected Work</h2>
            <p className="mt-2 text-amber-100/80">A snapshot of recent pieces. Replace with your projects anytime.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-lg border border-white/10 text-amber-100 hover:bg-white/5">Work with us</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => (
            <div key={i} className="group rounded-xl overflow-hidden border border-white/10 bg-white/5">
              <div className={`aspect-[4/3] ${w.color} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(60%_45%_at_50%_0%,rgba(255,255,255,0.2),transparent_60%)] opacity-40"/>
              </div>
              <div className="p-4">
                <div className="text-white font-medium">{w.title}</div>
                <div className="text-xs text-amber-200/80">{w.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
