import { SectionHead } from "@/components/ui";
import { Box } from "@/components/box";
import { LockKey, PlugsConnected, Package } from "@phosphor-icons/react/dist/ssr";

const ARMS = [
  "M196 244 C400 232 520 180 640 108",
  "M196 260 C420 260 540 260 640 238",
  "M196 276 C400 288 520 340 640 368",
];

const STACKS = [
  { cy: 130, name: "srv-01", sub: "3 apps", boxes: ["api", "web"], delay: "0s" },
  { cy: 260, name: "srv-02", sub: "2 apps", boxes: ["worker", "queue"], delay: "-1.8s" },
  { cy: 390, name: "srv-03", sub: "2 apps", boxes: ["db", "cache"], delay: "-3.4s" },
];

function Scene() {
  return (
    <svg
      viewBox="0 0 960 520"
      className="h-auto w-full"
      role="img"
      aria-label="Tako core stacking containers onto servers"
    >
      <defs>
        <linearGradient id="axArm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <radialGradient id="axCore" cx="35%" cy="35%" r="80%">
          <stop offset="0%" stopColor="#dfe4ff" />
          <stop offset="55%" stopColor="#7c83ff" />
          <stop offset="100%" stopColor="#4a52b8" />
        </radialGradient>
        <radialGradient id="axGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7c83ff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7c83ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* arms */}
      <g fill="none" strokeLinecap="round">
        {ARMS.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="url(#axArm)" strokeWidth="9" strokeOpacity="0.28" />
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

      <circle r="5" fill="#22d3ee" style={{ filter: "drop-shadow(0 0 6px rgba(34,211,238,.9))" }}>
        <animateMotion dur="2.8s" repeatCount="indefinite" path={ARMS[0]} />
      </circle>
      <circle r="5" fill="#a5b4fc" style={{ filter: "drop-shadow(0 0 6px rgba(165,180,252,.9))" }}>
        <animateMotion dur="2.8s" begin="-1.4s" repeatCount="indefinite" path={ARMS[2]} />
      </circle>

      {/* server stacks */}
      {STACKS.map((s) => (
        <g key={s.name}>
          <text x="730" y={s.cy - 78} textAnchor="middle" fill="#8a93b2" fontSize="12" fontFamily="Iosevka, monospace">
            {s.name} · {s.sub}
          </text>
          <Box x={700} y={s.cy - 52} label={s.boxes[0]} delay={s.delay} />
          <Box x={700} y={s.cy - 1} label={s.boxes[1]} delay={s.delay} />
          <rect x="688" y={s.cy + 50} width="84" height="12" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(160,175,215,0.25)" />
        </g>
      ))}

      {/* core */}
      <g transform="translate(170,260)">
        <circle r="58" fill="url(#axGlow)" className="breathe" />
        <circle r="26" fill="url(#axCore)" stroke="#dfe4ff" strokeWidth="2" />
        <path
          d="M0 -10 L0 10 M-7 -3 L0 -10 L7 -3"
          stroke="#05070c"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <text x="170" y="348" textAnchor="middle" fill="#8a93b2" fontSize="11" fontFamily="Iosevka, monospace" letterSpacing="3">
        CONTROL PLANE
      </text>
    </svg>
  );
}

const TRUTHS = [
  {
    icon: PlugsConnected,
    title: "Outbound only",
    copy: "Workers dial out over TLS gRPC. Zero inbound management ports — invisible to port scanners.",
  },
  {
    icon: LockKey,
    title: "Encrypted at rest",
    copy: "Secrets live in embedded SQLite sealed with AES-256-GCM. No Postgres to babysit.",
  },
  {
    icon: Package,
    title: "Four containers",
    copy: "Go, web console, Traefik. That's the whole platform. Fewer parts, fewer CVEs.",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="relative border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="03"
          kicker="Architecture"
          title={
            <>
              One core.
              <br />
              <span className="text-[#5b637f]">Every server within reach.</span>
            </>
          }
          lede="No consensus clusters, no Kubernetes overhead, no ingress overlays. The core builds your Dockerfile and stacks the containers where they belong."
        />

        <div className="blueprint mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-4 sm:p-8">
          <Scene />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TRUTHS.map((t) => (
            <div key={t.title} className="flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
              <t.icon size={22} className="mt-0.5 shrink-0 text-[#7c83ff]" />
              <div>
                <h3 className="font-display text-base font-bold text-[#f2f4fa]">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[#8a93b2]">{t.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
