import { EmailLink } from "@/components/EmailLink";
import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { MediumLink } from "@/components/MediumLink";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}. Built as a product brief,
          not a brochure.
        </p>
        <p>
          <EmailLink
            label="Email"
            className="transition-colors hover:text-ink"
          />
          <span className="mx-2 text-line">·</span>
          <LinkedInProfileLink className="transition-colors hover:text-ink" />
          <span className="mx-2 text-line">·</span>
          <MediumLink className="transition-colors hover:text-ink" />
          <span className="mx-2 text-line">·</span>
          {site.location}
        </p>
      </div>
    </footer>
  );
}
