"use client";

import Image from "next/image";
import Link from "next/link";
import { GithubLogo, BookOpen, Terminal } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border)] bg-[var(--background)] py-12 text-xs text-[var(--muted)] transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 flex items-center">
              <Image
                src="/logo.svg"
                alt="Tako"
                width={80}
                height={26}
                className="h-6 w-auto object-contain dark:hidden"
              />
              <Image
                src="/logo-dark.svg"
                alt="Tako"
                width={80}
                height={26}
                className="h-6 w-auto object-contain hidden dark:block"
              />
            </div>
            <div>
              <span className="text-[11px] text-[var(--muted)] ml-2">
                Self-hosted lightweight PaaS for developers and teams.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <Link
              href="/install.sh"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              <Terminal size={13} />
              install.sh
            </Link>
            <Link
              href="/agent.sh"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              <Terminal size={13} />
              agent.sh
            </Link>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              <BookOpen size={13} />
              docs.gettako.dev
            </a>
            <a
              href="https://github.com/gettako/tako"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1"
            >
              <GithubLogo size={13} weight="fill" />
              github.com/gettako/tako
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[var(--muted)]">
          <div>
            Released under the <span className="text-[var(--foreground)] font-semibold">Apache License 2.0</span>.
          </div>
          <div>
            Built with Go 1.24, Next.js 16, Docker Engine, and Traefik v3.
          </div>
        </div>
      </div>
    </footer>
  );
}
