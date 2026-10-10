"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  RotateCcw,
  Server,
  Cpu,
  Activity,
  Network,
  GitBranch,
  CheckCircle2,
  AlertTriangle,
  Terminal,
} from "lucide-react";

interface Particle {
  id: number;
  progress: number;
  speed: number;
  direction: "toMaster" | "toWorker";
  workerIndex: number;
}

interface LogLine {
  id: number;
  text: string;
  type: "info" | "success" | "stream" | "warn";
}

const WORKER_LABELS = ["worker-fra-01", "worker-sgp-02", "worker-nyc-03"];
const WORKER_TAGS = ["Behind NAT / No Public IP", "Behind CGNAT / Dynamic IP", "Private Cloud VPC"];

const DEPLOY_LOG_SEQUENCE: { text: string; type: LogLine["type"]; delay: number }[] = [
  { text: "[gRPC] Control plane dispatching DeployJob to worker-fra-01 via port 50051...", type: "stream", delay: 0 },
  { text: "[agent] Received stream: DeployJob{service_id: api-prod, commit: a3f9c12}", type: "info", delay: 600 },
  { text: "[docker] Git clone git@github.com:acme/api.git @ a3f9c12 via Docker Engine SDK", type: "info", delay: 1200 },
  { text: "[buildkit] Step 1/6: FROM golang:1.24-alpine AS builder", type: "info", delay: 1800 },
  { text: "[buildkit] Step 6/6: CMD [\"/app/server\"] — image tagged tako-app-srv:dep_89f1", type: "success", delay: 2600 },
  { text: "[agent] Launching new container on bridge network 'tako_network'...", type: "info", delay: 3300 },
  { text: "[healthcheck] GET /healthz (every 2s) → HTTP 200 OK (38ms) ✓", type: "success", delay: 4100 },
  { text: "[traefik] Updating /etc/traefik/dynamic/tako.yml to container IP 172.18.0.4", type: "stream", delay: 4800 },
  { text: "[traefik] Dynamic hot-reload: 0 dropped requests, traffic cut over instantly ✓", type: "success", delay: 5400 },
  { text: "[agent] 15s in-flight request draining grace period...", type: "info", delay: 6100 },
  { text: "[docker] Old container SIGTERM sent & removed cleanly ✓", type: "info", delay: 6800 },
  { text: "✓ Deployment completed successfully — Node status: healthy", type: "success", delay: 7400 },
];

const PIPELINE_SUCCESS_LOGS = [
  "[00:00.12] GitHub webhook: push event to branch 'main' (commit a83f210)",
  "[00:00.34] Control Plane: Decrypting AES-256-GCM environment variables in memory",
  "[00:00.48] Control Plane: Dispatching DeployJob via persistent gRPC stream (:50051)...",
  "[00:01.02] Worker Agent: Received DeployJob{service: 'web-api', image: 'tako-app-web:dep_42'}",
  "[00:01.85] Docker BuildKit: Compiling image layers via local Dockerfile...",
  "[00:02.90] Docker Engine: Container starting on isolated bridge network 'tako_network'",
  "[00:03.45] Health Gate: Polling GET http://172.18.0.4:8080/healthz...",
  "[00:03.90] Health Gate: HTTP 200 OK received in 18ms ✓ Container marked READY",
  "[00:04.20] Traefik v3: Writing /etc/traefik/dynamic/tako.yml (hot-reloaded in memory)",
  "[00:04.50] Traefik v3: 0 dropped requests · 15s grace period to drain in-flight connections",
  "[00:05.80] Docker Engine: Previous container stopped (SIGTERM) and removed cleanly ✓",
  "[00:06.10] Control Plane: Deployment SUCCESS · Active traffic 100% serving on new container",
];

const PIPELINE_FAILURE_LOGS = [
  "[00:00.12] GitHub webhook: push event to branch 'main' (commit 91c4b82)",
  "[00:00.34] Control Plane: Decrypting AES-256-GCM environment variables in memory",
  "[00:00.48] Control Plane: Dispatching DeployJob via persistent gRPC stream (:50051)...",
  "[00:01.02] Worker Agent: Received DeployJob{service: 'web-api', image: 'tako-app-web:dep_43'}",
  "[00:01.90] Docker BuildKit: Build completed — starting container on isolated bridge",
  "[00:03.10] Health Gate: Polling GET http://172.18.0.5:8080/healthz (attempt 1/30)...",
  "[00:05.10] Health Gate: Connection refused (container crashed on startup)",
  "[00:07.10] Health Gate: GET /healthz timed out after 3 retries (HTTP 500) ✗",
  "[00:07.50] Safe Abort: Traefik dynamic routing file LEFT UNTOUCHED",
  "[00:07.80] Traefik v3: 100% of live traffic remains on old healthy container (ZERO DOWNTIME) ✓",
  "[00:08.20] Worker Agent: Broken container pruned immediately to free memory",
  "[00:08.50] Control Plane: Deployment FAILED (Healthcheck failure) · Visitors experienced zero outage",
];

const IDLE_LOG: LogLine = {
  id: 0,
  text: "[gRPC:50051] Persistent StreamNodeSession open — heartbeat telemetry every 15s",
  type: "stream",
};

function getWorkerPos(idx: number, total: number, svgH: number) {
  const padding = 50;
  const step = (svgH - padding * 2) / (total - 1);
  return { x: 380, y: padding + idx * step };
}

function buildCurvedPath(wx: number, wy: number, mx: number, my: number): string {
  const cx1 = wx - (wx - mx) * 0.45;
  const cy1 = wy;
  const cx2 = mx + (wx - mx) * 0.45;
  const cy2 = my;
  return `M ${wx} ${wy} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${mx} ${my}`;
}

function pointOnCubicBezier(
  t: number,
  p0: [number, number],
  p1: [number, number],
  p2: [number, number],
  p3: [number, number]
): [number, number] {
  const u = 1 - t;
  const x = u * u * u * p0[0] + 3 * u * u * t * p1[0] + 3 * u * t * t * p2[0] + t * t * t * p3[0];
  const y = u * u * u * p0[1] + 3 * u * u * t * p1[1] + 3 * u * t * t * p2[1] + t * t * t * p3[1];
  return [x, y];
}

export function ArchitectureVisualizer() {
  const [activeTab, setActiveTab] = useState<"topology" | "pipeline">("topology");

  // Topology State
  const [particles, setParticles] = useState<Particle[]>([]);
  const [topologyLogs, setTopologyLogs] = useState<LogLine[]>([IDLE_LOG]);
  const [deployingTopology, setDeployingTopology] = useState(false);
  const [workerStatus, setWorkerStatus] = useState<("online" | "building" | "healthy")[]>([
    "online",
    "online",
    "online",
  ]);

  // Pipeline State
  const [pipelineMode, setPipelineMode] = useState<"success" | "failure">("success");
  const [pipelineRunning, setPipelineRunning] = useState(false);
  const [pipelineStep, setPipelineStep] = useState(0);
  const [pipelineLogs, setPipelineLogs] = useState<string[]>([]);
  const pipelineTimerRef = useRef<NodeJS.Timeout[]>([]);

  const logContainerRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);
  const animFrameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const svgHeight = 220;
  const masterY = svgHeight / 2;

  // Ambient particles for topology view
  useEffect(() => {
    let spawnTimer = 0;

    const animate = (time: number) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      spawnTimer += delta;

      if (spawnTimer > 450) {
        spawnTimer = 0;
        const workerIndex = Math.floor(Math.random() * 3);
        setParticles((prev) => [
          ...prev.slice(-20),
          {
            id: particleIdRef.current++,
            progress: 0,
            speed: 0.002,
            direction: "toMaster",
            workerIndex,
          },
        ]);
      }

      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, progress: p.progress + p.speed }))
          .filter((p) => p.progress < 1)
      );

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // Internal log auto-scroll only
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [topologyLogs, pipelineLogs]);

  const runTopologyDeploy = useCallback(() => {
    if (deployingTopology) return;
    setDeployingTopology(true);
    setTopologyLogs([IDLE_LOG]);
    setWorkerStatus(["building", "online", "online"]);

    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        setParticles((prev) => [
          ...prev,
          {
            id: particleIdRef.current++,
            progress: 0,
            speed: 0.0045,
            direction: "toWorker",
            workerIndex: 0,
          },
        ]);
      }, i * 160);
    }

    DEPLOY_LOG_SEQUENCE.forEach(({ text, type, delay }) => {
      setTimeout(() => {
        setTopologyLogs((prev) => [...prev, { id: Date.now() + delay, text, type }]);
      }, delay);
    });

    setTimeout(() => {
      setWorkerStatus(["healthy", "online", "online"]);
      setDeployingTopology(false);
    }, 7800);
  }, [deployingTopology]);

  const resetTopology = () => {
    setDeployingTopology(false);
    setTopologyLogs([IDLE_LOG]);
    setWorkerStatus(["online", "online", "online"]);
  };

  // Pipeline simulation handlers
  const clearPipelineTimers = () => {
    pipelineTimerRef.current.forEach((t) => clearTimeout(t));
    pipelineTimerRef.current = [];
  };

  const startPipelineSimulation = (mode: "success" | "failure") => {
    clearPipelineTimers();
    setPipelineMode(mode);
    setPipelineRunning(true);
    setPipelineStep(0);
    setPipelineLogs([]);

    const logs = mode === "success" ? PIPELINE_SUCCESS_LOGS : PIPELINE_FAILURE_LOGS;
    const totalSteps = 5;
    const stepDuration = 1200;

    for (let i = 0; i < totalSteps; i++) {
      const t = setTimeout(() => {
        setPipelineStep(i);
      }, i * stepDuration);
      pipelineTimerRef.current.push(t);
    }

    logs.forEach((line, idx) => {
      const delay = (idx / logs.length) * (totalSteps * stepDuration);
      const t = setTimeout(() => {
        setPipelineLogs((prev) => [...prev, line]);
      }, delay);
      pipelineTimerRef.current.push(t);
    });

    const finishTimer = setTimeout(() => {
      setPipelineRunning(false);
      setPipelineStep(totalSteps);
    }, totalSteps * stepDuration + 500);
    pipelineTimerRef.current.push(finishTimer);
  };

  const resetPipeline = () => {
    clearPipelineTimers();
    setPipelineRunning(false);
    setPipelineStep(0);
    setPipelineLogs([]);
  };

  useEffect(() => {
    return () => clearPipelineTimers();
  }, []);

  const PIPELINE_STEPS = [
    {
      num: "01",
      title: "Git Push Webhook",
      component: "GitHub / Developer",
      desc: "Push event arrives. Master decrypts secrets in memory via AES-256-GCM.",
    },
    {
      num: "02",
      title: "gRPC Dispatch",
      component: "Control Plane (:50051)",
      desc: "DeployJob sent over persistent stream. Zero inbound ports on worker.",
    },
    {
      num: "03",
      title: "Worker BuildKit",
      component: "Docker Engine SDK",
      desc: "Worker builds Dockerfile locally and runs container on private bridge.",
    },
    {
      num: "04",
      title: "Health Gate",
      component: "Tako Agent",
      desc: "Polls GET /healthz every 2s. Traffic stays untouched until ready.",
    },
    {
      num: "05",
      title: pipelineMode === "success" ? "Zero-Downtime Swap" : "Safe Abort",
      component: "Traefik v3 Dynamic Proxy",
      desc:
        pipelineMode === "success"
          ? "Traefik hot-reloads YAML, drains requests for 15s, prunes old container."
          : "Traefik routing left untouched. 100% traffic stays on old container.",
    },
  ];

  return (
    <section id="architecture" className="py-24 border-b border-border bg-background transition-colors duration-150">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-8">
          <span className="text-[11px] font-mono uppercase tracking-wider text-primary">
            Interactive Architecture Showcase
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            How Tako Works Under the Hood
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground">
            Explore cluster networking via outbound gRPC reverse dials or trace the zero-downtime deployment pipeline.
          </p>
        </div>

        {/* View Switcher Tabs (Unified & Low Friction) */}
        <div className="mb-4 flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-1.5 p-0.5 rounded-lg border border-border bg-muted/40 font-mono text-xs">
            <button
              onClick={() => setActiveTab("topology")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === "topology"
                  ? "bg-card text-foreground shadow-xs border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Network className="h-3.5 w-3.5 text-primary" />
              <span>Cluster Topology</span>
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-colors ${
                activeTab === "pipeline"
                  ? "bg-card text-foreground shadow-xs border border-border"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GitBranch className="h-3.5 w-3.5 text-primary" />
              <span>Deployment Pipeline</span>
            </button>
          </div>

          {/* Right Action Button according to active tab */}
          <div className="flex items-center gap-2">
            {activeTab === "topology" ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetTopology}
                  disabled={deployingTopology}
                  className="hidden sm:flex items-center gap-1 rounded border border-border px-2.5 py-1 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors disabled:opacity-40"
                >
                  <RotateCcw className="h-3 w-3" />
                  Reset
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={runTopologyDeploy}
                  disabled={deployingTopology}
                  className="flex items-center gap-1.5 rounded bg-primary px-3 py-1 text-xs font-mono font-medium text-primary-foreground hover:opacity-95 transition-opacity disabled:opacity-50"
                >
                  {deployingTopology ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-primary-foreground animate-ping" />
                      Deploying...
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-current" />
                      Simulate Deploy
                    </>
                  )}
                </motion.button>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    if (!pipelineRunning) {
                      setPipelineMode("success");
                      startPipelineSimulation("success");
                    }
                  }}
                  disabled={pipelineRunning}
                  className={`hidden sm:inline-block rounded px-2.5 py-1 text-xs font-mono transition-colors ${
                    pipelineMode === "success"
                      ? "bg-status-success/15 text-status-success border border-status-success/30 font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  } disabled:opacity-50`}
                >
                  ✓ 200 OK Pass
                </button>
                <button
                  onClick={() => {
                    if (!pipelineRunning) {
                      setPipelineMode("failure");
                      startPipelineSimulation("failure");
                    }
                  }}
                  disabled={pipelineRunning}
                  className={`hidden sm:inline-block rounded px-2.5 py-1 text-xs font-mono transition-colors ${
                    pipelineMode === "failure"
                      ? "bg-status-danger/15 text-status-danger border border-status-danger/30 font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  } disabled:opacity-50`}
                >
                  ⚠ Safe Abort
                </button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startPipelineSimulation(pipelineMode)}
                  disabled={pipelineRunning}
                  className="flex items-center gap-1.5 rounded bg-primary px-3 py-1 text-xs font-mono font-medium text-primary-foreground hover:opacity-95 transition-opacity disabled:opacity-50"
                >
                  {pipelineRunning ? (
                    <>
                      <span className="h-2 w-2 rounded-full bg-primary-foreground animate-ping" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 fill-current" />
                      Run Pipeline
                    </>
                  )}
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Unified Canvas Card */}
        <div className="rounded-lg border border-border bg-card overflow-hidden shadow-xs dark:shadow-none">
          {activeTab === "topology" ? (
            /* Tab 1: Topology Visualizer */
            <div className="flex flex-col md:flex-row items-stretch p-6 gap-6 bg-muted/10">
              {/* Control Plane (Primary Server) */}
              <div className="flex flex-col justify-center w-full md:w-56 shrink-0">
                <div className="rounded-md border border-border bg-card p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground">
                      <Server className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-foreground">Control Plane</div>
                      <div className="text-[10px] font-mono text-muted-foreground">Primary VPS</div>
                    </div>
                  </div>
                  <div className="space-y-1.5 pt-2 border-t border-border font-mono text-[11px] text-muted-foreground">
                    <div className="flex justify-between">
                      <span>gRPC Coordinator:</span>
                      <span className="text-primary font-medium">:50051</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Persistence:</span>
                      <span className="text-foreground">SQLite WAL</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Idle Overhead:</span>
                      <span className="text-status-success font-medium">&lt; 150 MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop SVG Streams */}
              <div className="relative flex-1 hidden md:block" style={{ minHeight: svgHeight }}>
                <svg
                  viewBox={`0 0 420 ${svgHeight}`}
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {WORKER_LABELS.map((_, wi) => {
                    const wp = getWorkerPos(wi, WORKER_LABELS.length, svgHeight);
                    const mp = { x: 20, y: masterY };
                    const d = buildCurvedPath(wp.x, wp.y, mp.x, mp.y);
                    return (
                      <path
                        key={wi}
                        d={d}
                        fill="none"
                        stroke="var(--border)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                      />
                    );
                  })}

                  {particles.map((p) => {
                    const wp = getWorkerPos(p.workerIndex, WORKER_LABELS.length, svgHeight);
                    const mp = { x: 20, y: masterY };
                    const p0: [number, number] = p.direction === "toMaster" ? [wp.x, wp.y] : [mp.x, mp.y];
                    const p3: [number, number] = p.direction === "toMaster" ? [mp.x, mp.y] : [wp.x, wp.y];
                    const cx1 = p0[0] + (p3[0] - p0[0]) * 0.45;
                    const cy1 = p0[1];
                    const cx2 = p0[0] + (p3[0] - p0[0]) * 0.55;
                    const cy2 = p3[1];
                    const pos = pointOnCubicBezier(p.progress, p0, [cx1, cy1], [cx2, cy2], p3);

                    return (
                      <g key={p.id}>
                        <circle
                          cx={pos[0]}
                          cy={pos[1]}
                          r={p.direction === "toWorker" ? 4 : 2.5}
                          fill={p.direction === "toWorker" ? "var(--primary)" : "var(--status-success)"}
                          opacity={0.9}
                        />
                      </g>
                    );
                  })}
                </svg>

                <div className="absolute inset-x-0 bottom-1 flex justify-center">
                  <span className="text-[10px] font-mono text-muted-foreground bg-card/80 px-2 py-0.5 rounded border border-border">
                    Outbound TCP Dial · Multiplexed gRPC Channel
                  </span>
                </div>
              </div>

              {/* Worker Nodes */}
              <div className="flex flex-col justify-between w-full md:w-64 gap-2.5 shrink-0">
                {WORKER_LABELS.map((label, idx) => (
                  <div
                    key={label}
                    className="rounded-md border p-3 transition-colors border-border bg-card"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5 text-muted-foreground" />
                        <span className="font-mono text-xs font-semibold text-foreground">{label}</span>
                      </div>
                      <StatusPill status={workerStatus[idx]} />
                    </div>
                    <div className="text-[10px] font-mono text-muted-foreground">
                      {WORKER_TAGS[idx]}
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground pt-1.5 border-t border-border mt-1.5">
                      <span>Inbound Port 22:</span>
                      <span className="text-status-success font-semibold">Closed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Tab 2: Deployment Pipeline Sequence */
            <div className="p-5 sm:p-6 bg-muted/10">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {PIPELINE_STEPS.map((step, idx) => {
                  const isCurrent = pipelineStep === idx && pipelineRunning;
                  const isPassed = pipelineStep > idx;
                  const isFailed = idx === 4 && pipelineMode === "failure" && isPassed;

                  return (
                    <div
                      key={step.num}
                      className={`rounded-md border p-3 flex flex-col justify-between transition-colors ${
                        isCurrent
                          ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                          : isPassed
                          ? isFailed
                            ? "border-status-danger/40 bg-status-danger/5"
                            : "border-status-success/40 bg-status-success/5"
                          : "border-border bg-card"
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-mono text-[10px] font-bold text-primary">
                            STEP {step.num}
                          </span>
                          {isCurrent && (
                            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                          )}
                          {isPassed && !isFailed && (
                            <CheckCircle2 className="h-3.5 w-3.5 text-status-success" />
                          )}
                          {isFailed && (
                            <AlertTriangle className="h-3.5 w-3.5 text-status-danger" />
                          )}
                        </div>
                        <div className="text-xs font-semibold text-foreground leading-tight">
                          {step.title}
                        </div>
                        <div className="text-[10px] font-mono text-muted-foreground mt-0.5">
                          {step.component}
                        </div>
                        <p className="mt-2 text-[11px] text-muted-foreground leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-border/60">
                        <div className="h-1 w-full rounded-full bg-border/40 overflow-hidden">
                          <div
                            className={`h-full transition-all duration-300 ${
                              isFailed
                                ? "bg-status-danger"
                                : isPassed
                                ? "bg-status-success"
                                : isCurrent
                                ? "bg-primary animate-pulse"
                                : "bg-transparent"
                            }`}
                            style={{ width: isPassed || isCurrent ? "100%" : "0%" }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Unified Real-time Output Terminal */}
          <div className="border-t border-border bg-card">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-mono text-foreground font-medium">
                  {activeTab === "topology"
                    ? "Multiplexed gRPC Stream Log (StreamNodeSession)"
                    : `Pipeline Execution Trace (${pipelineMode === "success" ? "Zero-Downtime Swap" : "Safe Abort"})`}
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted-foreground">
                {activeTab === "topology" ? "Stream status: active" : `${pipelineLogs.length} events logged`}
              </span>
            </div>

            <div
              ref={logContainerRef}
              className="h-40 overflow-y-auto px-4 py-3 font-mono text-[11px] space-y-1 bg-muted/20 dark:bg-background/50"
            >
              {activeTab === "topology" ? (
                topologyLogs.map((line) => (
                  <div
                    key={line.id}
                    className={`leading-relaxed ${
                      line.type === "success"
                        ? "text-status-success"
                        : line.type === "stream"
                        ? "text-primary"
                        : line.type === "warn"
                        ? "text-status-warning"
                        : "text-muted-foreground"
                    }`}
                  >
                    {line.text}
                  </div>
                ))
              ) : pipelineLogs.length === 0 ? (
                <div className="text-muted-foreground/60 italic">
                  Click &ldquo;Run Pipeline&rdquo; above to simulate the deployment lifecycle step by step.
                </div>
              ) : (
                pipelineLogs.map((log, idx) => {
                  const isSuccess = log.includes("✓") || log.includes("SUCCESS");
                  const isFail = log.includes("✗") || log.includes("FAILED") || log.includes("crashed");
                  const isNotice = log.includes("DeployJob") || log.includes("Traefik v3") || log.includes("Health Gate");
                  return (
                    <div
                      key={idx}
                      className={`leading-relaxed ${
                        isSuccess
                          ? "text-status-success font-medium"
                          : isFail
                          ? "text-status-danger font-medium"
                          : isNotice
                          ? "text-primary font-medium"
                          : "text-muted-foreground"
                      }`}
                    >
                      {log}
                    </div>
                  );
                })
              )}
              {(deployingTopology || pipelineRunning) && (
                <span className="terminal-cursor text-muted-foreground">█</span>
              )}
            </div>
          </div>
        </div>

        {/* 3 Engineering Principles (Spacious, Clean, No Fluff) */}
        <div className="mt-6 grid sm:grid-cols-3 gap-3 text-xs">
          <div className="rounded-md border border-border bg-card p-3.5">
            <div className="font-mono font-semibold text-foreground flex items-center gap-1.5 mb-1 text-[11px]">
              <span className="text-primary font-bold">01.</span> Outbound TCP Dial
            </div>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Workers initiate outbound TLS dials to Master <code className="text-foreground font-mono">:50051</code>. Port 22 is completely closed.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-3.5">
            <div className="font-mono font-semibold text-foreground flex items-center gap-1.5 mb-1 text-[11px]">
              <span className="text-primary font-bold">02.</span> Persistent gRPC Stream
            </div>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Once connected, the bidirectional channel stays open 24/7. Master pushes deploy commands instantly without opening new sockets.
            </p>
          </div>
          <div className="rounded-md border border-border bg-card p-3.5">
            <div className="font-mono font-semibold text-foreground flex items-center gap-1.5 mb-1 text-[11px]">
              <span className="text-primary font-bold">03.</span> Health Gate Cutover
            </div>
            <p className="text-muted-foreground text-[11px] leading-relaxed">
              Traefik dynamic routing updates only after <code className="text-foreground font-mono">/healthz</code> returns 200 OK. Crashed builds never take down production.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: "online" | "building" | "healthy" }) {
  if (status === "building") {
    return (
      <span className="rounded px-1.5 py-0.2 text-[9px] font-mono bg-status-warning/15 text-status-warning">
        building...
      </span>
    );
  }
  if (status === "healthy") {
    return (
      <span className="rounded px-1.5 py-0.2 text-[9px] font-mono bg-status-success/15 text-status-success">
        healthy
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 text-[9px] font-mono text-status-success">
      <span className="h-1.5 w-1.5 rounded-full bg-status-success animate-pulse" />
      online
    </span>
  );
}
