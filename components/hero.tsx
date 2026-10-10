"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ArrowRight, ShieldCheck, Terminal, Sparkles } from "lucide-react";

const INSTALL_CMD = "curl -fsSL https://gettako.dev/install.sh | bash";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(INSTALL_CMD);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 border-b border-border bg-background transition-colors duration-150 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top badge */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3.5 py-1 text-xs font-mono text-muted-foreground"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            <span>Built for Indie Developers &amp; Small Teams · Zero SSH · Embedded SQLite</span>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          className="mt-6 text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.12]">
            Self-Hosting Without SSH.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            A lightweight, open-source PaaS for developers. Deploy containerized applications and databases across multiple servers with outbound gRPC, automatic SSL, and zero open management ports.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <motion.a
            href="#install"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95 transition-opacity"
          >
            Deploy Control Plane
            <ArrowRight className="h-4 w-4" />
          </motion.a>
          <motion.a
            href="https://github.com/gettako/tako"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
          >
            <GithubIcon className="h-4 w-4 text-muted-foreground" />
            Star on GitHub
          </motion.a>
          <motion.a
            href="#architecture"
            whileHover={{ x: 2 }}
            className="flex items-center gap-1.5 rounded-md px-3.5 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            How it works ↓
          </motion.a>
        </motion.div>

        {/* Install snippet box */}
        <motion.div
          id="install"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-2xl"
        >
          <motion.div
            whileHover={{ borderColor: "var(--primary)" }}
            transition={{ duration: 0.2 }}
            className="rounded-lg border border-border bg-card overflow-hidden shadow-xs dark:shadow-none"
          >
            <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3.5 py-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span className="font-mono text-[11px]">Primary Server Bootstrap</span>
              </div>
              <span className="text-[10px] font-mono">Linux AMD64 / ARM64</span>
            </div>
            <div className="flex items-center justify-between gap-3 px-4 py-3 font-mono text-xs sm:text-sm bg-muted/20 dark:bg-card">
              <div className="flex items-center gap-2.5 overflow-x-auto select-all">
                <span className="text-muted-foreground select-none">$</span>
                <span className="text-foreground whitespace-nowrap">{INSTALL_CMD}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copy}
                aria-label="Copy install command"
                className="flex items-center gap-1.5 rounded border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground hover:bg-muted transition-colors shrink-0"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1"
                    >
                      <Check className="h-3.5 w-3.5 text-status-success" />
                      <span className="text-status-success text-[11px]">Copied</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-1"
                    >
                      <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-[11px]">Copy</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </motion.div>
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground px-1 font-mono">
            <span>One command boots Traefik, Go Master, and Web Console</span>
            <span>RAM: 1 GB minimum</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
