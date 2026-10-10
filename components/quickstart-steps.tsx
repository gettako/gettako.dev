"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Copy, Check, ArrowRight, Server, ShieldCheck, GitBranch } from "lucide-react";

interface Step {
  step: string;
  title: string;
  desc: string;
  cmd: string;
  detail: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Boot Master Control Plane",
    desc: "Run on your primary $4 VPS. Installs Go engine, embedded SQLite WAL, and Traefik v3 proxy in under 60 seconds.",
    cmd: "curl -fsSL https://gettako.dev/install.sh | bash",
    detail: "Binds port :8080 (Console) & :50051 (gRPC TLS). Port 22 is not modified.",
  },
  {
    step: "02",
    title: "Generate Worker Token",
    desc: "Create a single-use enrollment token from the web console or CLI with an automatic 15-minute expiration window.",
    cmd: "tako node token --name worker-fra-01",
    detail: "Generates tok_<hex32>. Burned permanently upon first successful enrollment.",
  },
  {
    step: "03",
    title: "Connect Worker & Push Git",
    desc: "Run on any remote worker server. The agent initiates an outbound gRPC stream to master. Push any branch to deploy.",
    cmd: "curl -fsSL https://gettako.dev/install-agent.sh | \\\n  TAKO_SERVER_URL=\"https://tako.example.com:50051\" \\\n  TAKO_ENROLLMENT_TOKEN=\"tok_sec_7a9f82d1\" bash",
    detail: "Zero inbound ports needed. Traefik auto-requests Let's Encrypt SSL.",
  },
];

export function QuickstartSteps() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const copy = async (text: string, idx: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section id="quickstart" className="py-24 border-b border-border bg-background transition-colors duration-150">
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
            Quickstart Pipeline
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            From Bare VPS to Production in 3 Minutes
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            No complex certificate authorities to manage manually. No Kubernetes YAML boilerplate. Three deterministic commands.
          </p>
        </motion.div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STEPS.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="rounded-lg border border-border bg-card p-6 flex flex-col justify-between hover:border-primary/40 transition-colors shadow-xs dark:shadow-none"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-bold text-primary">
                    {s.step}
                  </span>
                  <span className="rounded border border-border bg-muted/40 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                    Step {idx + 1} of 3
                  </span>
                </div>

                <h3 className="text-base font-semibold text-foreground mb-1.5">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {s.desc}
                </p>

                {/* Command Snippet */}
                <div className="relative rounded-md border border-border bg-muted/30 p-2.5 font-mono text-[11px] text-foreground group">
                  <pre className="overflow-x-auto whitespace-pre-wrap break-all pr-8 leading-relaxed">
                    <code>{s.cmd}</code>
                  </pre>
                  <button
                    type="button"
                    onClick={() => copy(s.cmd, idx)}
                    className="absolute top-2 right-2 rounded p-1 text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    title="Copy command"
                  >
                    {copiedIdx === idx ? (
                      <Check className="h-3.5 w-3.5 text-status-success" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border font-mono text-[10px] text-muted-foreground">
                {s.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
