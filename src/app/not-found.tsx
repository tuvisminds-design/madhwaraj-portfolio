import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 py-20 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-forest">
          404
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight">
          This page is out of scope.
        </h1>
        <p className="mt-4 max-w-md text-muted">
          The route does not exist. Back to the brief.
        </p>
        <Link
          href="/"
          className="mt-8 w-fit rounded-full bg-forest px-5 py-2.5 text-sm text-paper"
        >
          Home
        </Link>
      </main>
      <Footer />
    </>
  );
}
