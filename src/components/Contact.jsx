import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const profiles = [
  {
    label: "GitHub",
    detail: "Code and selected repositories",
    href: "https://github.com/Muhammad-nabil99",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    detail: "Professional background",
    href: "https://www.linkedin.com/in/muhammad-nabil-3960382b2/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    detail: "A little more beyond the code",
    href: "https://www.instagram.com/muhammadnabil991025/",
    icon: FaInstagram,
  },
];

function Contact() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {profiles.map(({ label, detail, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.025] p-5 transition hover:-translate-y-1 hover:border-[#d9a441]/50 hover:bg-white/[0.045]">
          <span className="flex items-center gap-4">
            <span className="rounded-lg bg-white/[0.06] p-3 text-[#d9a441]"><Icon size={21} /></span>
            <span>
              <span className="block font-semibold text-[#f1eee6]">{label}</span>
              <span className="mt-1 block text-xs text-[#8f9597]">{detail}</span>
            </span>
          </span>
          <ArrowUpRight size={17} className="text-[#777e80] transition group-hover:text-[#d9a441]" />
        </a>
      ))}
    </div>
  );
}

export default Contact;
