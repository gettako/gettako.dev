"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GithubLogo, Terminal } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#939db81a] bg-[#0b0c14]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 w-8 overflow-hidden rounded border border-[#939db826] bg-[#141622] p-1 transition-colors group-hover:border-[#5560d6]">
              <Image
                src="/logo.png"
                alt="TAKO"
                width={32}
                height={32}
                className="h-full w-full object-contain"
                priority
              />
            </div>
            <span className="font-mono text-base font-bold tracking-tight text-white">
              TAKO
            </span>
            <span className="rounded border border-[#5560d6]/30 bg-[#5560d6]/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-[#7980e0]">
              v0.1
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[#939db8]">
            <a
              href="#install"
              className="transition-colors hover:text-white"
            >
              Install
            </a>
            <a
              href="#architecture"
              className="transition-colors hover:text-white"
            >
              Architecture
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-white"
            >
              Features
            </a>
            <a
              href="#comparison"
              className="transition-colors hover:text-white"
            >
              Why TAKO
            </a>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#939db8] transition-colors hover:text-white"
            >
              Docs
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/gettako/tako"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[#939db826] bg-[#141622] px-3 py-1.5 text-xs font-medium text-[#dee2e6] transition-colors hover:border-[#939db84d] hover:bg-[#1a1d2c]"
          >
            <GithubLogo size={16} weight="fill" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="#install"
            className="inline-flex items-center gap-1.5 rounded bg-[#5560d6] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#636ef0]"
          >
            <Terminal size={14} weight="bold" />
            <span>Install</span>
          </a>
        </div>
      </div>
    </header>
  );
}
