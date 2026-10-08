import { Box } from "@/components/box";
import { Cmd } from "@/components/ui";

const ARMS = [
  "M892 382 C680 340 400 300 208 172",
  "M892 418 C660 460 380 500 158 528",
  "M912 428 C760 520 620 600 484 684",
  "M948 388 C1080 340 1170 290 1250 232",
  "M940 420 C1080 480 1160 560 1228 628",
];

const NODES = [
  { cx: 200, cy: 160, label: "api", node: "ams-01", delay: "0s" },
  { cx: 150, cy: 516, label: "web", node: "sg-01", delay: "-1.4s" },
  { cx: 476, cy: 672, label: "worker", node: "sg-02", delay: "-2.8s" },
  { cx: 1244, cy: 220, label: "db", node: "jp-01", delay: "-4.1s" },
  { cx: 1222, cy: 616, label: "cache", node: "us-01", delay: "-2.2s" },
];

function Scene() {
  return (
    <svg
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="heroArm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="heroCore" cx="35%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#dfe4ff" />
          <stop offset="55%" stopColor="#7c83ff" />
          <stop offset="100%" stopColor="#4a52b8" />
        </radialGradient>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c83ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#7c83ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* arms */}
      <g fill="none" strokeLinecap="round">
        {ARMS.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="url(#heroArm)" strokeWidth="10" strokeOpacity="0.28" />
            <path
              d={d}
              stroke="#22d3ee"
              strokeWidth="2"
              strokeOpacity="0.7"
              strokeDasharray="10 16"
              className={i % 2 ? "flow-slow" : "flow"}
            />
          </g>
        ))}
      </g>

      {/* pulses */}
      <circle r="5" fill="#22d3ee" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,.9))" }}>
        <animateMotion dur="3.4s" repeatCount="indefinite" path={ARMS[0]} />
      </circle>
      <circle r="5" fill="#a5b4fc" style={{ filter: "drop-shadow(0 0 6px rgba(165,180,252,.9))" }}>
        <animateMotion dur="3.4s" begin="-1.7s" repeatCount="indefinite" path={ARMS[3]} />
      </circle>

      {/* nodes */}
      {NODES.map((n) => (
        <g key={n.node}>
          <line x1={n.cx} y1={n.cy + 24} x2={n.cx} y2={n.cy + 34} stroke="#8a93b2" strokeOpacity="0.4" />
          <rect
            x={n.cx - 66}
            y={n.cy + 34}
            width="132"
            height="30"
            rx="8"
            fill="rgba(5,7,12,0.72)"
            stroke="rgba(160,175,215,0.22)"
          />
          <circle cx={n.cx - 48} cy={n.cy + 49} r="4" fill="#34d399" />
          <text x={n.cx - 36} y={n.cy + 53} fill="#8a93b2" fontSize="11" fontFamily="Iosevka, monospace">
            {n.node}
          </text>
          <Box x={n.cx - 30} y={n.cy - 12} label={n.label} delay={n.delay} />
        </g>
      ))}

      {/* core */}
      <g transform="translate(920,400)">
        <circle r="80" fill="url(#heroGlow)" className="breathe" />
        <circle r="66" fill="none" stroke="#7c83ff" strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="3 10" className="orbit" />
        <circle r="34" fill="url(#heroCore)" stroke="#dfe4ff" strokeWidth="2" />
        <path
          d="M0 -12 L0 12 M-9 -3 L0 -12 L9 -3"
          stroke="#05070c"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

const STATS: [string, string][] = [
  ["63 MiB", "idle RAM"],
  ["0", "inbound ports"],
  ["4", "containers"],
  ["$0", "forever"],
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <Scene />
      {/* readability scrim */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05070c] via-[#05070c]/72 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070c] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6">
        <div className="max-w-2xl">
          <p className="kicker">Tako · Self-hosted PaaS · Alpha</p>
          <h1 className="display-xl mt-6 text-[17vw] text-[#f2f4fa] sm:text-7xl lg:text-8xl">
            Ship it<br />
            <span className="glow-text">yourself.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#a7b0c9] sm:text-lg">
            Tako is a featherweight platform that carries your containers from git push
            to your own servers. No bloat, no lock-in — just your code, delivered.
          </p>

          <div className="mt-8 max-w-xl">
            <Cmd cmd="curl -fsSL https://gettako.dev/install.sh | bash" />
            <p className="mt-3 font-mono text-[11px] leading-relaxed text-[#5b637f]">
              <span className="text-[#f5b54a]">alpha:</span> under heavy development.
              APIs and scripts may break. You were warned, lovingly.
            </p>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-4">
            {STATS.map(([v, l]) => (
              <div key={l} className="bg-[#05070c]/80 px-5 py-4 backdrop-blur">
                <dt className="sr-only">{l}</dt>
                <dd className="font-display text-2xl font-bold text-[#f2f4fa]">{v}</dd>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#8a93b2]">{l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
