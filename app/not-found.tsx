import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { House, BookOpen } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fcfcff] text-[var(--ink)]">
      <Nav />
      <main className="flex flex-1 items-center justify-center px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="kicker">
            <span className="n">404</span>
            <span className="mx-3 opacity-40">/</span>
            Not found
          </p>
          <h1 className="display-xl mt-6 text-6xl sm:text-7xl">
            Hmm,
            <br />
            <span className="text-[#5560d6]">nothing here.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-[var(--muted)]">
            This route was never deployed. Let's get you back to the surface.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-[#5560d6] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#3f45b8]"
            >
              <House size={15} weight="bold" />
              Back to home
            </Link>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--line)] bg-white px-4 py-2.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[#5560d6]/50"
            >
              <BookOpen size={15} />
              Documentation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
