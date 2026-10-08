import { SectionHead } from "@/components/ui";
import { Box } from "@/components/box";

function PushArt() {
  return (
    <svg viewBox="0 0 320 120" className="h-28 w-full" aria-hidden="true">
      <rect x="16" y="30" width="220" height="34" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(160,175,215,0.2)" />
      <text x="30" y="52" fill="#dfe4f5" fontSize="13" fontFamily="Iosevka, monospace">
        $ git push origin main
      </text>
      <circle cx="252" cy="47" r="4" fill="#34d399" />
      <circle cx="252" cy="47" r="4" fill="none" stroke="#34d399" className="ping-soft" />
      <path d="M128 64 C128 84 200 84 236 92" fill="none" stroke="#7c83ff" strokeWidth="2.5" strokeDasharray="6 8" className="flow" />
      <path d="M228 86 L238 93 L230 101" fill="none" stroke="#7c83ff" strokeWidth="2.5" strokeLinecap="round" />
      <Box x={236} y={86} label="app" scale={0.72} />
    </svg>
  );
}

function LiftArt() {
  return (
    <svg viewBox="0 0 320 120" className="h-28 w-full" aria-hidden="true">
      <circle cx="160" cy="104" r="10" fill="#7c83ff" />
      <circle cx="160" cy="104" r="16" fill="none" stroke="#7c83ff" strokeOpacity="0.4" strokeDasharray="3 6" className="orbit" />
      <path d="M160 94 C160 70 120 66 96 50" fill="none" stroke="url(#liftArm)" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M160 94 C160 70 120 66 96 50" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="6 8" className="flow" />
      <path d="M160 94 C160 70 200 66 224 50" fill="none" stroke="#7c83ff" strokeWidth="7" strokeLinecap="round" strokeOpacity="0.35" />
      <defs>
        <linearGradient id="liftArm" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#7c83ff" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <Box x={72} y={22} label="app" scale={0.72} delay="-2s" />
      <Box x={216} y={22} label="api" scale={0.72} delay="-4s" />
    </svg>
  );
}

function RunArt() {
  return (
    <svg viewBox="0 0 320 120" className="h-28 w-full" aria-hidden="true">
      <line x1="24" y1="102" x2="296" y2="102" stroke="rgba(160,175,215,0.3)" strokeWidth="3" strokeLinecap="round" />
      <Box x={48} y={52} label="web" scale={0.72} />
      <Box x={136} y={52} label="api" scale={0.72} delay="-1.5s" />
      <Box x={224} y={52} label="db" scale={0.72} delay="-3s" />
      <g fill="#34d399">
        <circle cx="66" cy="44" r="4" />
        <circle cx="154" cy="44" r="4" />
        <circle cx="242" cy="44" r="4" />
      </g>
      <text x="160" y="22" textAnchor="middle" fill="#8a93b2" fontSize="11" fontFamily="Iosevka, monospace">
        https://yourapp.com — 200 OK
      </text>
    </svg>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Push",
    copy: "Push to your repo. Tako catches the webhook, no CI service in the middle, no YAML labyrinth.",
    art: <PushArt />,
  },
  {
    n: "02",
    title: "Lift",
    copy: "The core builds your Dockerfile and lifts the container onto your servers over outbound-only gRPC.",
    art: <LiftArt />,
  },
  {
    n: "03",
    title: "Run",
    copy: "Traefik cuts traffic over with zero downtime and renews your TLS. Roll back in one click if needed.",
    art: <RunArt />,
  },
];

export function How() {
  return (
    <section id="how" className="relative border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="02"
          kicker="How it works"
          title={
            <>
              Three moves.
              <br />
              <span className="text-[#5b637f]">Zero ceremony.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors hover:border-[#7c83ff]/40"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-bold tracking-[0.2em] text-[#e8933f]">{s.n}</span>
                <h3 className="font-display text-2xl font-bold text-[#f2f4fa]">{s.title}</h3>
              </div>
              <div className="mt-4 border-y border-white/[0.07] py-2">{s.art}</div>
              <p className="mt-4 text-sm leading-relaxed text-[#8a93b2]">{s.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
