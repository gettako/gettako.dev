import Image from "next/image";
import { SectionHead } from "@/components/ui";
import { LockKey, PlugsConnected, Package } from "@phosphor-icons/react/dist/ssr";

function Diagram() {
  return (
    <svg viewBox="0 0 900 420" className="h-auto w-full" role="img" aria-label="Tako the octopus connecting to servers">
      <defs>
        <linearGradient id="diaArm" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#5560d6" />
        </linearGradient>
      </defs>

      {/* connector arms */}
      <g fill="none" strokeLinecap="round">
        <path d="M270 150 C420 130 560 120 668 128" stroke="url(#diaArm)" strokeWidth="7" strokeOpacity="0.35" />
        <path d="M270 150 C420 130 560 120 668 128" stroke="#5560d6" strokeWidth="2" strokeDasharray="8 10" className="flow" />
        <path d="M275 210 C430 210 560 210 668 210" stroke="url(#diaArm)" strokeWidth="7" strokeOpacity="0.35" />
        <path d="M275 210 C430 210 560 210 668 210" stroke="#5560d6" strokeWidth="2" strokeDasharray="8 10" className="flow" />
        <path d="M270 270 C420 290 560 300 668 292" stroke="url(#diaArm)" strokeWidth="7" strokeOpacity="0.35" />
        <path d="M270 270 C420 290 560 300 668 292" stroke="#5560d6" strokeWidth="2" strokeDasharray="8 10" className="flow" />
      </g>

      {/* server cards */}
      {[
        { y: 96, name: "srv-01", apps: "api · web" },
        { y: 178, name: "srv-02", apps: "worker · queue" },
        { y: 260, name: "srv-03", apps: "db · cache" },
      ].map((s) => (
        <g key={s.name}>
          <rect x="668" y={s.y} width="200" height="64" rx="14" fill="#fff" stroke="rgba(25,29,51,0.1)" />
          <circle cx="694" cy={s.y + 24} r="5" fill="#22c55e" />
          <text x="708" y={s.y + 28} fill="#191d33" fontSize="14" fontWeight="700" fontFamily="Plus Jakarta Sans, sans-serif">
            {s.name}
          </text>
          <text x="694" y={s.y + 48} fill="#5d657f" fontSize="11" fontFamily="Iosevka, monospace">
            {s.apps} · healthy
          </text>
        </g>
      ))}

      <text x="784" y="360" textAnchor="middle" fill="#9aa1bd" fontSize="11" fontFamily="Iosevka, monospace">
        outbound TLS gRPC · 0 inbound ports
      </text>
    </svg>
  );
}

const TRUTHS = [
  { icon: PlugsConnected, title: "Outbound only", copy: "Workers dial out. Zero inbound management ports — invisible to port scanners." },
  { icon: LockKey, title: "Encrypted at rest", copy: "Secrets sealed in SQLite with AES-256-GCM. No Postgres to babysit." },
  { icon: Package, title: "Four containers", copy: "Go, web console, Traefik. Fewer moving parts, fewer CVEs to chase." },
];

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="03"
          kicker="Architecture"
          title={
            <>
              One Tako.
              <br />
              <span className="text-[var(--faint)]">Every server within reach.</span>
            </>
          }
          lede="Yes — that's the actual Tako, drawn by a human, running your infrastructure. One control plane orchestrates every node. No consensus clusters, no Kubernetes overhead."
        />

        <div className="mt-12 grid items-center gap-8 rounded-[2rem] border border-[#5560d6]/15 bg-gradient-to-br from-[var(--wash)] to-white p-6 sm:p-10 lg:grid-cols-12">
          <div className="text-center lg:col-span-4">
            <Image
              src="/tako-mark.png"
              alt="Tako control plane"
              width={512}
              height={512}
              className="wiggle mx-auto w-40 sm:w-48"
            />
            <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5560d6]">
              Control plane
            </p>
            <p className="mt-1 font-mono text-[11px] text-[var(--faint)]">dashboard · api · grpc</p>
          </div>
          <div className="lg:col-span-8">
            <Diagram />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TRUTHS.map((t) => (
            <div key={t.title} className="flex gap-4 rounded-2xl border border-[var(--line)] bg-white p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--wash)]">
                <t.icon size={20} className="text-[#5560d6]" />
              </span>
              <div>
                <h3 className="font-display text-[15px] font-bold text-[var(--ink)]">{t.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-[var(--muted)]">{t.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
