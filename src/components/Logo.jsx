export default function Logo({ className = "", showWordmark = true }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
        className="w-12 h-12 rounded-xl shadow-sm"
      >
        <defs>
          <linearGradient id="zrGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#67e8f9"/>
            <stop offset="50%" stopColor="#38bdf8"/>
            <stop offset="100%" stopColor="#2563eb"/>
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect x="0" y="0" width="120" height="120" rx="16" fill="#061021" />
        <path d="M24 42h44l-30 36h58v12H20l30-36H24V42z" fill="url(#zrGrad)" filter="url(#glow)"/>
        <path d="M68 30h28l-14 18l14 18H68l-14-18L68 30z" fill="#061021"/>
        <path d="M68 30h28l-14 18l14 18H68l-14-18L68 30z" fill="none" stroke="url(#zrGrad)" strokeWidth="4" />
      </svg>
      {showWordmark && (
        <div className="leading-tight">
          <div className="text-xl font-semibold tracking-wide text-white">ZAAZH & CO</div>
          <div className="text-[11px] uppercase tracking-[0.25em] text-sky-300/80">Graphic Design Studio</div>
        </div>
      )}
    </div>
  )
}
