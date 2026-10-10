"use client";

import { motion } from "framer-motion";

const METRICS = [
  {
    value: "< 150 MB",
    label: "Idle Memory Overhead",
    detail: "Ultra-lean runtime footprint, leaving 90%+ host RAM free for your actual apps.",
  },
  {
    value: "Port 22",
    label: "Completely Closed",
    detail: "Workers dial out to master over TLS. Zero inbound management ports.",
  },
  {
    value: "SQLite WAL",
    label: "Zero DB Daemons",
    detail: "Embedded persistence eliminates external Postgres or Redis containers.",
  },
  {
    value: "2 Roles",
    label: "Admin & Member",
    detail: "Built for solo makers and lean teams without enterprise RBAC bloat.",
  },
];

const TECH_BADGES = [
  "Go 1.24+ (Static Binary)",
  "gRPC over TLS (:50051)",
  "Embedded SQLite (WAL)",
  "Native HPA & Auto-Rollback",
  "Traefik v3 Ingress",
  "Docker Engine SDK",
  "AES-256-GCM Secrets",
];

export function TechBar() {
  return (
    <section className="border-b border-border bg-card/40 py-12 transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Minimalist 4-Column Stat Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:divide-x lg:divide-border">
          {METRICS.map((m, idx) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className={`${idx !== 0 ? "lg:pl-8" : ""} flex flex-col justify-between`}
            >
              <div>
                <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-primary">
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-foreground mt-1">
                  {m.label}
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                {m.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quiet Single-Line Tech Stack Invariants */}
        <div className="mt-10 pt-6 border-t border-border/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground">
          {TECH_BADGES.map((b) => (
            <span key={b} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-primary" />
              <span>{b}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
