import { SectionHead } from "@/components/ui";

const FIGURES = [
  { name: "Tako", value: "63", hot: true },
  { name: "Coolify", value: "413", hot: false },
  { name: "Dokploy", value: "825", hot: false },
];

export function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="01"
          kicker="Manifesto"
          title={
            <>
              Cloud platforms got fat.
              <br />
              <span className="text-[#5560d6]">We stayed lean.</span>
            </>
          }
          lede="Every self-hosting tool eventually grows a mandatory Postgres, a Redis, a queue, a dashboard for the dashboard. Tako refuses — one Go binary, one embedded database, four containers. Your RAM stays yours."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {FIGURES.map((f) => (
            <div key={f.name} className={`border-t-4 pt-5 ${f.hot ? "border-[#5560d6]" : "border-[var(--line)]"}`}>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
                {f.name}
              </p>
              <p className={`display-xl mt-2 ${f.hot ? "text-7xl text-[var(--ink)] sm:text-8xl" : "text-5xl text-[#c3c8e2] sm:text-6xl"}`}>
                {f.value}
                <span className="ml-2 align-baseline text-2xl text-[var(--faint)] sm:text-3xl">MiB</span>
              </p>
              <p className="mt-2 font-mono text-[11px] text-[var(--faint)]">idle RAM · docker stats</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl font-mono text-[11px] leading-relaxed text-[var(--faint)]">
          * Same 2 vCPU / 8 GB VPS, Ubuntu 26.04, Docker 29, zero workload. 6.5× lighter than
          Coolify, 13× lighter than Dokploy.
        </p>
      </div>
    </section>
  );
}
