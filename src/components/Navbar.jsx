import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#090b0e]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16" aria-label="Main navigation">
        <a href="#home" className="text-lg font-bold tracking-[-0.04em] text-white" onClick={() => setIsOpen(false)}>
          nabil<span className="text-[#d9a441]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-xs font-medium tracking-[0.12em] text-[#a5a8a8] transition hover:text-[#edbd61]">
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-[#d9a441]/40 px-4 py-2 text-xs font-semibold text-[#edbd61] transition hover:bg-[#d9a441] hover:text-[#17140e] md:inline-flex">
          Let's talk <ArrowUpRight size={14} />
        </a>

        <button type="button" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="rounded-lg border border-white/10 p-2 text-white md:hidden">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0d1014] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-sm text-[#c5c6c2] transition hover:bg-white/5 hover:text-[#edbd61]">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
