import { ContainerBox } from "@/components/reach/container-box";

const ARMS = [
  "M196 244 C400 232 520 180 644 104",
  "M196 260 C420 260 540 260 644 234",
  "M196 276 C400 288 520 340 644 364",
];

const STACKS = [
  { cy: 130, name: "srv-01", sub: "3 apps", boxes: ["api", "web"], delay: "0s" },
  { cy: 260, name: "srv-02", sub: "2 apps", boxes: ["worker", "queue"], delay: "-1.8s" },
  { cy: 390, name: "srv-03", sub: "2 apps", boxes: ["db", "cache"], delay: "-3.4s" },
];

/**
 * ArchitectureScene — the control-plane core on the left reaching out
 * with arms that stack container boxes onto server nodes.
 */
export function ArchitectureScene() {
  return (
    <div className="mt-12 overflow-x-auto">
      <svg
        viewBox="0 0 960 520"
        className="mx-auto min-w-[640px] w-full max-w-4xl"
        role="img"
        aria-label="Tako architecture: core delivering container stacks to servers"
      >
        <defs>
          <linearGradient id="archArm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
          <radialGradient id="archCore" cx="35%" cy="35%" r="80%">
            <stop offset="0%" stopColor="#c7d0ff" />
            <stop offset="55%" stopColor="#7980e0" />
            <stop offset="100%" stopColor="#4a52b8" />
          </radialGradient>
          <radialGradient id="archGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7980e0" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7980e0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* arms */}
        <g fill="none" strokeLinecap="round">
          {ARMS.map((d, i) => (
            <g key={i}>
              <path d={d} stroke="url(#archArm)" strokeWidth="8" strokeOpacity="0.3" />
              <path
                d={d}
                stroke="#22d3ee"
                strokeWidth="2"
                strokeOpacity="0.7"
                strokeDasharray="10 14"
                className={i % 2 ? "tentacle-flow-slow" : "tentacle-flow"}
              />
            </g>
          ))}
        </g>

        {/* travelling pulses */}
        <circle r="5" fill="#22d3ee" opacity="0.95" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,.9))" }}>
          <animateMotion dur="2.6s" repeatCount="indefinite" path={ARMS[0]} />
        </circle>
        <circle r="5" fill="#a5b4fc" opacity="0.95" style={{ filter: "drop-shadow(0 0 6px rgba(165,180,252,.9))" }}>
          <animateMotion dur="2.6s" begin="-1.3s" repeatCount="indefinite" path={ARMS[2]} />
        </circle>

        {/* server stacks */}
        {STACKS.map((s) => (
          <g key={s.name}>
            <text x="727" y={s.cy - 74} textAnchor="middle" fill="#939cb8" fontSize="11" fontFamily="Iosevka, monospace">
              {s.name} · {s.sub}
            </text>
            <ContainerBox x={699} y={s.cy - 48} label={s.boxes[0]} delay={s.delay} />
            <ContainerBox x={699} y={s.cy + 3} label={s.boxes[1]} delay={s.delay} />
            <rect x="686" y={s.cy + 52} width="82" height="12" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(150,165,205,0.25)" />
            <text x="727" y={s.cy + 62} textAnchor="middle" fill="#939cb8" fontSize="8" fontFamily="Iosevka, monospace">
              DOCKER 24+
            </text>
          </g>
        ))}

        {/* core */}
        <g transform="translate(170,260)">
          <circle r="56" fill="url(#archGlow)" className="reach-core-glow" />
          <circle r="24" fill="url(#archCore)" stroke="#c7d0ff" strokeWidth="2" />
          <path
            d="M0 -9 L0 9 M-6.5 -2.5 L0 -9 L6.5 -2.5"
            stroke="#060a13"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
        <text x="170" y="345" textAnchor="middle" fill="#939cb8" fontSize="11" fontFamily="Iosevka, monospace" letterSpacing="3">
          CONTROL PLANE
        </text>
      </svg>
    </div>
  );
}
