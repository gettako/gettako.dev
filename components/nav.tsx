"use client";

import Image from "next/image";
import { GithubLogo } from "@phosphor-icons/react";

const LINKS = [
  { href: "#manifesto", label: "Why Tako" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#install", label: "Install" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[#fcfcff]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/logo.svg" alt="Tako" width={120} height={40} className="h-9 w-auto" priority />
          <span className="rounded-full border border-[#f5b54a]/40 bg-[#f5b54a]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#9a6b1a]">
            alpha
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-semibold text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/gettako/tako"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-xl border border-[var(--line)] bg-white px-3.5 py-2 text-[13px] font-semibold text-[var(--ink)] transition-colors hover:border-[#5560d6]/50 sm:inline-flex"
          >
            <GithubLogo size={16} weight="fill" />
            GitHub
          </a>
          <a
            href="#install"
            className="rounded-xl bg-[#5560d6] px-4 py-2 text-[13px] font-bold text-white shadow-[0_6px_20px_rgba(85,96,214,0.35)] transition-colors hover:bg-[#3f45b8]"
          >
            Install
          </a>
        </div>
      </div>
    </header>
  );
}
