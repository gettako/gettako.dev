"use client";

import { useState } from "react";
import { Check, Copy, ArrowSquareOut, HardDrives, Cpu } from "@phosphor-icons/react";

export function InstallerTabs() {
  const [activeTab, setActiveTab] = useState<"plane" | "agent">("plane");
  const [copied, setCopied] = useState(false);

  const command =
    activeTab === "plane"
      ? "curl -fsSL https://gettako.dev/install.sh | bash"
      : "curl -fsSL https://gettako.dev/agent.sh | bash";

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
    <div className="w-full rounded-lg border border-[#939db826] bg-[#141622] p-1 sm:p-2">
      {/* Tabs Header */}
      <div className="flex items-center justify-between border-b border-[#939db81a] px-2 pb-2 pt-1">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveTab("plane");
              setCopied(false);
            }}
            className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
              activeTab === "plane"
                ? "bg-[#1a1d2c] text-white border border-[#939db833]"
                : "text-[#939db8] hover:text-white"
            }`}
          >
            <HardDrives size={14} weight={activeTab === "plane" ? "fill" : "regular"} />
            <span>Control Plane</span>
            <span className="hidden sm:inline text-[10px] text-[#7980e0] font-normal">
              (install.sh)
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab("agent");
              setCopied(false);
            }}
            className={`flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-mono font-medium transition-colors ${
              activeTab === "agent"
                ? "bg-[#1a1d2c] text-white border border-[#939db833]"
                : "text-[#939db8] hover:text-white"
            }`}
          >
            <Cpu size={14} weight={activeTab === "agent" ? "fill" : "regular"} />
            <span>Worker Agent</span>
            <span className="hidden sm:inline text-[10px] text-[#7980e0] font-normal">
              (agent.sh)
            </span>
          </button>
        </div>

        <a
          href={activeTab === "plane" ? "/install.sh" : "/agent.sh"}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-[#939db8] hover:text-white transition-colors"
        >
          <span>View raw script</span>
          <ArrowSquareOut size={12} />
        </a>
      </div>

      {/* Code Box */}
      <div className="mt-2 relative flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded bg-[#0b0c14] border border-[#939db81a] px-3.5 py-3 font-mono">
        <div className="flex items-center gap-2.5 overflow-x-auto text-xs sm:text-sm text-[#dee2e6] pr-2">
          <span className="text-[#5560d6] select-none">$</span>
          <span className="whitespace-nowrap">{command}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy install command"
          className="flex items-center justify-center gap-1.5 self-end sm:self-auto shrink-0 rounded border border-[#939db826] bg-[#1a1d2c] px-3 py-1.5 text-xs font-sans font-medium text-white transition-all hover:bg-[#5560d6] hover:border-[#5560d6]"
        >
          {copied ? (
            <>
              <Check size={14} weight="bold" className="text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
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
      <div className="mt-2.5 px-2 pb-1 text-[12px] text-[#939db8]">
        {activeTab === "plane" ? (
          <p>
            Run on your <strong className="text-white">primary server</strong>. Sets up Next.js 16 Web Dashboard, Go REST API, gRPC coordinator, Traefik v3, and encrypted SQLite. Minimum 1 GB RAM, Ubuntu/Debian/Rocky/Alpine with Docker 24+.
          </p>
        ) : (
          <p>
            Run on any <strong className="text-white">remote worker node</strong>. Installs the lightweight node daemon and Traefik reverse proxy. Connects outward to your control plane over TLS gRPC with <strong className="text-white">0 open inbound management ports</strong>.
          </p>
        )}
      </div>
    </div>
  );
}
