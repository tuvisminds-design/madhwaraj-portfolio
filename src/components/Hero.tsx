import Image from "next/image";
import { EmailLink } from "@/components/EmailLink";
import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { MediumLink } from "@/components/MediumLink";
import { site } from "@/data/site";
import { publicPath } from "@/lib/public-path";

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-14 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:pb-28 lg:pt-20">
      <aside className="flex flex-col gap-6 lg:max-w-sm">
        <div className="overflow-hidden rounded-[28px] border border-forest/30 bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.45)] ring-1 ring-forest/15">
          <Image
            src={publicPath(site.photo)}
            alt={`${site.name}, Business Analyst`}
            width={720}
            height={900}
            priority
            className="aspect-[4/5] h-auto w-full object-cover object-[center_18%]"
          />
        </div>
      </aside>

      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest">
          {site.location} · {site.role}
        </p>
        <h1 className="mt-5 max-w-3xl font-serif text-[2.6rem] leading-[1.08] tracking-tight sm:text-6xl">
          {site.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{site.subhead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#work"
            className="rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-forest-2"
          >
            Selected work
          </a>
          <LinkedInProfileLink className="rounded-full border border-line bg-cream px-5 py-2.5 text-sm transition-colors hover:border-forest hover:text-forest" />
          <MediumLink className="rounded-full border border-line bg-cream/60 px-5 py-2.5 text-sm transition-colors hover:border-forest hover:text-forest" />
          <a
            href={site.drive}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line bg-cream/60 px-5 py-2.5 text-sm transition-colors hover:border-forest hover:text-forest"
          >
            Portfolio folder
          </a>
          <EmailLink className="rounded-full border border-line bg-cream/60 px-5 py-2.5 text-sm transition-colors hover:border-forest hover:text-forest" />
          <a
            href={publicPath(site.resume)}
            className="rounded-full border border-forest/40 bg-stamp px-5 py-2.5 text-sm text-forest transition-colors hover:border-forest hover:bg-forest hover:text-paper"
          >
            Download resume
          </a>
        </div>

        <div className="mt-10 rounded-[28px] border border-line bg-gradient-to-br from-cream to-paper-2 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.3)] sm:p-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-forest">
            Current brief
          </p>
          <div className="mt-6 space-y-5">
            <BriefRow label="Now" value="Business Analyst · VIT Infotech · Jan 2025 – Present" />
            <BriefRow
              label="Aiming for"
              value="AI Product Management at an early-stage startup or product company"
            />
            <BriefRow
              label="Craft"
              value="AI automation, chatbot requirements, user stories & data analysis"
            />
            <BriefRow
              label="Product"
              value="SpeakEasy: AI Speech Preparation Tool (May 2024 · 39 survey responses, 8 live demos)"
            />
            <BriefRow label="Proof" value="IBM AI Product Management & Product Management certs" />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-line pt-6 text-center">
            <Stat value="2 yrs" label="Experience" />
            <Stat value="12+" label="Process studies" />
            <Stat value="2" label="IBM PM certs" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-[15px] leading-6">{value}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-2xl text-forest">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-wide text-muted">{label}</p>
    </div>
  );
}
