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
    span: "md:col-span-2",
    title: "Dockerfile-driven builds",
    copy: "No opaque buildpacks. Tako builds straight from your repo's Dockerfile — the same artifact locally and in production. Reproducible everywhere, magic nowhere.",
  },
  {
    icon: ArrowsCounterClockwise,
    span: "",
    title: "Zero-downtime rollouts",
    copy: "Traffic cuts over only after health checks pass. Old containers drain gracefully.",
  },
  {
    icon: Certificate,
    span: "",
    title: "Automatic TLS",
    copy: "Let's Encrypt certificates, provisioned and renewed per domain. You never think about it.",
  },
  {
    icon: LockKey,
    span: "",
    title: "Encrypted secrets",
    copy: "Env vars sealed with AES-256-GCM. Build args and runtime secrets stay separated.",
  },
  {
    icon: Broadcast,
    span: "md:col-span-2",
    title: "Live logs, tidy disks",
    copy: "Build and container logs stream to your browser — pause, search, follow. Meanwhile Tako quietly prunes dangling images and stale caches so your VPS never chokes on its own success.",
  },
  {
    icon: Trash,
    span: "",
    title: "Instant rollback",
    copy: "Previous images stay on the node. One click back to the last good release.",
  },
];

export function Bento() {
  return (
    <section id="features" className="border-b border-[var(--line)] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <SectionHead
          n="04"
          kicker="Capabilities"
          title={
            <>
              Everything you need.
              <br />
              <span className="text-[var(--faint)]">Nothing you don't.</span>
            </>
          }
        />
        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className={`group rounded-3xl border border-[var(--line)] bg-[#fcfcff] p-7 transition-all hover:-translate-y-1 hover:border-[#5560d6]/40 hover:shadow-[0_20px_50px_rgba(85,96,214,0.12)] ${c.span}`}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--wash)] transition-colors group-hover:bg-[#5560d6]">
                <c.icon size={22} weight="regular" className="text-[#5560d6] transition-colors group-hover:text-white" />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-[var(--ink)]">{c.title}</h3>
              <p className="mt-2.5 max-w-xl text-[14.5px] leading-relaxed text-[var(--muted)]">{c.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
