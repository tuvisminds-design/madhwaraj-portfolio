import { site } from "@/data/site";

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

export function EmailLink({
  className,
  label = "Email me",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={`mailto:${site.email}`}
      className={`inline-flex items-center gap-2 ${className ?? ""}`}
    >
      <MailIcon className="h-4 w-4 shrink-0" />
      {label}
    </a>
  );
}
