const ITEMS = ["git push", "build", "ship", "run"];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-white/[0.08] bg-[#070b14] py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span className="font-display text-xl font-bold uppercase tracking-tight text-[#f2f4fa] sm:text-2xl">
                  {item}
                </span>
                <svg width="26" height="14" viewBox="0 0 26 14" className="shrink-0">
                  <path d="M0 7 H20 M16 2 L22 7 L16 12" stroke="#e8933f" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
