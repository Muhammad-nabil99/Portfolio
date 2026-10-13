export type SkillGroup = { title: string; items: string[] };

export const hardSkills: SkillGroup[] = [
  { title: "Frontend", items: ["JavaScript", "React.js", "Next.js", "TailwindCSS", "React Native","Three Js"] },
  { title: "Backend", items: ["PHP", "Laravel", "NestJS"] },
  { title: "Database", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "Infrastructure", items: ["Docker", "Basic Networking"] },
];

export const softSkills: string[] = ["Communication", "Teamwork", "Adaptability"];
