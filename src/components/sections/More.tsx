
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Box,
  Code2,
  Feather,
  Palette,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";

type Exploration = {
  number: string;
  title: string;
  category: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
};

const explorations: Exploration[] = [
  {
    number: "01",
    title: "Mobile Development",
    category: "BUILD",
    description:
      "Exploring mobile experiences with React Native, turning ideas into applications that feel natural on a phone.",
    icon: Smartphone,
    tags: ["React Native", "Mobile UI"],
  },
  {
    number: "02",
    title: "3D & Creative Web",
    category: "EXPERIMENT",
    description:
      "Experimenting with Three.js, interactive 3D scenes, and new ways to make the web feel more immersive.",
    icon: Box,
    tags: ["Three.js", "WebGL"],
  },
  {
    number: "03",
    title: "Design Experiments",
    category: "CREATE",
    description:
      "Exploring typography, layouts, visual systems, and the relationship between thoughtful design and useful software.",
    icon: Palette,
    tags: ["UI/UX", "Visual Design"],
  },
  {
    number: "04",
    title: "Short Stories",
    category: "IMAGINE",
    description:
      "Exploring fictional worlds, memorable characters, and the small details that make a story worth remembering.",
    icon: Feather,
    tags: ["Storytelling", "Fiction"],
  },
  {
    number: "05",
    title: "Reading & Ideas",
    category: "DISCOVER",
    description:
      "Making room for books, new perspectives, and ideas that challenge how I think about technology and the world.",
    icon: BookOpen,
    tags: ["Books", "Learning"],
  },
];

export default function More() {
  return (
    <section
      id="more"
      aria-labelledby="more-heading"
      className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <Reveal>
          <div className="mb-14 grid gap-8 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                04 / Beyond the Code
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Personal explorations
              </div>
            </div>

            <div className="md:col-span-8">
              <h2
                id="more-heading"
                className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl"
              >
                More than code.
                <br />
                <span className="text-muted-foreground">
                  A curious mind.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
                Not everything starts with a line of code. Some ideas come
                from experimenting, some from design, and others from
                simply getting lost in a good story or book.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Exploration cards */}
        <div className="grid grid-cols-1 gap-0 border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {explorations.map((item) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number}>
                <article className="group relative flex h-full min-h-[280px] flex-col border-b border-r border-border p-6 transition-colors duration-300 hover:bg-accent/10 sm:p-8">
                  <div className="mb-12 flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-border transition-colors duration-300 group-hover:border-accent">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>

                    <span className="font-mono text-xs text-muted-foreground">
                      {item.number}
                    </span>
                  </div>

                  <div className="mb-3 flex items-center gap-2">
                    <span className="text-[10px] font-medium tracking-[0.18em] text-muted-foreground">
                      {item.category}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}

          {/* Closing tile */}
          <Reveal>
            <div className="flex h-full min-h-[280px] flex-col justify-between border-b border-r border-border bg-foreground p-6 text-background sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">
                Always exploring
              </p>

              <div>
                <p className="max-w-xs text-3xl font-medium leading-tight tracking-[-0.04em] md:text-4xl">
                  Curious about what comes next.
                </p>

                <p className="mt-4 max-w-xs text-sm leading-6 opacity-70">
                  New tools, different perspectives, and ideas worth
                  bringing to life.
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-background/20 pt-4">
                <span className="text-xs">Keep learning. Keep building.</span>
                <Code2 size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Bottom scroll cue */}
        <Reveal>
          <div className="mt-10 flex items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              A few things that keep me curious.
            </p>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-muted-foreground"
            >
              Let&apos;s talk
              <ArrowDown
                size={15}
                className="transition-transform group-hover:translate-y-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}