const experiences = [
  {
    number: "01",
    title: "Independent Study",
    organization: "Studi Independen Bersertifikat × Dicoding",
    image: "./image/studi-independen-img.png",
    alt: "Independent study program",
    description: "Joined a structured learning program with a focus on frontend and backend development.",
    focus: "Frontend & backend development",
  },
  {
    number: "02",
    title: "Frontend Bootcamp",
    organization: "Udemy",
    image: "./image/udemy.png",
    alt: "Frontend bootcamp learning",
    description: "Developed frontend knowledge through guided, project-oriented online learning.",
    focus: "Frontend development",
  },
  {
    number: "03",
    title: "Freelance Development",
    organization: "Project-based work",
    image: "./image/freelance-v2.jpeg",
    alt: "Freelance web development work",
    description: "Worked on web development projects across frontend interfaces and backend application systems, with attention to usability and performance.",
    focus: "Web applications",
  },
];

function Experience() {
  return (
    <div className="relative grid gap-5 lg:grid-cols-3">
      {experiences.map((item) => (
        <article key={item.number} className="experience-card">
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.2em] text-[#d9a441]">{item.number}</span>
            <span className="h-px flex-1 bg-white/10 ml-4" />
          </div>
          <img src={item.image} alt={item.alt} loading="lazy" className="mt-6 h-40 w-full rounded-lg object-cover" />
          <p className="mt-6 text-xs font-semibold tracking-[0.14em] text-[#d9a441] uppercase">{item.organization}</p>
          <h3 className="mt-2 text-xl font-semibold text-[#f1eee6]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#969b9d]">{item.description}</p>
          <p className="mt-5 border-t border-white/10 pt-4 text-xs text-[#c3c2bb]">Focus: {item.focus}</p>
        </article>
      ))}
    </div>
  );
}

export default Experience;
