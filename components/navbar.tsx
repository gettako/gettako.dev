"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GithubLogo, Terminal } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 flex items-center">
              <Image
                src="/logo.svg"
                alt="Tako"
                width={96}
                height={32}
                className="h-7 w-auto object-contain dark:hidden"
                priority
              />
              <Image
                src="/logo-dark.svg"
                alt="Tako"
                width={96}
                height={32}
                className="h-7 w-auto object-contain hidden dark:block"
                priority
              />
            </div>
            <span className="rounded border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 font-mono text-[10px] font-medium text-amber-600 dark:text-amber-400">
              dev
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--muted)]">
            <a
              href="#install"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Install
            </a>
            <a
              href="#architecture"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Architecture
            </a>
            <a
              href="#features"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Features
            </a>
            <a
              href="#comparison"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Why Tako
            </a>
            <a
              href="#security"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Security
            </a>
            <a
              href="#roadmap"
              className="transition-colors hover:text-[var(--foreground)]"
            >
              Roadmap
            </a>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Docs
              <ArrowUpRight size={13} weight="bold" />
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <a
            href="https://github.com/gettako/tako"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[#5560d6]/40"
          >
            <GithubLogo size={16} weight="fill" />
            <span className="hidden sm:inline">GitHub</span>
          </a>

          <a
            href="#install"
            className="inline-flex items-center gap-1.5 rounded bg-[#5560d6] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#4f46e5]"
          >
            <Terminal size={14} weight="bold" />
            <span>Install</span>
          </a>
        </div>
      </div>
    </header>
  );
}
