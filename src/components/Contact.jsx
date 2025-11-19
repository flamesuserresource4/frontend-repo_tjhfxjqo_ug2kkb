export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s create something impactful</h2>
          <p className="mt-2 text-amber-100/80">Tell us about your project and we’ll get back within 24 hours.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-amber-100/90">
            <div>
              <div className="text-sm uppercase tracking-widest text-amber-200/70">Email</div>
              <a className="block text-white font-medium hover:underline" href="mailto:raphaelnick940@gmail.com">raphaelnick940@gmail.com</a>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-amber-200/70">Phone</div>
              <a className="block text-white font-medium hover:underline" href="tel:+233536340524">+233 536 340 524</a>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-amber-200/70">Location</div>
              <div className="text-white font-medium">Ghana — Accra</div>
            </div>
            <div>
              <div className="text-sm uppercase tracking-widest text-amber-200/70">Availability</div>
              <div className="text-white font-medium">Accepting new projects</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:raphaelnick940@gmail.com" className="px-5 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition-colors">Email us</a>
            <a href="https://wa.me/233536340524" target="_blank" className="px-5 py-3 rounded-lg border border-amber-400/40 text-amber-200 hover:bg-amber-400/10 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}
