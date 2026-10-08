"use client";

import { useEffect, useState } from "react";
import { GitBranch, Hammer, Package, Globe } from "@phosphor-icons/react";

const STEPS = [
  {
    icon: GitBranch,
    title: "Push",
    desc: "Push to your repo. A webhook wakes the control plane — no CI service in between.",
    cmd: "git push origin main",
  },
  {
    icon: Hammer,
    title: "Build",
    desc: "Your Dockerfile builds straight from the repo. Offload to a worker agent to keep the primary server light.",
    cmd: "docker build -t myapp:9f3a2c1 .",
  },
  {
    icon: Package,
    title: "Ship",
    desc: "The image ships to worker nodes over outbound TLS gRPC. Health checks pass before traffic moves.",
    cmd: "grpc → srv-02  •  health: passing",
  },
  {
    icon: Globe,
    title: "Serve",
    desc: "Traefik cuts over with zero downtime and automatic Let's Encrypt TLS. One-click rollback if needed.",
    cmd: "https://myapp.com — 200 OK",
  },
] as const;

function FlowLine({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <svg viewBox="0 0 12 46" className="h-11 w-3 shrink-0" aria-hidden="true">
        <line x1="6" y1="2" x2="6" y2="34" stroke="var(--border-strong)" strokeWidth="2" />
        <line
          x1="6" y1="2" x2="6" y2="34"
          stroke="#5560d6" strokeWidth="2" strokeDasharray="6 6"
          className="animate-flow"
        />
        <polygon points="6,44 1,34 11,34" fill="#5560d6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 88 12" className="h-3 w-16 shrink-0 lg:w-20" aria-hidden="true">
      <line x1="2" y1="6" x2="76" y2="6" stroke="var(--border-strong)" strokeWidth="2" />
      <line
        x1="2" y1="6" x2="76" y2="6"
        stroke="#5560d6" strokeWidth="2" strokeDasharray="6 6"
        className="animate-flow"
      />
      <polygon points="86,6 76,1 76,11" fill="#5560d6" />
    </svg>
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 3000);
    return () => clearInterval(t);
  }, [reduced, paused]);

  return (
    <section
      id="how-it-works"
      className="w-full border-t border-[var(--border)] py-16 transition-colors sm:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            How It Works
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            From git push to live, in four moves.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Watch a deployment travel through Tako. No CI service in the middle — the
            control plane builds, ships, and serves your app directly.
          </p>
        </div>

        {/* Animated flow */}
        <div className="mt-12 flex flex-col items-stretch md:flex-row md:items-center">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isActive = i === active;
            return (
              <div key={step.title} className="flex flex-col items-stretch md:flex-1 md:flex-row md:items-center">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Step ${i + 1}: ${step.title}`}
                  className={`flex-1 cursor-pointer rounded-lg border p-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#5560d6]/60 bg-[var(--surface-2)] shadow-[0_0_0_3px_rgba(85,96,214,0.12)]"
                      : "border-[var(--border)] bg-[var(--surface)] hover:border-[#5560d6]/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 ${
                        isActive
                          ? "border-[#5560d6] bg-[#5560d6] text-white"
                          : "border-[var(--border)] bg-[var(--surface-2)] text-[#5560d6] dark:text-[#7980e0]"
                      }`}
                    >
                      <Icon size={20} weight={isActive ? "fill" : "regular"} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                        Step {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3 className="text-base font-bold text-[var(--foreground)]">{step.title}</h3>
                    </div>
                    {isActive && (
                      <span className="ml-auto flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#5560d6] dark:bg-[#7980e0]" />
                        live
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">{step.desc}</p>
                </button>

                {i < STEPS.length - 1 && (
                  <div className="flex items-center justify-center py-1 md:px-1 md:py-0">
                    <span className="md:hidden">
                      <FlowLine vertical />
                    </span>
                    <span className="hidden md:inline">
                      <FlowLine />
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Live command readout */}
        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--terminal-body-bg)] transition-colors">
          <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--terminal-bar-bg)] px-4 py-2 transition-colors">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#e85347]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
              <span className="ml-2 font-mono text-[11px] text-[var(--terminal-muted)]">
                tako — live deployment
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              {STEPS.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                    i === active ? "w-6 bg-[#5560d6]" : "w-1.5 bg-[var(--border-strong)] hover:bg-[var(--muted)]"
                  }`}
                />
              ))}
            </div>
          </div>
          <div
            key={active}
            className="animate-step-in px-4 py-3.5 font-mono text-xs text-[var(--terminal-text)] sm:text-sm"
          >
            <span className="mr-2 font-bold text-[#5560d6] select-none dark:text-[#7980e0]">$</span>
            {STEPS[active].cmd}
          </div>
        </div>

        <p className="mt-4 text-center font-mono text-[11px] text-[var(--muted)]">
          Hover to pause · click any step to jump
        </p>
      </div>
    </section>
  );
}
