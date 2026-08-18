import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.subhead,
  metadataBase: new URL("https://madhwaraj-kulkarni.vercel.app"),
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.headline,
    type: "website",
    locale: "en_IN",
    images: [{ url: "/memoji.png", alt: site.name }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable} h-full antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="grain min-h-full bg-paper text-ink">{children}</body>
    </html>
  );
}
