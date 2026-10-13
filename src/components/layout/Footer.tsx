import CurrentYear from "@/components/ui/CurrentYear";
import { siteConfig } from "@/data/site";

const links = [
  { label: "GitHub", href: siteConfig.contact.github },
  { label: "LinkedIn", href: siteConfig.contact.linkedin },
  { label: "Email", href: `mailto:${siteConfig.contact.email}` },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-grid grid gap-8 py-10 text-sm md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="mt-1 text-muted">Built with intention.</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 md:col-span-4">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-muted md:col-span-2 md:text-right">
          © <CurrentYear /> {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
