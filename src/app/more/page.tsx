import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import More from "@/components/sections/More";

export default function MorePage() {
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
        <More />
      </main>
      <Footer />
    </>
  );
}
