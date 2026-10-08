import { SectionHead } from "@/components/ui";
import {
  GitBranch,
  ArrowsCounterClockwise,
  Certificate,
  LockKey,
  Broadcast,
  Trash,
} from "@phosphor-icons/react/dist/ssr";

const CARDS = [
  {
    icon: GitBranch,
    accent: "text-[#7c83ff]",
    ring: "hover:border-[#7c83ff]/45",
    span: "md:col-span-2",
    title: "Dockerfile-driven builds",
    copy: "No opaque buildpacks. Tako builds straight from your repo's Dockerfile — the same artifact locally and in production. Full transparency, zero magic, reproducible everywhere.",
  },
  {
    icon: ArrowsCounterClockwise,
    accent: "text-[#e8933f]",
    ring: "hover:border-[#e8933f]/45",
    span: "",
    title: "Zero-downtime rollouts",
    copy: "Traefik cuts traffic only after health checks pass. Old containers drain gracefully.",
  },
  {
    icon: Certificate,
    accent: "text-[#22d3ee]",
    ring: "hover:border-[#22d3ee]/45",
    span: "",
    title: "Automatic TLS",
    copy: "Let's Encrypt certificates provisioned and renewed per domain. You never think about it.",
  },
  {
    icon: LockKey,
    accent: "text-[#f5b54a]",
    ring: "hover:border-[#f5b54a]/45",
    span: "",
    title: "Encrypted secrets",
    copy: "Env vars and build secrets sealed with AES-256-GCM. Build args and runtime secrets stay separated.",
  },
  {
    icon: Broadcast,
    accent: "text-[#34d399]",
    ring: "hover:border-[#34d399]/45",
    span: "md:col-span-2",
    title: "Live logs, tidy disks",
    copy: "Build and container logs stream to your browser over SSE — pause, search, follow. Meanwhile Tako quietly prunes dangling images and stale caches so your VPS never chokes on its own success. Instant rollback to any retained image included.",
  },
  {
    icon: Trash,
    accent: "text-[#8a93b2]",
    ring: "hover:border-white/25",
    span: "",
    title: "Instant rollback",
    copy: "Previous images stay on the node. One click back to the last good release.",
  },
];

export function Bento() {
  return (
    <section id="features" className="relative border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="04"
          kicker="Capabilities"
          title={
            <>
              Everything you need.
              <br />
              <span className="text-[#5b637f]">Nothing you don't.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className={`rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors sm:p-7 ${c.span} ${c.ring}`}
            >
              <c.icon size={26} weight="regular" className={c.accent} />
              <h3 className="font-display mt-4 text-xl font-bold text-[#f2f4fa]">{c.title}</h3>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-[#8a93b2]">{c.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
