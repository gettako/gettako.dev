"use client";

import { useState } from "react";
import { Check, Minus, Info } from "@phosphor-icons/react";

type Competitor = "coolify" | "dokploy" | "k8s";

interface RowItem {
  feature: string;
  featureSub?: string;
  tako: {
    title: string;
    sub?: string;
    isGood?: boolean;
    isCheck?: boolean;
    isMinus?: boolean;
  };
  coolify: {
    title: string;
    sub?: string;
    isCheck?: boolean;
    isMinus?: boolean;
  };
  dokploy: {
    title: string;
    sub?: string;
    isCheck?: boolean;
    isMinus?: boolean;
  };
  k8s: {
    title: string;
    sub?: string;
    isCheck?: boolean;
    isMinus?: boolean;
  };
}

const comparisonData: RowItem[] = [
  {
    feature: "Target Operator",
    tako: { title: "Solo devs & Single team", isGood: true },
    coolify: { title: "Multi-team & Orgs" },
    dokploy: { title: "Solo devs & Single team" },
    k8s: { title: "Enterprise multi-tenant" },
  },
  {
    feature: "User Model",
    tako: {
      title: "Multi-user (1 team)",
      sub: "Admin/Member · 2FA · Passkeys",
      isGood: true,
    },
    coolify: {
      title: "Multi-team / Multi-org",
      sub: "Isolated teams & roles",
    },
    dokploy: {
      title: "Multi-user (1 team)",
      sub: "Admin / Member roles",
    },
    k8s: {
      title: "Multi-tenant",
      sub: "Namespaces · OIDC · RBAC",
    },
  },
  {
    feature: "Idle Container RAM*",
    featureSub: "docker stats (settled – peak)",
    tako: {
      title: "63 – 69 MiB",
      sub: "63.3 MiB settled",
      isGood: true,
    },
    coolify: {
      title: "413 – 557 MiB",
      sub: "413.0 MiB settled",
    },
    dokploy: {
      title: "825 – 841 MiB",
      sub: "825.5 MiB settled",
    },
    k8s: {
      title: "~1.5 – 2.5 GiB+",
    },
  },
  {
    feature: "Host RAM Delta*",
    featureSub: "free -m (includes shims & OS)",
    tako: {
      title: "+113 – 146 MiB",
      isGood: true,
    },
    coolify: {
      title: "+562 – 795 MiB",
    },
    dokploy: {
      title: "+939 – 966 MiB",
    },
    k8s: {
      title: "+2.0 – 4.0 GiB+",
    },
  },
  {
    feature: "Docker Image Storage",
    featureSub: "docker system df",
    tako: {
      title: "697 MB",
      sub: "4 images (0.68 GiB)",
      isGood: true,
    },
    coolify: {
      title: "3,134 MB",
      sub: "7 images (3.06 GiB)",
    },
    dokploy: {
      title: "5,297 MB",
      sub: "3 images (5.17 GiB)",
    },
    k8s: {
      title: "5 – 10 GiB+",
    },
  },
  {
    feature: "Background Daemons",
    tako: {
      title: "4 containers",
      sub: "Go + Next + Traefik",
    },
    coolify: {
      title: "6 containers",
      sub: "PHP · Soketi · PG · Redis",
    },
    dokploy: {
      title: "3 containers",
      sub: "Node · Postgres · Traefik",
    },
    k8s: {
      title: "10+ system pods",
    },
  },
  {
    feature: "Database Engine",
    tako: {
      title: "Embedded SQLite",
      sub: "AES-256-GCM · 0 MB daemon",
      isGood: true,
    },
    coolify: {
      title: "PostgreSQL 15 + Redis 7",
      sub: "2 dedicated services",
    },
    dokploy: {
      title: "PostgreSQL 16",
      sub: "1 dedicated service",
    },
    k8s: {
      title: "Etcd cluster",
    },
  },
  {
    feature: "Worker Node Ports",
    tako: {
      title: "0 open inbound ports",
      isGood: true,
      isCheck: true,
    },
    coolify: {
      title: "SSH port 22 exposed",
    },
    dokploy: {
      title: "SSH / daemon open",
    },
    k8s: {
      title: "Kubelet & overlay ports",
    },
  },
  {
    feature: "Node Connection",
    tako: {
      title: "Outbound TLS gRPC",
    },
    coolify: {
      title: "Inbound SSH tunnel",
    },
    dokploy: {
      title: "Inbound SSH / Docker",
    },
    k8s: {
      title: "mTLS overlay mesh",
    },
  },
  {
    feature: "Build Engine",
    tako: {
      title: "Pure Dockerfile",
      sub: "Can offload to worker agent",
    },
    coolify: {
      title: "Nixpacks / Dockerfile",
    },
    dokploy: {
      title: "Nixpacks / Dockerfile",
    },
    k8s: {
      title: "External CI / Kaniko",
    },
  },
  {
    feature: "One-Click App Store",
    tako: {
      title: "Explicit non-goal",
      isMinus: true,
    },
    coolify: {
      title: "200+ templates",
    },
    dokploy: {
      title: "50+ templates",
    },
    k8s: {
      title: "Helm charts",
    },
  },
];

const competitors: { id: Competitor; name: string; tag: string }[] = [
  { id: "coolify", name: "Coolify", tag: "v4.3" },
  { id: "dokploy", name: "Dokploy", tag: "v0.30" },
  { id: "k8s", name: "Kubernetes", tag: "k3s" },
];

export function Comparison() {
  const [activeCompetitor, setActiveCompetitor] = useState<Competitor>("coolify");
  const selectedComp = competitors.find((c) => c.id === activeCompetitor)!;

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

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< md): VERSUS TABS (Tako vs Selected Competitor)             */}
        {/* ========================================================================= */}
        <div className="mt-8 block md:hidden">
          {/* Mobile Tab Buttons */}
          <div className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-white/[0.05] p-1">
            {competitors.map((comp) => {
              const isActive = activeCompetitor === comp.id;
              return (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => setActiveCompetitor(comp.id)}
                  className={`flex-1 rounded-md py-2 px-2 text-center font-mono text-xs font-medium transition-all ${
                    isActive
                      ? "bg-white/[0.025] text-[var(--foreground)] shadow-xs border border-[var(--border)]"
                      : "text-[var(--muted)] hover:text-[var(--foreground)]"
                  }`}
                >
                  <span className="text-[10px] text-[var(--muted)] mr-1">vs</span>
                  <span className={isActive ? "font-bold text-[#5560d6] dark:text-[#7980e0]" : ""}>
                    {comp.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Comparison Card */}
          <div className="mt-3 overflow-hidden rounded-lg border border-[var(--border)] bg-white/[0.025] transition-colors">
            {/* Column Headers */}
            <div className="grid grid-cols-2 border-b border-[var(--border)] bg-white/[0.04] font-mono text-xs">
              <div className="p-3 border-r border-[var(--border)] bg-[#5560d6]/[0.05] dark:bg-[#7980e0]/[0.06]">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#5560d6] dark:text-[#7980e0]">Tako</span>
                  <span className="rounded bg-[#5560d6]/10 px-1 py-0.2 text-[9px] text-[#5560d6] dark:text-[#7980e0]">7f32b2b</span>
                </div>
              </div>
              <div className="p-3 flex items-center justify-between text-[var(--foreground)] font-semibold">
                <span>{selectedComp.name}</span>
                <span className="font-normal text-[10px] text-[var(--muted)]">{selectedComp.tag}</span>
              </div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-[var(--border)]">
              {comparisonData.map((row) => {
                const compVal = row[activeCompetitor];
                return (
                  <div key={row.feature} className="p-3 transition-colors hover:bg-white/[0.03]">
                    <div className="text-[11px] font-mono text-[var(--muted)] uppercase tracking-wider mb-1.5 flex items-center justify-between">
                      <span>{row.feature}</span>
                      {row.featureSub && (
                        <span className="text-[9px] font-sans normal-case text-[var(--muted)]/80">{row.featureSub}</span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      {/* Tako Value */}
                      <div className="border-r border-[var(--border)] pr-2">
                        <div className={`font-semibold flex items-center gap-1 ${
                          row.tako.isGood ? "text-emerald-600 dark:text-emerald-400" : "text-[var(--foreground)]"
                        }`}>
                          {row.tako.isCheck && <Check size={13} weight="bold" className="shrink-0" />}
                          {row.tako.isMinus && <Minus size={13} className="shrink-0 text-[var(--muted)]" />}
                          <span>{row.tako.title}</span>
                        </div>
                        {row.tako.sub && (
                          <div className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 mt-0.5 leading-tight">
                            {row.tako.sub}
                          </div>
                        )}
                      </div>

                      {/* Competitor Value */}
                      <div className="pl-1">
                        <div className="text-[var(--muted)]">
                          {compVal.title}
                        </div>
                        {compVal.sub && (
                          <div className="text-[10px] text-[var(--muted)]/80 mt-0.5 leading-tight">
                            {compVal.sub}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= md): COMPREHENSIVE 5-COLUMN TABLE                        */}
        {/* ========================================================================= */}
        <div className="mt-8 hidden md:block overflow-hidden rounded-lg border border-[var(--border)] bg-white/[0.025] transition-colors">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="border-b border-[var(--border)] bg-white/[0.04] font-mono text-[11px] text-[var(--muted)]">
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
                {comparisonData.map((row) => (
                  <tr key={row.feature}>
                    <td className="py-2.5 px-3.5 sm:px-5 font-medium text-[var(--muted)]">
                      <div>{row.feature}</div>
                      {row.featureSub && (
                        <div className="text-[10px] text-[var(--muted)]">{row.featureSub}</div>
                      )}
                    </td>

                    {/* Tako */}
                    <td className={`py-2.5 px-3.5 sm:px-5 bg-[#5560d6]/[0.04] dark:bg-[#7980e0]/[0.05] ${
                      row.tako.isGood ? "font-semibold text-emerald-600 dark:text-emerald-400" : "font-medium"
                    }`}>
                      <div className="flex items-center gap-1">
                        {row.tako.isCheck && <Check size={13} weight="bold" />}
                        {row.tako.isMinus && <Minus size={13} className="text-[var(--muted)]" />}
                        <span>{row.tako.title}</span>
                      </div>
                      {row.tako.sub && (
                        <span className={`block text-[10px] ${
                          row.tako.isGood ? "font-normal text-emerald-600/80 dark:text-emerald-400/80" : "text-[var(--muted)]"
                        }`}>
                          {row.tako.sub}
                        </span>
                      )}
                    </td>

                    {/* Coolify */}
                    <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                      <div>{row.coolify.title}</div>
                      {row.coolify.sub && (
                        <span className="block text-[10px] text-[var(--muted)]">{row.coolify.sub}</span>
                      )}
                    </td>

                    {/* Dokploy */}
                    <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                      <div>{row.dokploy.title}</div>
                      {row.dokploy.sub && (
                        <span className="block text-[10px] text-[var(--muted)]">{row.dokploy.sub}</span>
                      )}
                    </td>

                    {/* Kubernetes */}
                    <td className="py-2.5 px-3.5 sm:px-5 text-[var(--muted)]">
                      <div>{row.k8s.title}</div>
                      {row.k8s.sub && (
                        <span className="block text-[10px] text-[var(--muted)]">{row.k8s.sub}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Benchmark Methodology & Disclaimers Box */}
        <div className="mt-5 rounded-lg border border-[var(--border)] bg-white/[0.05] p-3.5 sm:p-4 text-[11px] text-[var(--muted)] space-y-2.5 transition-colors">
          <div className="flex items-center gap-1.5 font-mono font-semibold text-[var(--foreground)] text-xs">
            <Info size={14} className="text-[#5560d6] dark:text-[#7980e0]" />
            <span>Benchmark Notes &amp; Disclaimers</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 pt-1 text-xs leading-relaxed">
            <div>
              <strong className="text-[var(--foreground)] block mb-0.5">Environment:</strong>
              Measured on identical clean VPS (2 vCPU AMD EPYC 9754, 8 GB RAM, Ubuntu 26.04, Docker 29). Baseline OS idle was 682 MiB RAM.
            </div>
            <div>
              <strong className="text-[var(--foreground)] block mb-0.5">Host Delta vs Container:</strong>
              Host Delta (<code className="rounded bg-white/[0.025] px-1 py-0.2 font-mono">free -m</code>) accounts for containerd-shims, veth interfaces, and cgroups. We report both for full transparency.
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
