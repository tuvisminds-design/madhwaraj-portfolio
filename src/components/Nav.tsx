"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { EmailLink } from "@/components/EmailLink";
import { LinkedInProfileLink } from "@/components/LinkedInProfileLink";
import { MediumLink } from "@/components/MediumLink";
import { site } from "@/data/site";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={site.photo}
            alt={site.name}
            width={36}
            height={36}
            className="h-9 w-9 rounded-full object-cover object-[center_18%] ring-1 ring-line"
          />
          <span className="hidden text-sm tracking-tight sm:block">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <LinkedInProfileLink
            label="LinkedIn"
            className="transition-colors hover:text-ink"
          />
          <MediumLink className="transition-colors hover:text-ink" />
          <EmailLink
            label="Email"
            className="transition-colors hover:text-ink"
          />
          <a
            href={site.resume}
            className="rounded-full border border-ink/15 bg-cream px-4 py-1.5 text-ink transition-colors hover:border-forest hover:text-forest"
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
            <a href={site.resume}>Resume</a>
            <LinkedInProfileLink />
            <MediumLink />
            <EmailLink />
          </div>
        </div>
      ) : null}
    </header>
  );
}
