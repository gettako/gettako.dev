import { SectionHead } from "@/components/ui";

const ROWS = [
  { label: "Idle container RAM", tako: "63–69 MiB", others: ["413–557 MiB", "825–841 MiB", "~2 GiB"] },
  { label: "Host RAM delta", tako: "+113–146 MiB", others: ["+562–795 MiB", "+939–966 MiB", "+2–4 GiB"] },
  { label: "Image storage", tako: "697 MB", others: ["3.1 GB", "5.3 GB", "5–10 GB"] },
  { label: "Background daemons", tako: "4 containers", others: ["6 containers", "3 containers", "10+ pods"] },
  { label: "Database", tako: "SQLite · encrypted", others: ["Postgres + Redis", "Postgres 16", "etcd"] },
  { label: "Worker inbound ports", tako: "0", others: ["SSH :22", "SSH open", "several"] },
];

const HEADS = ["Tako", "Coolify v4.3", "Dokploy v0.30", "k3s"];

export function Compare() {
  return (
    <section id="specs" className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="05"
          kicker="By the numbers"
          title={
            <>
              Deliberately <span className="text-[#5560d6]">lighter.</span>
            </>
          }
          lede="Same VPS, same Docker, zero workload. We publish the ugly numbers too — because “lightweight” should be measured, not claimed."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-[var(--line)] bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--line)] font-mono text-[11px] uppercase tracking-[0.16em]">
                  <th className="px-6 py-4 font-medium text-[var(--faint)]">Metric</th>
                  {HEADS.map((h, i) => (
                    <th
                      key={h}
                      className={`px-6 py-4 ${i === 0 ? "bg-[#5560d6] font-bold text-white" : "font-medium text-[var(--faint)]"}`}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, i) => (
                  <tr key={r.label} className={`border-b border-[var(--line)] last:border-0 ${i % 2 ? "bg-[#f8f9ff]" : ""}`}>
                    <td className="px-6 py-4 text-[13.5px] font-semibold text-[var(--muted)]">{r.label}</td>
                    <td className="bg-[#eef0ff] px-6 py-4 font-mono text-[13.5px] font-bold text-[#2f358f]">{r.tako}</td>
                    {r.others.map((o) => (
                      <td key={o} className="px-6 py-4 font-mono text-[13.5px] text-[var(--faint)]">{o}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
