import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";
import CallToAction from "@/components/sections/CallToAction";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import More from "@/components/sections/More";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <CallToAction />
        <More />
      </main>
      <Footer />
    </>
  );
}
