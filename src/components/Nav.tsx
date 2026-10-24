"use client";

import Link from "next/link";
import { useState } from "react";
import { EmailLink } from "@/components/EmailLink";
import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { MediumLink } from "@/components/MediumLink";
import { site } from "@/data/site";
import { publicPath } from "@/lib/public-path";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-cream ring-1 ring-forest/40">
            <img
              src={publicPath(site.photo)}
              alt={site.name}
              className="h-full w-full object-cover object-[center_18%]"
            />
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-ink sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-forest"
            >
              {item.label}
            </Link>
          ))}
          <LinkedInProfileLink
            label="LinkedIn"
            className="transition-colors hover:text-forest"
          />
          <MediumLink className="transition-colors hover:text-forest" />
          <EmailLink
            label="Email"
            className="transition-colors hover:text-forest"
          />
          <a
            href={publicPath(site.resume)}
            className="rounded-full border border-forest/40 bg-cream px-4 py-1.5 text-forest transition-colors hover:border-forest hover:bg-forest hover:text-paper"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          className="grid h-9 w-9 place-items-center rounded-full border border-line md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-px w-4 bg-ink" />
            <span className="block h-px w-4 bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={publicPath(site.resume)}>Resume</a>
            <LinkedInProfileLink />
            <MediumLink />
            <EmailLink />
          </div>
        </div>
      ) : null}
    </header>
  );
}
