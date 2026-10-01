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
    <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] p-1 sm:p-2 transition-colors">
      {/* Tabs Header */}
      <div className="flex items-center justify-between border-b border-[var(--border)] px-2 pb-2 pt-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab("plane");
              setCopied(false);
            }}
            className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === "plane"
                ? "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <HardDrives size={14} weight={activeTab === "plane" ? "fill" : "regular"} />
            <span>Control Plane</span>
            <span className="hidden sm:inline text-[10px] text-[#5560d6] dark:text-[#7980e0] font-normal">
              (install.sh)
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("agent");
              setCopied(false);
            }}
            className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
              activeTab === "agent"
                ? "bg-[var(--surface-2)] text-[var(--foreground)] border border-[var(--border)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            <Cpu size={14} weight={activeTab === "agent" ? "fill" : "regular"} />
            <span>Worker Agent</span>
            <span className="hidden sm:inline text-[10px] text-[#5560d6] dark:text-[#7980e0] font-normal">
              (agent.sh)
            </span>
          </button>
        </div>

        <a
          href={activeTab === "plane" ? "/install.sh" : "/agent.sh"}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          <span>View raw script</span>
          <ArrowSquareOut size={12} />
        </a>
      </div>

      {/* Code Box: Adapts to Light and Dark mode */}
      <div className="mt-2 relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded bg-[var(--code-bg)] border border-[var(--border)] px-3.5 py-3 font-mono transition-colors">
        <div className="flex items-center gap-2.5 overflow-x-auto text-xs sm:text-sm text-[var(--foreground)] pr-2">
          <span className="text-[#5560d6] dark:text-[#7980e0] select-none font-bold">$</span>
          <span className="whitespace-nowrap">{command}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy install command"
          className="flex items-center justify-center gap-1.5 self-end sm:self-auto shrink-0 rounded border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5 text-xs font-sans font-medium text-[var(--foreground)] transition-all hover:bg-[#5560d6] hover:text-white hover:border-[#5560d6] cursor-pointer"
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" className="text-emerald-600 dark:text-emerald-400" />
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
      <div className="mt-2.5 px-2 pb-1 text-[12px] text-[var(--muted)]">
        {activeTab === "plane" ? (
          <p>
            Run on your <strong className="text-[var(--foreground)]">primary server</strong>. Sets up Next.js 16 Web Dashboard, Go REST API, gRPC coordinator, Traefik v3, and encrypted SQLite. Minimum 1 GB RAM, Ubuntu/Debian/Rocky/Alpine with Docker 24+.
          </p>
        ) : (
          <p>
            Run on any <strong className="text-[var(--foreground)]">remote worker node</strong>. Installs the lightweight node daemon and Traefik reverse proxy. Connects outward to your control plane over TLS gRPC with <strong className="text-[var(--foreground)]">0 open inbound management ports</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
