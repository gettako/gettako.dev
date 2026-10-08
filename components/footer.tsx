import { Mark } from "@/components/mark";
import { GithubLogo, BookOpen, Terminal } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 border-t border-white/[0.08] pt-12 md:flex-row">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Mark size={30} />
              <span className="font-display text-lg font-bold text-[#f2f4fa]">tako</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#8a93b2]">
              A featherweight self-hosted PaaS. Your code, delivered — to servers you own.
            </p>
            <p className="mt-4 font-mono text-[11px] text-[#5b637f]">
              Apache 2.0 · Built by <span className="text-[#8a93b2]">Octopy ID</span>
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-16 gap-y-3 font-mono text-[12px] uppercase tracking-[0.14em]">
            {[
              ["Manifesto", "#manifesto"],
              ["How it works", "#how"],
              ["Architecture", "#architecture"],
              ["Specs", "#specs"],
              ["Install", "#install"],
              ["install.sh", "/install.sh"],
              ["agent.sh", "/agent.sh"],
              ["Docs", "https://docs.gettako.dev"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="text-[#8a93b2] transition-colors hover:text-[#f2f4fa]">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/gettako/tako"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#8a93b2] transition-colors hover:border-white/30 hover:text-white"
            >
              <GithubLogo size={18} weight="fill" />
            </a>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Docs"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#8a93b2] transition-colors hover:border-white/30 hover:text-white"
            >
              <BookOpen size={18} />
            </a>
            <a
              href="/install.sh"
              aria-label="install.sh"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-[#8a93b2] transition-colors hover:border-white/30 hover:text-white"
            >
              <Terminal size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* giant wordmark */}
      <div aria-hidden="true" className="pointer-events-none mt-8 select-none overflow-hidden">
        <p className="display-xl -mb-[0.23em] text-center text-[26vw] leading-none text-white/[0.045]">
          tako
        </p>
      </div>
    </footer>
  );
}
