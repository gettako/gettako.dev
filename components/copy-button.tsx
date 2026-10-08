"use client";

import { useState } from "react";
import { Check, Copy } from "@phosphor-icons/react";

export function CopyButton({
  text,
  label = "Copy",
  className = "",
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — no-op
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={`Copy: ${text}`}
      className={`inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded border border-[var(--border)] bg-white/[0.05] px-2.5 py-1.5 font-sans text-xs font-medium text-[var(--foreground)] transition-all hover:border-[#5560d6] hover:bg-[#5560d6] hover:text-white ${className}`}
    >
      {copied ? (
        <>
          <Check size={14} weight="bold" className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
