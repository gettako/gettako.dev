"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  codeFact?: string;
}

const FAQS: FAQItem[] = [
  {
    id: "master-failure",
    category: "Reliability & Uptime",
    question: "What happens if the Master server reboots or crashes? Do worker apps go down?",
    answer:
      "No. Worker nodes run Docker Engine and Traefik v3 autonomously. All running containers continue handling HTTP traffic 100% uninterrupted. Only new deployment triggers and console telemetry pause while the master is offline. When the master restarts, the worker agent automatically reconnects over gRPC with exponential backoff.",
    codeFact: "Decoupled runtime: Worker Docker socket + Traefik dynamic file provider",
  },
  {
    id: "nat-traversal",
    category: "Networking & Security",
    question: "Do worker servers need static public IPs, open ports, or port forwarding?",
    answer:
      "Not for control plane communication. The tako-agent initiates an outbound-only TLS gRPC stream to the Master on port 50051. Workers can be located behind strict NAT, home ISP CGNAT, dynamic IPs, or private AWS/Hetzner subnets without opening port 22 or exposing any management ports to the internet.",
    codeFact: "Outbound dial: StreamTasks(stream AgentTaskResult) returns (stream MasterTask)",
  },
  {
    id: "sqlite-concurrency",
    category: "Persistence & SQLite",
    question: "Is embedded SQLite safe for concurrent writes during simultaneous Git pushes?",
    answer:
      "Yes. Tako configures SQLite in Write-Ahead Log (WAL) mode with tuned busy timeouts. Concurrent reads never block writes, and writes never block reads. Furthermore, deployment tasks are queued through in-memory Go channels in the orchestrator, serializing mutations cleanly without database lock contention.",
    codeFact: "modernc.org/sqlite · PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000;",
  },
  {
    id: "secret-encryption",
    category: "Security & Encryption",
    question: "How are environment variables and sensitive tokens encrypted at rest?",
    answer:
      "All environment variables designated as secrets are encrypted with AES-256-GCM using the cluster master key (TAKO_SECRET_KEY) before being stored in SQLite. Raw database file inspection yields only encrypted ciphertexts and random nonces. Secret decryption occurs strictly in-memory during container boot.",
    codeFact: "crypto/cipher · AES-256-GCM authenticated encryption",
  },
  {
    id: "autoscaler-flapping",
    category: "Auto-Scaling (HPA)",
    question: "How does the Horizontal Auto-Scaler prevent replica thrashing / flapping?",
    answer:
      "The autoscaler loop evaluates container CPU% and RAM% telemetry every 15 seconds. After scaling up or down, it enforces a configurable stabilization window (cooldown_seconds, default 60s). During this cooldown, replica counts remain locked to give newly spawned containers time to initialize and stabilize load.",
    codeFact: "autoscaler.go: cooldown stabilization window per service ID",
  },
  {
    id: "backup-s3",
    category: "Backups & Disaster Recovery",
    question: "Can database volumes and SQLite state be backed up off-site automatically?",
    answer:
      "Yes. Tako provides snapshot APIs that run non-locking SQLite VACUUM INTO snapshots and verify archive integrity with SHA-256 checksums. Backups can be synced automatically to AWS S3, Cloudflare R2, or MinIO object storage for point-in-time disaster recovery.",
    codeFact: "POST /api/v1/backups/snapshot · SHA-256 checksum + S3 storage sync",
  },
];

export function TechnicalFAQ() {
  const [openId, setOpenId] = useState<string | null>("master-failure");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 border-b border-border bg-background transition-colors duration-150">
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
            Engineering Verification
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Frequently Answered Technical Questions
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            Direct answers to the questions senior engineers and indie hackers ask before running <code className="text-foreground font-mono">curl | bash</code>.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-lg border border-border bg-card transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-semibold block">
                      {item.category}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-foreground block">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-border px-5 py-4 bg-muted/10 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                    >
                      <p>{item.answer}</p>
                      {item.codeFact && (
                        <div className="mt-3 pt-3 border-t border-border/60 flex items-center gap-2 font-mono text-[11px] text-foreground">
                          <span className="text-primary font-semibold">Invariant:</span>
                          <span className="text-muted-foreground">{item.codeFact}</span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
