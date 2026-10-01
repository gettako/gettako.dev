import { Navbar } from "@/components/navbar";
import { InstallerTabs } from "@/components/installer-tabs";
import { HeroTerminal } from "@/components/hero-terminal";
import { Architecture } from "@/components/architecture";
import { Features } from "@/components/features";
import { Comparison } from "@/components/comparison";
import { Footer } from "@/components/footer";
import { ArrowUpRight, CheckCircle, Terminal, Cpu } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5560d6]/30 bg-[#5560d6]/10 px-3 py-1 text-xs font-mono font-medium text-[#5560d6] dark:text-[#7980e0]">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Tako v0.1 • Self-Hosted Application Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--foreground)] max-w-5xl leading-[1.12]">
                Deploy to your own servers on git push.{" "}
                <span className="text-[#5560d6] dark:text-[#7980e0]">Zero bloat.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-5 max-w-3xl text-base sm:text-lg text-[var(--muted)] leading-relaxed">
                A lightweight, resource-efficient self-hosted PaaS alternative to Coolify and Dokploy with multi-user support. Run the control plane on one server, manage remote worker nodes over outbound TLS gRPC, and build directly from Dockerfiles.
              </p>

              {/* Specs Pills */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[var(--muted)]">
                <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1">
                  Go 1.24+
                </span>
                <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1">
                  Next.js 16
                </span>
                <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1">
                  Docker 24+
                </span>
                <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1">
                  Traefik v3
                </span>
                <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1">
                  SQLite AES-256-GCM
                </span>
                <span className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[#5560d6] dark:text-[#7980e0] font-semibold">
                  Apache 2.0
                </span>
              </div>

              {/* Install Box Component */}
              <div id="install" className="mt-10 w-full max-w-3xl lg:max-w-4xl">
                <InstallerTabs />
              </div>
            </div>

            {/* Interactive Terminal Output Showcase */}
            <div className="mt-12 sm:mt-16 mx-auto max-w-5xl">
              <HeroTerminal />
            </div>
          </div>
        </section>

        {/* ARCHITECTURE SECTION */}
        <Architecture />

        {/* FEATURES GRID */}
        <Features />

        {/* COMPARISON / WHY TAKO */}
        <Comparison />

        {/* STEP BY STEP INSTALLATION GUIDE */}
        <section className="w-full py-16 sm:py-24 border-t border-[var(--border)] bg-[var(--surface)] transition-colors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
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
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-6 flex flex-col justify-between transition-colors">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#5560d6] dark:text-[#7980e0]">
                      STEP 01
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-[#5560d6]/10 px-2 py-0.5 text-[11px] font-mono text-[#5560d6] dark:text-[#7980e0]">
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
                  <div className="mt-4 rounded bg-[var(--code-bg)] border border-[var(--border)] p-3 font-mono text-xs text-[var(--foreground)] overflow-x-auto transition-colors">
                    <span className="text-[#5560d6] dark:text-[#7980e0] font-bold select-none">$</span> curl -fsSL https://gettako.dev/install.sh | bash
                  </div>
                  <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>Starts Web Dashboard on port 3000</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>Starts Go orchestrator and gRPC coordinator</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>Generates AES-256-GCM encryption key &amp; one-time credentials</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 2 Card */}
              <div className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-6 flex flex-col justify-between transition-colors">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      STEP 02 (Optional)
                    </span>
                    <span className="inline-flex items-center gap-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
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
                  <div className="mt-4 rounded bg-[var(--code-bg)] border border-[var(--border)] p-3 font-mono text-xs text-[var(--foreground)] overflow-x-auto transition-colors">
                    <span className="text-[#5560d6] dark:text-[#7980e0] font-bold select-none">$</span> curl -fsSL https://gettako.dev/agent.sh | bash
                  </div>
                  <ul className="mt-4 space-y-1.5 text-xs text-[var(--muted)]">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>Prompts for your control plane URL and enrollment token</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>Starts Traefik v3 for automatic domain SSL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-emerald-500 dark:text-emerald-400 shrink-0" />
                      <span>Maintains outbound-only TLS gRPC heartbeat stream</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION BANNER */}
        <section className="w-full py-16 border-t border-[var(--border)] transition-colors">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-[#5560d6]/30 bg-[var(--surface)] p-8 sm:p-12 text-center transition-colors">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--foreground)]">
                Take complete ownership of your hosting infrastructure.
              </h2>
              <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-[var(--muted)]">
                Open source, Apache 2.0 licensed, with no cloud lock-in or artificial upgrade paywalls.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#install"
                  className="rounded bg-[#5560d6] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4f46e5]"
                >
                  Install Tako Now
                </a>
                <a
                  href="https://docs.gettako.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface-2)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[#5560d6]/50"
                >
                  <span>Explore Documentation</span>
                  <ArrowUpRight size={15} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
