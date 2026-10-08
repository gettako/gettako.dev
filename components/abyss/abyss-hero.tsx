import { Octopus } from "@/components/abyss/octopus";
import { InstallerTabs } from "@/components/installer-tabs";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

const PILLS = ["Go 1.24+", "Next.js 16", "Docker 24+", "Traefik v3", "SQLite AES-256-GCM", "Apache 2.0"];

export function AbyssHero() {
  return (
    <section className="abyss-hero-glow relative overflow-hidden pt-14 pb-16 sm:pt-20 sm:pb-20">
      {/* octopus looming behind the copy */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-start justify-center">
        <Octopus className="h-[480px] w-auto translate-y-[-40px] opacity-90 sm:h-[600px]" />
      </div>
      {/* fade the tentacles into the page below */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#04060d] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8f99b5]">
            Tako · Self-hosted PaaS
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-[#e9edf6] sm:text-6xl lg:text-7xl">
            Deploy into the <span className="abyss-glow-text">deep.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a7b0c9] sm:text-lg">
            A featherweight platform for your own servers. One control plane on the surface,
            tentacles reaching every node below — the entire stack idles at{" "}
            <strong className="font-semibold text-[#e9edf6]">~63 MiB</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[#8f99b5]">
            {PILLS.map((p) => (
              <span
                key={p}
                className={`rounded border px-2.5 py-1 backdrop-blur-sm ${
                  p === "Apache 2.0"
                    ? "border-[#7980e0]/40 bg-[#7980e0]/10 font-semibold text-[#a5b4fc]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {p}
              </span>
            ))}
          </div>

          {/* alpha notice */}
          <div className="mt-8 w-full max-w-3xl rounded-lg border border-amber-500/25 bg-amber-500/[0.07] p-3.5 text-left backdrop-blur-sm sm:p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-mono text-[11px] font-bold text-amber-400">
                !
              </span>
              <div className="text-xs sm:text-sm">
                <p className="font-semibold text-amber-400">Active Heavy Development</p>
                <p className="mt-0.5 text-xs leading-relaxed text-[#a7b0c9]">
                  Tako is in early alpha and iterating fast. Features, APIs, and install scripts may
                  change — expect bugs and breaking changes.
                </p>
              </div>
            </div>
          </div>

          <div id="install" className="mt-8 w-full max-w-3xl lg:max-w-4xl">
            <InstallerTabs />
          </div>

          <a
            href="#pressure"
            className="mt-12 inline-flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[#8f99b5] transition-colors hover:text-[#e9edf6]"
          >
            <span>Descend</span>
            <CaretDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
