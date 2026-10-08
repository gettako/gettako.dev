import { HeroScene } from "@/components/reach/hero-scene";
import { InstallerTabs } from "@/components/installer-tabs";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";

const PILLS = ["Go 1.24+", "Next.js 16", "Docker 24+", "Traefik v3", "SQLite AES-256-GCM", "Apache 2.0"];

export function ReachHero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-10 sm:pt-20">
      <div aria-hidden="true" className="reach-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-[#939cb8]">
            Tako · Lightweight self-hosted PaaS
          </span>

          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.06] tracking-tight text-[#eceff7] sm:text-6xl lg:text-7xl">
            Deployments, <span className="reach-glow-text">delivered.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#a9b2cc] sm:text-lg">
            Tako carries your containers from git push to your own servers. One featherweight
            control plane reaches every node — the entire stack idles at{" "}
            <strong className="font-semibold text-[#eceff7]">~63 MiB</strong>.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[#939cb8]">
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

          <div id="install" className="mt-8 w-full max-w-3xl lg:max-w-4xl">
            <InstallerTabs />
          </div>

          <div className="mt-6 w-full max-w-3xl rounded-lg border border-amber-500/25 bg-amber-500/[0.06] p-3.5 text-left backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-amber-500/20 font-mono text-[11px] font-bold text-amber-400">
                !
              </span>
              <p className="text-xs leading-relaxed text-[#a9b2cc]">
                <span className="font-semibold text-amber-400">Early alpha.</span> Tako is under
                heavy development — features, APIs, and install scripts may change. Expect bugs.
              </p>
            </div>
          </div>
        </div>

        {/* the delivery scene */}
        <div className="mt-6 sm:mt-10">
          <HeroScene />
        </div>

        <div className="mt-2 flex justify-center">
          <a
            href="#pressure"
            className="inline-flex flex-col items-center gap-1 font-mono text-[11px] uppercase tracking-[0.25em] text-[#939cb8] transition-colors hover:text-[#eceff7]"
          >
            <span>How it works</span>
            <CaretDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
