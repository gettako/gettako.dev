import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, BookOpen, Terminal, House } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)] text-[var(--foreground)] transition-colors">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 sm:py-32 px-4 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          {/* 404 Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5560d6]/30 bg-[#5560d6]/10 px-3.5 py-1 text-xs font-mono font-medium text-[#5560d6] dark:text-[#7980e0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e85347]" />
            <span>HTTP 404 • Not Found</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
            Container not found.
          </h1>

          {/* Message */}
          <p className="mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
            The path you requested does not exist on this cluster. It may have been stopped, moved, or never deployed.
          </p>

          {/* Terminal Mockup */}
          <div className="mt-8 rounded-lg border border-[var(--border)] bg-[#0b0c14] p-4 text-left font-mono text-xs text-slate-200">
            <div className="text-[var(--muted)]">
              <span className="text-[#e85347]">error:</span> route not recognized by reverse proxy
            </div>
            <div className="text-slate-400 mt-1">
              traefik: 404 page not found — check domain routing rules
            </div>
          </div>

          {/* Navigation Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded bg-[#5560d6] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#4f46e5]"
            >
              <House size={14} weight="bold" />
              <span>Back to Home</span>
            </Link>

            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--foreground)] transition-colors hover:border-[#5560d6]/40"
            >
              <BookOpen size={14} />
              <span>Documentation</span>
            </a>

            <Link
              href="/install.sh"
              className="inline-flex items-center gap-1.5 rounded border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-mono text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              <Terminal size={14} />
              <span>install.sh</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
