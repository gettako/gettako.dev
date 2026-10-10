import { BookOpen, FileText } from "lucide-react";
import Image from "next/image";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const FOOTER_GROUPS = [
  {
    title: "Documentation",
    links: [
      { label: "Quickstart Installation", href: "https://docs.gettako.dev/quickstart/installation" },
      { label: "Adding a Worker Server", href: "https://docs.gettako.dev/guides/adding-a-server" },
      { label: "System Architecture", href: "https://docs.gettako.dev/concepts/architecture" },
      { label: "Why Tako? (Philosophy)", href: "https://docs.gettako.dev/why-tako" },
      { label: "Zero-Downtime Swaps", href: "https://docs.gettako.dev/concepts/deployments" },
    ],
  },
  {
    title: "Project & Code",
    links: [
      { label: "GitHub Repository", href: "https://github.com/gettako/tako" },
      { label: "Releases & Changelog", href: "https://github.com/gettako/tako/releases" },
      { label: "Contributing Guidelines", href: "https://github.com/gettako/tako/blob/main/CONTRIBUTING.md" },
      { label: "Security Policy", href: "https://github.com/gettako/tako/blob/main/SECURITY.md" },
      { label: "Apache 2.0 License", href: "https://github.com/gettako/tako/blob/main/LICENSE" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Report an Issue", href: "https://github.com/gettako/tako/issues" },
      { label: "GitHub Discussions", href: "https://github.com/gettako/tako/discussions" },
      { label: "REST & OpenAPI Specs", href: "https://docs.gettako.dev/api-reference" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12 text-xs text-muted-foreground transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Image
                src="/images/tako.png"
                alt="Tako"
                width={24}
                height={24}
                className="size-6 rounded object-contain"
              />
              <span className="font-bold text-foreground text-sm tracking-tight">tako</span>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              A self-hosted, lightweight PaaS for deploying Docker applications across servers without SSH.
            </p>
            <div className="font-mono text-[11px] text-muted-foreground pt-1">
              Built with Go, gRPC &amp; Traefik.
            </div>
          </div>

          {/* Links columns */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="space-y-2.5">
              <div className="font-mono font-semibold uppercase tracking-wider text-foreground text-[11px]">
                {group.title}
              </div>
              <ul className="space-y-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-foreground transition-colors text-muted-foreground inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} Tako by{" "}
            <a
              href="https://octopy.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary font-semibold underline underline-offset-2 transition-colors"
            >
              Octopy ID
            </a>
            . Open source under Apache-2.0.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/gettako/tako"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <GithubIcon className="h-3 w-3" />
              GitHub
            </a>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1"
            >
              <BookOpen className="h-3 w-3" />
              Docs
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
