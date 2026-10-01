"use client";

import { Check, Minus, Info } from "@phosphor-icons/react";

export function Comparison() {
  return (
    <section id="comparison" className="w-full py-16 sm:py-24 border-t border-[var(--border)] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            The Tako Philosophy
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Deliberately simpler than Dokploy &amp; Coolify.
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
            Most self-hosting tools evolve into heavy platforms with mandatory background database clusters (Postgres + Redis) and high idle overhead. Tako provides multi-user collaboration for your team while keeping the entire stack under ~70 MiB idle RAM.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-8 overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-3)] font-mono text-[11px] text-[var(--muted)]">
                  <th className="py-2.5 px-3.5 sm:px-5 font-medium min-w-[150px]">Feature</th>
                  <th className="py-2.5 px-3.5 sm:px-5 font-semibold text-[#5560d6] dark:text-[#7980e0] bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05] min-w-[170px]">
                    <div className="flex items-center gap-1.5">
                      <span>Tako</span>
                      <span className="rounded bg-[#5560d6]/10 dark:bg-[#7980e0]/15 px-1.5 py-0.2 text-[9px] text-[#5560d6] dark:text-[#7980e0]">7f32b2b</span>
                    </div>
                  </th>
                  <th className="py-2.5 px-3.5 sm:px-5 font-medium min-w-[140px]">
                    Coolify <span className="text-[10px] text-[var(--muted)]">v4.3</span>
                  </th>
                  <th className="py-2.5 px-3.5 sm:px-5 font-medium min-w-[140px]">
                    Dokploy <span className="text-[10px] text-[var(--muted)]">v0.30</span>
                  </th>
                  <th className="py-2.5 px-3.5 sm:px-5 font-medium min-w-[140px]">
                    Kubernetes <span className="text-[10px] text-[var(--muted)]">k3s</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)] text-[var(--foreground)]">
                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">Target Operator</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-semibold text-[#5560d6] dark:text-[#7980e0] bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    Solo devs &amp; Single team
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">Multi-team &amp; Orgs</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">Solo devs &amp; Single team</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">Enterprise multi-tenant</td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">User Model</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span>Multi-user (1 team)</span>
                    <span className="block text-[10px] text-emerald-600 dark:text-emerald-400">Admin/Member · 2FA · Passkeys</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>Multi-team / Multi-org</span>
                    <span className="block text-[10px] text-[var(--muted)]">Isolated teams &amp; roles</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>Multi-user (1 team)</span>
                    <span className="block text-[10px] text-[var(--muted)]">Admin / Member roles</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>Multi-tenant</span>
                    <span className="block text-[10px] text-[var(--muted)]">Namespaces · OIDC · RBAC</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">
                    <div>Idle Container RAM*</div>
                    <div className="text-[10px] text-[var(--muted)]">docker stats (settled – peak)</div>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-semibold text-emerald-600 dark:text-emerald-400 bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span>63 – 69 MiB</span>
                    <span className="block text-[10px] font-normal text-emerald-600/80 dark:text-emerald-400/80">63.3 MiB settled</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>413 – 557 MiB</span>
                    <span className="block text-[10px] text-[var(--muted)]">413.0 MiB settled</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>825 – 841 MiB</span>
                    <span className="block text-[10px] text-[var(--muted)]">825.5 MiB settled</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>~1.5 – 2.5 GiB+</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">
                    <div>Host RAM Delta*</div>
                    <div className="text-[10px] text-[var(--muted)]">free -m (includes shims &amp; OS)</div>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-semibold text-emerald-600 dark:text-emerald-400 bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span>+113 – 146 MiB</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>+562 – 795 MiB</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>+939 – 966 MiB</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>+2.0 – 4.0 GiB+</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">
                    <div>Docker Image Storage</div>
                    <div className="text-[10px] text-[var(--muted)]">docker system df</div>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-semibold text-emerald-600 dark:text-emerald-400 bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span>697 MB</span>
                    <span className="block text-[10px] font-normal text-emerald-600/80 dark:text-emerald-400/80">4 images (0.68 GiB)</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>3,134 MB</span>
                    <span className="block text-[10px] text-[var(--muted)]">7 images (3.06 GiB)</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>5,297 MB</span>
                    <span className="block text-[10px] text-[var(--muted)]">3 images (5.17 GiB)</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                    <span>5 – 10 GiB+</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">Background Daemons</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span>4 containers</span>
                    <span className="block text-[10px] text-[var(--muted)]">Go + Next + Traefik</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">
                    <span>6 containers</span>
                    <span className="block text-[10px] text-[var(--muted)]">PHP · Soketi · PG · Redis</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">
                    <span>3 containers</span>
                    <span className="block text-[10px] text-[var(--muted)]">Node · Postgres · Traefik</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">
                    <span>10+ system pods</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">Database Engine</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span>Embedded SQLite</span>
                    <span className="block text-[10px] text-emerald-600 dark:text-emerald-400">AES-256-GCM · 0 MB daemon</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">
                    <span>PostgreSQL 15 + Redis 7</span>
                    <span className="block text-[10px] text-[var(--muted)]">2 dedicated services</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">
                    <span>PostgreSQL 16</span>
                    <span className="block text-[10px] text-[var(--muted)]">1 dedicated service</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">
                    <span>Etcd cluster</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">Worker Node Ports</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-semibold text-emerald-600 dark:text-emerald-400 bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span className="inline-flex items-center gap-1">
                      <Check size={13} weight="bold" /> 0 open inbound ports
                    </span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">SSH port 22 exposed</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">SSH / daemon open</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">Kubelet &amp; overlay ports</td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">Node Connection</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    Outbound TLS gRPC
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">Inbound SSH tunnel</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">Inbound SSH / Docker</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--muted)]">mTLS overlay mesh</td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">Build Engine</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-semibold bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    Pure Dockerfile
                    <span className="block text-[10px] font-normal text-[var(--muted)]">Can offload to worker agent</span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">Nixpacks / Dockerfile</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">Nixpacks / Dockerfile</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">External CI / Kaniko</td>
                </tr>

                <tr>
                  <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">One-Click App Store</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)] bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05]">
                    <span className="inline-flex items-center gap-1 text-[11px]">
                      <Minus size={13} /> Explicit non-goal
                    </span>
                  </td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--foreground)]">200+ templates</td>
                  <td className="py-2.5 px-3.5 sm:px-5 font-mono text-[11px] text-[var(--foreground)]">50+ templates</td>
                  <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)] font-mono text-[11px]">Helm charts</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Benchmark Methodology & Disclaimers Box */}
        <div className="mt-5 rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-3.5 sm:p-4 text-[11px] text-[var(--muted)] space-y-2.5 transition-colors">
          <div className="flex items-center gap-1.5 font-mono font-semibold text-[var(--foreground)] text-xs">
            <Info size={14} className="text-[#5560d6] dark:text-[#7980e0]" />
            <span>Benchmark Notes &amp; Disclaimers</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 pt-0.5 leading-relaxed">
            <div>
              <strong className="text-[var(--foreground)] block mb-0.5">Environment:</strong>
              Measured on identical clean VPS (2 vCPU AMD EPYC 9754, 8 GB RAM, Ubuntu 26.04, Docker 29). Baseline OS idle was 682 MiB RAM.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-0.5">Host Delta vs Container:</strong>
              Host Delta (<code className="rounded bg-[var(--surface)] px-1 py-0.2 font-mono">free -m</code>) accounts for containerd-shims, veth interfaces, and cgroups. We report both for full transparency.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-0.5">Single-Team Simplicity:</strong>
              Tako supports multi-user collaboration (Admin/Member, passkeys, 2FA) within one shared team, avoiding heavy PostgreSQL/Redis clusters via embedded encrypted SQLite.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-0.5">Zero Workload:</strong>
              Reflects control-plane idle. Active builds consume additional CPU/RAM. Tako allows delegating builds to remote worker agents to keep the primary node light.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
