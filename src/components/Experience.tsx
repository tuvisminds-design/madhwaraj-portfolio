import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="03" title="Experience" kicker="Roles" />
      <div className="space-y-8">
        {experience.map((role) => (
          <article
            key={`${role.company}-${role.role}`}
            className="grid gap-4 border-t border-line pt-8 lg:grid-cols-[240px_1fr]"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {role.dates}
              </p>
              <p className="mt-2 text-sm text-muted">
                {role.location}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-3xl tracking-tight">{role.role}</h3>
              <p className="mt-1 text-forest">{role.company}</p>
              <p className="mt-3 text-muted">{role.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
