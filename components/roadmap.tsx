import { TestTube, Compass, Rocket } from "@phosphor-icons/react/dist/ssr";

interface RoadmapItem {
  title: string;
  description: string;
}

interface Phase {
  icon: typeof TestTube;
  label: string;
  status: string;
  statusColor: string;
  items: RoadmapItem[];
}

const phases: Phase[] = [
  {
    icon: TestTube,
    label: "Now — Alpha",
    status: "In progress",
    statusColor: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    items: [
      {
        title: "Control plane hardening",
        description: "Dashboard core flows, installer polish, and upgrade-safe migrations.",
      },
      {
        title: "Worker agent enrollment",
        description: "Token-based node enrollment with outbound TLS gRPC heartbeat.",
      },
      {
        title: "Documentation site",
        description: "Guides and references at docs.gettako.dev, written alongside the code.",
      },
    ],
  },
  {
    icon: Compass,
    label: "Next — Beta",
    status: "Planned",
    statusColor: "border-[#5560d6]/30 bg-[#5560d6]/10 text-[#5560d6] dark:text-[#7980e0]",
    items: [
      {
        title: "Git webhook auto-deploy",
        description: "Push-to-deploy pipelines with branch previews and deploy logs.",
      },
      {
        title: "Team audit log",
        description: "Who deployed what, when — visible to every team member.",
      },
      {
        title: "Build offloading",
        description: "Run heavy Dockerfile builds on worker nodes to keep the primary light.",
      },
    ],
  },
  {
    icon: Rocket,
    label: "Later — v1.0",
    status: "Exploring",
    statusColor: "border-[var(--border)] bg-white/[0.05] text-[var(--muted)]",
    items: [
      {
        title: "Stable release",
        description: "Frozen APIs, migration guarantees, and long-term support channel.",
      },
      {
        title: "Community templates",
        description: "Curated one-command starters — only if they stay bloat-free.",
      },
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="w-full border-t border-[var(--border)] py-16 transition-colors sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            Public Roadmap
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Built in the open, one tentacle at a time.
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed sm:text-base">
            Tako is alpha software under heavy development. This roadmap is directional — priorities
            shift as we learn — but we would rather show you the plan than hide it.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <div
                key={phase.label}
                className="flex flex-col rounded-lg border border-[var(--border)] bg-white/[0.025] p-5 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-[var(--foreground)]">
                    <Icon size={16} className="text-[#5560d6] dark:text-[#7980e0]" />
                    {phase.label}
                  </span>
                  <span className={`rounded border px-2 py-0.5 font-mono text-[10px] font-medium ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>
                <ul className="mt-4 space-y-3.5">
                  {phase.items.map((item) => (
                    <li key={item.title} className="border-l-2 border-[var(--border)] pl-3">
                      <div className="text-sm font-semibold text-[var(--foreground)]">{item.title}</div>
                      <div className="mt-0.5 text-xs leading-relaxed text-[var(--muted)]">{item.description}</div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center font-mono text-[11px] text-[var(--muted)]">
          Have a use case we should prioritize?{" "}
          <a
            href="https://github.com/gettako/tako"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5560d6] underline decoration-dotted underline-offset-2 hover:text-[var(--foreground)] dark:text-[#7980e0]"
          >
            Open an issue on GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
