/**
 * OctopusArchitecture — the control plane as the octopus head, tentacles
 * reaching down to worker node pods. Pulses travel along the tentacles
 * to suggest outbound gRPC heartbeats.
 */
const PODS = [
  { cx: 150, name: "node-ams-01", sub: "3 apps · healthy" },
  { cx: 345, name: "node-sg-01", sub: "5 apps · healthy" },
  { cx: 555, name: "node-sg-02", sub: "2 apps · healthy" },
  { cx: 750, name: "node-jp-01", sub: "1 app · healthy" },
];

const TENTACLES = [
  "M425 200 C350 270 220 310 150 395",
  "M442 205 C410 290 370 340 345 395",
  "M458 205 C490 290 530 340 555 395",
  "M475 200 C550 270 680 310 750 395",
];

export function OctopusArchitecture() {
  return (
    <div className="mt-12 overflow-x-auto">
      <svg viewBox="0 0 920 540" className="mx-auto min-w-[640px] w-full max-w-4xl" role="img" aria-label="Tako architecture: control plane octopus connected to worker nodes">
        <defs>
          <linearGradient id="archGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a5b4fc" />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>

        <text x="450" y="30" textAnchor="middle" fill="#8f99b5" fontSize="11" fontFamily="Iosevka, monospace" letterSpacing="4">
          TAKO CONTROL PLANE
        </text>

        {/* sonar ring */}
        <circle cx="450" cy="112" r="112" fill="none" stroke="#7980e0" strokeOpacity="0.18" strokeDasharray="4 8" />

        {/* head */}
        <g transform="translate(450,112)">
          <path
            d="M0 -55 C40 -55 68 -18 65 32 C63 68 34 96 0 99 C-34 96 -63 68 -65 32 C-68 -18 -40 -55 0 -55 Z"
            fill="rgba(121,128,224,0.08)"
            stroke="url(#archGrad)"
            strokeWidth="3"
          />
          <g className="abyss-eye">
            <circle cx="-22" cy="18" r="9" fill="#22d3ee" />
            <circle cx="22" cy="18" r="9" fill="#22d3ee" />
          </g>
        </g>

        {/* tentacles */}
        <g fill="none" stroke="url(#archGrad)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.85">
          {TENTACLES.map((d, i) => (
            <path key={i} d={d} strokeDasharray="9 8" className={i % 2 ? "tentacle-flow-slow" : "tentacle-flow"} />
          ))}
        </g>

        {/* travelling pulses */}
        <circle r="5" fill="#22d3ee" opacity="0.95" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,.9))" }}>
          <animateMotion dur="3s" repeatCount="indefinite" path={TENTACLES[0]} />
        </circle>
        <circle r="5" fill="#22d3ee" opacity="0.95" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,.9))" }}>
          <animateMotion dur="3s" begin="-1.5s" repeatCount="indefinite" path={TENTACLES[3]} />
        </circle>

        {/* node pods */}
        {PODS.map((pod) => (
          <g key={pod.name}>
            <rect
              x={pod.cx - 78}
              y={400}
              width="156"
              height="68"
              rx="10"
              fill="rgba(255,255,255,0.03)"
              stroke="rgba(148,163,200,0.22)"
            />
            <circle cx={pod.cx - 56} cy={424} r="5" fill="#34d399" />
            <circle cx={pod.cx - 56} cy={424} r="5" fill="none" stroke="#34d399" strokeWidth="1.5" className="abyss-ping" />
            <text x={pod.cx - 42} y={429} fill="#e9edf6" fontSize="13" fontFamily="Iosevka, monospace">
              {pod.name}
            </text>
            <text x={pod.cx - 42} y={449} fill="#8f99b5" fontSize="10.5" fontFamily="Iosevka, monospace">
              {pod.sub}
            </text>
          </g>
        ))}

        <text x="450" y={505} textAnchor="middle" fill="#8f99b5" fontSize="11" fontFamily="Iosevka, monospace" letterSpacing="2">
          outbound TLS gRPC · 0 inbound ports on workers
        </text>
      </svg>
    </div>
  );
}
