"use client";

import { useState } from "react";
import { AlertTriangle, ArrowRight, X } from "lucide-react";

export function ExperimentalBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-50 border-b border-amber-500/30 bg-[#FFFBEB] dark:bg-[#151208] py-2 text-xs text-amber-900 dark:text-amber-300 transition-colors duration-150 shadow-none">
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6 lg:px-8 items-center justify-between gap-3 font-mono">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1 rounded bg-amber-500/20 dark:bg-amber-400/20 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300 shrink-0">
            <AlertTriangle className="h-3 w-3" />
            Experimental
          </span>
          <span className="truncate text-[11px] sm:text-xs">
            Tako is in active early development. APIs, CLI flags, and schemas are subject to change before v1.0.
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://docs.gettako.dev/roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
          >
            <span>Roadmap</span>
            <ArrowRight className="h-3 w-3" />
          </a>
          <button
            onClick={() => setDismissed(true)}
            className="rounded p-0.5 hover:bg-amber-500/20 transition-colors text-amber-700 dark:text-amber-400"
            aria-label="Dismiss banner"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
