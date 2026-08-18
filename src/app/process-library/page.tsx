import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { driveProjects, getProject, processLibraryGroups } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Process library",
  description:
    "Summary of BA process studies from Madhwaraj Kulkarni’s Google Drive — BRDs, as-is maps, user stories, and chatbot specs.",
};

export default function ProcessLibraryPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-forest">
          Google Drive · BA artifacts
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl tracking-tight sm:text-6xl">
          Process library
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          A summary of the case studies in my Drive folder — as-is workflows,
          BRDs, user stories, chatbot requirements, and RPA business cases.
          Each row is a process I turned into a spec a team could build from.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Stat value={`${driveProjects.length}`} label="Drive studies" />
          <Stat value="HR · Finance · ERP" label="Domains" />
          <Stat value="BRD · stories · as-is" label="Artifact types" />
        </div>

        <div className="mt-16 space-y-16">
          {processLibraryGroups.map((group) => (
            <section key={group.title}>
              <h2 className="font-serif text-3xl tracking-tight">{group.title}</h2>
              <p className="mt-2 max-w-2xl text-muted">{group.blurb}</p>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {group.slugs.map((slug) => {
                  const project = getProject(slug);
                  if (!project) return null;
                  return (
                    <article
                      key={project.slug}
                      className="flex flex-col justify-between rounded-[24px] border border-line bg-cream p-6"
                    >
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                          {project.category} · {project.year}
                        </p>
                        <h3 className="mt-3 font-serif text-2xl tracking-tight">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
                        <p className="mt-4 text-sm leading-6 text-muted">
                          {project.problem}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {project.artifacts.map((artifact) => (
                            <li
                              key={artifact}
                              className="rounded-full bg-stamp px-3 py-1 text-xs text-forest"
                            >
                              {artifact}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        <Link
                          href={`/work/${project.slug}`}
                          className="rounded-full bg-forest px-4 py-2 text-paper hover:bg-forest-2"
                        >
                          Read summary
                        </Link>
                        {project.drive ? (
                          <a
                            href={project.drive}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border border-ink/15 px-4 py-2 hover:border-forest"
                          >
                            Open in Drive
                          </a>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-[24px] border border-line bg-cream p-6 sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-forest">
            Source folder
          </p>
          <p className="mt-3 max-w-xl text-muted">
            These summaries sit on this site. The original BRDs, sheets, and
            diagrams live in Google Drive.
          </p>
          <a
            href={site.drive}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-paper hover:bg-forest"
          >
            Open full Drive folder
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[20px] border border-line bg-cream px-5 py-5">
      <p className="font-serif text-2xl">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}
