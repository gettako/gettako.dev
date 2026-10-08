"use client";

import { Mark } from "@/components/mark";
import { GithubLogo } from "@phosphor-icons/react";

const LINKS = [
  { href: "#manifesto", label: "Manifesto" },
  { href: "#how", label: "How it works" },
  { href: "#specs", label: "Specs" },
  { href: "#install", label: "Install" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#05070c]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Mark size={30} />
          <span className="font-display text-lg font-bold tracking-tight text-[#f2f4fa]">
            tako
          </span>
          <span className="rounded border border-[#f5b54a]/30 bg-[#f5b54a]/10 px-1.5 py-0.5 font-mono text-[10px] text-[#f5b54a]">
            alpha
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#8a93b2] transition-colors hover:text-[#f2f4fa]"
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
            className="hidden items-center gap-2 rounded-md border border-white/10 px-3 py-1.5 text-[13px] text-[#c6cde4] transition-colors hover:border-white/25 hover:text-white sm:inline-flex"
          >
            <GithubLogo size={16} weight="fill" />
            GitHub
          </a>
          <a
            href="#install"
            className="rounded-md bg-[#7c83ff] px-3.5 py-1.5 text-[13px] font-semibold text-[#05070c] transition-colors hover:bg-[#a5b4fc]"
          >
            Install
          </a>
        </div>
      </div>
    </header>
  );
}
