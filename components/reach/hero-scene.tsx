import { ContainerBox } from "@/components/reach/container-box";

const ARMS = [
  "M472 267 C368 230 248 212 156 156",
  "M472 303 C358 348 262 395 190 436",
  "M500 319 C500 390 500 430 500 484",
  "M528 303 C642 348 738 395 810 436",
  "M528 267 C632 230 752 212 844 156",
];

const NODES = [
  { cx: 150, cy: 140, label: "api", node: "srv-ams-01", delay: "0s" },
  { cx: 185, cy: 422, label: "web", node: "srv-sg-01", delay: "-1.2s" },
  { cx: 500, cy: 470, label: "worker", node: "srv-sg-02", delay: "-2.6s" },
  { cx: 815, cy: 422, label: "db", node: "srv-jp-01", delay: "-3.8s" },
  { cx: 850, cy: 140, label: "cache", node: "srv-us-01", delay: "-2s" },
];

/**
 * HeroScene — the Tako core reaching out with gradient arms, delivering
 * container boxes to server nodes. Abstract tentacles, crisp containers.
 */
export function HeroScene() {
  return (
    <svg
      viewBox="0 0 1000 560"
      className="mx-auto h-auto w-full max-w-5xl"
      role="img"
      aria-label="Tako core delivering containers to servers"
    >
      <defs>
        <linearGradient id="armGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="coreGrad" cx="35%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#c7d0ff" />
          <stop offset="55%" stopColor="#7980e0" />
          <stop offset="100%" stopColor="#4a52b8" />
        </radialGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7980e0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7980e0" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* arms */}
      <g fill="none" strokeLinecap="round">
        {ARMS.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="url(#armGrad)" strokeWidth="9" strokeOpacity="0.32" />
            <path
              d={d}
              stroke="#22d3ee"
              strokeWidth="2"
              strokeOpacity="0.75"
              strokeDasharray="10 14"
              className={i % 2 ? "tentacle-flow-slow" : "tentacle-flow"}
            />
          </g>
        ))}
      </g>

      {/* travelling pulses */}
      <circle r="5" fill="#22d3ee" opacity="0.95" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,.9))" }}>
        <animateMotion dur="3.2s" repeatCount="indefinite" path={ARMS[1]} />
      </circle>
      <circle r="5" fill="#a5b4fc" opacity="0.95" style={{ filter: "drop-shadow(0 0 6px rgba(165,180,252,.9))" }}>
        <animateMotion dur="3.2s" begin="-1.6s" repeatCount="indefinite" path={ARMS[3]} />
      </circle>

      {/* nodes + delivered boxes */}
      {NODES.map((n) => (
        <g key={n.node}>
          <line x1={n.cx} y1={n.cy + 17} x2={n.cx} y2={n.cy + 30} stroke="#939cb8" strokeOpacity="0.4" strokeWidth="1.5" />
          <rect
            x={n.cx - 62}
            y={n.cy + 30}
            width="124"
            height="30"
            rx="8"
            fill="rgba(255,255,255,0.03)"
            stroke="rgba(150,165,205,0.25)"
          />
          <circle cx={n.cx - 46} cy={n.cy + 45} r="4" fill="#34d399" />
          <text
            x={n.cx - 34}
            y={n.cy + 49}
            fill="#939cb8"
            fontSize="11"
            fontFamily="Iosevka, monospace"
          >
            {n.node}
          </text>
          <ContainerBox x={n.cx - 28} y={n.cy - 17} label={n.label} delay={n.delay} />
        </g>
      ))}

      {/* core */}
      <g transform="translate(500,285)">
        <circle r="72" fill="url(#coreGlow)" className="reach-core-glow" />
        <circle r="58" fill="none" stroke="#7980e0" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 9" className="reach-orbit" />
        <circle r="30" fill="url(#coreGrad)" stroke="#c7d0ff" strokeWidth="2" />
        <path
          d="M0 -11 L0 11 M-8 -3 L0 -11 L8 -3"
          stroke="#060a13"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
