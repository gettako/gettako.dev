const ITEMS = ["git push", "build", "ship", "run"];

export function Ticker() {
  return (
    <div className="overflow-hidden bg-[#5560d6] py-4" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10">
            {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className="font-display text-xl font-bold uppercase tracking-tight text-white sm:text-2xl">
                  {item}
                </span>
                <svg width="28" height="14" viewBox="0 0 28 14" className="shrink-0">
                  <path d="M1 7 H21 M16 2 L22 7 L16 12" stroke="#fff" strokeOpacity="0.75" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
