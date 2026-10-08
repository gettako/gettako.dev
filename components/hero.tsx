import Image from "next/image";
import { Cmd, Wavy, Bubbles } from "@/components/ui";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

const STATS: [string, string][] = [
  ["63 MiB", "idle RAM"],
  ["0", "inbound ports"],
  ["4", "containers total"],
  ["$0", "forever"],
];

const PILLS = ["Go 1.24+", "Next.js 16", "Docker 24+", "Traefik v3", "SQLite AES-256-GCM", "Apache 2.0"];

export function Hero() {
  return (
    <section id="top" className="dotgrid relative overflow-hidden pt-[68px]">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* copy */}
          <div className="lg:col-span-7">
            <p className="kicker">
              <span className="n">Tako</span>
              <span className="mx-3 opacity-40">/</span>
              Self-hosted PaaS
            </p>
            <h1 className="display-xl mt-6 text-[15vw] text-[var(--ink)] sm:text-7xl lg:text-[5.4rem]">
              Ship it
              <br />
              <span className="relative inline-block text-[#5560d6]">
                yourself.
                <Wavy className="absolute -bottom-2 left-0 h-3 w-full sm:-bottom-3 sm:h-4" />
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              Tako is a featherweight platform that carries your apps from{" "}
              <code className="rounded bg-[var(--wash)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--indigo-ink)]">
                git push
              </code>{" "}
              to your own servers. No bloat, no lock-in — just your code, delivered.
            </p>

            <div className="mt-6 flex max-w-xl flex-wrap gap-2">
              {PILLS.map((p) => (
                <span
                  key={p}
                  className={`rounded-full border px-3 py-1 font-mono text-[11px] font-semibold ${
                    p === "Apache 2.0"
                      ? "border-[#5560d6]/40 bg-[#5560d6]/10 text-[#2f358f]"
                      : "border-[var(--line)] bg-white text-[var(--muted)]"
                  }`}
                >
                  {p}
                </span>
              ))}
            </div>

            <div className="mt-7 max-w-xl space-y-3.5">
              <div>
                <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--faint)]">
                  Control plane <span className="normal-case tracking-normal">— your main server</span>
                </p>
                <Cmd cmd="curl -fsSL https://gettako.dev/install.sh | bash" />
              </div>
              <div>
                <p className="mb-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--faint)]">
                  Worker node <span className="normal-case tracking-normal">— any extra VPS</span>{" "}
                  <span className="text-[#5560d6]">(optional)</span>
                </p>
                <Cmd cmd="curl -fsSL https://gettako.dev/agent.sh | bash" />
              </div>
              <p className="font-mono text-[11px] leading-relaxed text-[var(--faint)]">
                <span className="font-semibold text-[#9a6b1a]">alpha:</span> under heavy
                development — things may break. You were warned, lovingly.
              </p>
            </div>

            <dl className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5">
                  <dd className="font-display text-[22px] font-extrabold text-[#5560d6]">{v}</dd>
                  <dt className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-[var(--muted)]">
                    {l}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* their octopus, large */}
          <div className="relative lg:col-span-5">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-[#5560d6]/15 bg-gradient-to-b from-[var(--wash)] to-white px-8 pb-4 pt-10">
              <Bubbles count={6} />
              <Image
                src="/tako-mark.png"
                alt="Tako, the friendly octopus"
                width={512}
                height={512}
                className="floaty relative z-10 mx-auto w-full max-w-[380px]"
                priority
              />
              {/* floating chips */}
              <div className="absolute left-5 top-8 z-20 flex items-center gap-1.5 rounded-full border border-[var(--line)] bg-white/90 py-1.5 pl-2 pr-3 shadow-sm backdrop-blur">
                <CheckCircle size={15} weight="fill" className="text-emerald-500" />
                <span className="font-mono text-[11px] font-semibold text-[var(--ink)]">
                  api → live in 40s
                </span>
              </div>
              <div className="absolute bottom-8 right-5 z-20 rounded-full border border-[var(--line)] bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur">
                <span className="font-mono text-[11px] font-semibold text-[#5560d6]">
                  63 MiB idle
                </span>
              </div>
            </div>
            <p className="mt-4 text-center font-mono text-[11px] text-[var(--faint)]">
              ★ actual tako, drawn by a human
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
