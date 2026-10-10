"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ServerOff, Users, Layers } from "lucide-react";

interface NonGoalItem {
  icon: typeof ShieldAlert;
  title: string;
  tag: string;
  whatWeDontDo: string;
  whyItsBetter: string;
  codeFact: string;
}

const NON_GOALS: NonGoalItem[] = [
  {
    icon: ServerOff,
    title: "No Raft Consensus or Multi-Master Quorum",
    tag: "Zero Split-Brain Risk",
    whatWeDontDo:
      "Tako deliberately avoids distributed consensus engines (etcd, Raft, Zookeeper) requiring odd-numbered manager nodes (3+) to maintain cluster quorum.",
    whyItsBetter:
      "In budget multi-VPS setups, inter-datacenter network hiccups cause Raft to lose quorum and freeze deployments. With Tako's Hub-and-Spoke model, if the control plane restarts, worker containers and Traefik routing continue serving live traffic 100% uninterrupted.",
    codeFact: "Single Go binary · modernc.org/sqlite WAL mode",
  },
  {
    icon: ShieldAlert,
    title: "No Inbound SSH Shell or Web Terminal Access",
    tag: "Port 22 Strictly Closed",
    whatWeDontDo:
      "Tako does not store root SSH private keys, dial inward to worker servers, or provide an interactive web terminal to your host operating system.",
    whyItsBetter:
      "Eliminating root SSH keys removes the primary attack vector exploited in self-hosted PaaS security breaches. Port 22 never needs to be exposed to the public internet; workers dial outbound to Master (:50051) over mutual TLS.",
    codeFact: "StreamTasks(stream AgentTaskResult) returns (stream MasterTask)",
  },
  {
    icon: Users,
    title: "No Enterprise Hierarchical Multi-Tenancy",
    tag: "Zero Permission Bloat",
    whatWeDontDo:
      "No 5-tier organizational hierarchies (Enterprise Org → Division → Project Group → Environment → 10 Custom IAM Roles) or billing approval workflows.",
    whyItsBetter:
      "Solo developers and lean teams of 2–10 people don't need bureaucracy. Flat permissions eliminate thousands of lines of fragile authentication logic and complex database join operations.",
    codeFact: "Strict 2-role model in auth.go: admin and member",
  },
  {
    icon: Layers,
    title: "No Heavy Service Mesh Sidecar Injection",
    tag: "< 150 MB Total Control Plane",
    whatWeDontDo:
      "No Envoy or Istio sidecar proxy injected into every container workload.",
    whyItsBetter:
      "Sidecar proxies eat 80 MB–150 MB of RAM per application container. On a $4/mo VPS with 1 GB total RAM, sidecars choke the operating system before your application even serves its first HTTP request.",
    codeFact: "One Traefik v3 daemon per node · Zero per-container proxies",
  },
];

export function NonGoals() {
  return (
    <section id="non-goals" className="py-24 border-b border-border bg-background transition-colors duration-150">
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
            Architectural Integrity
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Deliberate Non-Goals &amp; Boundaries
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            What Tako intentionally refuses to do. We believe architectural clarity and restraint produce faster, more reliable infrastructure than feature sprawl.
          </p>
        </motion.div>

        {/* 4 Technical Fact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {NON_GOALS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="rounded-lg border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xs dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono font-semibold text-primary uppercase tracking-wider">
                        Constraint {idx + 1}
                      </span>
                    </div>
                    <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-xs leading-relaxed text-muted-foreground">
                    <p>
                      <strong className="text-foreground font-medium">Deliberate Omission: </strong>
                      {item.whatWeDontDo}
                    </p>
                    <p>
                      <strong className="text-foreground font-medium">Engineering Rationale: </strong>
                      {item.whyItsBetter}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border flex items-center justify-between font-mono text-[10px]">
                  <span className="text-muted-foreground">Codebase Invariant:</span>
                  <span className="text-primary font-medium">{item.codeFact}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
