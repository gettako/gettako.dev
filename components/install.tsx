import { SectionHead, Cmd, Bubbles } from "@/components/ui";
import { TerminalWindow, Cpu } from "@phosphor-icons/react/dist/ssr";

const REQ = ["Ubuntu 22.04+", "Debian 12+", "Rocky 9+", "Alpine", "1 GB RAM", "Docker 24+"];

const ROADMAP = [
  { phase: "Now", items: ["Control-plane hardening", "Agent enrollment", "Docs site"] },
  { phase: "Next", items: ["Git auto-deploy", "Team audit log", "Build offloading"] },
  { phase: "Later", items: ["v1.0 stable", "Community templates"] },
];

export function Install() {
  return (
    <section id="install" className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="06"
          kicker="Install"
          title={
            <>
              Two commands.
              <br />
              <span className="text-[var(--faint)]">Sixty seconds.</span>
            </>
          }
        />

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-[#5560d6] p-6 sm:p-10 lg:p-12">
          <Bubbles count={8} className="[&_span]:border-white/40" />
          <div className="relative z-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/[0.08] p-6 backdrop-blur-sm">
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <TerminalWindow size={16} /> Control plane
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                Your primary server. Dashboard, Go API, gRPC coordinator, Traefik, encrypted SQLite.
              </p>
              <div className="mt-5">
                <Cmd cmd="curl -fsSL https://gettako.dev/install.sh | bash" dark />
              </div>
            </div>
            <div className="rounded-2xl bg-white/[0.08] p-6 backdrop-blur-sm">
              <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-white">
                <Cpu size={16} /> Worker agent
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-white/75">
                Any extra VPS. Dials out to your control plane — zero inbound ports.
              </p>
              <div className="mt-5">
                <Cmd cmd="curl -fsSL https://gettako.dev/agent.sh | bash" dark />
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-6 flex flex-wrap gap-2">
            {REQ.map((r) => (
              <span key={r} className="rounded-full border border-white/25 px-3 py-1 font-mono text-[11px] text-white/85">
                {r}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ROADMAP.map((p) => (
            <div key={p.phase} className="rounded-2xl border border-[var(--line)] bg-[#fcfcff] p-6">
              <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-[#5560d6]">{p.phase}</p>
              <ul className="mt-3 space-y-2">
                {p.items.map((i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-[var(--muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5560d6]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 font-mono text-[11px] text-[var(--faint)]">
          Public roadmap — directional, not a promise. Alpha software.
        </p>
      </div>
    </section>
  );
}
