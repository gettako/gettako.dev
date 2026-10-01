"use client";

import { ShieldCheck, ArrowsLeftRight, LockKey, TerminalWindow, PlugsConnected } from "@phosphor-icons/react";

export function Architecture() {
  return (
    <section id="architecture" className="w-full py-16 sm:py-24 border-t border-[var(--border)] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            System Architecture
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Designed for simplicity. Built for developers & teams.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            One central control plane orchestrates multiple remote worker nodes. No distributed consensus clusters, no Kubernetes overhead, and no complicated ingress overlays.
          </p>
        </div>

        {/* Visual Topology Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Primary Control Plane Box */}
          <div className="lg:col-span-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded border border-[#5560d6]/40 bg-[#5560d6]/10 px-2.5 py-1 text-xs font-mono font-medium text-[#5560d6] dark:text-[#7980e0]">
                  <TerminalWindow size={14} />
                  Primary Server
                </span>
                <span className="font-mono text-[11px] text-[var(--muted)]">Port 3000 / 8080 / 50051</span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-[var(--foreground)]">Tako Control Plane</h3>
              <p className="mt-1 text-xs text-[var(--muted)] leading-relaxed">
                The single pane of glass for all your deployments, services, and worker nodes.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">Next.js 16 Web Console</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Base UI (`base-vega`), Tailwind CSS 4, zero shadows, flat theme design.
                  </div>
                </div>

                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">Go REST API &amp; SSE Streamer</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Real-time container logs, git webhook handlers, and deploy coordinator.
                  </div>
                </div>

                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">Encrypted SQLite DB (WAL Mode)</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Pure-Go SQLite engine with AES-256-GCM secret encryption at rest.
                  </div>
                </div>

                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">gRPC Coordinator (TLS)</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Bidirectional heartbeat and command dispatcher for connected worker agents.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-[11px] text-[var(--muted)]">
              <LockKey size={14} className="text-[#5560d6] dark:text-[#7980e0]" />
              <span>Installed via <code className="text-[var(--foreground)] font-semibold">gettako.dev/install.sh</code></span>
            </div>
          </div>

          {/* Connection Channel Middle Box */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-4 text-center transition-colors">
            <div className="h-10 w-10 rounded-full border border-[#5560d6]/50 bg-[#5560d6]/10 flex items-center justify-center text-[#5560d6] dark:text-[#7980e0]">
              <ArrowsLeftRight size={20} weight="bold" />
            </div>
            <div className="mt-3 font-mono text-xs font-semibold text-[var(--foreground)]">
              Outbound TLS
            </div>
            <div className="mt-1 text-[11px] text-[var(--muted)] leading-tight">
              gRPC bidirectional stream
            </div>
            <div className="mt-4 rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
              0 Inbound Ports Open
            </div>
            <p className="mt-3 text-[10px] text-[var(--muted)] leading-normal">
              Nodes initiate connection outward to Control Plane. Worker servers remain invisible to public port scanners.
            </p>
          </div>

          {/* Remote Worker Node Box */}
          <div className="lg:col-span-5 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6 flex flex-col justify-between transition-colors">
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-mono font-medium text-emerald-600 dark:text-emerald-400">
                  <PlugsConnected size={14} />
                  Remote Worker Node
                </span>
                <span className="font-mono text-[11px] text-[var(--muted)]">Port 80 / 443 only</span>
              </div>

              <h3 className="mt-4 text-lg font-bold text-[var(--foreground)]">Tako Node Agent &amp; Traefik</h3>
              <p className="mt-1 text-xs text-[var(--muted)] leading-relaxed">
                Lightweight worker daemon that executes builds and routes traffic to isolated containers.
              </p>

              <div className="mt-6 space-y-3 font-mono text-xs">
                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">Tako Agent Daemon (Go)</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Docker Engine SDK coordinator, health check supervisor, build executor.
                  </div>
                </div>

                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">Traefik v3 Reverse Proxy</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Automated Let&apos;s Encrypt SSL certificates and zero-downtime traffic cutover.
                  </div>
                </div>

                <div className="rounded border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-colors">
                  <div className="font-semibold text-[var(--foreground)]">Application Containers</div>
                  <div className="text-[11px] text-[var(--muted)] mt-0.5">
                    Direct Dockerfile builds (Go, Node, Laravel, Rust, Python) with local image rollback retention.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-[11px] text-[var(--muted)]">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400" />
              <span>Installed via <code className="text-[var(--foreground)] font-semibold">gettako.dev/agent.sh</code></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
