import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="06" title="Education & certificates" />
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          {site.education.map((item) => (
            <article key={item.school}>
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
                {item.years}
              </p>
              <h3 className="mt-2 font-serif text-2xl">{item.credential}</h3>
              <p className="text-forest">{item.school}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{item.note}</p>
            </article>
          ))}
        </div>
        <div className="rounded-[24px] border border-line bg-cream p-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-forest">
            Selected certificates
          </p>
          <ul className="mt-5 divide-y divide-line">
            {site.certifications.map((cert) => (
              <li key={cert.name} className="flex items-start justify-between gap-4 py-3">
                <div>
                  <p className="text-sm font-medium text-ink">{cert.name}</p>
                  <p className="text-xs text-muted">{cert.issuer}</p>
                </div>
                <p className="shrink-0 font-mono text-[11px] text-forest">{cert.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
