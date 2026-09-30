"use client";

import { Check, Minus } from "@phosphor-icons/react";

export function Comparison() {
  return (
    <section id="comparison" className="w-full py-16 sm:py-24 border-t border-[#939db81a]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#7980e0]">
            The TAKO Philosophy
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Deliberately simpler than Dokploy &amp; Coolify.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#939db8] leading-relaxed">
            Most self-hosting tools evolve into complex multi-tenant platforms with app stores, heavy database clusters, and background workers. TAKO stays focused on deploying your code with minimal resource overhead.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mt-10 overflow-x-auto rounded-lg border border-[#939db826] bg-[#141622]">
          <table className="w-full text-left font-sans text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#939db826] bg-[#0b0c14] font-mono text-xs text-[#939db8]">
                <th className="py-3 px-4 sm:px-6 font-medium">Feature</th>
                <th className="py-3 px-4 sm:px-6 font-semibold text-[#7980e0]">TAKO</th>
                <th className="py-3 px-4 sm:px-6 font-medium">Coolify</th>
                <th className="py-3 px-4 sm:px-6 font-medium">Dokploy</th>
                <th className="py-3 px-4 sm:px-6 font-medium">Kubernetes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#939db81a] text-[#dee2e6]">
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Target Operator</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#7980e0] font-semibold">Single user / Solo dev</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">Teams &amp; Organizations</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">Multi-user</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">Enterprise ops</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Base Memory Footprint</td>
                <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold">&lt; 150 MB</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">~1.5 GB – 2 GB</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">~500 MB – 800 MB</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">2 GB – 4 GB+</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Worker Node Ports</td>
                <td className="py-3.5 px-4 sm:px-6 text-emerald-400 font-semibold">
                  <span className="inline-flex items-center gap-1">
                    <Check size={14} weight="bold" /> 0 open inbound ports
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">SSH port 22 exposed</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">SSH / daemon open</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">Kubelet &amp; overlay ports</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Node Connection</td>
                <td className="py-3.5 px-4 sm:px-6 text-white font-mono text-xs">Outbound TLS gRPC</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Inbound SSH tunnel</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Inbound SSH / Docker</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">mTLS overlay cluster</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Database Storage</td>
                <td className="py-3.5 px-4 sm:px-6 text-white font-mono text-xs">Pure SQLite (AES-256-GCM)</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">PostgreSQL + Redis</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">PostgreSQL</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Etcd cluster</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Build Paradigm</td>
                <td className="py-3.5 px-4 sm:px-6 text-white font-semibold">Pure Dockerfile</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">Nixpacks / Buildpacks</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">Nixpacks / Dockerfile</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">External CI / Kaniko</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">Reverse Proxy</td>
                <td className="py-3.5 px-4 sm:px-6 text-white font-mono text-xs">Traefik v3 (per node)</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Traefik / Caddy</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Traefik</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Ingress controller</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 sm:px-6 font-medium text-white">One-Click App Store</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8]">
                  <span className="inline-flex items-center gap-1 text-[#939db8]">
                    <Minus size={14} /> Explicit non-goal
                  </span>
                </td>
                <td className="py-3.5 px-4 sm:px-6 text-white font-mono text-xs">200+ templates</td>
                <td className="py-3.5 px-4 sm:px-6 text-white font-mono text-xs">50+ templates</td>
                <td className="py-3.5 px-4 sm:px-6 text-[#939db8] font-mono text-xs">Helm charts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
