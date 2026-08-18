import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Process, product, and AI case studies by Madhwaraj Kulkarni.",
};

export default function WorkIndexPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest">
          Case studies
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight">Work</h1>
        <p className="mt-4 text-muted">
          Specs, as-is maps, and product concepts from a BA moving into PM.
        </p>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="block py-5 hover:bg-cream/60"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {project.category} · {project.year}
              </p>
              <h2 className="mt-2 font-serif text-2xl">{project.title}</h2>
              <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
