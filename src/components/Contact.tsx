import { EmailLink } from "@/components/EmailLink";
import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { MediumLink } from "@/components/MediumLink";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <SectionHeading number="07" title="Let’s talk product" kicker="Contact" />
      <div className="rounded-[28px] bg-ink px-6 py-10 text-paper sm:px-10 sm:py-14">
        <p className="max-w-2xl font-serif text-3xl leading-snug sm:text-4xl">
          I am looking for teams that need a BA who already thinks like a PM —
          especially around AI workflows, automation, and early-stage product
          discovery.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <EmailLink
            label={site.email}
            className="rounded-full bg-paper px-5 py-2.5 text-sm text-ink hover:bg-cream"
          />
          <LinkedInProfileLink className="rounded-full border border-paper/20 px-5 py-2.5 text-sm hover:border-paper" />
          <MediumLink className="rounded-full border border-paper/20 px-5 py-2.5 text-sm hover:border-paper" />
          <a
            href="/process-library"
            className="rounded-full border border-paper/20 px-5 py-2.5 text-sm hover:border-paper"
          >
            Process library
          </a>
        </div>
        <p className="mt-8 text-sm text-paper/70">{site.phone}</p>
      </div>
    </section>
  );
}
