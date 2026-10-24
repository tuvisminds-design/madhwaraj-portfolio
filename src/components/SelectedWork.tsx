import Link from "next/link";
import { academicProjects, featuredProjects, moreProjects } from "@/data/projects";
import { SectionHeading } from "@/components/SectionHeading";

const speakEasyHighlights = [
  "Designed and prototyped an AI tool that turns a topic into framework-based speaking points (PREP, with delivery tips per section) for students and nervous speakers; ran a 39-response questionnaire and 8 live demos with mentors and peers.",
  "Early results: 100% found it easy to use, 85% rated the overall experience 4 or 5, 36 of 39 would recommend it. Tested my own prediction (30% positive) against the demo result (6 of 8) and documented the bias in a sample of people I know.",
  "Compared 7 tools (Yoodli, Speeko, Orai and adjacent products) and turned tester feedback into product decisions, including a voice-agent test.",
  "Chose to stop after finding scope creep, a crowded market and low willingness to pay (median about ₹100 a month; many users said ChatGPT already did the job).",
];

export function SelectedWork() {
  const [speakEasy, ...otherFeatured] = featuredProjects;

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading
        number="02"
        title="Product & selected work"
        kicker="Case studies"
      />
      <p className="mb-10 max-w-2xl text-muted">
        A self-initiated AI product tested from idea to user feedback, alongside
        AI chatbot specs and process-to-product case studies from automation work.
      </p>

      {speakEasy ? (
        <Link
          href={`/work/${speakEasy.slug}`}
          className="group mb-6 block rounded-[24px] border border-forest/35 bg-gradient-to-br from-cream via-stamp/70 to-paper-2 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:border-forest sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] text-forest">
            <span>01 · {speakEasy.category}</span>
            <span>{speakEasy.year}</span>
          </div>
          <h3 className="mt-4 font-serif text-3xl tracking-tight group-hover:text-forest sm:text-4xl">
            {speakEasy.title}
          </h3>
          <p className="mt-2 text-muted">{speakEasy.subtitle}</p>
          <ul className="mt-5 space-y-2.5 text-sm leading-6 text-muted">
            {speakEasyHighlights.map((bullet) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {speakEasy.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-stamp px-3 py-1 text-xs text-forest"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ) : null}

      <div className="grid gap-5 lg:grid-cols-2">
        {otherFeatured.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex flex-col justify-between rounded-[24px] border border-line bg-cream p-6 transition-all hover:-translate-y-0.5 hover:border-forest/60 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] text-muted">
                <span>
                  0{index + 2} · {project.category}
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
        <h3 className="font-serif text-2xl">Academic projects</h3>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {academicProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="grid gap-2 py-4 transition-colors hover:bg-cream/70 sm:grid-cols-[240px_1fr_auto] sm:items-baseline sm:gap-6"
            >
              <span className="font-medium text-ink">
                {project.title}
              </span>
              <span className="text-sm text-muted">
                {project.approach}
              </span>
              <span className="text-sm text-forest">Read →</span>
            </Link>
          ))}
        </div>
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
