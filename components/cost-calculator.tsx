"use client";

import { motion } from "framer-motion";
import { DollarSign, Server, Cpu, Check, X } from "lucide-react";

export function CostCalculator() {
  return (
    <section id="economics" className="py-24 border-b border-border bg-background transition-colors duration-150">
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
            Infrastructure Economics
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            The $4 VPS Reality. Stop Paying for Idle Bloat.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            A control plane should manage your software, not starve it of memory. See why embedded SQLite and a compiled Go binary change the math for indie developers.
          </p>
        </motion.div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Traditional PaaS */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border border-border bg-card p-6 flex flex-col justify-between shadow-xs dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">Traditional Architecture</span>
                  <h3 className="text-lg font-bold text-foreground">Postgres + Redis PaaS</h3>
                </div>
                <div className="text-right font-mono">
                  <div className="text-2xl font-bold text-status-danger">$240<span className="text-xs text-muted-foreground font-normal">/yr</span></div>
                  <span className="text-[10px] text-muted-foreground">~$20/mo (4GB VPS)</span>
                </div>
              </div>

              {/* Memory breakdown */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="text-muted-foreground font-semibold uppercase text-[10px]">
                  Idle Memory Footprint (4096 MB VPS)
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>PostgreSQL Container</span>
                    <span className="text-status-danger font-semibold">~280 MB</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Redis Cache Container</span>
                    <span className="text-status-danger font-semibold">~90 MB</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Node.js Control Panel Daemons</span>
                    <span className="text-status-danger font-semibold">~850 MB</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Operating System (Linux/systemd)</span>
                    <span className="text-muted-foreground">~300 MB</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="pt-2">
                  <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden flex">
                    <div className="h-full bg-status-danger/70 w-[38%]" title="Control Plane Bloat" />
                    <div className="h-full bg-status-danger/40 w-[12%]" title="OS Overhead" />
                    <div className="h-full bg-muted-foreground/30 w-[50%]" title="Usable RAM" />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5">
                    <span>1,520 MB Wasted on Panel</span>
                    <span className="text-foreground">Risk of OOM on cheap VPS</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border space-y-1.5 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <X className="h-3.5 w-3.5 text-status-danger shrink-0" />
                    <span>$4 VPS (1GB RAM) crashes from OOM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <X className="h-3.5 w-3.5 text-status-danger shrink-0" />
                    <span>Forces upgrade to $18–$24/mo cloud tiers</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tako Engine */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-lg border-2 border-primary/50 bg-card p-6 flex flex-col justify-between shadow-xs dark:shadow-none relative"
          >
            <div className="absolute -top-3 right-4 rounded bg-primary px-2 py-0.5 font-mono text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
              80% Cost Reduction
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <div>
                  <span className="text-[10px] font-mono uppercase text-primary font-semibold">Tako Architecture</span>
                  <h3 className="text-lg font-bold text-foreground">Go + SQLite WAL Engine</h3>
                </div>
                <div className="text-right font-mono">
                  <div className="text-2xl font-bold text-primary">$48<span className="text-xs text-muted-foreground font-normal">/yr</span></div>
                  <span className="text-[10px] text-muted-foreground">~$4/mo (1GB VPS)</span>
                </div>
              </div>

              {/* Memory breakdown */}
              <div className="mt-5 space-y-3 font-mono text-xs">
                <div className="text-muted-foreground font-semibold uppercase text-[10px]">
                  Idle Memory Footprint (1024 MB VPS)
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Embedded SQLite (WAL Mode)</span>
                    <span className="text-primary font-semibold">~18 MB</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Go Static Binary (CGO=0)</span>
                    <span className="text-primary font-semibold">~42 MB</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Traefik v3 Dynamic Ingress</span>
                    <span className="text-primary font-semibold">~36 MB</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Operating System (Linux/systemd)</span>
                    <span className="text-muted-foreground">~180 MB</span>
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="pt-2">
                  <div className="h-2.5 w-full rounded-full bg-muted overflow-hidden flex">
                    <div className="h-full bg-primary w-[10%]" title="Tako Control Plane (<150MB)" />
                    <div className="h-full bg-muted-foreground/30 w-[18%]" title="OS Overhead" />
                    <div className="h-full bg-status-success/60 w-[72%]" title="Free for your Apps (750MB+)" />
                  </div>
                  <div className="flex justify-between text-[10px] text-muted-foreground mt-1.5">
                    <span className="text-primary font-medium">&lt; 150 MB Total Engine</span>
                    <span className="text-status-success font-semibold">750 MB+ Free for your Apps</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border space-y-1.5 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-status-success shrink-0" />
                    <span>Runs comfortably on standard $4 Hetzner/OVH VPS</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-status-success shrink-0" />
                    <span>Zero extra PostgreSQL or Redis container bloat</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
