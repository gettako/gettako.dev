"use client";

import { useEffect, useRef, useState } from "react";

interface Bar {
  name: string;
  tag: string;
  settledMib: number;
  range: string;
  highlight?: boolean;
}

const MAX_MIB = 2600;

const bars: Bar[] = [
  { name: "Tako", tag: "7f32b2b", settledMib: 63.3, range: "63 – 69 MiB", highlight: true },
  { name: "Coolify", tag: "v4.3", settledMib: 413.0, range: "413 – 557 MiB" },
  { name: "Dokploy", tag: "v0.30", settledMib: 825.5, range: "825 – 841 MiB" },
  { name: "Kubernetes", tag: "k3s", settledMib: 2048, range: "~1.5 – 2.5 GiB" },
];

export function RamMeter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full border-t border-[var(--border)] bg-[var(--surface)] py-16 transition-colors sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            Zero bloat, measured
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            The whole control plane idles at{" "}
            <span className="text-[#5560d6] dark:text-[#7980e0]">~63 MiB</span>.
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed sm:text-base">
            Idle container RAM (<code className="font-mono text-xs">docker stats</code>, settled) on identical VPS hardware.
            That is <strong className="text-[var(--foreground)]">6.5× lighter than Coolify</strong> and{" "}
            <strong className="text-[var(--foreground)]">13× lighter than Dokploy</strong> — so your RAM serves your apps, not the platform.
          </p>
        </div>

        <div ref={ref} className="mx-auto mt-10 max-w-3xl space-y-4">
          {bars.map((bar) => {
            const widthPct = Math.max((bar.settledMib / MAX_MIB) * 100, 2.2);
            return (
              <div key={bar.name}>
                <div className="mb-1.5 flex items-baseline justify-between font-mono text-xs">
                  <span className={`font-semibold ${bar.highlight ? "text-[#5560d6] dark:text-[#7980e0]" : "text-[var(--foreground)]"}`}>
                    {bar.name}
                    <span className="ml-1.5 font-normal text-[10px] text-[var(--muted)]">{bar.tag}</span>
                  </span>
                  <span className={bar.highlight ? "font-bold text-[#5560d6] dark:text-[#7980e0]" : "text-[var(--muted)]"}>
                    {bar.range}
                  </span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded border border-[var(--border)] bg-[var(--surface-2)]">
                  <div
                    className={`h-full rounded-sm transition-[width] duration-1000 ease-out ${
                      bar.highlight
                        ? "bg-[#5560d6] dark:bg-[#7980e0]"
                        : "bg-[var(--muted)]/50"
                    }`}
                    style={{ width: visible ? `${widthPct}%` : "0%" }}
                  />
                </div>
              </div>
            );
          })}
          <p className="pt-2 text-center font-mono text-[11px] text-[var(--muted)]">
            Measured on 2 vCPU / 8 GB RAM, Ubuntu 26.04, Docker 29 · zero workload ·{" "}
            <a href="#comparison" className="underline decoration-dotted underline-offset-2 hover:text-[var(--foreground)]">
              full benchmark notes
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
