import Image from "next/image";
import { GithubLogo, BookOpen, Terminal } from "@phosphor-icons/react/dist/ssr";

const LINKS: [string, string][] = [
  ["Manifesto", "#manifesto"],
  ["How it works", "#how"],
  ["Architecture", "#architecture"],
  ["Features", "#features"],
  ["Specs", "#specs"],
  ["Install", "#install"],
  ["install.sh", "/install.sh"],
  ["Docs", "https://docs.gettako.dev"],
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
        <div className="flex flex-col justify-between gap-10 border-t border-[var(--line)] pt-12 md:flex-row">
          <div className="max-w-sm">
            <Image src="/logo.svg" alt="Tako" width={120} height={40} className="h-9 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
              A featherweight self-hosted PaaS. Your code, delivered — to servers you own.
            </p>
            <p className="mt-4 font-mono text-[11px] text-[var(--faint)]">
              Apache 2.0 · Built by Octopy ID
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3">
            {LINKS.map(([label, href]) => (
              <a key={label} href={href} className="text-[13.5px] font-semibold text-[var(--muted)] transition-colors hover:text-[#5560d6]">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-start gap-2.5">
            {[
              { href: "https://github.com/gettako/tako", label: "GitHub", Icon: GithubLogo },
              { href: "https://docs.gettako.dev", label: "Docs", Icon: BookOpen },
              { href: "/install.sh", label: "install.sh", Icon: Terminal },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--line)] text-[var(--muted)] transition-colors hover:border-[#5560d6]/50 hover:text-[#5560d6]"
              >
                <Icon size={18} weight="fill" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none mt-10 select-none overflow-hidden">
        <p className="display-xl -mb-[0.24em] text-center text-[27vw] leading-none text-[#5560d6]/[0.06]">
          tako
        </p>
      </div>
    </footer>
  );
}
