import { EmailLink } from "@/components/EmailLink";
import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { MediumLink } from "@/components/MediumLink";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="07" title="Let’s talk product" kicker="Contact" />
      <div className="rounded-[28px] border border-forest/30 bg-gradient-to-br from-cream via-stamp to-paper-2 px-6 py-10 text-ink shadow-[0_24px_60px_rgba(0,0,0,0.45)] sm:px-10 sm:py-14">
        <p className="max-w-2xl font-serif text-3xl leading-snug text-ink sm:text-4xl">
          I am looking for teams that need a BA who already thinks like a PM —
          especially around AI workflows, automation, and early-stage product
          discovery.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <EmailLink
            label={site.email}
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-2"
          />
          <LinkedInProfileLink className="rounded-full border border-forest/35 bg-paper/40 px-5 py-2.5 text-sm text-ink transition-colors hover:border-forest hover:text-forest" />
          <MediumLink className="rounded-full border border-forest/35 bg-paper/40 px-5 py-2.5 text-sm text-ink transition-colors hover:border-forest hover:text-forest" />
          <a
            href="/process-library"
            className="rounded-full border border-forest/35 bg-paper/40 px-5 py-2.5 text-sm text-ink transition-colors hover:border-forest hover:text-forest"
          >
            Process library
          </a>
        </div>
        <p className="mt-8 font-mono text-sm text-forest">{site.phone}</p>
      </div>
    </section>
  );
}
