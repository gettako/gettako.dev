import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Terminal } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between p-6 sm:p-12 transition-colors duration-150">
      {/* Top logo */}
      <div className="flex items-center gap-2.5">
        <Image
          src="/images/tako.png"
          alt="Tako"
          width={28}
          height={28}
          className="size-7 rounded object-contain"
        />
        <span className="font-bold tracking-tight text-foreground text-base">
          tako
        </span>
        <span className="rounded border border-border px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground uppercase">
          paas
        </span>
      </div>

      {/* Main 404 Container */}
      <div className="max-w-xl mx-auto w-full my-auto py-12">
        <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xs dark:shadow-none">
          {/* Header */}
          <div className="border-b border-border bg-muted/40 px-4 py-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                HTTP 404 · Route Not Found
              </span>
            </div>
            <span className="font-mono text-[10px] text-status-danger font-semibold">
              NO_INGRESS_MATCH
            </span>
          </div>

          {/* Terminal error representation */}
          <div className="p-6 font-mono text-xs space-y-3">
            <div className="flex items-center gap-2 text-status-danger">
              <Terminal className="h-4 w-4 shrink-0" />
              <span className="font-bold text-sm">404: Page Not Found</span>
            </div>

            <p className="text-muted-foreground text-xs leading-relaxed">
              The requested path does not exist or has been relocated to another endpoint.
            </p>

            <div className="rounded border border-border bg-muted/20 p-3 text-[11px] space-y-1 text-muted-foreground">
              <div>[traefik] router: default-catchall</div>
              <div>[traefik] rule: Host(`gettako.dev`) &amp;&amp; PathPrefix(`*`)</div>
              <div className="text-status-danger">[traefik] status: 404 Not Found · Zero candidate backends</div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 font-sans">
              <Link
                href="/"
                className="flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-xs font-medium text-primary-foreground hover:opacity-95 transition-opacity"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Return to Home
              </Link>

              <a
                href="https://docs.gettako.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
              >
                <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                Documentation
              </a>

              <a
                href="https://github.com/gettako/tako"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 rounded-md border border-border bg-muted/40 px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5 text-muted-foreground" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center font-mono text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} Tako by{" "}
        <a
          href="https://octopy.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-primary font-semibold underline underline-offset-2 transition-colors"
        >
          Octopy ID
        </a>
        .
      </div>
    </div>
  );
}
