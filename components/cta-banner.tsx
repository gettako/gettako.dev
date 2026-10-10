"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export function CtaBanner() {
  return (
    <section className="py-24 sm:py-28 border-b border-border bg-background transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-card p-8 sm:p-12 text-center transition-colors"
        >
          <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
            Ready to deploy?
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Start Managing Servers Without Port 22
          </h2>
          <p className="mt-3 max-w-xl mx-auto text-sm sm:text-base text-muted-foreground">
            Install Tako on a clean VPS in less than 5 minutes. Connect worker nodes from Hetzner, AWS, DigitalOcean, or private homelabs with zero firewall reconfigurations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.a
              href="#install"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get Started Now
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
              github.com/gettako/tako
            </motion.a>
          </div>

          <div className="mt-6 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-muted-foreground">
            <span>✓ 100% Free &amp; Open Source (Apache-2.0)</span>
            <span>✓ Minimal Footprint (&lt; 150MB Idle RAM)</span>
            <span>✓ Zero Port 22 Dependencies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
