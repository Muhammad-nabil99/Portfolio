import Skills from "./Skills";

const projects = [
  {
    name: "Fluent",
    category: "Language learning",
    image: "/image/fluent.png",
    alt: "Fluent language-learning application preview",
    description: "An interactive language-learning platform designed to help students explore and practice languages including English, French, and Korean.",
    stack: ["react", "tailwind", "supabase"],
    number: "01",
    outcome: "Learning experience",
  },
  {
    name: "Trakel",
    category: "Travel discovery",
    image: "/image/trakel.png",
    alt: "Trakel travel discovery application preview",
    description: "A travel discovery application for exploring destinations, culinary experiences, and accommodation options around Pekalongan.",
    stack: ["javascript", "bootstrap", "firebase"],
    number: "02",
    outcome: "Destination discovery",
  },
  {
    name: "World Wide Oasis",
    category: "Hospitality",
    image: "/image/the-wild-oasis.png",
    alt: "World Wide Oasis booking platform preview",
    description: "A hotel, cabin, and villa booking platform focused on making accommodation discovery and reservations straightforward.",
    stack: ["react", "supabase", "reactQuery", "redux", "reactRouter"],
    number: "03",
    outcome: "Hospitality operations",
  },
];

function Project() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {projects.map((project) => (
        <article key={project.name} className="project-card group">
          <div className="project-image-wrap relative overflow-hidden rounded-xl bg-[#171c22]">
            <img src={project.image} alt={project.alt} loading="lazy" className="aspect-[1.55/1] w-full object-cover transition duration-700 group-hover:scale-[1.045]" />
            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-[#090b0e]/85 px-3 py-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#e7e2d7] uppercase backdrop-blur">
              {project.category}
            </span>
          </div>
          <div className="flex items-start justify-between gap-4 pt-6">
            <div>
              <p className="text-xs tracking-[0.18em] text-[#d9a441]">{project.number} / Selected project</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[#f1eee6]">{project.name}</h3>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 px-3 py-2 text-[10px] font-semibold tracking-wider text-[#b4b3ac] uppercase">{project.number}</span>
          </div>
          <p className="mt-4 min-h-[7rem] text-sm leading-7 text-[#969b9d]">{project.description}</p>
          <div className="mt-5 border-t border-white/10 pt-3">
            <p className="mb-3 text-[10px] font-semibold tracking-[0.16em] text-[#777f82] uppercase">Built with</p>
            <Skills type="sm" teckStacks={project.stack} />
          </div>
        </article>
      ))}
    </div>
  );
}

export default Project;
