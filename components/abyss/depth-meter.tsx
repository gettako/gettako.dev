"use client";

import { useEffect, useState } from "react";

const MAX_DEPTH_M = 10935; // Challenger Deep — the deepest point on Earth

function zoneFor(progress: number): string {
  if (progress < 0.22) return "Sunlight";
  if (progress < 0.45) return "Twilight";
  if (progress < 0.7) return "Midnight";
  return "Abyssal";
}

/**
 * DepthMeter — fixed depth gauge on the right edge. Scrolling the page
 * is a dive: 0 m at the surface down to 10,935 m (Challenger Deep).
 */
export function DepthMeter() {
  const [depth, setDepth] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? Math.min(Math.max(window.scrollY / scrollable, 0), 1) : 0;
      setDepth(Math.round(p * MAX_DEPTH_M));
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const progress = depth / MAX_DEPTH_M;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex"
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
        {zoneFor(progress)}
      </span>
      <div className="relative h-48 w-px bg-white/10">
        <div
          className="absolute top-0 w-px bg-gradient-to-b from-[#a5b4fc] to-[#22d3ee]"
          style={{ height: `${Math.max(progress * 100, 2)}%` }}
        />
        <div
          className="absolute h-1.5 w-1.5 -translate-x-[2.5px] rounded-full bg-[#22d3ee]"
          style={{ top: `calc(${Math.max(progress * 100, 2)}% - 3px)`, boxShadow: "0 0 8px rgba(34,211,238,.9)" }}
        />
      </div>
      <span className="font-mono text-[10px] tabular-nums text-[var(--muted)]">
        −{depth.toLocaleString("en-US")} m
      </span>
    </div>
  );
}
