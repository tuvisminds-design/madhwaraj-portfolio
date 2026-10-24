import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="01" title="The transition" kicker="About" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 text-lg leading-8 text-muted">
          {site.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="rounded-[24px] border border-forest/30 bg-gradient-to-br from-cream via-stamp to-paper-2 p-7 text-ink shadow-[0_20px_50px_rgba(0,0,0,0.35)] sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-forest">
            Currently exploring
          </p>
          <ul className="mt-6 space-y-3.5">
            {site.interests.map((item) => (
              <li key={item} className="flex items-baseline gap-3">
                <span className="font-serif text-forest">→</span>
                <span className="text-ink/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
