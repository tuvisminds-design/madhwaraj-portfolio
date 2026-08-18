import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { getProject, projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work" };
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[index - 1];
  const next = projects[index + 1];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <Link
          href="/#work"
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-forest"
        >
          ← All work
        </Link>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-forest">
          {project.category} · {project.year}
        </p>
        <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 text-xl text-muted">{project.subtitle}</p>

        <div className="mt-10 grid gap-6 border-y border-line py-8 sm:grid-cols-3">
          <Fact label="Problem" text={project.problem} />
          <Fact label="Approach" text={project.approach} />
          <Fact label="Outcome" text={project.outcome} />
        </div>

        <div className="mt-10 rounded-[24px] bg-stamp p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest">
            Product lens
          </p>
          <p className="mt-3 text-lg leading-8">{project.productLens}</p>
        </div>

        <div className="mt-12 space-y-10">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl tracking-tight">
                {section.heading}
              </h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8 text-muted">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-serif text-3xl tracking-tight">Artifacts</h2>
          <ul className="mt-4 space-y-2 text-muted">
            {project.artifacts.map((artifact) => (
              <li key={artifact} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                {artifact}
              </li>
            ))}
          </ul>
          {project.drive ? (
            <a
              href={project.drive}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-full border border-ink/15 bg-cream px-5 py-2.5 text-sm hover:border-forest"
            >
              Open source folder
            </a>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <nav className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
          {previous ? (
            <Link href={`/work/${previous.slug}`} className="group">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Previous
              </p>
              <p className="mt-2 font-serif text-2xl group-hover:text-forest">
                {previous.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link href={`/work/${next.slug}`} className="group sm:text-right">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                Next
              </p>
              <p className="mt-2 font-serif text-2xl group-hover:text-forest">
                {next.title}
              </p>
            </Link>
          ) : null}
        </nav>
      </main>
      <Footer />
    </>
  );
}

function Fact({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-forest">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
    </div>
  );
}
