"use client";

import { useState } from "react";
import { Check, Copy, ArrowSquareOut, HardDrives, Cpu } from "@phosphor-icons/react";

export function InstallerTabs() {
  const [activeTab, setActiveTab] = useState<"plane" | "agent">("plane");
  const [copied, setCopied] = useState(false);

  const command =
    activeTab === "plane"
      ? "curl -fsSL https://gettako.dev/install.sh | bash"
      : 'curl -fsSL https://gettako.dev/agent.sh | bash';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full rounded-xl border border-[#5560d6]/25 bg-[var(--surface-2)] p-2 shadow-[0_12px_40px_-12px_rgba(85,96,214,0.25)] transition-colors sm:p-2.5">
      {/* Tabs Header */}
      <div className="flex items-center justify-between gap-2 px-1 pb-2 pt-0.5">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Installer">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "plane"}
            onClick={() => {
              setActiveTab("plane");
              setCopied(false);
            }}
            className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 font-mono text-xs font-medium transition-colors ${
              activeTab === "plane"
                ? "bg-[#5560d6]/10 text-[#5560d6] dark:text-[#7980e0]"
                : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            }`}
          >
            <HardDrives size={14} weight={activeTab === "plane" ? "fill" : "regular"} />
            <span>Control Plane</span>
            <span className="hidden text-[10px] font-normal opacity-70 sm:inline">
              (install.sh)
            </span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "agent"}
            onClick={() => {
              setActiveTab("agent");
              setCopied(false);
            }}
            className={`flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-2 font-mono text-xs font-medium transition-colors ${
              activeTab === "agent"
                ? "bg-[#5560d6]/10 text-[#5560d6] dark:text-[#7980e0]"
                : "text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)]"
            }`}
          >
            <Cpu size={14} weight={activeTab === "agent" ? "fill" : "regular"} />
            <span>Worker Agent</span>
            <span className="hidden text-[10px] font-normal opacity-70 sm:inline">
              (agent.sh)
            </span>
          </button>
        </div>

        <a
          href={activeTab === "plane" ? "/install.sh" : "/agent.sh"}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 items-center gap-1 px-1 font-mono text-[11px] text-[var(--muted)] transition-colors hover:text-[#5560d6] dark:hover:text-[#7980e0] sm:flex"
        >
          <span>View raw script</span>
          <ArrowSquareOut size={12} />
        </a>
      </div>

      {/* Code Box: Adapts to Light and Dark mode */}
      <div className="relative flex flex-col items-stretch justify-between gap-3 rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-3.5 font-mono transition-colors sm:flex-row sm:items-center">
        <div className="flex min-w-0 items-center gap-2.5 overflow-x-auto text-[13px] text-[var(--foreground)] sm:text-sm">
          <span className="shrink-0 select-none font-bold text-[#5560d6] dark:text-[#7980e0]">$</span>
          <span className="whitespace-nowrap">{command}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy install command"
          className="flex shrink-0 cursor-pointer items-center justify-center gap-1.5 self-end rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3.5 py-2 font-sans text-xs font-medium text-[var(--foreground)] transition-all hover:border-[#5560d6] hover:bg-[#5560d6] hover:text-white sm:self-auto"
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" className="text-emerald-500" />
              <span className="text-emerald-600 dark:text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Subtext description */}
      <div className="px-2 pb-1 pt-2.5 text-[12px] leading-relaxed text-[var(--muted)]">
        {activeTab === "plane" ? (
          <p>
            Run on your <strong className="font-semibold text-[var(--foreground)]">primary server</strong>. Sets up Next.js 16 Web Dashboard, Go REST API, gRPC coordinator, Traefik v3, and encrypted SQLite. Minimum 1 GB RAM, Ubuntu/Debian/Rocky/Alpine with Docker 24+.
          </p>
        ) : (
          <p>
            Run on any <strong className="font-semibold text-[var(--foreground)]">remote worker node</strong>. Installs the lightweight node daemon and Traefik reverse proxy. Connects outward to your control plane over TLS gRPC with <strong className="font-semibold text-[var(--foreground)]">0 open inbound management ports</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
