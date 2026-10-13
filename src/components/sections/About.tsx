import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { principles } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="container-grid grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <SectionLabel index="01">About</SectionLabel>
          <h2 className="display-lg mt-6">A little about me.</h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6 md:col-span-6 md:col-start-7">
          {/* Placeholder copy: replace with Nabil's own words. */}
          <p className="text-lg leading-relaxed">
            I&apos;m a software engineer passionate about building digital products that connect
            thoughtful design with reliable engineering. My work spans full-stack web development,
            system architecture, and exploring how AI and automation can improve everyday workflows.
          </p>
          <p className="max-w-prose text-muted">
            I enjoy understanding the problem behind a product before deciding how to build it. For
            me, good software is not just about writing code—it&apos;s about creating solutions that
            are useful, maintainable, and ready to grow.
          </p>
          <ul className="mt-10 border-t border-border">
            {principles.map((p) => (
              <li key={p} className="border-b border-border py-4 text-xl font-medium tracking-tight">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
