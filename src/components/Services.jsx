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
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="mt-2 text-amber-100/80">A focused set of offerings for maximum impact.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-semibold text-white">{it.title}</h3>
              <p className="mt-2 text-amber-100/80">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
