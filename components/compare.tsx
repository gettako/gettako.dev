"use client";

import { useState } from "react";
import { Check, Minus, Info } from "@phosphor-icons/react";
import { SectionHead } from "@/components/ui";

type Competitor = "coolify" | "dokploy" | "k8s";

interface Cell {
  title: string;
  sub?: string;
  isGood?: boolean;
  isCheck?: boolean;
  isMinus?: boolean;
}

interface RowItem {
  feature: string;
  featureSub?: string;
  tako: Cell;
  coolify: Cell;
  dokploy: Cell;
  k8s: Cell;
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
    feature: "Idle Container RAM",
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
    feature: "Host RAM Delta",
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

const NOTES = [
  {
    t: "Environment",
    d: "Measured on identical clean VPS (2 vCPU AMD EPYC 9754, 8 GB RAM, Ubuntu 26.04, Docker 29). Baseline OS idle was 682 MiB RAM.",
  },
  {
    t: "Host Delta vs Container",
    d: "Host Delta (free -m) accounts for containerd-shims, veth interfaces, and cgroups. We report both for full transparency.",
  },
  {
    t: "Single-Team Simplicity",
    d: "Tako supports multi-user collaboration (Admin/Member, passkeys, 2FA) within one shared team, avoiding heavy PostgreSQL/Redis clusters via embedded encrypted SQLite.",
  },
  {
    t: "Zero Workload",
    d: "Reflects control-plane idle. Active builds consume additional CPU/RAM. Tako allows delegating builds to remote worker agents to keep the primary node light.",
  },
];

function MobileView({
  active,
  setActive,
}: {
  active: Competitor;
  setActive: (c: Competitor) => void;
}) {
  const selected = competitors.find((c) => c.id === active)!;
  return (
    <div className="mt-10 block md:hidden">
      <div className="flex gap-1.5 rounded-2xl border border-[var(--line)] bg-white p-1.5">
        {competitors.map((c) => {
          const isActive = active === c.id;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`flex-1 cursor-pointer rounded-xl px-2 py-2.5 text-center font-mono text-xs transition-all ${
                isActive
                  ? "bg-[var(--wash)] font-bold text-[#2f358f] shadow-sm"
                  : "font-medium text-[var(--muted)]"
              }`}
            >
              <span className="mr-1 text-[10px] text-[var(--faint)]">vs</span>
              {c.name}
            </button>
          );
        })}
      </div>

      <div className="mt-3 overflow-hidden rounded-2xl border border-[var(--line)] bg-white">
        <div className="grid grid-cols-2 border-b border-[var(--line)] bg-[#f8f9ff] font-mono text-xs">
          <div className="border-r border-[var(--line)] bg-[#eef0ff] p-3.5">
            <span className="font-bold text-[#2f358f]">Tako</span>
          </div>
          <div className="flex items-center justify-between p-3.5 font-semibold text-[var(--ink)]">
            <span>{selected.name}</span>
            <span className="font-normal text-[10px] text-[var(--faint)]">{selected.tag}</span>
          </div>
        </div>
        <div className="divide-y divide-[var(--line)]">
          {comparisonData.map((row) => {
            const compVal = row[active];
            return (
              <div key={row.feature} className="p-4">
                <p className="mb-2 font-mono text-[10.5px] uppercase tracking-[0.14em] text-[var(--muted)]">
                  {row.feature}
                  {row.featureSub && (
                    <span className="ml-2 normal-case tracking-normal text-[var(--faint)]">
                      {row.featureSub}
                    </span>
                  )}
                </p>
                <div className="grid grid-cols-2 gap-4 text-[13px]">
                  <div>
                    <p
                      className={`flex items-center gap-1 font-semibold ${
                        row.tako.isGood ? "text-emerald-600" : "text-[var(--ink)]"
                      }`}
                    >
                      {row.tako.isCheck && <Check size={14} weight="bold" className="shrink-0" />}
                      {row.tako.isMinus && <Minus size={14} className="shrink-0 text-[var(--faint)]" />}
                      {row.tako.title}
                    </p>
                    {row.tako.sub && (
                      <p className="mt-0.5 text-[11px] leading-snug text-emerald-600/80">{row.tako.sub}</p>
                    )}
                  </div>
                  <div>
                    <p className="text-[var(--muted)]">{compVal.title}</p>
                    {compVal.sub && (
                      <p className="mt-0.5 text-[11px] leading-snug text-[var(--faint)]">{compVal.sub}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function DesktopView() {
  return (
    <div className="mt-10 hidden overflow-hidden rounded-3xl border border-[var(--line)] bg-white md:block">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-[13px]">
          <thead>
            <tr className="border-b border-[var(--line)] bg-[#f8f9ff] font-mono text-[11px] uppercase tracking-[0.14em]">
              <th className="min-w-[170px] px-5 py-4 font-medium text-[var(--faint)]">Feature</th>
              <th className="min-w-[190px] bg-[#eef0ff] px-5 py-4 font-bold text-[#2f358f]">Tako</th>
              {competitors.map((c) => (
                <th key={c.id} className="min-w-[150px] px-5 py-4 font-medium text-[var(--faint)]">
                  {c.name} <span className="font-normal normal-case">{c.tag}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--line)]">
            {comparisonData.map((row) => (
              <tr key={row.feature} className="transition-colors hover:bg-[#f8f9ff]/60">
                <td className="px-5 py-3.5 align-top font-semibold text-[var(--muted)]">
                  {row.feature}
                  {row.featureSub && (
                    <span className="mt-0.5 block font-mono text-[10.5px] font-normal text-[var(--faint)]">
                      {row.featureSub}
                    </span>
                  )}
                </td>
                <td
                  className={`bg-[#eef0ff]/60 px-5 py-3.5 align-top ${
                    row.tako.isGood ? "font-bold text-emerald-600" : "font-semibold text-[#2f358f]"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {row.tako.isCheck && <Check size={14} weight="bold" className="shrink-0" />}
                    {row.tako.isMinus && <Minus size={14} className="shrink-0 text-[var(--faint)]" />}
                    {row.tako.title}
                  </span>
                  {row.tako.sub && (
                    <span className={`mt-0.5 block text-[11px] font-normal ${row.tako.isGood ? "text-emerald-600/80" : "text-[var(--muted)]"}`}>
                      {row.tako.sub}
                    </span>
                  )}
                </td>
                {(["coolify", "dokploy", "k8s"] as const).map((id) => (
                  <td key={id} className="px-5 py-3.5 align-top text-[var(--muted)]">
                    {row[id].title}
                    {row[id].sub && (
                      <span className="mt-0.5 block text-[11px] text-[var(--faint)]">{row[id].sub}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Compare() {
  const [active, setActive] = useState<Competitor>("coolify");
  return (
    <section id="specs" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="05"
          kicker="By the numbers"
          title={
            <>
              Deliberately <span className="text-[#5560d6]">simpler.</span>
            </>
          }
          lede="Most self-hosting tools evolve into heavy platforms with mandatory database clusters and high idle overhead. Tako gives your team multi-user collaboration while the entire stack idles under ~70 MiB."
        />

        <MobileView active={active} setActive={setActive} />
        <DesktopView />

        <div className="mt-6 rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
          <p className="flex items-center gap-2 font-mono text-xs font-bold text-[var(--ink)]">
            <Info size={15} className="text-[#5560d6]" />
            Benchmark notes &amp; disclaimers
          </p>
          <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
            {NOTES.map((n) => (
              <div key={n.t}>
                <p className="text-[12.5px] font-bold text-[var(--ink)]">{n.t}</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-[var(--muted)]">{n.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
