import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Ticker } from "@/components/ticker";
import { Manifesto } from "@/components/manifesto";
import { How } from "@/components/how";
import { Architecture } from "@/components/architecture";
import { Bento } from "@/components/bento";
import { Compare } from "@/components/compare";
import { Install } from "@/components/install";
import { Footer } from "@/components/footer";
import { Cmd } from "@/components/ui";

function FinalCta() {
  return (
    <section className="blueprint relative overflow-hidden border-b border-white/[0.07]">
      <div className="mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 sm:py-32">
        <p className="kicker">$0 · Forever · Apache 2.0</p>
        <h2 className="display-xl mx-auto mt-6 max-w-4xl text-5xl text-[#f2f4fa] sm:text-7xl">
          Stop renting.
          <br />
          <span className="glow-text">Start shipping.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#8a93b2]">
          Every feature included. Unlimited nodes, unlimited teammates.
          Your code never leaves infrastructure you own.
        </p>
        <div className="mx-auto mt-10 max-w-xl">
          <Cmd cmd="curl -fsSL https://gettako.dev/install.sh | bash" />
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#05070c] text-[#f2f4fa]">
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Manifesto />
        <How />
        <Architecture />
        <Bento />
        <Compare />
        <Install />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
