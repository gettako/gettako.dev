"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Shield,
  RotateCcw,
  Database,
  Lock,
  Cpu,
  Zap,
  Users,
  CheckCircle2,
  HardDrive,
} from "lucide-react";

export function FeaturesGrid() {
  return (
    <section id="features" className="py-24 border-b border-border bg-background transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
            Production Invariants
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Everything You Need to Ship. Zero Slop.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            No broken upstream template catalogs, no bloated Redis/Postgres daemons eating your RAM. Concrete, verified primitives engineered directly into the Go core.
          </p>
        </motion.div>

        {/* 6-Card Balanced Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 (Wide): Git Push-to-Deploy */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 rounded-lg border border-border bg-card p-6 transition-colors flex flex-col justify-between hover:border-primary/40 shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                    <GitBranch className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                    Continuous Delivery
                  </span>
                </div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  BuildKit Pipeline
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                Automated Git Push-to-Deploy with BuildKit
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                Connect GitHub repositories and trigger automated builds on branch push. Multi-stage builds execute via Docker BuildKit; build steps and container logs stream in real-time over gRPC to the console via Server-Sent Events.
              </p>
            </div>

            {/* Micro-Mockup */}
            <div className="mt-5 rounded-md border border-border bg-muted/20 p-3 font-mono text-[11px]">
              <div className="flex items-center justify-between text-muted-foreground pb-2 mb-2 border-b border-border/60">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-status-success" />
                  <span className="text-foreground font-medium">main branch push</span>
                </div>
                <span>commit a3f9c12</span>
              </div>
              <div className="space-y-1 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">1/3</span>
                  <span>Fetching repository &amp; Dockerfile from GitHub...</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary font-bold">2/3</span>
                  <span>Multi-stage build executed via Docker Engine SDK...</span>
                </div>
                <div className="flex items-center gap-2 text-status-success font-medium">
                  <span>3/3</span>
                  <span>Image tagged tako-app-srv:dep_89a1 · Image build completed (12.4s) ✓</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 (Compact): Metric-Driven Horizontal Auto-Scaling (HPA) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-border bg-card p-6 transition-colors flex flex-col justify-between hover:border-primary/40 shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                  <Cpu className="h-4 w-4" />
                </div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Native HPA Engine
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Metric-Driven Horizontal Auto-Scaling
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Autonomous scaling loop evaluates container CPU% and RAM% every 15s. Dynamically scales replicas up or down with a configurable stabilization cooldown to prevent thrashing.
              </p>
            </div>

            <div className="mt-5 rounded border border-border bg-muted/20 p-2.5 font-mono text-[10px] space-y-1 text-muted-foreground">
              <div className="flex justify-between">
                <span>Scaling Metric:</span>
                <span className="text-foreground font-medium">CPU, RAM, or Both</span>
              </div>
              <div className="flex justify-between">
                <span>Cooldown Window:</span>
                <span className="text-status-success font-medium">60s Stabilization</span>
              </div>
              <div className="flex justify-between">
                <span>Replica Bounds:</span>
                <span className="text-primary font-medium">minReplicas ──▶ maxReplicas</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 (Compact): Zero-Downtime Swaps & Auto-Rollback */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-border bg-card p-6 transition-colors flex flex-col justify-between hover:border-primary/40 shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-status-success/10 text-status-success">
                  <RotateCcw className="h-4 w-4" />
                </div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Health Gate &amp; Rollback
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                Zero-Downtime Swaps &amp; Auto-Rollback
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Traefik switches traffic only after <code className="text-foreground font-mono">/healthz</code> passes with 200 OK. If a new build fails health checks, Tako automatically rolls back to the last stable release without human intervention.
              </p>
            </div>

            <div className="mt-5 rounded border border-border bg-muted/20 p-2.5 font-mono text-[10px] space-y-1 text-muted-foreground">
              <div className="flex justify-between">
                <span>Graceful Draining:</span>
                <span className="text-status-success font-medium">15s Active Request Drain</span>
              </div>
              <div className="flex justify-between">
                <span>On Health Failure:</span>
                <span className="text-status-danger font-medium">Instant Auto-Rollback</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4 (Wide): Embedded SQLite in WAL Mode */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 rounded-lg border border-border bg-card p-6 transition-colors flex flex-col justify-between hover:border-primary/40 shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                    <Database className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                    Resource Efficiency
                  </span>
                </div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Zero External DB Daemons
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                Embedded SQLite in WAL Mode (&lt; 150MB Idle RAM)
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                The control plane eliminates dedicated PostgreSQL and Redis containers entirely. Sub-millisecond query execution, atomic schema migrations, and AES-256-GCM encrypted secrets at rest — operating comfortably on a $4/mo VPS.
              </p>
            </div>

            <div className="mt-5 grid sm:grid-cols-3 gap-2.5 rounded-md border border-border bg-muted/20 p-3 font-mono text-[11px] text-muted-foreground">
              <div>
                <span className="text-[10px] uppercase text-muted-foreground block">Persistence Engine</span>
                <span className="text-foreground font-semibold">modernc.org/sqlite</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-muted-foreground block">Concurrency Mode</span>
                <span className="text-primary font-semibold">WAL (Write-Ahead Log)</span>
              </div>
              <div>
                <span className="text-[10px] uppercase text-muted-foreground block">Zero-Lock Snapshots</span>
                <span className="text-status-success font-semibold">Native VACUUM INTO</span>
              </div>
            </div>
          </motion.div>

          {/* Card 5 (Compact): 1-Click Databases & S3 Snapshots */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-border bg-card p-6 transition-colors flex flex-col justify-between hover:border-primary/40 shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                  <HardDrive className="h-4 w-4" />
                </div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Managed Workloads
                </span>
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">
                1-Click Databases &amp; S3 Snapshots
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Provision isolated PostgreSQL 16, MySQL, Redis 7, or MongoDB containers with auto-generated connection strings. Automated backup snapshots verify integrity via SHA-256 and sync directly to S3 storage.
              </p>
            </div>

            <div className="mt-5 rounded border border-border bg-muted/20 p-2.5 font-mono text-[10px] space-y-1 text-muted-foreground">
              <div className="flex justify-between">
                <span>Engines:</span>
                <span className="text-foreground font-medium">Postgres · MySQL · Redis · Mongo</span>
              </div>
              <div className="flex justify-between">
                <span>Snapshot Integrity:</span>
                <span className="text-primary font-medium">SHA-256 Verified + S3 Sync</span>
              </div>
            </div>
          </motion.div>

          {/* Card 6 (Wide): Outbound-Only gRPC Security & Flat 2-Role Collaboration */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="md:col-span-2 lg:col-span-2 rounded-lg border border-border bg-card p-6 transition-colors flex flex-col justify-between hover:border-primary/40 shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                    <Lock className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                    Zero Attack Surface
                  </span>
                </div>
                <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                  Port 22 Locked Down
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">
                Outbound-Only gRPC Architecture &amp; Flat 2-Role Collaboration
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xl">
                Worker nodes initiate connections outward to Master (:50051) over TLS. Port 22 never needs to be open. Enrollment uses a single-use token with a 15-minute TTL. Access is intentionally flat: <code className="text-primary font-mono">admin</code> manages cluster nodes; <code className="text-foreground font-mono">member</code> deploys applications.
              </p>
            </div>

            {/* Visual Micro-Mockup */}
            <div className="mt-5 grid sm:grid-cols-2 gap-2 rounded border border-border bg-muted/20 p-3 font-mono text-[10px] text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-status-success" />
                <span>Node Inbound: <strong>Port 22 BLOCKED</strong> (Zero SSH keys)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>StreamTasks: <strong>HTTP/2 TLS Stream</strong> (:50051)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
