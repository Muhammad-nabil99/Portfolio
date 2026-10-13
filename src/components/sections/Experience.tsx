import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-32">
      <div className="container-grid">
        <Reveal>
          <SectionLabel index="02">Experience</SectionLabel>
          <h2 className="display-lg mt-6">Experience in practice.</h2>
        </Reveal>

        <ol className="mt-16 border-t border-foreground">
          {experiences.map((exp) => (
            <li key={exp.id} className="border-b border-border">
              <Reveal>
                <article className="group grid gap-8 py-10 transition-colors hover:bg-surface md:grid-cols-12 md:px-4">
                  <div className="md:col-span-3">
                    <p className="text-sm text-muted">{exp.period}</p>
                  </div>

                  <div className="md:col-span-6">
                    <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{exp.role}</h3>
                    <p className="mt-1 text-lg">{exp.company}</p>
                    {exp.project && (
                      <p className="mt-4 text-sm text-muted">
                        Project: <span className="text-foreground">{exp.project}</span>
                      </p>
                    )}
                    <p className="mt-4 max-w-prose text-muted">{exp.description}</p>
                    {exp.impact && <p className="mt-3 max-w-prose">{exp.impact}</p>}
                    {exp.technologies.length > 0 && (
                      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                        {exp.technologies.map((t) => (
                          <li key={t} className="border border-border px-3 py-1 text-xs">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {exp.metric && (
                    <div className="md:col-span-3 md:text-right">
                      <p className="text-6xl font-semibold leading-none tracking-tighter md:text-7xl">
                        {exp.metric.value}
                      </p>
                      <p className="meta mt-3">{exp.metric.label}</p>
                    </div>
                  )}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
