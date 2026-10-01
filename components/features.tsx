"use client";

import {
  GitBranch,
  ShieldCheck,
  ArrowsCounterClockwise,
  Broadcast,
  LockKey,
  Certificate,
  Cpu,
  Trash,
} from "@phosphor-icons/react";

const features = [
  {
    icon: GitBranch,
    title: "Dockerfile-Driven Builds",
    description:
      "Predictable builds straight from your Git repository. Avoid opaque buildpack abstractions and keep full transparency over your container runtime.",
  },
  {
    icon: ArrowsCounterClockwise,
    title: "Zero-Downtime Rollouts",
    description:
      "HTTP health check verification gates traffic cutover. Traefik routes traffic to new containers only after they report healthy, gracefully stopping older ones.",
  },
  {
    icon: ShieldCheck,
    title: "Instant Local Rollback",
    description:
      "Retains previous successful Docker images locally on worker nodes. Rollback to any prior release in seconds without waiting for a new build.",
  },
  {
    icon: Certificate,
    title: "Automated Let's Encrypt SSL",
    description:
      "Dedicated Traefik v3 proxy on each node provisions and auto-renews TLS certificates for all custom domains with HTTP and TLS challenges.",
  },
  {
    icon: LockKey,
    title: "Encrypted Secrets at Rest",
    description:
      "Environment variables and build secrets are encrypted in SQLite using AES-256-GCM. Clear separation between build args and runtime secrets.",
  },
  {
    icon: Broadcast,
    title: "Real-Time Log Streaming",
    description:
      "Live Docker build logs and container stdout/stderr streamed directly to your browser via Server-Sent Events (SSE) with pause and search controls.",
  },
  {
    icon: Cpu,
    title: "Outbound-Only Worker Nodes",
    description:
      "Worker agents connect outward to the control plane over TLS gRPC. No public SSH port forwarding or open Docker daemon sockets required on nodes.",
  },
  {
    icon: Trash,
    title: "Automatic Disk Pruning",
    description:
      "Automated cleanup of dangling images, stale build caches, and stopped containers to prevent VPS disk exhaustion on active projects.",
  },
];

export function Features() {
  return (
    <section id="features" className="w-full py-16 sm:py-24 border-t border-[var(--border)] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            Core Capabilities
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)]">
            Everything you need for self-hosting. Nothing you don&apos;t.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            Engineered specifically for personal workloads and small teams who want total infrastructure control without operational overhead.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5 flex flex-col justify-between transition-colors hover:border-[#5560d6]/50"
              >
                <div>
                  {/* Icon & Label aligned side-by-side */}
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 shrink-0 rounded border border-[var(--border)] bg-[var(--surface-2)] flex items-center justify-center text-[#5560d6] dark:text-[#7980e0]">
                      <Icon size={20} weight="regular" />
                    </div>
                    <h3 className="font-semibold text-sm text-[var(--foreground)] leading-snug">
                      {feat.title}
                    </h3>
                  </div>

                  {/* Full-width description */}
                  <p className="mt-3.5 text-xs text-[var(--muted)] leading-relaxed w-full">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
