import { SectionHead, Cmd } from "@/components/ui";
import { TerminalWindow, Cpu } from "@phosphor-icons/react/dist/ssr";

const REQ = ["Ubuntu 22.04+", "Debian 12+", "Rocky 9+", "Alpine", "1 GB RAM", "Docker 24+"];

const ROADMAP: { phase: string; items: string[] }[] = [
  { phase: "Now", items: ["Control-plane hardening", "Agent enrollment", "Docs site"] },
  { phase: "Next", items: ["Git auto-deploy", "Team audit log", "Build offloading"] },
  { phase: "Later", items: ["v1.0 stable", "Community templates"] },
];

export function Install() {
  return (
    <section id="install" className="relative border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="06"
          kicker="Install"
          title={
            <>
              Two commands.
              <br />
              <span className="text-[#5b637f]">Sixty seconds.</span>
            </>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#7c83ff]">
              <TerminalWindow size={16} /> Control plane
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#8a93b2]">
              Run on your primary server. Sets up the dashboard, Go API, gRPC coordinator,
              Traefik, and encrypted SQLite.
            </p>
            <div className="mt-5">
              <Cmd cmd="curl -fsSL https://gettako.dev/install.sh | bash" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[#34d399]">
              <Cpu size={16} /> Worker agent
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#8a93b2]">
              Run on any extra VPS. Dials out to your control plane — zero inbound ports,
              invisible to scanners.
            </p>
            <div className="mt-5">
              <Cmd cmd="curl -fsSL https://gettako.dev/agent.sh | bash" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {REQ.map((r) => (
            <span key={r} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[#8a93b2]">
              {r}
            </span>
          ))}
        </div>

        {/* compact roadmap */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-6 sm:p-8">
          <p className="kicker">Public roadmap</p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {ROADMAP.map((p) => (
              <div key={p.phase}>
                <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-[#e8933f]">
                  {p.phase}
                </p>
                <ul className="mt-3 space-y-2">
                  {p.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#8a93b2]">
                      <span className="h-1 w-1 rounded-full bg-[#7c83ff]" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[11px] text-[#5b637f]">
            Alpha software — the roadmap is directional, not a promise.
          </p>
        </div>
      </div>
    </section>
  );
}
