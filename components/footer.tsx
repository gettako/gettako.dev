"use client";

import Image from "next/image";
import Link from "next/link";
import { GithubLogo, BookOpen, Terminal } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="w-full border-t border-[#939db81a] bg-[#0b0c14] py-12 text-xs text-[#939db8]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded border border-[#939db826] bg-[#141622] p-1 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="TAKO"
                width={20}
                height={20}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <span className="font-mono font-bold text-white text-sm">TAKO</span>
              <span className="text-[11px] text-[#939db8] ml-2">
                Self-hosted platform for solo developers.
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
            <Link
              href="/install.sh"
              className="text-[#939db8] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Terminal size={13} />
              install.sh
            </Link>
            <Link
              href="/agent.sh"
              className="text-[#939db8] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Terminal size={13} />
              agent.sh
            </Link>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#939db8] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <BookOpen size={13} />
              docs.gettako.dev
            </a>
            <a
              href="https://github.com/gettako/tako"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#939db8] hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <GithubLogo size={13} weight="fill" />
              github.com/gettako/tako
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#939db80d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-[#939db8]/70">
          <div>
            Released under the <span className="text-white">MIT License</span>.
          </div>
          <div>
            Built with Go 1.24, Next.js 16, Docker Engine, and Traefik v3.
          </div>
        </div>
      </div>
    </footer>
  );
}
