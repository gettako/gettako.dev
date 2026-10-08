import { SectionHead } from "@/components/ui";

const ROWS: { label: string; tako: string; coolify: string; dokploy: string; k3s: string }[] = [
  { label: "Idle container RAM", tako: "63–69 MiB", coolify: "413–557 MiB", dokploy: "825–841 MiB", k3s: "~2 GiB" },
  { label: "Host RAM delta", tako: "+113–146 MiB", coolify: "+562–795 MiB", dokploy: "+939–966 MiB", k3s: "+2–4 GiB" },
  { label: "Image storage", tako: "697 MB", coolify: "3.1 GB", dokploy: "5.3 GB", k3s: "5–10 GB" },
  { label: "Background daemons", tako: "4 containers", coolify: "6 containers", dokploy: "3 containers", k3s: "10+ pods" },
  { label: "Database", tako: "SQLite · encrypted", coolify: "Postgres + Redis", dokploy: "Postgres 16", k3s: "etcd" },
  { label: "Worker inbound ports", tako: "0", coolify: "SSH :22", dokploy: "SSH open", k3s: "several" },
];

export function Compare() {
  return (
    <section id="specs" className="relative border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="05"
          kicker="By the numbers"
          title={
            <>
              Deliberately <span className="rust-text">lighter.</span>
            </>
          }
          lede="Same VPS, same Docker, zero workload. We publish the ugly numbers too — host delta included — because 'lightweight' should be measured, not claimed."
        />

        <div className="mt-12 overflow-x-auto rounded-2xl border border-white/[0.08]">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/[0.08] font-mono text-[11px] uppercase tracking-[0.18em] text-[#5b637f]">
                <th className="px-5 py-4 font-medium">Metric</th>
                <th className="bg-[#e8933f]/[0.07] px-5 py-4 font-bold text-[#e8933f]">Tako</th>
                <th className="px-5 py-4 font-medium">Coolify</th>
                <th className="px-5 py-4 font-medium">Dokploy</th>
                <th className="px-5 py-4 font-medium">k3s</th>
              </tr>
            </thead>
            <tbody className="font-mono text-[13px]">
              {ROWS.map((r, i) => (
                <tr
                  key={r.label}
                  className={`border-b border-white/[0.05] transition-colors last:border-0 hover:bg-white/[0.02] ${i % 2 ? "bg-white/[0.012]" : ""}`}
                >
                  <td className="px-5 py-3.5 font-sans text-[13px] text-[#8a93b2]">{r.label}</td>
                  <td className="bg-[#e8933f]/[0.07] px-5 py-3.5 font-bold text-[#f2f4fa]">{r.tako}</td>
                  <td className="px-5 py-3.5 text-[#5b637f]">{r.coolify}</td>
                  <td className="px-5 py-3.5 text-[#5b637f]">{r.dokploy}</td>
                  <td className="px-5 py-3.5 text-[#5b637f]">{r.k3s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 font-mono text-[11px] leading-relaxed text-[#5b637f]">
          Coolify v4.3 · Dokploy v0.30 · 2 vCPU / 8 GB RAM, Ubuntu 26.04, Docker 29.
        </p>
      </div>
    </section>
  );
}
