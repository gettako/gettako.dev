import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { How } from "@/components/how";
import { Architecture } from "@/components/architecture";
import { Bento } from "@/components/bento";
import { Compare } from "@/components/compare";
import { Install } from "@/components/install";
import { Footer } from "@/components/footer";
import { Cmd } from "@/components/ui";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";

function Pricing() {
  return (
    <section className="dotgrid border-b border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="kicker">
            <span className="n">$0</span>
            <span className="mx-3 opacity-40">/</span>
            Pricing
          </p>
          <p className="display-xl mt-6 text-7xl text-[var(--ink)] sm:text-8xl">
            $0<span className="text-3xl text-[var(--faint)] sm:text-4xl">/forever</span>
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)]">
            Every feature included. Unlimited nodes, unlimited teammates. No tiers,
            no paywalls — open source under Apache 2.0.
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            "Every feature included",
            "Unlimited worker nodes",
            "Unlimited team members",
            "Your code never leaves your servers",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2.5 rounded-2xl border border-[var(--line)] bg-white px-5 py-3.5 text-[14.5px] font-semibold text-[var(--ink)]">
              <CheckCircle size={18} weight="fill" className="shrink-0 text-emerald-500" />
              {t}
            </li>
          ))}
        </ul>
        <div className="mx-auto mt-10 max-w-xl">
          <Cmd cmd="curl -fsSL https://gettako.dev/install.sh | bash" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcff] text-[var(--ink)]">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <How />
        <Architecture />
        <Bento />
        <Compare />
        <Install />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
