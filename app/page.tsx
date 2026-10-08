import { Navbar } from "@/components/navbar";
import { ReachHero } from "@/components/reach/reach-hero";
import { ArchitectureScene } from "@/components/reach/architecture-scene";
import { RamMeter } from "@/components/ram-meter";
import { TentacleDivider } from "@/components/tentacle-divider";
import { CopyButton } from "@/components/copy-button";
import { Features } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { Security } from "@/components/security";
import { Roadmap } from "@/components/roadmap";
import { Footer } from "@/components/footer";
import { ArrowUpRight, CheckCircle, Terminal, Cpu } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col text-[var(--foreground)]">
      <Navbar />

      <main className="relative z-10 flex-1">
        {/* HERO — deployments, delivered */}
        <ReachHero />

        <TentacleDivider />

        {/* PRESSURE GAUGE — zero bloat, measured */}
        <RamMeter />

        {/* ARCHITECTURE — the core reaches every server */}
        <section id="architecture" className="w-full py-16 sm:py-24 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7980e0]">
                System Architecture
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                One core reaches every server.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                The control plane is a single hub — a single pane of glass for deployments,
                services, and nodes. It reaches out over outbound TLS gRPC and stacks containers
                onto your workers. No consensus clusters, no Kubernetes overhead, no ingress overlays.
              </p>
            </div>

            <ArchitectureScene />
          </div>
        </section>

        <TentacleDivider flip />

        {/* FEATURES GRID */}
        <Features />

        {/* COMPARISON / WHY TAKO */}
        <Comparison />

        {/* SECURITY SPOTLIGHT */}
        <Security />

        {/* PUBLIC ROADMAP */}
        <Roadmap />

        {/* STEP BY STEP INSTALLATION GUIDE */}
        <section className="w-full py-16 sm:py-24 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7980e0]">
                Quick Setup
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
                Up and running in two commands.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                Requirements: A Linux VPS (Ubuntu 22.04+, Debian 12+, Rocky 9+, or Alpine), at least 1 GB RAM, and root or sudo access.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Step 1 Card */}
              <div className="rounded-lg border border-[var(--border)] bg-white/[0.03] p-6 flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#7980e0]">
                      STEP 01
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#7980e0]/10 px-2 py-0.5 text-[11px] font-mono text-[#a5b4fc]">
                      <Terminal size={12} />
                      Primary Server
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[var(--foreground)]">
                    Install the Control Plane
                  </h3>
                  <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                    SSH into your primary Linux server and execute the automated setup script. It provisions Docker, initializes the database, and launches the dashboard.
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded bg-black/30 border border-[var(--border)] p-2.5 pl-3">
                    <div className="flex-1 min-w-0 overflow-x-auto font-mono text-xs text-[var(--foreground)] whitespace-nowrap">
                      <span className="text-[#7980e0] font-bold select-none">$</span> curl -fsSL https://gettako.dev/install.sh | bash
                    </div>
                    <CopyButton text="curl -fsSL https://gettako.dev/install.sh | bash" />
                  </div>
                  <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Starts Web Dashboard on port 3000</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Starts Go orchestrator and gRPC coordinator</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Generates AES-256-GCM encryption key &amp; one-time credentials</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 Card */}
              <div className="rounded-lg border border-[var(--border)] bg-white/[0.03] p-6 flex flex-col justify-between backdrop-blur-sm">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      STEP 02 (Optional)
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-400">
                      <Cpu size={12} />
                      Remote Nodes
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[var(--foreground)]">
                    Enroll Remote Worker Nodes
                  </h3>
                  <p className="mt-2 text-xs text-[var(--muted)] leading-relaxed">
                    Want to run applications on additional servers? Run the agent script on any remote VPS. It connects outward to your control plane with no open inbound ports.
                  </p>
                  <div className="mt-4 flex items-center gap-2 rounded bg-black/30 border border-[var(--border)] p-2.5 pl-3">
                    <div className="flex-1 min-w-0 overflow-x-auto font-mono text-xs text-[var(--foreground)] whitespace-nowrap">
                      <span className="text-[#7980e0] font-bold select-none">$</span> curl -fsSL https://gettako.dev/agent.sh | bash
                    </div>
                    <CopyButton text="curl -fsSL https://gettako.dev/agent.sh | bash" />
                  </div>
                  <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Prompts for your control plane URL and enrollment token</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Starts Traefik v3 for automatic domain SSL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-400 shrink-0" />
                      <span>Maintains outbound-only TLS gRPC heartbeat stream</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION / PRICING BANNER */}
        <section className="w-full py-16 border-t border-[var(--border)]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[#7980e0]/25 bg-white/[0.025] p-8 sm:p-12 backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7980e0]">
                    Pricing
                  </span>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-5xl sm:text-6xl font-extrabold tracking-tight text-[var(--foreground)]">$0</span>
                    <span className="font-mono text-sm text-[var(--muted)]">/ forever</span>
                  </div>
                  <p className="mt-3 max-w-md text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                    Take complete ownership of your hosting infrastructure. Open source under Apache 2.0 —
                    no cloud lock-in, no seat limits, no artificial upgrade paywalls.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href="#install"
                      className="rounded bg-[#7980e0] px-5 py-2.5 text-sm font-semibold text-[#04060d] transition-colors hover:bg-[#a5b4fc]"
                    >
                      Install Tako Now
                    </a>
                    <a
                      href="https://github.com/gettako/tako"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-white/[0.05] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[#7980e0]/50"
                    >
                      <span>View Source</span>
                      <ArrowUpRight size={15} weight="bold" />
                    </a>
                  </div>
                </div>
                <ul className="space-y-3 text-sm">
                  {[
                    "Every feature included — nothing held back",
                    "Unlimited worker nodes on your own servers",
                    "Unlimited team members, one shared team",
                    "Self-hosted: your code never leaves your infrastructure",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[var(--foreground)]">
                      <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
