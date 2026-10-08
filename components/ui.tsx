"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

/** 01 / KICKER + display title */
export function SectionHead({
  n,
  kicker,
  title,
  lede,
  dark = false,
}: {
  n: string;
  kicker: string;
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="kicker" style={dark ? { color: "#a5b4fc" } : undefined}>
        <span className="n">{n}</span>
        <span className="mx-3 opacity-40">/</span>
        {kicker}
      </p>
      <h2
        className="display-xl mt-4 text-4xl sm:text-5xl"
        style={{ color: dark ? "#fff" : "var(--ink)" }}
      >
        {title}
      </h2>
      {lede && (
        <p
          className="mt-4 max-w-2xl text-base leading-relaxed"
          style={{ color: dark ? "#c6cde4" : "var(--muted)" }}
        >
          {lede}
        </p>
      )}
    </div>
  );
}

export function CopyBtn({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      aria-label="Copy to clipboard"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          /* noop */
        }
      }}
      className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-lg bg-[#5560d6] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#3f45b8]"
    >
      {done ? <Check size={14} weight="bold" /> : <Copy size={14} />}
      <span className="font-mono">{done ? "copied!" : "copy"}</span>
    </button>
  );
}

export function Cmd({ cmd, dark = false }: { cmd: string; dark?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3.5 sm:px-5 ${
        dark
          ? "border-white/10 bg-[#0d1122]"
          : "border-[var(--line)] bg-white shadow-[0_8px_30px_rgba(85,96,214,0.12)]"
      }`}
    >
      <code
        className={`min-w-0 flex-1 truncate font-mono text-[13px] sm:text-sm ${
          dark ? "text-[#dfe4f5]" : "text-[var(--ink)]"
        }`}
      >
        <span className="mr-2 select-none font-bold text-[#5560d6]">$</span>
        {cmd}
      </code>
      <CopyBtn text={cmd} />
    </div>
  );
}

/** Hand-drawn wavy underline, echoing the octopus tentacles */
export function Wavy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 14" className={className} aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M3 10 C 25 3, 45 3, 66 9 S 108 14, 130 8 S 175 2, 217 9"
        fill="none"
        stroke="#5560d6"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Floating bubbles echoing the logo decorations */
export function Bubbles({ count = 5, className = "" }: { count?: number; className?: string }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    left: `${8 + ((i * 37 + 13) % 84)}%`,
    top: `${12 + ((i * 53 + 7) % 70)}%`,
    size: 5 + ((i * 7) % 9),
    delay: `${(i * 1.3) % 4}s`,
    key: i,
  }));
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      {dots.map((d) => (
        <span
          key={d.key}
          className="bubble absolute rounded-full border-2 border-[#5560d6]/40"
          style={{ left: d.left, top: d.top, width: d.size, height: d.size, animationDelay: d.delay }}
        />
      ))}
    </div>
  );
}
