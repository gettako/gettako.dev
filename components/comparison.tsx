"use client";

import { Check, Minus } from "@phosphor-icons/react";

export function Comparison() {
  return (
    <section id="comparison" className="w-full py-16 sm:py-24 border-t border-[var(--border)] transition-colors">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            The Tako Philosophy
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Deliberately simpler than Dokploy &amp; Coolify.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Most self-hosting tools evolve into complex multi-tenant platforms with app stores, heavy database clusters, and background workers. Tako stays focused on deploying your code with minimal resource overhead.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface)] transition-colors">
          <table className="w-full text-left font-sans text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--surface-3)] font-mono text-xs text-[var(--muted)]">
                <th className="py-3 px-4 sm:px-6 font-medium">Feature</th>
                <th className="py-3 px-4 sm:px-6 font-semibold text-[#5560d6] dark:text-[#7980e0]">Tako</th>
                <th className="py-3 px-4 sm:px-6 font-medium">Coolify</th>
                <th className="py-3 px-4 sm:px-6 font-medium">Dokploy</th>
                <th className="py-3 px-4 sm:px-6 font-medium">Kubernetes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)] text-[var(--foreground)]">
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Target Operator</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#5560d6] dark:text-[#7980e0] font-semibold">Single user / Solo dev</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">Teams &amp; Organizations</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">Multi-user</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">Enterprise ops</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Base Memory Footprint</td>
                <td className="py-3.5 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400 font-semibold">&lt; 150 MB</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">~1.5 GB – 2 GB</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">~500 MB – 800 MB</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">2 GB – 4 GB+</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Worker Node Ports</td>
                <td className="py-3.5 px-4 sm:px-6 text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1">
                    <Check size={14} weight="bold" /> 0 open inbound ports
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">SSH port 22 exposed</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">SSH / daemon open</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">Kubelet &amp; overlay ports</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Node Connection</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-[var(--foreground)]">Outbound TLS gRPC</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Inbound SSH tunnel</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Inbound SSH / Docker</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">mTLS overlay cluster</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Database Storage</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-[var(--foreground)]">Pure SQLite (AES-256-GCM)</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">PostgreSQL + Redis</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">PostgreSQL</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Etcd cluster</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Build Paradigm</td>
                <td className="py-3.5 px-4 sm:px-6 font-semibold text-[var(--foreground)]">Pure Dockerfile</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">Nixpacks / Buildpacks</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">Nixpacks / Dockerfile</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">External CI / Kaniko</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">Reverse Proxy</td>
                <td className="py-3.5 px-4 sm:px-6 font-mono text-xs text-[var(--foreground)]">Traefik v3 (per node)</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Traefik / Caddy</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Traefik</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Ingress controller</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium">One-Click App Store</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)]">
                  <span className="inline-flex items-center gap-1">
                    <Minus size={14} /> Explicit non-goal
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--foreground)] font-mono text-xs">200+ templates</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--foreground)] font-mono text-xs">50+ templates</td>
                <td className="py-3.5 px-4 sm:px-6 text-[var(--muted)] font-mono text-xs">Helm charts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
