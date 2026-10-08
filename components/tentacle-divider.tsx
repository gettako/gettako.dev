/**
 * TentacleDivider — an abstract octopus-tentacle motif used as a section
 * divider. The dashed strokes animate to suggest data flowing from the
 * control plane out to worker nodes.
 */
export function TentacleDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full overflow-hidden border-t border-[var(--border)] ${flip ? "-scale-y-100" : ""}`}
    >
      <svg
        viewBox="0 0 1200 72"
        preserveAspectRatio="none"
        className="block h-14 w-full sm:h-[72px]"
      >
        {/* faint center line */}
        <line
          x1="0"
          y1="36"
          x2="1200"
          y2="36"
          stroke="var(--border)"
          strokeWidth="1"
        />
        {/* tentacle 1 — long upper wave */}
        <path
          d="M -20 36 C 180 36, 220 10, 420 14 S 640 44, 840 30 S 1080 8, 1220 22"
          fill="none"
          stroke="#5560d6"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="10 8"
          strokeLinecap="round"
          className="tentacle-flow dark:stroke-[#7980e0]"
        />
        {/* tentacle 2 — lower wave, offset rhythm */}
        <path
          d="M -20 36 C 140 36, 200 62, 400 58 S 620 28, 820 42 S 1060 64, 1220 50"
          fill="none"
          stroke="#5560d6"
          strokeOpacity="0.28"
          strokeWidth="2"
          strokeDasharray="6 10"
          strokeLinecap="round"
          className="tentacle-flow-slow dark:stroke-[#7980e0]"
        />
        {/* tentacle 3 — emerald accent, short pulse */}
        <path
          d="M -20 36 C 260 36, 320 24, 560 28 S 800 44, 1040 34 S 1160 30, 1220 32"
          fill="none"
          stroke="#10b981"
          strokeOpacity="0.35"
          strokeWidth="1.5"
          strokeDasharray="3 9"
          strokeLinecap="round"
          className="tentacle-flow-fast"
        />
        {/* node dots */}
        <circle cx="420" cy="14" r="3.5" fill="#5560d6" fillOpacity="0.5" className="dark:fill-[#7980e0]" />
        <circle cx="840" cy="30" r="3.5" fill="#5560d6" fillOpacity="0.5" className="dark:fill-[#7980e0]" />
        <circle cx="820" cy="42" r="2.5" fill="#10b981" fillOpacity="0.5" />
      </svg>
    </div>
  );
}
