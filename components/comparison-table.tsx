"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";

interface CompareRow {
  criterion: string;
  ssh: { label: string; bad?: boolean; warn?: boolean };
  tako: { label: string };
}

const ROWS: CompareRow[] = [
  {
    criterion: "Inbound Port 22 on Worker",
    ssh: { label: "Must remain open to public internet", bad: true },
    tako: { label: "Locked down — port 22 never required" },
  },
  {
    criterion: "Connection Initiation",
    ssh: { label: "Control Plane dials inward to Worker", bad: true },
    tako: { label: "Worker initiates outbound dial to Master (:50051)" },
  },
  {
    criterion: "Control Plane Database",
    ssh: { label: "PostgreSQL + Redis containers (150MB-300MB RAM)", bad: true },
    tako: { label: "Embedded SQLite (WAL mode) · Zero external DB daemons" },
  },
  {
    criterion: "Idle Memory Overhead",
    ssh: { label: "1.2 GB – 1.8 GB RAM (Consumes majority of host resources)", bad: true },
    tako: { label: "< 150 MB RAM (Single static Go binary + SQLite)" },
  },
  {
    criterion: "Horizontal Auto-Scaling (HPA)",
    ssh: { label: "Manual scaling or requires complex Swarm / K8s setup", warn: true },
    tako: { label: "Native HPA engine (CPU, RAM & 60s cooldown stabilization)" },
  },
  {
    criterion: "Health Check Failure Rollback",
    ssh: { label: "Container crash loop; requires manual rollback", warn: true },
    tako: { label: "Automatic rollback to last healthy release on health failure" },
  },
  {
    criterion: "Cluster Consensus Failure Risk",
    ssh: { label: "Raft quorum loss causes cluster freeze on split-brain", bad: true },
    tako: { label: "Hub-and-spoke isolation: workers stay 100% live if master reboots" },
  },
  {
    criterion: "NAT & CGNAT Traversal",
    ssh: { label: "Breaks without port forwarding or VPN overlays", bad: true },
    tako: { label: "Works transparently behind any NAT, home lab, or dynamic IP" },
  },
  {
    criterion: "Credential Management",
    ssh: { label: "Root SSH private key generation & storage", bad: true },
    tako: { label: "Single-use enrollment token (15m TTL), then 32-byte secret" },
  },
];

export function ComparisonTable() {
  return (
    <section id="comparison" className="py-24 sm:py-28 border-b border-border bg-background transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
            Engineering Rationale
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Architectural Reality: Tako vs. Traditional PaaS
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            How deliberate architectural decisions — embedded SQLite, outbound gRPC, and autonomous worker Traefik proxies — outperform heavyweight SSH-based platforms on real developer workloads.
          </p>
        </motion.div>

        {/* Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto rounded-lg border border-border bg-card shadow-xs dark:shadow-none"
        >
          <div className="min-w-[720px]">
            {/* Header */}
            <div className="grid grid-cols-[220px_1fr_1.05fr] border-b border-border bg-muted/40 font-mono text-xs">
              <div className="px-5 py-3 font-semibold uppercase tracking-wider text-muted-foreground">
                Invariant
              </div>
              <div className="border-l border-border px-5 py-3 font-semibold text-status-danger">
                Traditional PaaS (SSH &amp; Postgres)
              </div>
              <div className="border-l border-border px-5 py-3 font-semibold text-primary">
                Tako Engine (gRPC &amp; SQLite)
              </div>
            </div>

            {/* Rows */}
            {ROWS.map((row, i) => (
              <motion.div
                key={row.criterion}
                initial={{ opacity: 0, x: -6 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                className={`grid grid-cols-[220px_1fr_1.05fr] border-b border-border last:border-0 text-xs transition-colors hover:bg-muted/30 ${
                  i % 2 === 0 ? "bg-muted/10" : ""
                }`}
              >
                <div className="px-5 py-3.5 font-medium text-foreground">
                  {row.criterion}
                </div>
                <div className="flex items-start gap-2 border-l border-border px-5 py-3.5 text-muted-foreground">
                  <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-status-danger" />
                  <span>{row.ssh.label}</span>
                </div>
                <div className="flex items-start gap-2 border-l border-border px-5 py-3.5 text-foreground font-medium">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-status-success" />
                  <span>{row.tako.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decision Guide: When to Choose What */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12"
        >
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
              Honest Decision Guide
            </span>
            <h3 className="mt-1 text-lg font-bold text-foreground">
              When to Choose What
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Swarm / K8s */}
            <div className="rounded-lg border border-border bg-card p-5 flex flex-col justify-between">
              <div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Orchestrator
                </span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">
                  Docker Swarm / Kubernetes
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Choose this if you manage 20+ servers across multiple regions, have a dedicated infrastructure engineer, and need distributed stateful pod scheduling with Raft/etcd consensus.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground">
                Ideal: Enterprise scale &amp; dedicated Ops teams
              </div>
            </div>

            {/* Coolify / Dokploy */}
            <div className="rounded-lg border border-border bg-card p-5 flex flex-col justify-between">
              <div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Inward SSH PaaS
                </span>
                <h4 className="mt-2 text-sm font-semibold text-foreground">
                  Coolify / Dokploy
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Choose this if you have large servers (≥ 4 GB RAM), are comfortable opening port 22 and storing root SSH keys in the dashboard, and need multi-tenant billing/team organizations.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground">
                Ideal: Large VPS instances with inbound SSH access
              </div>
            </div>

            {/* Tako */}
            <div className="rounded-lg border border-primary/40 bg-card p-5 flex flex-col justify-between shadow-xs dark:shadow-none">
              <div>
                <span className="rounded border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-mono text-primary font-semibold">
                  Outbound gRPC PaaS
                </span>
                <h4 className="mt-2 text-sm font-semibold text-foreground flex items-center justify-between">
                  <span>Tako Engine</span>
                  <span className="text-xs font-mono text-primary font-normal">&lt; 150 MB</span>
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Choose this if you want an independent deployment platform without SSH exposure, featuring native HPA, zero-downtime health gates, and a control plane that idles under 150 MB RAM.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-primary font-medium flex items-center justify-between">
                <span>Ideal: Independent developers &amp; lean teams</span>
                <ArrowRight className="h-3 w-3" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
