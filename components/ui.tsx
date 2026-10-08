"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

/** Numbered section heading: 01 / KICKER + big display title */
export function SectionHead({
  n,
  kicker,
  title,
  lede,
}: {
  n: string;
  kicker: string;
  title: React.ReactNode;
  lede?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="kicker">
        <span className="n">{n}</span>
        <span className="mx-3 text-[#3a4159]">/</span>
        {kicker}
      </p>
      <h2 className="display-xl mt-4 text-4xl text-[#f2f4fa] sm:text-5xl">{title}</h2>
      {lede && <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#8a93b2]">{lede}</p>}
    </div>
  );
}

/** Small copy-to-clipboard button */
export function CopyBtn({ text, dark = false }: { text: string; dark?: boolean }) {
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
      className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-medium transition-colors ${
        dark
          ? "border-white/10 bg-white/5 text-[#f2f4fa] hover:border-[#7c83ff]/60 hover:text-white"
          : "border-[#7c83ff]/40 bg-[#7c83ff]/10 text-[#c7d0ff] hover:bg-[#7c83ff] hover:text-[#05070c]"
      }`}
    >
      {done ? <Check size={14} weight="bold" /> : <Copy size={14} />}
      <span className="font-mono">{done ? "copied" : "copy"}</span>
    </button>
  );
}

/** Single-line command row with copy button */
export function Cmd({ cmd, prompt = true }: { cmd: string; prompt?: boolean }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-black/50 px-4 py-3">
      <code className="min-w-0 flex-1 truncate font-mono text-[13px] text-[#dfe4f5] sm:text-sm">
        {prompt && <span className="mr-2 select-none font-bold text-[#7c83ff]">$</span>}
        {cmd}
      </code>
      <CopyBtn text={cmd} />
    </div>
  );
}
