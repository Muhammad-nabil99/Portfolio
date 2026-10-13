import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { hardSkills, softSkills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24 md:py-32">
      <div className="container-grid">
        <Reveal>
          <SectionLabel index="03">Capabilities</SectionLabel>
          <h2 className="display-lg mt-6">Tools I work with.</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="meta mt-16 border-b border-foreground pb-3">Hard skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {hardSkills.map((group) => (
              <div
                key={group.title}
                className="border-b border-border py-6 transition-colors hover:bg-surface sm:pr-6"
              >
                <h4 className="text-sm text-muted">{group.title}</h4>
                <ul className="mt-4 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-lg font-medium tracking-tight">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="meta mt-12 border-b border-foreground pb-3">Soft skills</h3>
          <ul className="grid sm:grid-cols-3">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="border-b border-border py-6 text-lg font-medium tracking-tight transition-colors hover:bg-surface"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
