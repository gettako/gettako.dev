import { SectionHead } from "@/components/ui";

const STEPS = [
  {
    n: "01",
    title: "Push",
    copy: "Push to your repo. Tako catches the webhook — no CI service in the middle, no YAML labyrinth.",
    art: "push",
  },
  {
    n: "02",
    title: "Tako lifts",
    copy: "The core builds your Dockerfile and ferries the container to your servers over outbound-only gRPC.",
    art: "lift",
  },
  {
    n: "03",
    title: "It runs",
    copy: "Traefik cuts traffic over with zero downtime and renews TLS. Roll back in one click if needed.",
    art: "run",
  },
] as const;

function Art({ kind }: { kind: "push" | "lift" | "run" }) {
  if (kind === "push")
    return (
      <svg viewBox="0 0 300 96" className="h-24 w-full" aria-hidden="true">
        <rect x="12" y="28" width="196" height="32" rx="8" fill="#fff" stroke="rgba(25,29,51,0.12)" />
        <text x="26" y="49" fill="#191d33" fontSize="13" fontFamily="Iosevka, monospace">$ git push</text>
        <circle cx="222" cy="44" r="4" fill="#22c55e" />
        <path d="M120 60 C120 78 190 78 224 84" fill="none" stroke="#5560d6" strokeWidth="2.5" strokeDasharray="6 8" className="flow" />
        <path d="M216 78 L226 85 L218 93" fill="none" stroke="#5560d6" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="226" y="70" width="34" height="26" rx="4" fill="#eef0ff" stroke="#5560d6" strokeWidth="2" />
        <text x="243" y="87" textAnchor="middle" fill="#2f358f" fontSize="10" fontFamily="Iosevka, monospace" fontWeight="700">app</text>
      </svg>
    );
  if (kind === "lift")
    return (
      <svg viewBox="0 0 300 96" className="h-24 w-full" aria-hidden="true">
        <circle cx="150" cy="78" r="9" fill="#5560d6" />
        <path d="M150 69 C150 52 116 50 98 38" fill="none" stroke="#5560d6" strokeWidth="6" strokeLinecap="round" opacity="0.45" />
        <path d="M150 69 C150 52 116 50 98 38" fill="none" stroke="#22d3ee" strokeWidth="2" strokeDasharray="5 7" className="flow" />
        <path d="M150 69 C150 52 184 50 202 38" fill="none" stroke="#5560d6" strokeWidth="6" strokeLinecap="round" opacity="0.3" />
        <rect x="76" y="20" width="34" height="26" rx="4" fill="#eef0ff" stroke="#5560d6" strokeWidth="2" />
        <text x="93" y="37" textAnchor="middle" fill="#2f358f" fontSize="10" fontFamily="Iosevka, monospace" fontWeight="700">api</text>
        <rect x="198" y="20" width="34" height="26" rx="4" fill="#eef0ff" stroke="#5560d6" strokeWidth="2" />
        <text x="215" y="37" textAnchor="middle" fill="#2f358f" fontSize="10" fontFamily="Iosevka, monospace" fontWeight="700">web</text>
      </svg>
    );
  return (
    <svg viewBox="0 0 300 96" className="h-24 w-full" aria-hidden="true">
      <line x1="20" y1="80" x2="280" y2="80" stroke="rgba(25,29,51,0.15)" strokeWidth="3" strokeLinecap="round" />
      {[52, 132, 212].map((x, i) => (
        <g key={x}>
          <rect x={x} y="44" width="36" height="28" rx="4" fill={i === 1 ? "#5560d6" : "#eef0ff"} stroke="#5560d6" strokeWidth="2" />
          <circle cx={x + 18} cy="36" r="4" fill="#22c55e" />
        </g>
      ))}
      <text x="150" y="20" textAnchor="middle" fill="#5d657f" fontSize="11" fontFamily="Iosevka, monospace">
        https://yourapp.com — 200 OK
      </text>
    </svg>
  );
}

export function How() {
  return (
    <section id="how" className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="02"
          kicker="How it works"
          title={
            <>
              Three moves.
              <br />
              <span className="text-[var(--faint)]">Zero ceremony.</span>
            </>
          }
        />
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((s) => (
            <article
              key={s.n}
              className="rounded-3xl border border-[var(--line)] bg-[#fcfcff] p-7 transition-all hover:-translate-y-1 hover:border-[#5560d6]/40 hover:shadow-[0_20px_50px_rgba(85,96,214,0.12)]"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm font-extrabold tracking-[0.2em] text-[#5560d6]">{s.n}</span>
                <h3 className="font-display text-2xl font-bold text-[var(--ink)]">{s.title}</h3>
              </div>
              <div className="mt-5 rounded-2xl bg-[var(--wash)]/60 py-3">
                <Art kind={s.art} />
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">{s.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
