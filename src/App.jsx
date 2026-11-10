import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ArrowDown, ArrowUpRight, Code2, Layers3, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, accessible interfaces.",
    items: ["react", "javascript", "tailwind", "bootstrap", "reactRouter", "reactQuery"],
  },
  {
    title: "Backend & data",
    description: "Connecting interfaces to reliable application logic.",
    items: ["nodeJs", "supabase", "firebase", "redux"],
  },
  {
    title: "Tools & collaboration",
    description: "Working with design and development workflows.",
    items: ["git", "figma"],
  },
];

function App() {
  return (
    <div className="portfolio-shell min-h-screen overflow-hidden bg-[#090b0e] text-[#f4f1e9]">
      <Navbar />

      <main>
        <section id="home" className="hero-section relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative z-10 max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-[0.18em] text-[#b7b5ae] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#d9a441] shadow-[0_0_14px_#d9a441]" />
              Software engineer · Portfolio
            </div>
            <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-[#d9a441] uppercase">Hello, I'm Nabil</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              I build digital products that <span className="font-serif font-normal italic text-[#d9a441]">solve real problems.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#a7a8a7] sm:text-lg">
              Software engineer focused on creating thoughtful web experiences, practical systems, and products that make work better.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#d9a441] px-6 py-3.5 text-sm font-bold text-[#17140e] transition hover:-translate-y-1 hover:bg-[#edbd61]">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-[#e8e5dc] transition hover:border-[#d9a441]/70 hover:text-[#edbd61]">
                Get in touch <ArrowDown size={16} />
              </a>
            </div>
            <div className="mt-20 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-6 text-xs tracking-[0.16em] text-[#777b7e] uppercase">
              <span>Frontend development</span>
              <span>Full-stack exploration</span>
              <span>Product-minded engineering</span>
            </div>
          </div>
          <div className="hero-orbit pointer-events-none absolute -right-40 top-1/2 hidden h-[34rem] w-[34rem] -translate-y-1/2 rounded-full border border-[#d9a441]/10 lg:block" aria-hidden="true">
            <div className="absolute inset-10 rounded-full border border-white/[0.06]" />
            <div className="absolute inset-24 rounded-full border border-white/[0.06]" />
            <div className="absolute right-24 top-20 rounded-2xl border border-[#d9a441]/20 bg-[#11151a] p-5 text-[#d9a441] shadow-2xl">
              <Code2 size={34} />
            </div>
            <div className="absolute bottom-24 left-14 rounded-2xl border border-white/10 bg-[#11151a] p-5 text-[#a7a8a7] shadow-2xl">
              <Terminal size={30} />
            </div>
            <div className="absolute bottom-16 right-24 rounded-2xl border border-white/10 bg-[#11151a] p-5 text-[#a7a8a7] shadow-2xl">
              <Layers3 size={30} />
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap border-t border-white/[0.07]">
          <div className="section-inner grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-kicker">01 / About</p>
              <h2 className="section-title">Curious by nature.<br /><span className="font-serif italic text-[#d9a441]">Engineer by craft.</span></h2>
            </div>
            <div className="max-w-3xl">
              <p className="text-xl leading-9 text-[#e2dfd6] sm:text-2xl sm:leading-10">
                I’m Nabil, a developer who enjoys turning ideas into useful digital experiences.
              </p>
              <p className="mt-6 leading-8 text-[#999d9e]">
                My journey began with frontend development and grew into exploring backend systems, databases, and the decisions behind building reliable applications. I care about more than making interfaces look good: I want to understand the problem, the people using the product, and the value the software should create.
              </p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                <div className="border-l border-[#d9a441] pl-5">
                  <p className="text-sm font-semibold text-[#f0ede5]">Build with intention</p>
                  <p className="mt-2 text-sm leading-6 text-[#858a8c]">Clear interfaces, maintainable code, and useful outcomes.</p>
                </div>
                <div className="border-l border-white/20 pl-5">
                  <p className="text-sm font-semibold text-[#f0ede5]">Keep learning</p>
                  <p className="mt-2 text-sm leading-6 text-[#858a8c]">Continuously expanding across the product and engineering stack.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-wrap bg-[#0e1115]">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="section-kicker">02 / Toolkit</p>
                <h2 className="section-title">Tools I work <span className="font-serif italic text-[#d9a441]">with.</span></h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#929799]">A growing toolkit across interface development, application logic, and the workflows that bring products together.</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <article key={group.title} className="skill-panel">
                  <span className="text-xs tracking-[0.2em] text-[#d9a441]">0{index + 1}</span>
                  <h3 className="mt-5 text-xl font-semibold">{group.title}</h3>
                  <p className="mt-2 min-h-12 text-sm leading-6 text-[#858b8e]">{group.description}</p>
                  <div className="mt-5 border-t border-white/10 pt-4">
                    <Skills type="sm" teckStacks={group.items} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-wrap">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="section-kicker">03 / Journey</p>
                <h2 className="section-title">Learning through <span className="font-serif italic text-[#d9a441]">building.</span></h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#929799]">A selection of learning and hands-on experiences that have shaped how I approach software development.</p>
            </div>
            <Experience />
          </div>
        </section>

        <section id="projects" className="section-wrap bg-[#0e1115]">
          <div className="section-inner">
            <div className="section-heading">
              <div>
                <p className="section-kicker">04 / Selected work</p>
                <h2 className="section-title">Things I've <span className="font-serif italic text-[#d9a441]">worked on.</span></h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#929799]">A few projects exploring learning experiences, travel discovery, and hospitality operations.</p>
            </div>
            <Project />
          </div>
        </section>

        <section id="contact" className="section-wrap">
          <div className="section-inner">
            <div className="contact-panel">
              <p className="section-kicker">05 / Contact</p>
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
                <div>
                  <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">Have a problem worth <span className="font-serif italic text-[#d9a441]">solving?</span></h2>
                  <p className="mt-6 max-w-xl leading-7 text-[#a0a3a3]">I’m open to connecting, sharing ideas, and exploring opportunities to build something useful.</p>
                </div>
                <a href="https://github.com/Muhammad-nabil99" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full bg-[#d9a441] px-6 py-3.5 text-sm font-bold text-[#17140e] transition hover:-translate-y-1 hover:bg-[#edbd61]">
                  Find me on GitHub <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
