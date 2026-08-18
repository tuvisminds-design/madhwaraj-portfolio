import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { SelectedWork } from "@/components/SelectedWork";
import { Toolkit } from "@/components/Toolkit";
import { Writing } from "@/components/Writing";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="rule" />
        </div>
        <About />
        <SelectedWork />
        <Experience />
        <Toolkit />
        <Writing />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
