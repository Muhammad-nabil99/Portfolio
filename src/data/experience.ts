export type Experience = {
  id: string;
  role: string;
  company: string;
  /** Editable placeholder until real dates are supplied. */
  period: string;
  project?: string;
  description: string;
  impact?: string;
  /** Large typographic metric. Verify what the number actually measures before publishing. */
  metric?: { value: string; label: string };
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "cv-abc",
    role: "Full-Stack Web Developer",
    company: "CV. ABC",
    period: "[Start] — [End]",
    project: "SPMB Sultra",
    description:
      "Contributed to the development of a student admissions platform designed to support a large-scale registration process.",
    impact: "Supported a platform serving approximately 35,000 users.",
    // TODO: confirm whether 35,000 means registered users, applicants, or peak concurrent users.
    metric: { value: "35K+", label: "Users served" },
    // TODO: adjust this list to match the technologies actually used.
    technologies: ["Next.js", "React", "Laravel", "MySQL", "Docker"],
  },
  {
    id: "cv-anoa-solusi",
    role: "Full-Stack Web Developer",
    company: "CV. Anoa Solusi",
    period: "[Start] — [End]",
    description:
      "Worked on full-stack web development, translating business requirements into functional digital solutions.",
    // TODO: add project names, responsibilities and measurable results once supplied.
    technologies: [],
  },
];
