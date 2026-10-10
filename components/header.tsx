"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const NAV_LINKS = [
  { label: "Architecture", href: "#architecture" },
  { label: "Comparison", href: "#comparison" },
  { label: "Economics", href: "#economics" },
  { label: "Non-Goals", href: "#non-goals" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Docs", href: "https://docs.gettako.dev", external: true },
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function TakoLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/images/tako.png"
        alt="Tako"
        width={30}
        height={30}
        className="size-7.5 rounded-md object-contain"
        priority
      />
      <span className="font-bold tracking-tight text-foreground text-[17px]">
        tako
      </span>
      <span className="hidden sm:inline-block rounded border border-border px-1.5 py-0.5 text-[9px] font-mono text-muted-foreground uppercase">
        paas
      </span>
    </div>
  );
}

import { ExperimentalBanner } from "@/components/experimental-banner";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-colors duration-150">
      <ExperimentalBanner />
      <div className="border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <TakoLogo />
            </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                {link.label}
                {link.external && <ExternalLink className="h-3 w-3 opacity-60" />}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="flex items-center gap-1 rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                title="Toggle theme (press 'D')"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-3.5 w-3.5 text-status-warning" />
                ) : (
                  <Moon className="h-3.5 w-3.5 text-primary" />
                )}
                <kbd className="hidden lg:inline text-[10px] text-muted-foreground font-mono bg-muted px-1 rounded">
                  D
                </kbd>
              </button>
            )}

            {/* GitHub Stars Pill */}
            <a
              href="https://github.com/gettako/tako"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs font-medium text-foreground hover:bg-muted transition-colors"
            >
              <GithubIcon className="h-3.5 w-3.5 text-muted-foreground" />
              <span>GitHub</span>
            </a>

            {/* CTA */}
            <a
              href="#install"
              className="rounded-md bg-primary px-3.5 py-1 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Deploy Cluster
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="rounded-md border border-border p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4 text-status-warning" />
                ) : (
                  <Moon className="h-4 w-4 text-primary" />
                )}
              </button>
            )}
            <button
              className="rounded-md border border-border p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden border-t border-border bg-background px-4 py-3 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-md px-3 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  <span>{link.label}</span>
                  {link.external && <ExternalLink className="h-3 w-3" />}
                </a>
              ))}
              <div className="mt-2 pt-2 border-t border-border flex flex-col gap-2">
                <a
                  href="https://github.com/gettako/tako"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-foreground hover:bg-muted"
                >
                  <GithubIcon className="h-4 w-4 text-muted-foreground" />
                  GitHub Repository
                </a>
                <a
                  href="#install"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md bg-primary px-4 py-2 text-center text-xs font-medium text-primary-foreground hover:opacity-90"
                >
                  Deploy Cluster
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
