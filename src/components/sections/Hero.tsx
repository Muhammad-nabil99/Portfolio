import { ArrowDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end pb-12 pt-32 md:pb-16">
      <div className="container-grid">
        <Reveal immediate>
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4 text-sm text-muted">
            <span>{siteConfig.role}</span>
            <span className="inline-flex items-center gap-2">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-accent-text" />
              </span>
              Open to selected opportunities
            </span>
          </div>
        </Reveal>

        <h1 className="display-xl">
          <Reveal immediate delay={0.1}>
            Muhammad
          </Reveal>
          <Reveal immediate delay={0.2}>
            Nabil
          </Reveal>
        </h1>

        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <Reveal immediate delay={0.35} className="md:col-span-6 md:col-start-1">
            <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 max-w-prose text-muted">{siteConfig.intro}</p>
          </Reveal>

          <Reveal immediate delay={0.45} className="flex flex-wrap items-start gap-3 md:col-span-5 md:col-start-8 md:justify-end">
            <a
              href="#experience"
              className="inline-flex h-12 items-center bg-accent px-6 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center border border-foreground px-6 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              Let&apos;s Collaborate
            </a>
          </Reveal>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="mt-12 inline-flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:text-foreground"
        >
          <ArrowDown className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
