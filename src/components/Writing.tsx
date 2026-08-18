import { MediumLink } from "@/components/MediumLink";
import { SectionHeading } from "@/components/SectionHeading";
import { writing } from "@/data/writing";

export function Writing() {
  return (
    <section id="writing" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="05" title="Writing" kicker="Medium" />
      <p className="mb-8 max-w-2xl text-muted">
        I write to think in public — digital transformation, analysis habits,
        and delivery methods. More on{" "}
        <MediumLink className="underline decoration-line underline-offset-4 hover:text-forest" />
        .
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {writing.map((piece) => (
          <a
            key={piece.title}
            href={piece.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-[20px] border border-line bg-cream p-6 transition-colors hover:border-forest"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
              {piece.date}
            </p>
            <h3 className="mt-3 font-serif text-2xl leading-snug">{piece.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted">{piece.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
