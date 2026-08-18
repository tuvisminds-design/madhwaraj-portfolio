import Link from "next/link";

export function SectionHeading({
  number,
  title,
  kicker,
}: {
  number: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-10 flex flex-col gap-3 sm:mb-12">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-forest">
        {number} / {kicker ?? title}
      </p>
      <h2 className="font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export function TextLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "underline decoration-line underline-offset-[5px] transition-colors hover:text-forest hover:decoration-forest";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
