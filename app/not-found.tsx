import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { BookOpen, House } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#05070c] text-[#f2f4fa]">
      <Nav />

      <main className="flex flex-1 items-center justify-center px-4 py-32 sm:px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="kicker">
            <span className="n">404</span>
            <span className="mx-3 text-[#3a4159]">/</span>
            Container not found
          </p>
          <h1 className="display-xl mt-6 text-5xl text-[#f2f4fa] sm:text-7xl">
            Lost
            <br />
            <span className="text-[#3f4663]">at sea.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#8a93b2] sm:text-base">
            This route was never deployed — or it sank. Head back to the surface.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-[#7c83ff] px-4 py-2 text-sm font-semibold text-[#05070c] transition-colors hover:bg-[#a5b4fc]"
            >
              <House size={15} weight="bold" />
              Back to home
            </Link>
            <a
              href="https://docs.gettako.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-sm text-[#c6cde4] transition-colors hover:border-white/30 hover:text-white"
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
