export const siteConfig = {
  name: "Muhammad Nabil",
  shortName: "MN.",
  role: "Software Engineer",
  tagline: "I build digital products that solve real problems.",
  intro:
    "From scalable web applications to intelligent automation, I turn complex ideas into useful digital experiences.",
  // TODO: replace the placeholders below with real contact details.
  contact: {
    email: "hello@example.com",
    // Primary CTA destination. Swap for a WhatsApp URL (https://wa.me/<number>) if preferred.
    ctaHref: "mailto:hello@example.com",
    github: "https://github.com/your-username",
    linkedin: "https://www.linkedin.com/in/your-username",
  },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
  { label: "More", href: "#more" },
] as const;

export const principles = [
  "Build with purpose.",
  "Keep things simple.",
  "Learn continuously.",
] as const;

export const services = [
  { title: "Need a Website?", note: "Fast, accessible, maintainable." },
  { title: "AI Assistant", note: "Assistants that fit your workflow." },
  { title: "Payment Integration", note: "Checkout flows that just work." },
  { title: "Workflow Automation", note: "Less manual work, fewer errors." },
] as const;
