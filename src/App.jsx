import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Layers3,
  Terminal,
  Sparkles,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive interfaces and smooth user experiences.",
    items: ["react", "javascript", "tailwind", "bootstrap", "reactRouter", "reactQuery", "redux"],
  },
  {
    title: "Backend & data",
    description: "Connecting products to application logic and data services.",
    items: ["nodeJs", "supabase", "firebase"],
  },
  {
    title: "Tools & collaboration",
    description: "The tools I use to design, build, and maintain projects.",
    items: ["git", "figma"],
  },
];

function App() {
  return (
    <div className="portfolio-shell min-h-screen overflow-hidden bg-[#090b0e] text-[#f4f1e9]">
      <Navbar />

      <main>
        <section id="home" className="hero-section relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16">
          <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="hero-layout relative z-10 grid w-full items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="max-w-4xl">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-medium tracking-[0.16em] text-[#b7b5ae] uppercase">
                <span className="h-2 w-2 rounded-full bg-[#d9a441] shadow-[0_0_14px_#d9a441]" />
                Software engineer · Portfolio
              </div>
              <p className="mb-5 text-sm font-semibold tracking-[0.28em] text-[#d9a441] uppercase">Hello, I'm Nabil</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[4.65rem]">
                I build digital products that <span className="font-serif font-normal italic text-[#d9a441]">solve real problems.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-8 text-[#a7a8a7] sm:text-lg">
                I enjoy turning ideas into useful web experiences, exploring how systems work behind the interface, and building software with people and real-world needs in mind.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#projects" className="inline-flex items-center gap-3 rounded-full bg-[#d9a441] px-6 py-3.5 text-sm font-bold text-[#17140e] transition hover:-translate-y-1 hover:bg-[#edbd61]">
                  Explore my work <ArrowUpRight size={17} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-[#e8e5dc] transition hover:border-[#d9a441]/70 hover:text-[#edbd61]">
                  Get in touch <ArrowDown size={16} />
                </a>
              </div>
              <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[11px] tracking-[0.15em] text-[#85898a] uppercase sm:text-xs">
                <span>Frontend development</span>
                <span>Full-stack learning</span>
                <span>Product-minded engineering</span>
              </div>
            </div>

            <div className="hero-visual relative mx-auto w-full max-w-[26rem] lg:ml-auto">
              <div className="hero-visual-glow pointer-events-none absolute -inset-8 rounded-full" aria-hidden="true" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#14191f] p-3 shadow-2xl shadow-black/40">
                <div className="relative overflow-hidden rounded-[1.4rem] bg-[#20262d]">
                  <img
                    src="/image/about-me.png"
                    alt="Nabil"
                    className="hero-portrait aspect-[4/4.5] w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="text-xs font-semibold tracking-[0.2em] text-[#edbd61] uppercase">Curiosity meets craft</p>
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-white">Build. Learn. Improve.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 px-2 pb-1 pt-4">
                  <div>
                    <p className="text-sm font-semibold text-[#f1eee6]">Nabil</p>
                    <p className="mt-1 text-xs text-[#929799]">Software engineer</p>
                  </div>
                  <div className="flex -space-x-2">
                    <span className="rounded-full border border-[#14191f] bg-[#252d35] p-2.5 text-[#d9a441]"><Code2 size={17} /></span>
                    <span className="rounded-full border border-[#14191f] bg-[#252d35] p-2.5 text-[#d9a441]"><Terminal size={17} /></span>
                    <span className="rounded-full border border-[#14191f] bg-[#252d35] p-2.5 text-[#d9a441]"><Layers3 size={17} /></span>
                  </div>
                </div>
              </div>
              <div className="absolute -left-5 top-12 hidden items-center gap-2 rounded-full border border-white/10 bg-[#11161c] px-4 py-3 text-xs text-[#d9d8d1] shadow-xl sm:flex">
                <Sparkles size={15} className="text-[#d9a441]" /> Always learning
              </div>
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
              </div>
            </div>
            <div className="mt-6">
              <Contact />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
