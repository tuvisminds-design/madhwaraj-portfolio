import { site } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";

export function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="04" title="Skills & tools" kicker="Skills" />
      <div className="grid gap-5 sm:grid-cols-2">
        {site.toolkit.map((group) => (
          <div
            key={group.title}
            className="rounded-[24px] border border-line bg-cream p-6 transition-colors hover:border-forest/40"
          >
            <h3 className="font-serif text-2xl text-forest">{group.title}</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line bg-paper-2/70 px-3 py-1 text-sm text-ink/85"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
