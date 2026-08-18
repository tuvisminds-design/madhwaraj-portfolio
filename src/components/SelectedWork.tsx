import Link from "next/link";
import { featuredProjects, moreProjects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        number="02"
        title="Selected work"
        kicker="Case studies"
      />
      <p className="mb-10 max-w-2xl text-muted">
        A mix of product concepts, AI chatbot specs, and process-to-product
        case studies from automation work. None of these pretend to be shipped
        consumer apps — they show how I think when a workflow has to become a
        product.
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col justify-between rounded-[24px] border border-line bg-cream p-6 transition-transform hover:-translate-y-0.5 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] text-muted">
                <span>
                  0{index + 1} · {project.category}
                </span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-5 font-serif text-3xl tracking-tight group-hover:text-forest">
                {project.title}
              </h3>
              <p className="mt-2 text-muted">{project.subtitle}</p>
              <p className="mt-5 text-sm leading-6 text-muted">{project.problem}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-stamp px-3 py-1 text-xs text-forest"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-14">
        <h3 className="font-serif text-2xl">More studies</h3>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {moreProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="grid gap-2 py-4 transition-colors hover:bg-cream/70 sm:grid-cols-[160px_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {project.category}
              </span>
              <span>
                <span className="font-medium">{project.title}</span>
                <span className="text-muted"> — {project.subtitle}</span>
              </span>
              <span className="text-sm text-forest">Read →</span>
            </Link>
          ))}
        </div>
        <Link
          href="/process-library"
          className="mt-8 inline-flex rounded-full border border-ink/15 px-5 py-2.5 text-sm hover:border-forest"
        >
          Open process library →
        </Link>
      </div>
    </section>
  );
}
