"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Terminal, Check, Play, RotateCcw } from "lucide-react";

interface Line {
  text: string;
  type: "cmd" | "info" | "success" | "stream" | "comment" | "blank";
  delay: number;
}

const TERMINAL_LINES: Line[] = [
  { text: "# 1. Install Tako Control Plane on primary VPS", type: "comment", delay: 0 },
  { text: "$ curl -fsSL https://gettako.dev/install.sh | bash", type: "cmd", delay: 300 },
  { text: "→ Validating Linux kernel, Docker 27.x, Compose v2...", type: "info", delay: 900 },
  { text: "→ Master encryption key TAKO_SECRET_KEY written (AES-256-GCM)", type: "info", delay: 1500 },
  { text: "→ Traefik v3, Go Server (:8080, :50051), and Console (:3000) started", type: "info", delay: 2100 },
  { text: "✓ Control plane active: https://tako.example.com", type: "success", delay: 2700 },
  { text: "", type: "blank", delay: 3100 },
  { text: "# 2. Connect remote worker node (run on target worker VPS):", type: "comment", delay: 3400 },
  {
    text: "$ curl -fsSL https://gettako.dev/install-agent.sh | \\",
    type: "cmd",
    delay: 3800,
  },
  {
    text: '    TAKO_SERVER_URL="https://tako.example.com:50051" \\',
    type: "cmd",
    delay: 3850,
  },
  {
    text: '    TAKO_ENROLLMENT_TOKEN="tok_sec_7a9f82d1c5e4" \\',
    type: "cmd",
    delay: 3900,
  },
  { text: "    bash", type: "cmd", delay: 3950 },
  { text: "", type: "blank", delay: 4200 },
  { text: "→ Starting tako-agent and tako-traefik containers...", type: "info", delay: 4500 },
  { text: "[gRPC] Outbound dial: https://tako.example.com:50051", type: "stream", delay: 5100 },
  { text: "[gRPC] RPC Enroll(token, hostname=worker-fra-01, arch=amd64)", type: "stream", delay: 5600 },
  { text: "[gRPC] Token validated (single-use burned) → node_id=node_08f912", type: "success", delay: 6200 },
  { text: "[gRPC] Credentials saved to persistent volume: /etc/tako/agent.json", type: "info", delay: 6700 },
  { text: "[gRPC] Opening persistent bidirectional StreamNodeSession...", type: "stream", delay: 7200 },
  { text: "✓ Node worker-fra-01 enrolled — Status in Console: ONLINE", type: "success", delay: 7800 },
  { text: "[telemetry] 15s heartbeat: cpu=8.4% ram=240MB/1024MB containers=2 healthy=2", type: "stream", delay: 8400 },
];

export function CliShowcase() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const termRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const startPlayback = () => {
    if (isRunning) return;
    setIsRunning(true);
    setVisibleCount(0);

    TERMINAL_LINES.forEach((_, i) => {
      const t = setTimeout(() => {
        setVisibleCount(i + 1);
        termRef.current?.scrollTo({ top: termRef.current.scrollHeight, behavior: "smooth" });
      }, TERMINAL_LINES[i].delay);
      timersRef.current.push(t);
    });

    const totalDuration = TERMINAL_LINES[TERMINAL_LINES.length - 1].delay + 500;
    const endTimer = setTimeout(() => {
      setIsRunning(false);
    }, totalDuration);
    timersRef.current.push(endTimer);
  };

  const reset = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setIsRunning(false);
    setVisibleCount(0);
  };

  useEffect(() => {
    startPlayback();
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  return (
    <section id="cli" className="py-24 sm:py-28 border-b border-border bg-background transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
            Worker Enrollment Protocol
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Connect a Server in 60 Seconds
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            Generate a single-use token in the web dashboard, paste the one-liner on the remote worker VPS, and watch it register automatically over gRPC.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xs dark:shadow-none">
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono ml-2">
                <Terminal className="h-3 w-3" />
                <span>worker-enrollment-sequence.sh</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={reset}
                className="flex items-center gap-1 text-[11px] font-mono text-muted-foreground hover:text-foreground px-2 py-0.5 rounded border border-border hover:bg-muted transition-colors"
              >
                <RotateCcw className="h-3 w-3" />
                Reset
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                onClick={startPlayback}
                disabled={isRunning}
                className="flex items-center gap-1 text-[11px] font-mono text-primary hover:opacity-90 px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20 transition-colors disabled:opacity-40"
              >
                <Play className="h-3 w-3 fill-current" />
                {isRunning ? "Replaying..." : "Replay Sequence"}
              </motion.button>
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={termRef}
            className="h-80 overflow-y-auto p-4 font-mono text-xs leading-relaxed space-y-1 bg-muted/20 dark:bg-background/50"
          >
            {TERMINAL_LINES.slice(0, visibleCount).map((line, idx) => {
              if (line.type === "blank") {
                return <div key={idx} className="h-2" />;
              }
              if (line.type === "comment") {
                return (
                  <div key={idx} className="text-muted-foreground italic">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "cmd") {
                return (
                  <div key={idx} className="text-foreground font-medium">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "success") {
                return (
                  <div key={idx} className="text-status-success font-medium">
                    {line.text}
                  </div>
                );
              }
              if (line.type === "stream") {
                return (
                  <div key={idx} className="text-primary">
                    {line.text}
                  </div>
                );
              }
              return (
                <div key={idx} className="text-muted-foreground">
                  {line.text}
                </div>
              );
            })}
            {isRunning && <span className="terminal-cursor text-muted-foreground">█</span>}
          </div>
        </div>

        {/* 3 Steps Breakdown */}
        <div className="mt-8 grid sm:grid-cols-3 gap-3">
          {[
            {
              step: "01",
              title: "Generate Token",
              detail: "Control plane creates a cryptographically random, single-use token (tok_<hex32>) with 15m expiration.",
            },
            {
              step: "02",
              title: "Outbound Handshake",
              detail: "Worker agent launches and initiates outbound gRPC Enroll(token) to port 50051. Token is invalidated immediately.",
            },
            {
              step: "03",
              title: "Persistent Stream",
              detail: "Permanent node secret saved to /etc/tako/agent.json. StreamNodeSession opens for heartbeats and deploy commands.",
            },
          ].map(({ step, title, detail }, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded-md border border-border bg-card p-4 transition-colors hover:border-primary/40 cursor-default"
            >
              <div className="font-mono text-xs font-bold text-primary mb-1">
                STEP {step}
              </div>
              <div className="text-xs font-semibold text-foreground mb-1">
                {title}
              </div>
              <div className="text-[11px] text-muted-foreground leading-relaxed">
                {detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
