import { PlugsConnected, LockKey, Package } from "@phosphor-icons/react/dist/ssr";

const cards = [
  {
    icon: PlugsConnected,
    title: "Outbound-only worker nodes",
    description:
      "Agents dial out to the control plane over TLS gRPC. Worker servers expose zero inbound management ports, staying invisible to public port scanners — no SSH forwarding, no open Docker sockets.",
    accent: "text-emerald-600 dark:text-emerald-400",
    badge: "border-emerald-500/30 bg-emerald-500/10",
  },
  {
    icon: LockKey,
    title: "Secrets encrypted at rest",
    description:
      "Environment variables and build secrets live in embedded SQLite encrypted with AES-256-GCM. Build args and runtime secrets are strictly separated, and the key is generated one-time at install.",
    accent: "text-[#5560d6] dark:text-[#7980e0]",
    badge: "border-[#5560d6]/30 bg-[#5560d6]/10",
  },
  {
    icon: Package,
    title: "Minimal attack surface",
    description:
      "Four containers total — Go, Next.js, Traefik. No mandatory Postgres or Redis daemons to patch, harden, and feed. Fewer moving parts means fewer CVEs to chase.",
    accent: "text-amber-600 dark:text-amber-400",
    badge: "border-amber-500/30 bg-amber-500/10",
  },
];

export function Security() {
  return (
    <section id="security" className="w-full border-t border-[var(--border)] bg-white/[0.025] py-16 transition-colors sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#5560d6] dark:text-[#7980e0]">
            Security Posture
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
            Your infrastructure stays yours.
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)] leading-relaxed sm:text-base">
            Self-hosting is only worth it if the platform itself does not become the weakest link.
            Tako is designed so there is as little as possible to attack — and nothing phoning home.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="rounded-lg border border-[var(--border)] bg-white/[0.05] p-5 transition-colors"
              >
                <div className={`inline-flex h-9 w-9 items-center justify-center rounded border ${card.badge}`}>
                  <Icon size={20} weight="regular" className={card.accent} />
                </div>
                <h3 className="mt-3.5 text-sm font-semibold text-[var(--foreground)]">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">{card.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[11px] text-[var(--muted)]">
          <span className="rounded border border-[var(--border)] bg-white/[0.05] px-2.5 py-1">Runs 100% on your servers</span>
          <span className="rounded border border-[var(--border)] bg-white/[0.05] px-2.5 py-1">No cloud account required</span>
          <span className="rounded border border-[var(--border)] bg-white/[0.05] px-2.5 py-1">Apache 2.0 — auditable source</span>
        </div>
      </div>
    </section>
  );
}
